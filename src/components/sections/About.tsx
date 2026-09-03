"use client";

import { FadeUp, SectionLabel, SectionTitle } from "@/components/ui/Reveal";

const SKILLS = [
  "UI/UX Design",
  "Design Systems",
  "Brand Identity",
  "Figma",
  "Framer",
  "Motion Design",
  "Webflow",
];

const STACK = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "Framer Motion",
  "Three.js",
  "GraphQL",
  "PostgreSQL",
  "AWS",
  "Docker",
  "Figma",
];

export function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-14 px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <FadeUp>
            <SectionLabel>About</SectionLabel>
            <SectionTitle>
              The person <span className="text-neon">behind</span> the code.
            </SectionTitle>
          </FadeUp>
        </div>

        <div className="lg:col-span-7">
          <FadeUp delay={0.1}>
            <p className="text-lg leading-relaxed text-zinc-300 sm:text-xl">
              I build at the intersection of <em className="not-italic text-white">design and engineering</em> — translating rough ideas into polished, performant products. From wireframe to deploy, I care about every pixel, every millisecond, and every interaction.
            </p>
            <p className="mt-5 text-base leading-relaxed text-zinc-400 sm:text-lg">
              I&apos;ve shipped work for startups, agencies, and independent creators. My toolkit is modern, my taste is opinionated, and my favorite word is <span className="font-mono text-[#39FF14]">why-not</span>.
            </p>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="mt-10 flex flex-wrap gap-2">
              {SKILLS.map((s) => (
                <span
                  key={s}
                  className="neu neu-press group inline-flex items-center gap-2 rounded-full px-4 py-2 font-mono text-xs uppercase tracking-wider text-zinc-300 transition hover:text-[#39FF14]"
                >
                  <span className="h-1 w-1 rounded-full bg-[#39FF14] shadow-[0_0_6px_#39FF14] transition group-hover:scale-150" />
                  {s}
                </span>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {STACK.map((s) => (
                <div
                  key={s}
                  className="glass group relative overflow-hidden rounded-xl px-4 py-3 transition hover:border-[#39FF14]/40 hover:shadow-[0_0_24px_rgba(57,255,20,0.15)]"
                >
                  <span className="font-mono text-xs uppercase tracking-widest text-zinc-400 transition group-hover:text-white">
                    {s}
                  </span>
                  <span className="absolute inset-x-0 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-[#39FF14] to-transparent transition group-hover:scale-x-100" />
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
