import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { HomeIcon } from "@/svg/HomeIcon";
import { ThemeSwitcher } from "./_components/ThemeSwitcher";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
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
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={cn(inter.className, "min-h-[100svh] dark:bg-black")}>
        <ThemeSwitcher />
        {/* <div className="group fixed left-0 flex h-full w- flex-col items-start justify-center gap-y-8 pl-2">
          <div className="flex items-center gap-x-2">
            <HomeIcon />
            <p className="pb-2 text-lg font-medium opacity-0 group-hover:opacity-75">
              Home
            </p>
          </div>
        </div> */}
        <ThemeProvider
          defaultTheme="light"
          attribute="class"
          themes={["dark", "light"]}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
