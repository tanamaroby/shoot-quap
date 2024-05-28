import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Shoot Quap",
  description: "Just quap your shoots and you won't have issues!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
	<Head>
		<link ref="favicon" href="/static/favicon.ico" />
	</Head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased dark flex flex-col px-4",
          inter.variable,
        )}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
