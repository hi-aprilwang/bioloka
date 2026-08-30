import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { TooltipProvider } from "@/components/ui/tooltip";

export const metadata: Metadata = {
  title: "CircuLoop Semarang | B2B Organic Waste Circularity & Eco-Health Platform",
  description:
    "Engineering the Circular City: Simbiosis Sirkular Sampah Organik B2B dan Pencegahan Risiko Eko-Kesehatan Perkotaan - DSDC ANFORCOM 2026",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100 font-sans">
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
