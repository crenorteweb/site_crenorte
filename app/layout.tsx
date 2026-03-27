import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const bancoAmazonia = localFont({
  src: [
    { path: "./fonts/BancoAmazonia-Thin.woff2", weight: "100", style: "normal" },
    { path: "./fonts/BancoAmazonia-ThinItalic.woff2", weight: "100", style: "italic" },
    { path: "./fonts/BancoAmazonia-ExtraLight.woff2", weight: "200", style: "normal" },
    { path: "./fonts/BancoAmazonia-ExtraLightItalic.woff2", weight: "200", style: "italic" },
    { path: "./fonts/BancoAmazonia-Light.woff2", weight: "300", style: "normal" },
    { path: "./fonts/BancoAmazonia-LightItalic.woff2", weight: "300", style: "italic" },
    { path: "./fonts/BancoAmazonia-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/BancoAmazonia-Italic.woff2", weight: "400", style: "italic" },
    { path: "./fonts/BancoAmazonia-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/BancoAmazonia-MediumItalic.woff2", weight: "500", style: "italic" },
    { path: "./fonts/BancoAmazonia-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "./fonts/BancoAmazonia-SemiBoldItalic.woff2", weight: "600", style: "italic" },
    { path: "./fonts/BancoAmazonia-Bold.woff2", weight: "700", style: "normal" },
    { path: "./fonts/BancoAmazonia-BoldItalic.woff2", weight: "700", style: "italic" },
    { path: "./fonts/BancoAmazonia-ExtraBold.woff2", weight: "800", style: "normal" },
    { path: "./fonts/BancoAmazonia-ExtraBoldItalic.woff2", weight: "800", style: "italic" },
    { path: "./fonts/BancoAmazonia-Black.woff2", weight: "900", style: "normal" },
    { path: "./fonts/BancoAmazonia-BlackItalic.woff2", weight: "900", style: "italic" },
  ],
  variable: "--font-banco-amazonia",
});

const bancoAmazoniaTexto = localFont({
  src: [
    { path: "./fonts/BancoAmazoniaTexto-Light.woff2", weight: "300", style: "normal" },
    { path: "./fonts/BancoAmazoniaTexto-LightItalic.woff2", weight: "300", style: "italic" },
    { path: "./fonts/BancoAmazoniaTexto-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/BancoAmazoniaTexto-Italic.woff2", weight: "400", style: "italic" },
    { path: "./fonts/BancoAmazoniaTexto-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/BancoAmazoniaTexto-MediumItalic.woff2", weight: "500", style: "italic" },
    { path: "./fonts/BancoAmazoniaTexto-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "./fonts/BancoAmazoniaTexto-SemiBoldItalic.woff2", weight: "600", style: "italic" },
    { path: "./fonts/BancoAmazoniaTexto-Bold.woff2", weight: "700", style: "normal" },
    { path: "./fonts/BancoAmazoniaTexto-BoldItalic.woff2", weight: "700", style: "italic" },
  ],
  variable: "--font-banco-amazonia-texto",
});

export const metadata: Metadata = {
  title: "Crenorte",
  description: "Exclusivo para mulheres inscritas no cad único do governo federal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${bancoAmazonia.variable} ${bancoAmazoniaTexto.variable} font-banco-amazonia-texto antialiased text-brand-dark bg-brand-bg`}>
        {children}
      </body>
    </html>
  );
}
