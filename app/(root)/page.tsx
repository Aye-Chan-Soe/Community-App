import { auth } from "@/auth";
import Button from "@/components/Button";
import Filter from "@/components/Filter";
import ThreadCard from "@/components/ThreadCard";

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
  console.log(session);
  return (
    <>
      <div className="flex justify-between items-center p-5">
        <div>
          <h1 className="text-3xl font-bold">All threads</h1>
        </div>
        <div>
          <Button>Create new thread</Button>
        </div>
      </div>
      <Filter />
      <ThreadCard />
    </>
  );
}

export default page;
