import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { fontPoppins, workSans } from "@/lib/fonts";
import { Room } from "./Room";

export const metadata: Metadata = {
  title: "Figma Clone",
  description:
    "A minimalist Figma clone using Fabric.js and Liveblocks for real-time collaboration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          fontPoppins.variable,
          workSans.variable,
          "bg-primary-grey-200"
        )}
      >
        <Room>{children}</Room>
      </body>
    </html>
  );
}
