import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition";
  const style =
    variant === "primary"
      ? "bg-accent-2 text-bg hover:opacity-90"
      : "border border-border-2 bg-transparent text-text hover:bg-surface-2";
  const classes = `${base} ${style} ${className}`;
  const isInternal = href.startsWith("/") || href.startsWith("#");

  if (isInternal && !href.includes("[") && !href.includes("]")) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={classes}>
      {children}
    </a>
  );
}
