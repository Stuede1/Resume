import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cole Stuedeman | Portfolio",
  description: "Frontend developer portfolio showcasing projects, skills, and experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors duration-300" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
