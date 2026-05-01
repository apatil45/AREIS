import { ReactNode } from "react";

export default function Badge({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <span className={`label-chip border border-border text-text-faint ${className}`}>{children}</span>;
}
