import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import QuickLeadPopup from "../components/QuickLeadPopup";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Xcode Tech | Building Intelligent Digital Experiences For The Future",
    template: "%s | Xcode Tech"
  },
  description: "Xcode Tech creates premium custom software solutions, AI automation pipelines, web apps, mobile applications, and DevOps configurations for global companies.",
  keywords: [
    "Software company Ahmedabad",
    "AI automation company India",
    "Web application development company",
    "Mobile application development",
    "Custom software solutions",
    "Xcode Tech",
    "SaaS engineering"
  ],
  authors: [{ name: "Xcode Tech" }],
  metadataBase: new URL("https://xcodetech.in"),
  openGraph: {
    title: "Xcode Tech | Building Intelligent Digital Experiences For The Future",
    description: "Xcode Tech creates premium software, AI automation systems, and digital platforms helping businesses innovate and scale globally.",
    url: "https://xcodetech.in",
    siteName: "Xcode Tech",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiasedScroll select-none`}
    >
      <head>
        <link rel="preload" href="/sky-bg.png" as="image" />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-transparent text-dark select-text antialiased">
        <Navbar />
        {/* Main Content Area */}
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
        <QuickLeadPopup />
      </body>
    </html>
  );
}
