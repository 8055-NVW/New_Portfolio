import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="dark h-full scroll-smooth">
      <body >
        {children}
      </body>
    </html>
  );
}
