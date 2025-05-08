import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";

import "./globals.css";

const interFont = Inter({
  variable: "--font-inter-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vacancy Test Moni",
  description: "2025-05-06",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body className={`${interFont.variable} antialiased`}>{children}</body>
      </Providers>
    </html>
  );
}
