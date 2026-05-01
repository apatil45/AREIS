import { CSSProperties, ReactNode } from "react";

export default function Card({
  children,
  className = "",
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <article className={`card-base ${className}`} style={style}>
      {children}
    </article>
  );
}
