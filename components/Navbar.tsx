import Image from "next/image";
import logo from "../public/logo.jpg";
import profile from "../public/profile.jpg";

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
      <div className="items-center justify-center flex">
        <input
          type="text"
          className=" px-4 py-2 w-[600px] h-[35px] bg-primary rounded-md"
          placeholder="Search anything"
        />
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
