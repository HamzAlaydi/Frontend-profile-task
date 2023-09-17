"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { QueryClientProviderWrapper } from "../../utils/providers/Providers.client";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <QueryClientProviderWrapper>
        <body className={inter.className}>{children}</body>
      </QueryClientProviderWrapper>
    </html>
  );
}
