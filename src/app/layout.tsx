import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import InitializingScreen from "@/components/InitializingScreen";
import GlobalParticleBackground from "@/components/GlobalParticleBackground";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pankaj Singh — Full-Stack Developer & AI Enthusiast",
  description:
    "Building digital experiences that solve real-world problems. Full-stack developer and Data Science student based in Delhi.",
  keywords: [
    "Pankaj Singh",
    "Full-Stack Developer",
    "CollegeMart",
    "Next.js",
    "React",
    "Node.js",
    "Machine Learning",
    "IIT Madras",
    "Delhi Developer",
  ],
  authors: [{ name: "Pankaj Singh" }],
  creator: "Pankaj Singh",
  metadataBase: new URL("https://pankajsingh.dev"),
  openGraph: {
    type: "website",
    url: "https://pankajsingh.dev",
    title: "Pankaj Singh — Full-Stack Developer & AI Enthusiast",
    description:
      "Building digital experiences that solve real-world problems. Full-stack developer & Data Science student.",
    siteName: "Pankaj Singh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pankaj Singh — Full-Stack Developer & AI Enthusiast",
    description:
      "Building digital experiences that solve real-world problems.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#080c14" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased selection:bg-cyan-500/20 selection:text-cyan-300`}>
        <ThemeProvider>
          <InitializingScreen />
          <GlobalParticleBackground />
          <Header />
          <main className="relative z-10">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
