import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://codebyray.dev"),
  title: {
    default: "codebyray — Design • Develop • Elevate",
    template: "%s | codebyray",
  },
  description:
    "codebyray — a web designer and software developer crafting premium, futuristic digital experiences. Design • Develop • Elevate.",
  keywords: [
    "codebyray",
    "web designer",
    "software developer",
    "portfolio",
    "frontend",
    "react",
    "next.js",
    "UI/UX",
  ],
  authors: [{ name: "codebyray" }],
  creator: "codebyray",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://codebyray.dev",
    title: "codebyray — Design • Develop • Elevate",
    description:
      "A web designer and software developer crafting premium, futuristic digital experiences.",
    siteName: "codebyray",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "codebyray — Design • Develop • Elevate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "codebyray — Design • Develop • Elevate",
    description:
      "A web designer and software developer crafting premium, futuristic digital experiences.",
    images: ["/og.svg"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0A0A0A] text-zinc-200 selection:bg-[#39FF14]/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
