import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans } from "next/font/google";

const dmsans = DM_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Winifred Asante | Portfolio",
  description: "Winifred Asante's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmsans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
