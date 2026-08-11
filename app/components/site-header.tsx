"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "./logo";
import { CloseIcon, MenuIcon } from "./icons";

const NAV = [
  { label: "Services", href: "/#ecosystem" },
  { label: "How it works", href: "/#how" },
  { label: "N.E.H.A.", href: "/#neha" },
  { label: "For business", href: "/#business" },
  { label: "Team", href: "/team" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      <div
        className={`transition-colors duration-300 ${
          scrolled
            ? "border-b border-line bg-paper/85 backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex h-[68px] max-w-6xl items-center justify-between px-5 sm:px-8">
          <Link href="/" className="rounded-md" aria-label="Zravity home">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {NAV.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  i === 0
                    ? "border border-line-strong text-ink hover:bg-surface-white"
                    : "text-ink-2 hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2.5 md:flex">
            <Link
              href="/#footer"
              className="rounded-full px-3 py-2 text-sm font-medium text-ink-2 transition-colors hover:text-ink"
            >
              Sign in
            </Link>
            <Link
              href="/#cta"
              className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-surface-white transition-colors hover:bg-dark"
            >
              Get started
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface-white text-ink md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? (
              <CloseIcon className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-x-0 top-[68px] bottom-0 z-40 bg-paper px-5 pt-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3.5 text-lg font-medium text-ink transition-colors hover:bg-surface-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3 border-t border-line pt-5">
            <Link
              href="/#footer"
              onClick={() => setOpen(false)}
              className="rounded-full border border-line-strong px-4 py-3 text-center text-sm font-semibold text-ink"
            >
              Sign in
            </Link>
            <Link
              href="/#cta"
              onClick={() => setOpen(false)}
              className="rounded-full bg-ink px-4 py-3 text-center text-sm font-semibold text-surface-white"
            >
              Get started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
