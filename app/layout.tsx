import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import ContactBtn from "@/components/contact-btn";
import ModalProvider from "@/providers/modal-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hs Associates",
  description:
    "Discover the perfect style with our premium collection of hair products at HS Associates. ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ModalProvider />
        <ContactBtn />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
