import React from "react";
import LeftSidebar from "@/components/LeftSidebar";
import Navbar from "@/components/Navbar";
import RightSidebar from "@/components/RightSidebar";
//@ts-ignore
import "../globals.css";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />

      <div className="flex">
        <LeftSidebar />
        <div className="w-3/5">{children}</div>
        <div className="w-1/5">
          <RightSidebar />
        </div>
      </div>
    </>
  );
}

export default layout;
