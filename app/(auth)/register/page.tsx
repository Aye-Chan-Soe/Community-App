import Image from "next/image";

import Input from "@/components/Input";
import logo from "../../../public/logo.jpg";
import Button from "@/components/Button";
import AuthForm from "../AuthForm";
import Link from "next/link";
import ROUTES from "@/routes";

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
          <Button varient="outline">Login account</Button>
        </div>
      </div>
      <div className="w-2/4 h-screen flex justify-center items-center">
        <div className=" w-4/5 space-y-6">
          <h3 className="text-xl font-semibold">
            Sign Up to <span className="font-bold">Community</span> Forum
          </h3>
          <div>
            <Input label="Name" />
          </div>
          <div>
            <Input label="Username" />
          </div>
          <div>
            <Input label="Email address" />
          </div>
          <div>
            <Input label="Password" />
          </div>
          <div>
            <Button>Register</Button>
          </div>
          <AuthForm />
        </div>
      </div>
    </div>
  );
}

export default page;
