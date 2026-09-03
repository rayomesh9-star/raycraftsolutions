"use client";

import { FadeUp, SectionLabel, SectionTitle } from "@/components/ui/Reveal";

const DESIGN = [
  { name: "Figma", glyph: "F" },
  { name: "UI Systems", glyph: "▣" },
  { name: "Prototyping", glyph: "◇" },
  { name: "Brand", glyph: "✦" },
  { name: "Motion", glyph: "≈" },
  { name: "Illustration", glyph: "✎" },
];

const DEV = [
  { name: "TypeScript", glyph: "TS" },
  { name: "React", glyph: "⚛" },
  { name: "Next.js", glyph: "N" },
  { name: "Node", glyph: "⬡" },
  { name: "Tailwind", glyph: "▲" },
  { name: "Postgres", glyph: "❡" },
];

function Tile({ name, glyph }: { name: string; glyph: string }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#39FF14]/50 hover:shadow-[0_0_30px_rgba(57,255,20,0.18)]">
      <div className="flex items-center gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] font-display text-lg text-chrome ring-1 ring-white/10 transition group-hover:from-[#1f3a14] group-hover:to-[#0f1d09] group-hover:text-[#39FF14] group-hover:ring-[#39FF14]/40">
          {glyph}
        </div>
        <div>
          <div className="font-display text-base font-semibold text-white">
            {name}
          </div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
            proficient
          </div>
        </div>
      </div>
      <span className="absolute inset-x-0 -bottom-px h-px scale-x-0 bg-gradient-to-r from-transparent via-[#39FF14] to-transparent transition group-hover:scale-x-100" />
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative py-28 sm:py-36">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#39FF14]/10 blur-3xl" />
      </div>
      <div className="mx-auto w-full max-w-6xl px-6">
        <FadeUp>
          <SectionLabel>Tech Stack</SectionLabel>
          <SectionTitle>
            The <span className="text-neon">tools</span> I build with.
          </SectionTitle>
          <p className="mt-4 max-w-2xl text-zinc-400">
            Two halves of the same brain: visual design on one side, software engineering on the other. Together they ship things that look and feel premium.
          </p>
        </FadeUp>

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2">
          <FadeUp delay={0.1}>
            <div className="mb-5 flex items-center gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500">
                01 /
              </span>
              <h3 className="font-display text-xl font-semibold text-white">
                Design
              </h3>
              <span className="h-px flex-1 bg-gradient-to-r from-white/15 to-transparent" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {DESIGN.map((t) => (
                <Tile key={t.name} {...t} />
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="mb-5 flex items-center gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500">
                02 /
              </span>
              <h3 className="font-display text-xl font-semibold text-white">
                Development
              </h3>
              <span className="h-px flex-1 bg-gradient-to-r from-white/15 to-transparent" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {DEV.map((t) => (
                <Tile key={t.name} {...t} />
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
