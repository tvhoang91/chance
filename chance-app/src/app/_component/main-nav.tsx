"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function MainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();

  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)} {...props}>
      <Link
        href="/game"
        className={cn(
          "hover:text-foreground/80 transition-colors",
          pathname === "/game" ? "text-foreground" : "text-foreground/60",
        )}
      >
        Game
      </Link>
      <Link
        href="/about"
        className={cn(
          "hover:text-foreground/80 transition-colors",
          pathname === "/about" ? "text-foreground" : "text-foreground/60",
        )}
      >
        About
      </Link>
    </nav>
  );
}
