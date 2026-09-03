"use client";

import { FadeUp, SectionLabel, SectionTitle } from "@/components/ui/Reveal";

const STEPS = [
  {
    n: "01",
    title: "Design",
    description:
      "Wireframes, prototypes, and design systems that turn fuzzy ideas into clear, testable product surfaces.",
    bullets: ["Research & strategy", "UI design in Figma", "Prototyping & testing"],
  },
  {
    n: "02",
    title: "Develop",
    description:
      "Type-safe, performant code with modern frameworks. Accessible, responsive, and built to scale.",
    bullets: ["Next.js / React", "Headless CMS & APIs", "Performance & a11y"],
  },
  {
    n: "03",
    title: "Elevate",
    description:
      "Motion, micro-interactions, and polish that make the product feel inevitable. Ship, measure, iterate.",
    bullets: ["Motion & micro-interactions", "Launch & analytics", "Continuous iteration"],
  },
];

export function Process() {
  return (
    <section id="process" className="relative py-28 sm:py-36">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-[#7CFF00]/10 blur-3xl" />
      </div>
      <div className="mx-auto w-full max-w-6xl px-6">
        <FadeUp>
          <SectionLabel>Process</SectionLabel>
          <SectionTitle>
            From idea to <span className="text-neon">elevated</span> reality.
          </SectionTitle>
        </FadeUp>

        <div className="relative mt-16">
          {/* connecting line */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent lg:block"
          />
          <div
            aria-hidden
            className="absolute left-1/2 top-12 hidden h-px -translate-x-1/2 bg-gradient-to-r from-transparent via-[#39FF14]/60 to-transparent lg:block"
            style={{ width: "calc(100% - 6rem)" }}
          />

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {STEPS.map((s, i) => (
              <FadeUp key={s.n} delay={i * 0.1}>
                <div className="group relative h-full rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent p-6 transition-all duration-500 hover:border-[#39FF14]/40 hover:shadow-[0_0_40px_rgba(57,255,20,0.15)]">
                  <div className="flex items-center gap-4">
                    <div className="relative grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] font-display text-xl text-chrome ring-1 ring-white/10 transition-all duration-500 group-hover:from-[#1f3a14] group-hover:to-[#0f1d09] group-hover:text-[#39FF14] group-hover:ring-[#39FF14]/50 group-hover:shadow-[0_0_24px_rgba(57,255,20,0.4)]">
                      {s.n}
                      <span className="absolute -inset-1 rounded-full ring-1 ring-inset ring-[#39FF14]/0 transition group-hover:ring-[#39FF14]/30" />
                    </div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500 transition group-hover:text-[#39FF14]">
                      {s.title}
                    </div>
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-bold text-white">
                    {s.title === "Design" && "Sketch the vision."}
                    {s.title === "Develop" && "Engineer the experience."}
                    {s.title === "Elevate" && "Polish & ship."}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    {s.description}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {s.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-center gap-2 font-mono text-xs text-zinc-300"
                      >
                        <span className="h-1 w-1 rounded-full bg-[#39FF14] shadow-[0_0_6px_#39FF14]" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
