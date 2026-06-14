import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "dark";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = ""
}: ButtonLinkProps) {
  const styles = {
    primary:
      "bg-copper text-white hover:bg-forest focus-visible:ring-copper",
    secondary:
      "border border-forest/25 bg-parchment text-forest hover:border-copper hover:bg-white hover:text-copper focus-visible:ring-copper",
    ghost:
      "bg-transparent text-forest hover:bg-forest/5 focus-visible:ring-copper",
    dark:
      "bg-forest text-cream hover:bg-basalt focus-visible:ring-gold"
  };

  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center rounded-none px-6 py-3 text-sm font-black uppercase tracking-[0.08em] transition duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
