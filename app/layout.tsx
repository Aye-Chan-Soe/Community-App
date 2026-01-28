// @ts-expect-error - allow importing global CSS without type declarations
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-secondary text-white">{children}</body>
    </html>
  );
}
