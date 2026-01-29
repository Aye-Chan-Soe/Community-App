import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

import { api } from "./lib/api";
import ValidateBody from "./lib/validateBody";
import SignInSchema from "./lib/schemas/SignInSchema";
import bcrypt from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHub,
    Google,
    Credentials({
      async authorize(Credentials) {
        let validationField = ValidateBody(Credentials, SignInSchema);
        if (validationField.success) {
          const { email, password } = validationField.data;
          const { data: exisitingAccount } =
            await api.accounts.getByProvider(email);
          if (!exisitingAccount) return null;

          const { data: exisitingUser } = await api.users.getById(
            exisitingAccount.userId.toString()
          );
          if (!exisitingUser) return null;

          const isValidPassword = await bcrypt.compare(
            password,
            exisitingAccount.password
          );
          if (isValidPassword) {
            return {
              id: exisitingUser.id,
              name: exisitingUser.name,
              username: exisitingUser.username,
              email: exisitingUser.email,
              image: exisitingUser.image,
            };
          }
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async signIn({ user, profile, account }) {
      if (account?.type === "credentials") return true;
      if (!account || !user) return false;

      const { success } = await api.auth.oauthSignIn({
        user: {
          email: user.email || "",
          name: user.name || "",
          image: user.image || "",
          username:
            account.provider === "github"
              ? (profile?.login as string)
              : (user?.name?.toLocaleLowerCase() as string),
        },
        provider: account.provider,
        providerAccountId: account.providerAccountId,
      });
      return success;
    },
    async jwt({ token, account }) {
      if (account) {
        const { success, data: accountData } = await api.accounts.getByProvider(
          account?.providerAccountId
        );

        if (!success || !accountData) return token;

        const userId = accountData?.userId;

        if (userId) token.sub = userId;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.sub as string;
      return session;
    },
  },
});
