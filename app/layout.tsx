import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Crenorte - Microcrédito Individual",
  description: "Exclusivo para mulheres inscritas no cad único do governo federal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${interTight.variable} font-sans antialiased text-brand-dark bg-brand-bg`}>
        {children}
      </body>
    </html>
  );
}
