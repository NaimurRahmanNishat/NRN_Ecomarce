import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Home/Nav";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "@/components/Home/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NRNweb shop | Next JS",
  description: "NRN warriors shop using next js 14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Nav />
          {children}
          <Footer/>
        </body>
      </html>
    </ClerkProvider>
  );
}
