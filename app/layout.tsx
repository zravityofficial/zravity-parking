import type { Metadata, Viewport } from "next";
import { Red_Hat_Display } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { SmoothScroll } from "./components/smooth-scroll";
import { TopMarquee } from "./components/top-marquee";
import { SiteHeader } from "./components/site-header";
import { SiteFooter } from "./components/site-footer";

const redHat = Red_Hat_Display({
  variable: "--font-red-hat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// VLNL Decks — supplied by the client, used for the Zravity wordmark.
const vlnlDecks = localFont({
  variable: "--font-vlnl",
  src: [
    { path: "./fonts/vlnl-decks-medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/vlnl-decks-medium.woff", weight: "500", style: "normal" },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Zravity — Everything You Need",
    template: "%s · Zravity",
  },
  description:
    "Zravity is the super app that brings shopping, services, rides, travel, food, delivery, professionals, payments, and the N.E.H.A. AI assistant into one premium, unified experience.",
  keywords: [
    "super app",
    "ecommerce",
    "services marketplace",
    "ride booking",
    "food delivery",
    "digital wallet",
    "N.E.H.A. AI assistant",
    "Zravity",
  ],
  openGraph: {
    title: "Zravity — Everything You Need",
    description:
      "One super app for shopping, services, rides, travel, food, delivery, payments, and your N.E.H.A. AI assistant.",
    siteName: "Zravity",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f4f4f2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${redHat.variable} ${vlnlDecks.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <SmoothScroll />
        <TopMarquee />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
