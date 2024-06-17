import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { MainNav } from "./_component/main-nav";
import { ModeToggle } from "./_component/mode-toogle";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Chance Calculator",
  description: "Set of tools to display the odds of certain game outcomes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("bg-background min-h-screen font-sans antialiased", fontSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <header className="flex h-14 items-center border-b px-8">
            <Link href="/" className="hover:text-foreground/80 text-lg font-bold leading-none transition-colors">
              tvhoang91/chance
            </Link>
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-2">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/tvhoang91/chance" target="_blank">
                  <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem]" />
                  <span className="sr-only">Repository Link</span>
                </a>
              </Button>
              <ModeToggle />
            </div>
          </header>
          <main className="flex flex-col">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
