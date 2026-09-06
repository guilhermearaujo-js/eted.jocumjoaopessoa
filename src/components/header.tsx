"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { buttonVariants } from "@/components/ui/button";
import { cn, NAV } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#inicio");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV.map((item) => item.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.1, 0.3, 0.6] },
    );
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const inverted = !scrolled && !open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow,backdrop-filter] duration-200",
        scrolled || open
          ? "bg-foam/92 shadow-[0_1px_0_rgb(10_77_104/0.08)] backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between gap-4 px-5 md:h-20">
        <Logo inverted={inverted} />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-2 text-[0.82rem] font-medium transition-colors duration-150",
                inverted
                  ? active === item.href
                    ? "text-gold"
                    : "text-foam/80 hover:text-foam"
                  : active === item.href
                    ? "text-ocean"
                    : "text-muted hover:text-ocean",
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className={cn(
            buttonVariants({ variant: inverted ? "gold" : "ocean", size: "md" }),
            "hidden lg:inline-flex",
          )}
        >
          Pré-inscrição
        </a>

        <button
          type="button"
          className={cn(
            "grid size-11 place-items-center rounded-md lg:hidden",
            inverted ? "text-foam" : "text-ocean",
          )}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      <div
        id="menu-mobile"
        className={cn(
          "overflow-hidden border-t border-ocean/8 bg-foam transition-[max-height,opacity] duration-200 ease-out lg:hidden",
          open ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="flex flex-col px-5 py-4" aria-label="Mobile">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex min-h-11 items-center border-b border-ocean/8 font-display text-xl text-ocean last:border-0"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className={cn(buttonVariants({ variant: "ocean", size: "lg" }), "mt-4")}
          >
            Faça sua pré-inscrição
          </a>
        </nav>
      </div>
    </header>
  );
}
