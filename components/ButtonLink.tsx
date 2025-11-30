import Image, { StaticImageData } from "next/image";
import Link from "next/link";

function ButtonLink({
  icon,
  children,
  href,
  varient = "normal",
  ...props
}: {
  icon?: string | StaticImageData;
  children: React.ReactNode;
  href: string;
  varient?: "normal" | "outline";
}) {
  return (
    <Link
      href={href}
      {...props}
      className={` w-full space-x-3 border-2 border-main rounded-lg px-4 py-2 ${
        varient === "outline" ? "border-main border-2" : "bg-main"
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
    </Link>
  );
}

export default ButtonLink;
