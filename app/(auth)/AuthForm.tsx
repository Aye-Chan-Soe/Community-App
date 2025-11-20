import Button from "@/components/Button";
import google from "@/public/google.png";
import github from "@/public/github.png";
import { signIn } from "@/auth";

function AuthForm() {
  return (
    <div className="flex space-x-3">
      <Button type="outline" icon={google}>
        Login with Google
      </Button>
      <form
        action={async () => {
          "use server";
          await signIn("github");
        }}
        className="w-full"
      >
        <Button type="outline" icon={github}>
          Login with Github
        </Button>
      </form>
    </div>
  );
}

export default AuthForm;
