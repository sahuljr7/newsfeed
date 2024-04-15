import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/react";
import NavbarComponent from "@/components/navbar";
import ScrollToTop from "@/components/scroll-to-top";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextUI Blog Template",
  description: "Generated by create next app",
  creator: "https://github.com/sametcn99",
  category: "Blog",
  keywords: "nextui, blog, template",
  robots: "index, follow",
  metadataBase: new URL("https://blog.nextui.org"),
  openGraph: {
    title: "NextUI Blog Template",
    description: "Generated by create next app",
    type: "website",
    url: "https://blog.nextui.org",
    images: [
      {
        url: "https://blog.nextui.org/images/nextui-og.png",
        width: 1200,
        height: 630,
        alt: "NextUI Blog Template",
      },
    ],
    siteName: "NextUI Blog Template",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen`}>
        <Providers>
          <main className="mx-auto max-w-[100rem] ">
            <NavbarComponent />
            {children}
            <Analytics />
            <ScrollToTop />
          </main>
        </Providers>
      </body>
    </html>
  );
}
