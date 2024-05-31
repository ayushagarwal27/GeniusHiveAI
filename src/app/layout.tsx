import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Genius Hive",
  description:
    "Welcome to GeniusHive, where the wisdom of the ages meets cutting-edge AI technology! Engage in intellectual discourse like never before with our app, where you can interact with virtual representations of history's greatest scientific minds. Have burning questions about the universe, biology, or technology? Pose them to our AI counterparts of luminaries such as Einstein, Curie, or Turing, and receive insightful responses rooted in their groundbreaking theories and discoveries. Whether you're a curious student or a seasoned scholar, GeniusHive provides a platform to delve into the minds of the world's most renowned scientists and explore the frontiers of human knowledge.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
      </Head>
      <body className={inter.className + " relative"}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
