import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const space = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});
const ibm = IBM_Plex_Mono({
  variable: "--font-ibm",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Dr. Farha Arshi | Synthetic & Computational Chemist",
  description:
    "Personal research website of Dr. Farha Arshi — specialist in ruthenium-based metallodrugs, DFT computational chemistry, molecular docking, and anticancer drug design.",
  openGraph: {
    type: "website",
    url: "https://drfarhaarshi.space",
    title: "Dr. Farha Arshi | Synthetic & Computational Chemist",
    description:
      "Advancing metal-based anticancer therapeutics through molecular design.",
    images: [{ url: "https://drfarhaarshi.space/images/dr-farha-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Farha Arshi | Synthetic & Computational Chemist",
    images: ["https://drfarhaarshi.space/images/dr-farha-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${space.variable} ${inter.variable} ${ibm.variable}`}
    >
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
