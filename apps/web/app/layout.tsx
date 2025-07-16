import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const stapelMedium = localFont({
  src: "../public/fonts/Stapel_Medium.otf",
  variable: "--font-stapel",
});

export const metadata: Metadata = {
  title: "MSDC EdTech ",
  description:
    "Современный учебный центр по подготовке талантов в направлениях MNT, Sales и HR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={stapelMedium.variable}>
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
