import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "BuilderEdge - Turn Warranty Costs into Upgrade Revenue",
  description: "Enterprise SaaS that combines warranty management and upgrade-sales automation for large U.S. homebuilders. Transform warranty challenges into revenue opportunities.",
  keywords: "warranty management, upgrade sales, homebuilder software, enterprise SaaS, Lennar, Toll Brothers, KB Home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
