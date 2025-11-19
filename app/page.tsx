import LeftSidebar from "@/components/LeftSidebar";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { IoHome } from "react-icons/io5";

function page() {
  return (
    <>
      <Navbar />
      <LeftSidebar />
    </>
  );
}

export default page;
