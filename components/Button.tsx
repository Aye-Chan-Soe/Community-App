import React from "react";
import Image, { StaticImageData } from "next/image";

function Button({
  icon,
  children,
  type = "normal",
}: {
  icon?: string | StaticImageData;
  children: React.ReactNode;
  type?: "normal" | "outline";
}) {
  return (
    <button
      className={` w-full space-x-3 border-2 border-main rounded-lg px-4 py-2 ${
        type === "outline" ? "border-main border-2" : "bg-main"
      }
        ${icon ? "flex items-center" : ""}`}
    >
      {icon && (
        <Image
          src={icon}
          alt="google-logo"
          width={30}
          height={30}
          className="rounded-lg"
        />
      )}
      <span>{children}</span>
    </button>
  );
}

export default Button;
