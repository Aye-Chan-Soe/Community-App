import Image from "next/image";

import logo from "../public/logo.jpg";
import profile from "../public/profile.jpg";
import Input from "./Input";
import SearchInput from "./SearchInput";

function Navbar() {
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
        <Image
          src={profile}
          width={45}
          height={45}
          className="rounded-full"
          alt="Profile"
        />
      </div>
    </nav>
  );
}

export default Navbar;
