import type { Metadata } from "next";
import { DM_Mono } from "next/font/google";
import "./globals.css";
import CartProvider from "@/providers/cartContext";

const dmmono = DM_Mono({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yeezy clone",
  description: "Fake yeezy website created by Ikenna",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmmono.className} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
