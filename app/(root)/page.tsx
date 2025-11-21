import { auth } from "@/auth";
import Filter from "@/components/Filter";

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
      <h1>Search : {search}</h1>
      <h1>Filter : {filter}</h1>
      <Filter />
    </>
  );
}

export default page;
