import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
  title: "Vivian Lopes - Portfolio",
  description: "Vivian Lopes - Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} dark h-full scroll-smooth`} >
      <body >
        {children}
      </body>
    </html>
  );
}
