"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const NAV = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Work" },
  { id: "process", label: "Process" },
  { id: "testimonials", label: "Voices" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV.map((n) => document.getElementById(n.id)).filter(
      Boolean,
    ) as HTMLElement[];
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-6 sm:pt-5">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "flex w-full max-w-5xl items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-500 sm:px-6",
          scrolled
            ? "glass-strong glow-border"
            : "border-white/5 bg-black/30 backdrop-blur-md",
        )}
      >
        <a
          href="#top"
          className="group flex items-center gap-2 font-display text-sm font-bold tracking-tight"
        >
          <span className="relative grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] ring-1 ring-white/10">
            <span className="text-chrome font-mono text-[11px] font-bold">R</span>
            <span className="pointer-events-none absolute -inset-px rounded-md ring-1 ring-[#39FF14]/0 transition group-hover:ring-[#39FF14]/60" />
          </span>
          <span className="text-chrome">codebyray</span>
          <span className="hidden text-[#39FF14] sm:inline">&lt;/&gt;</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                className={cn(
                  "group relative rounded-full px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition",
                  active === n.id
                    ? "text-[#39FF14]"
                    : "text-zinc-400 hover:text-white",
                )}
              >
                {n.label}
                <span
                  className={cn(
                    "absolute inset-x-3 -bottom-0.5 h-px bg-[#39FF14] transition-all duration-300",
                    active === n.id
                      ? "opacity-100 shadow-[0_0_10px_#39FF14]"
                      : "opacity-0 group-hover:opacity-60",
                  )}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-full bg-[#39FF14] px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-black transition hover:shadow-[0_0_24px_rgba(57,255,20,0.6)] md:inline-flex"
          >
            Hire Me
          </a>
          <button
            onClick={() => setMobileOpen((s) => !s)}
            aria-label="Toggle menu"
            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-black/40 md:hidden"
          >
            <span className="space-y-1.5">
              <span
                className={cn(
                  "block h-0.5 w-4 bg-white transition",
                  mobileOpen && "translate-y-2 rotate-45",
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-4 bg-white transition",
                  mobileOpen && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-4 bg-white transition",
                  mobileOpen && "-translate-y-2 -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="absolute left-3 right-3 top-[calc(100%+0.5rem)] rounded-2xl border border-white/10 bg-black/80 p-2 backdrop-blur-xl md:hidden"
          >
            <ul className="grid gap-1">
              {NAV.map((n) => (
                <li key={n.id}>
                  <a
                    onClick={() => setMobileOpen(false)}
                    href={`#${n.id}`}
                    className="block rounded-lg px-4 py-3 font-mono text-sm uppercase tracking-wider text-zinc-300 transition hover:bg-white/5 hover:text-[#39FF14]"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  onClick={() => setMobileOpen(false)}
                  href="#contact"
                  className="mt-1 block rounded-lg bg-[#39FF14] px-4 py-3 text-center font-mono text-sm font-bold uppercase tracking-wider text-black"
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
