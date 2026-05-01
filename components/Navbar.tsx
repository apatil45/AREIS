"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/services", label: "Services" },
  { href: "/consultancy", label: "Consultancy" },
  { href: "/#about", label: "About" },
  { href: "/#work", label: "Work" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition ${
        scrolled
          ? "border-border bg-bg/80 backdrop-blur-xl"
          : "border-transparent bg-bg/95"
      }`}
    >
      <nav className="mx-auto flex w-full max-w-[1100px] items-center justify-between px-6 py-4 md:px-12">
        <Link href="/" className="text-lg font-semibold">
          <span>AREIS</span>
          {/* <span className="text-accent"> / AI</span> */}
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-text-dim hover:text-text">
              {item.label}
            </Link>
          ))}
        </div>
        <div className="hidden md:block">
          <Link
            href="/#contact"
            className="rounded-lg border border-border-2 px-5 py-2 text-sm font-semibold hover:bg-surface-2"
          >
            Let&apos;s talk
          </Link>
        </div>
        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded border border-border md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </nav>
      {open && (
        <div className="border-t border-border bg-surface px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-text-dim">
                {item.label}
              </Link>
            ))}
            <Link href="/#contact" onClick={() => setOpen(false)} className="rounded-lg border border-border-2 px-4 py-2 text-center">
              Let&apos;s talk
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
