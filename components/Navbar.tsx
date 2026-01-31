import Image from "next/image";

import logo from "../public/logo.jpg";
import profile from "../public/profile.jpg";
import SearchInput from "./SearchInput";
import { auth } from "@/auth";

async function Navbar() {
  let session = await auth();
  let user = session?.user;

  return (
    <nav className="flex justify-between px-10 py-4">
      <div className="flex items-center justify-center space-x-4">
        <Image
          src={logo}
          width={45}
          height={45}
          className="rounded-full"
          alt="Logo"
        />
        <h1>Community</h1>
      </div>
      <div className="w-[600px]">
        <SearchInput />
      </div>
      <div>
        {user && (
          <Image
            src={user?.image || profile}
            width={45}
            height={45}
            className="rounded-full"
            alt="Profile"
          />
        )}
      </div>
    </nav>
  );
}

export default Navbar;
