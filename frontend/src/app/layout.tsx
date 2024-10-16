import type { Metadata } from "next";
import "./globals.css";

import { Cairo, Poppins } from "next/font/google";

import Header from "@/components/basic/Header/Header";
import Footer from "@/components/basic/Footer/Footer";

const cairo = Cairo({
  subsets: ["latin", "arabic"],
  weight: ["400", "700"],
  variable: "--font-cairo",
  display: "swap",
  preload: true,
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Orisabot",
  description: "Orisabot - Description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar">
      <body className={`${cairo.variable} ${poppins.variable}`}>
        <div className="container">
          <Header />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
