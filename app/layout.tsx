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
  metadataBase: new URL("https://scoutiv8.co.uk"),

  title: "Scoutiv8",
  description: "Professional scouting reports for grassroots footballers in Glasgow and nearby regions.",

  icons: {
    icon: "/icon.png",
  },

  openGraph: {
    title: "Scoutiv8",
    description: "Professional scouting reports for grassroots footballers.",
    url: "https://scoutiv8.co.uk",
    siteName: "Scoutiv8",
    images: [
      {
        url: "/og-image.png", // now resolves correctly
        width: 1200,
        height: 630,
        alt: "Scoutiv8",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Scoutiv8",
    description: "Professional scouting reports for grassroots footballers.",
    images: ["/og-image.png"],
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
        className={`${arvoSans.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
