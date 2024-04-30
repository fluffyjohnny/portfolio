import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from '../components/Header/Index';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "John Chia - Web & Fullstack Developer",
  description: "Fullstack Developer in Vancouver, BC.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
