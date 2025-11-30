import Link from "next/link";
import React, { ReactNode } from "react";

function TagCard({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={"/?filter" + "react"}
      className={`w-[100px] rounded-xl px-4 py-2 text-gray-300 bg-tertiary`}
    >
      {children}
    </Link>
  );
}

export default TagCard;
