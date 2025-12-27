import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Naeem Shaikh - Home",
  description: "Hi, I'm a Front-end Web Developer to showcase my skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="relative w-full min-h-screen overflow-y-auto bg-[#2B2F37] text-zinc-100 scroll-smooth">
          <div className="relative max-w-2xl mx-auto p-3 space-y-10">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
