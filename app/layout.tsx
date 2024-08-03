import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tejas Pharma",
  description: "We are Tejas Pharma, a healthcare product distribution network across India.",
  authors: [{ name: "Anom", url: "https://twitter.com/anom3008" }],
  keywords: [
    "pharma",
    "healthcare",
    "medicine",
    "distribution",
    "network",
    "India",
  ],
  icons: [
    {
      rel: "icon",
      type: "image/x-icon",
      url: "/favicon.ico",
    },
    {
      rel: "shortcut icon",
      type: "image/x-icon",
      url: "/favicon.ico",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
