import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const font = Nunito({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Shoot Quap",
  description: "Just quap your shoots and you won't have issues!",
  icons: {
    icon: "/favicon.ico",
  },
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
          "min-h-screen bg-background font-sans antialiased dark flex flex-col px-4",
          font.variable,
        )}
      >
        <Navbar />
        <Toaster position="top-center" />
        {children}
      </body>
    </html>
  );
}
