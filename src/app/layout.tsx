import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Fly-No — Buy, Sell & Transport",
  description:
    "Marketplace for buying and selling pallets, plastic bags, sofas, and fridges with partner transportation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          {children}
        </main>
      </body>
    </html>
  );
}
