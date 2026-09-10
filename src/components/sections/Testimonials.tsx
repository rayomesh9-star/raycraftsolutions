"use client";

import { FadeUp, SectionLabel, SectionTitle } from "@/components/ui/Reveal";

const QUOTES = [
  {
    q: "Ray turned a vague product idea into a polished, ship-ready product in weeks. The kind of collaborator you hope to find.",
    n: "Maya Chen",
    r: "Founder, Pulse OS",
  },
  {
    q: "Equal parts designer and engineer. Our conversion jumped 38% after the redesign and the codebase actually got smaller.",
    n: "Jordan Ellis",
    r: "Head of Product, NeonCart",
  },
  {
    q: "Fast, opinionated, and cares about the details that nobody else notices. Would hire again in a heartbeat.",
    n: "Sam Reyes",
    r: "Creative Director, Hollow",
  },
  {
    q: "A rare hybrid — translates vision into reality without losing either. The motion work alone was worth it.",
    n: "Aria Patel",
    r: "CTO, Formlab",
  },
  {
    q: "Best portfolio refresh we've ever commissioned. Future-proof, fast, and on-brand to the pixel.",
    n: "Daniel Okafor",
    r: "Brand Lead, Atlas",
  },
  {
    q: "Communication was crisp, code was clean, design taste was unreal. 10/10 would recommend.",
    n: "Lena Park",
    r: "Indie Maker",
  },
];

function Card({ q }: { q: (typeof QUOTES)[number] }) {
  return (
    <div className="glass mx-2 w-[260px] flex-shrink-0 rounded-2xl p-5 sm:mx-3 sm:w-[320px] sm:p-6 lg:w-[380px]">
      <div className="mb-4 font-display text-3xl text-[#39FF14]">“</div>
      <p className="text-sm leading-relaxed text-zinc-300">{q.q}</p>
      <div className="mt-5 flex items-center gap-3 border-t border-white/5 pt-4">
        <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-[#39FF14] to-[#1f3a14] font-display text-sm font-bold text-black">
          {q.n[0]}
        </div>
        <div>
          <div className="font-display text-sm font-semibold text-white">
            {q.n}
          </div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
            {q.r}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const loop = [...QUOTES, ...QUOTES];
  return (
    <section id="testimonials" className="relative overflow-hidden py-28 sm:py-36">
      <div className="mx-auto w-full max-w-6xl px-6">
        <FadeUp>
          <SectionLabel>Voices</SectionLabel>
          <SectionTitle>
            What clients <span className="text-neon">say</span>.
          </SectionTitle>
        </FadeUp>
      </div>

      <div className="relative mt-12 overflow-x-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#0A0A0A] to-transparent sm:w-24"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#0A0A0A] to-transparent sm:w-24"
        />
        <div className="marquee-track flex w-max">
          {loop.map((q, i) => (
            <Card key={i} q={q} />
          ))}
        </div>
      </div>
    </section>
  );
}
