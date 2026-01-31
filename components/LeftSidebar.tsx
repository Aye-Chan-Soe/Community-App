import ROUTES from "@/routes";
import Link from "next/link";
import { IoHome } from "react-icons/io5";
import { auth, signOut } from "@/auth";
import { redirect } from "next/navigation";

async function LeftSidebar() {
  let session = await auth();
  let user = session?.user;
  return (
    <div className="w-1/5 px-5 py-2">
      <ul className="space-y-5 pointer">
        <li className="bg-main py-3 px-3 rounded-xl">
          <Link
            href={ROUTES.HOME}
            className="text-md font-bold flex items-center gap-2"
          >
            <IoHome />
            Home
          </Link>
        </li>
        <li className="bg-main py-3 px-3 rounded-xl">
          <Link
            href={ROUTES.QUESTION}
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
            href={ROUTES.QUESTION_CREATE}
            className="text-md font-bold flex items-center gap-2"
          >
            <IoHome />
            Ask a new question
          </Link>
        </li>
        <li className="bg-main py-3 px-3 rounded-xl">
          <Link
            href={ROUTES.QUESTION}
            className="text-md font-bold flex items-center gap-2"
          >
            <IoHome />
            Newest
          </Link>
        </li>

        {!user && (
          <li className="border-main border-2 py-3 px-3 rounded-xl">
            <Link
              href={ROUTES.LOGIN}
              className="text-md font-bold flex items-center gap-2"
            >
              <IoHome />
              Login
            </Link>
          </li>
        )}

        {user && (
          <li className="bg-red-600 py-3 px-3 rounded-xl">
            <form
              action={async () => {
                "use server";
                await signOut({ redirect: false });
                return redirect(ROUTES.LOGIN);
              }}
            >
              <button
                type="submit"
                className="text-md font-bold flex items-center gap-2"
              >
                <IoHome />
                Logout
              </button>
            </form>
          </li>
        )}
      </ul>
    </div>
  );
}

export default LeftSidebar;
