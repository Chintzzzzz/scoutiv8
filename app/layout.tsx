import type { Metadata } from "next";
import {  Arvo, Montserrat  } from "next/font/google";
import "./globals.css";

const arvoSans = Arvo({
  variable: "--font-arvo-sans",
  subsets: ["latin"],
  weight: ["400", "700"], // optional
});

const montserrat = Montserrat({
  variable: "--font-montserrat-mono", // you can rename the variable if you want
  subsets: ["latin"],
  weight: ["400", "700"], // optional
});

export const metadata: Metadata = {
  title: "Scoutiv8",
  description: "Professional scouting reports for grassroots footballers in Glasgow and nearby regions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${arvoSans.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
