"use client";

import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { FadeUp, SectionLabel, SectionTitle } from "@/components/ui/Reveal";
import { GlitchText } from "@/components/ui/GlitchText";

type Project = {
  title: string;
  tag: string;
  description: string;
  tech: string[];
  year: string;
  href: string;
  accent: string;
};

const PROJECTS: Project[] = [
  {
    title: "NeonCart",
    tag: "E-commerce Platform",
    description:
      "Headless commerce storefront with a custom design system and sub-100ms interactions.",
    tech: ["Next.js", "Stripe", "Sanity"],
    year: "2025",
    href: "#",
    accent: "from-[#39FF14]/40 to-transparent",
  },
  {
    title: "Pulse OS",
    tag: "SaaS Dashboard",
    description:
      "Realtime analytics dashboard for fintech ops teams. 60fps, 50+ chart types, themable.",
    tech: ["React", "D3", "WebSockets"],
    year: "2024",
    href: "#",
    accent: "from-[#7CFF00]/40 to-transparent",
  },
  {
    title: "Formlab",
    tag: "Design Tool",
    description:
      "Collaborative design tool for product teams — think FigJam meets a real component editor.",
    tech: ["TypeScript", "Canvas", "Yjs"],
    year: "2024",
    href: "#",
    accent: "from-emerald-400/30 to-transparent",
  },
  {
    title: "Atlas Travel",
    tag: "Brand & Web",
    description:
      "Brand identity, marketing site, and booking flow for a boutique travel startup.",
    tech: ["Figma", "Next.js", "GSAP"],
    year: "2024",
    href: "#",
    accent: "from-lime-300/30 to-transparent",
  },
  {
    title: "Hollow Studio",
    tag: "Portfolio & CMS",
    description:
      "Minimalist portfolio platform for visual artists — fast, art-first, and easy to self-host.",
    tech: ["Astro", "MDX", "Cloudflare"],
    year: "2023",
    href: "#",
    accent: "from-[#39FF14]/30 to-transparent",
  },
  {
    title: "Cipher Editor",
    tag: "Developer Tool",
    description:
      "A keyboard-first markdown editor with end-to-end encrypted sync and a slick command palette.",
    tech: ["Rust", "WASM", "React"],
    year: "2023",
    href: "#",
    accent: "from-[#7CFF00]/30 to-transparent",
  },
];

function TiltCard({ p, i }: { p: Project; i: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const rx = useSpring(0, { stiffness: 200, damping: 20 });
  const ry = useSpring(0, { stiffness: 200, damping: 20 });
  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const bg = useMotionTemplate`radial-gradient(circle at ${mx}% ${my}%, rgba(57,255,20,0.18), transparent 60%)`;

  function onMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    ry.set((px - 0.5) * 10);
    rx.set(-(py - 0.5) * 10);
    mx.set(px * 100);
    my.set(py * 100);
  }
  function onLeave() {
    rx.set(0);
    ry.set(0);
  }

  return (
    <motion.a
      ref={ref}
      href={p.href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="tilt-card group relative block overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#141414] to-[#0b0b0b] p-6 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.8)]"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: bg }}
      />
      <div
        aria-hidden
        className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br ${p.accent} opacity-50 blur-3xl transition group-hover:opacity-90`}
      />

      <div className="relative flex h-full flex-col">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
            {p.tag}
          </span>
          <span className="font-mono text-[10px] text-zinc-600">
            {p.year}
          </span>
        </div>

        <GlitchText className="mt-6 font-display text-3xl font-bold">
          {p.title}
        </GlitchText>
        <p className="mt-3 text-sm leading-relaxed text-zinc-400">
          {p.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-zinc-300"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between">
          <span className="font-mono text-[11px] uppercase tracking-widest text-[#39FF14] opacity-0 transition group-hover:opacity-100">
            View Case Study
          </span>
          <span className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white transition group-hover:border-[#39FF14] group-hover:text-[#39FF14] group-hover:shadow-[0_0_18px_rgba(57,255,20,0.4)]">
            →
          </span>
        </div>
      </div>
    </motion.a>
  );
}

export function Projects() {
  return (
    <section id="work" className="relative py-28 sm:py-36">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <FadeUp>
            <SectionLabel>Selected Work</SectionLabel>
            <SectionTitle>
              Things I&apos;ve <span className="text-neon">built</span>.
            </SectionTitle>
          </FadeUp>
          <FadeUp delay={0.1}>
            <a
              href="#contact"
              className="font-mono text-xs uppercase tracking-widest text-zinc-400 underline-offset-4 transition hover:text-[#39FF14] hover:underline"
            >
              Have a project? →
            </a>
          </FadeUp>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <TiltCard key={p.title} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
