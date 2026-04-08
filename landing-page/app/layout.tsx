import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Crust Pizza Co. — Chicago-Style Thin Crust Pizza",
  description: "Award-winning Chicago-style thin crust pizza made from scratch.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body className="min-h-full flex flex-col bg-[#F5F2EE]">{children}</body>
    </html>
  );
}
