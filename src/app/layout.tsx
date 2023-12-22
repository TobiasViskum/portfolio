import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./transitions.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { ThemeSwitcher } from "./_components/ThemeSwitcher";
import { Sidebar } from "./(blog-pages)/_components/Sidebar";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Showroom",
  description: "Tobias' portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="rgb(var(--background))" />
        <meta name="htmx-config" content='{"globalViewTransitions":"true"}' />
      </head>
      <body className={cn(inter.className, "min-h-[100svh]")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeSwitcher />
          <Sidebar />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
