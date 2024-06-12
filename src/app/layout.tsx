import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Unlock the Genius Within: Engage with Legendary Scientists through GeniusHive",
  description:
    "Explore the frontiers of science and technology by interacting with AI-powered virtual representations of history's greatest minds, including Einstein, Curie, and Turing. GeniusHive offers a unique platform to have your burning questions answered and delve into the world's most profound discoveries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " relative"}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
