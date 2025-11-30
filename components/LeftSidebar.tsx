import ROUTES from "@/routes";
import Link from "next/link";
import { IoHome } from "react-icons/io5";

function LeftSidebar() {
  return (
    <div className="w-1/5 px-5 py-2">
      <ul className="space-y-5">
        <li className="bg-main py-3 px-3 rounded-xl">
          <Link
            href={"/"}
            className="text-md font-bold flex items-center gap-2"
          >
            <IoHome />
            Home
          </Link>
        </li>
        <li className="bg-main py-3 px-3 rounded-xl">
          <Link
            href={"/"}
            className="text-md font-bold flex items-center gap-2"
          >
            <IoHome />
            Tags
          </Link>
        </li>
        <li className="bg-main py-3 px-3 rounded-xl">
          <Link
            href={ROUTES.QUESTION}
            className="text-md font-bold flex items-center gap-2"
          >
            <IoHome />
            Popular Questions
          </Link>
        </li>
        <li className="bg-main py-3 px-3 rounded-xl">
          <Link
            href={"/"}
            className="text-md font-bold flex items-center gap-2"
          >
            <IoHome />
            Ask a new question
          </Link>
        </li>
        <li className="bg-main py-3 px-3 rounded-xl">
          <Link
            href={"/"}
            className="text-md font-bold flex items-center gap-2"
          >
            <IoHome />
            Newest
          </Link>
        </li>
        <li className="bg-red-600 py-3 px-3 rounded-xl">
          <Link
            href={"/"}
            className="text-md font-bold flex items-center gap-2"
          >
            <IoHome />
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default LeftSidebar;
