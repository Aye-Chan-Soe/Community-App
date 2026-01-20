import { auth } from "@/auth";
import ButtonLink from "@/components/ButtonLink";
import Filter from "@/components/Filter";
import ThreadCard from "@/components/ThreadCard";
import { api } from "@/lib/api";
import fetchHandler from "@/lib/fetchHandler";
import ROUTES from "@/routes";

async function page({
  searchParams,
}: {
  searchParams: Promise<{
    search: string | undefined;
    filter: string | undefined;
  }>;
}) {
  const session = await auth();
  const { search, filter } = await searchParams;
  let response = await api.users.getAll();
  console.log(response);
  console.log(session);
  return (
    <>
      <div className="flex justify-between items-center p-5">
        <div>
          <h1 className="text-3xl font-bold">All threads</h1>
        </div>
        <div>
          <ButtonLink href={ROUTES.QUESTION_CREATE}>
            Create new thread
          </ButtonLink>
        </div>
      </div>
      <Filter />
      <ThreadCard />
    </>
  );
}

export default page;
