"use client";
import Button from "@/components/Button";
import google from "@/public/google.png";
import github from "@/public/github.png";
import { Bounce, toast } from "react-toastify";
import { signIn } from "next-auth/react";
import ROUTES from "@/routes";
// import { signIn } from "@/auth";

function AuthForm() {
  let oAuthSignIn = async (type: "google" | "github") => {
    try {
      await signIn("type", {
        redirectTo: ROUTES.HOME,
      });
    } catch (e) {
      if (e instanceof Error) {
        toast.error(e.message, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
      }
    }
  };
  return (
    <div className="flex space-x-3">
      <Button
        varient="outline"
        icon={google}
        onClick={() => oAuthSignIn("github")}
      >
        Login with Google
      </Button>

      {/* <form
        action={async () => {
          "use server";
          await signIn("github");
        }}
        className="w-full"
      >
        <Button varient="outline" icon={github}>
        Login with Github
      </Button>
        </form> */}
      <Button
        varient="outline"
        icon={github}
        onClick={() => oAuthSignIn("github")}
      >
        Login with Github
      </Button>
    </div>
  );
}

export default AuthForm;
