import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Next.js Starter Kit",
    template: "%s | Next.js Starter Kit",
  },
  description:
    "빠른 웹 개발을 위한 Next.js 16 + TypeScript + Tailwind CSS v4 스타터킷",
  keywords: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "shadcn/ui",
    "다크모드",
    "반응형",
  ],
  authors: [
    {
      name: "Your Name",
    },
  ],
  creator: "Next.js Starter Kit",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://your-domain.com",
    title: "Next.js Starter Kit",
    description:
      "빠른 웹 개발을 위한 Next.js 16 + TypeScript + Tailwind CSS v4 스타터킷",
    siteName: "Next.js Starter Kit",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js Starter Kit",
    description:
      "빠른 웹 개발을 위한 Next.js 16 + TypeScript + Tailwind CSS v4 스타터킷",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider defaultTheme="system" storageKey="theme">
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
