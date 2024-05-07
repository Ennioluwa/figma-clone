import { Inter as FontSans } from "next/font/google";
import { Poppins } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontPoppins = Poppins({
weight: ["400", "500", "600", "700", "800", "900"],
subsets: ["latin"],
variable: "--font-poppins",
});
