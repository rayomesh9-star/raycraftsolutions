"use client";

import { motion } from "framer-motion";
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
    title: "newjoweb-site",
    tag: "Web Design",
    description:
      "A responsive website for a graphics design company, optimized for both PC and mobile.",
    tech: ["HTML", "CSS"],
    year: "2024",
    href: "https://rayomesh9-star.github.io/newjoweb-site/",
    accent: "from-[#39FF14]/40 to-transparent",
  },
  {
    title: "Blackburn",
    tag: "Personal Project",
    description: "BlackBurn: Embrace yourself!",
    tech: ["HTML", "CSS"],
    year: "2023",
    href: "https://skhinga.github.io/Blackburn/",
    accent: "from-emerald-400/30 to-transparent",
  },
  {
    title: "KPEO",
    tag: "Non-Profit",
    description:
      "An organization dedicated to eradicating poverty through education, clean water access, food security, environmental sustainability, and community empowerment.",
    tech: ["HTML", "CSS"],
    year: "2023",
    href: "https://rayomesh9-star.github.io/KPEO/",
    accent: "from-lime-300/30 to-transparent",
  },
  {
    title: "raycraftsolutions",
    tag: "Portfolio",
    description:
      "A basic portfolio website showcasing works and services.",
    tech: ["TypeScript", "React"],
    year: "2024",
    href: "https://raycraftsolutions.vercel.app",
    accent: "from-[#39FF14]/30 to-transparent",
  },
  {
    title: "MAB-WONDERLUST-SAFARIS",
    tag: "Travel & Tourism",
    description:
      "A Kenya-based tourism and travel company creating meaningful, memorable and authentic travel experiences across Kenya, Africa and beyond.",
    tech: ["HTML", "CSS"],
    year: "2023",
    href: "https://rayomesh9-star.github.io/MAB-WONDERLUST-SAFARIS/",
    accent: "from-[#7CFF00]/30 to-transparent",
  },
];

function ProjectCard({ p, i }: { p: Project; i: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#141414] to-[#0b0b0b] p-6 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.8)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#39FF14]/40 hover:shadow-[0_30px_60px_-30px_rgba(57,255,20,0.25)]"
    >
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

        <h3 className="mt-8">
          <a
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit the ${p.title} website`}
            className="group/title inline-flex items-start gap-2"
          >
            <GlitchText className="font-display text-3xl font-bold">
              {p.title}
            </GlitchText>
            <span className="mt-1 text-[#39FF14] opacity-0 transition group-hover/title:opacity-100">
              ↗
            </span>
          </a>
        </h3>

        <p className="mt-4 text-sm leading-relaxed text-zinc-400">
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

        <a
          href={p.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center justify-between gap-3 border-t border-white/10 pt-5 font-mono text-[11px] uppercase tracking-widest text-zinc-300 transition group-hover:text-[#39FF14]"
        >
          <span>Visit website</span>
          <span className="grid h-8 w-8 place-items-center rounded-full border border-white/10 text-white transition group-hover:border-[#39FF14] group-hover:text-[#39FF14] group-hover:shadow-[0_0_18px_rgba(57,255,20,0.4)]">
            ↗
          </span>
        </a>
      </div>
    </motion.article>
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
            <ProjectCard key={p.title} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
