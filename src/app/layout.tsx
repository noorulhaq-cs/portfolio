import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import ScrollProgress from "@/components/scroll-progress";
import BackToTop from "@/components/back-to-top";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://noorulhaq.dev"),
  title: "Noor Ul Haq — Full-Stack Developer",
  description:
    "Computer Science graduate and full-stack developer building modern, scalable web applications with React, Next.js and NestJS.",
  keywords: [
    "Noor Ul Haq",
    "Full Stack Developer",
    "React Developer",
    "Next.js",
    "NestJS",
    "Software Engineer Portfolio",
    "Karachi Pakistan Developer",
  ],
  authors: [{ name: "Noor Ul Haq" }],
  openGraph: {
    title: "Noor Ul Haq — Full-Stack Developer",
    description:
      "Computer Science graduate and full-stack developer building modern, scalable web applications.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Noor Ul Haq — Full-Stack Developer",
    description:
      "Computer Science graduate and full-stack developer building modern, scalable web applications.",
  },
};

// Runs before paint to prevent a flash of the wrong theme.
const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = stored || (prefersDark ? 'dark' : 'light');
    if (theme === 'dark') document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased bg-bg text-ink`}
      >
        <ThemeProvider>
          <ScrollProgress />
          {children}
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
