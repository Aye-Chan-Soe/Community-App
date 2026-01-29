import Image from "next/image";

import logo from "../../../public/logo.jpg";
import Button from "@/components/Button";
import Link from "next/link";
import ROUTES from "@/routes";
import AuthenticationForm from "../components/AuthenticationForm";
import { SignInWithCredentials } from "@/lib/action/SignInWithCredentials.action";

function page() {
  return (
    <div className="flex ">
      <div className="bg-primary h-screen w-2/4 p-10  flex items-center">
        <div className="space-y-10">
          <Link href={ROUTES.HOME} className="flex items-center space-x-4">
            <Image
              src={logo}
              width={100}
              height={100}
              alt="logo"
              className="rounded-full"
            />
            <h1 className="text-5xl font-semibold">Community Form</h1>
          </Link>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos et,
            eaque velit ducimus cupiditate excepturi, neque minus deserunt
            deleniti, in fuga ullam aliquid aut minima exercitationem quia
            officiis voluptatem quaerat? Pariatur expedita libero minus dolorum
            vel obcaecati iusto
          </p>
          <Button varient="outline">Create a new account ?</Button>
        </div>
      </div>
      <div className="w-2/4 h-screen flex justify-center items-center">
        <AuthenticationForm type="login" submitAction={SignInWithCredentials} />
      </div>
    </div>
  );
}

export default page;
