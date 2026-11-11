"use client";

import { useEffect, useState } from "react";
import { Menu, ShoppingBag, X } from "lucide-react";
import { navLinks } from "@/data/site";
import { TeddyLogo } from "./Decor";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  // Elevated style once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the link of the section currently in view
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!sections.length || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Escape closes the mobile menu
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled || open
          ? "bg-cream/90 shadow-[0_8px_24px_-14px_rgba(199,124,153,0.5)] backdrop-blur-md"
          : "bg-cream/60 backdrop-blur-sm"
      }`}
    >
      <nav
        aria-label="Navigasi utama"
        className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8"
      >
        <a
          href="#home"
          onClick={close}
          className="group flex items-center gap-2.5"
          aria-label="Plushie Paradise, kembali ke atas"
        >
          <span className="grid size-11 place-items-center rounded-full bg-blush transition duration-300 group-hover:rotate-6 group-hover:scale-105">
            <TeddyLogo className="size-8" />
          </span>
          <span className="font-heading text-xl font-semibold leading-none text-cocoa sm:text-2xl">
            Plushie <span className="text-rose">Paradise</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={active === link.href ? "true" : undefined}
                className={`rounded-full px-4 py-2 text-sm font-medium transition duration-200 hover:bg-blush hover:text-rose-deep ${
                  active === link.href
                    ? "bg-blush text-rose-deep"
                    : "text-cocoa"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#collection"
            className="hidden min-h-11 items-center gap-2 rounded-full bg-rose px-6 text-sm font-semibold text-white shadow-soft transition duration-300 hover:-translate-y-0.5 hover:bg-rose-deep hover:shadow-lift sm:inline-flex"
          >
            <ShoppingBag className="size-4" aria-hidden="true" />
            Belanja Sekarang
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            className="grid size-11 place-items-center rounded-full bg-white text-cocoa shadow-soft transition hover:bg-blush lg:hidden"
          >
            {open ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="mx-4 mb-4 animate-fade-up rounded-3xl bg-white p-3 shadow-lift lg:hidden"
        >
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={close}
                  className={`block rounded-2xl px-4 py-3.5 text-base font-medium transition hover:bg-blush ${
                    active === link.href ? "bg-blush text-rose-deep" : "text-cocoa"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#collection"
            onClick={close}
            className="mt-2 flex min-h-12 items-center justify-center gap-2 rounded-full bg-rose px-6 text-base font-semibold text-white transition hover:bg-rose-deep"
          >
            <ShoppingBag className="size-4" aria-hidden="true" />
            Belanja Sekarang
          </a>
        </div>
      )}
    </header>
  );
}
