import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans } from "next/font/google";

const dmsans = DM_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Winifred Asante",
  description: "Winifred Asante's Portfolio",  
  openGraph: {
    title: "Winifred Asante | Portfolio",
    description: "Winifred Asante's Portfolio",
    url: "https://winifredasante.com",
    siteName: "Winifred Asante",
    images: [
      {
        url: "https://winifredasante.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FWini2.cadc254a.jpg&w=3840&q=75",
        width: 1200,
        height: 630,
        alt: "Winifred Asante's Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Winifred Asante | Portfolio",
    description: "Winifred Asante's Portfolio", 
    images: [
      {
        url: "https://winifredasante.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FWini2.cadc254a.jpg&w=3840&q=75",
        width: 1200,
        height: 630,
        alt: "Winifred Asante's Portfolio",
      },
    ],}

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
