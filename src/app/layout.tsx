import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ColorSwitcher } from "@/components/ui/ColorSwitcher";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Avishek | Software Architect & Creative Engineer",
  description: "Senior Software Engineer specializing in building high-performance digital ecosystems with a focus on architecture and design.",
  keywords: ["Software Engineer", "Frontend Architect", "Next.js", "React", "Portfolio"],
  authors: [{ name: "Avishek" }],
  creator: "Avishek",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://avishek.dev",
    title: "Avishek | Portfolio",
    description: "Exceptional digital experiences through code & craft.",
    siteName: "Avishek Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avishek | Software Engineer",
    description: "Building the future of the web.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          <ColorSwitcher />
        </ThemeProvider>
      </body>
    </html>
  );
}
