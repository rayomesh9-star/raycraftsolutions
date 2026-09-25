"use client";

import { FadeUp, SectionLabel, SectionTitle } from "@/components/ui/Reveal";

const SERVICE_PACKAGES = [
  {
    index: "01",
    name: "Starter",
    scope: "Logo + basic branding",
    price: "KSh 10,000–25,000",
  },
  {
    index: "02",
    name: "Digital Presence",
    scope: "Brand + 4–5 page website",
    price: "KSh 30,000–70,000",
  },
  {
    index: "03",
    name: "Business Pro",
    scope: "Brand + UX + larger website",
    price: "KSh 70,000–150,000+",
  },
  {
    index: "04",
    name: "Custom",
    scope: "Digital Product UX + design + full product build",
    price: "KSh 150,000+",
  },
];

const RETAINER_PACKAGES = [
  {
    name: "Website maintenance",
    scope:
      "Updates, backups, security, content changes and technical support.",
    price: "KSh 3,000–10,000/month",
  },
  {
    name: "Social media design retainer",
    scope: "Recurring graphics and campaigns.",
    price: "KSh 10,000–30,000/month",
  },
  {
    name: "Website + design retainer",
    scope: "Ongoing digital support.",
    price: "KSh 20,000–50,000+/month",
  },
];

function RetainerCard({
  retainer,
  i,
}: {
  retainer: (typeof RETAINER_PACKAGES)[number];
  i: number;
}) {
  return (
    <FadeUp delay={i * 0.08}>
      <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-[#39FF14]/50 hover:shadow-[0_24px_60px_-30px_rgba(57,255,20,0.35)]">
        <div
          aria-hidden
          className="absolute inset-x-0 -top-px h-px scale-x-0 bg-gradient-to-r from-transparent via-[#39FF14] to-transparent transition-transform duration-500 group-hover:scale-x-100"
        />
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500">
            monthly
          </span>
          <span className="grid h-8 w-8 place-items-center rounded-full border border-white/10 font-mono text-[10px] text-zinc-400 transition group-hover:border-[#39FF14]/50 group-hover:text-[#39FF14]">
            ↻
          </span>
        </div>

        <h3 className="mt-8 font-display text-2xl font-bold text-white">
          {retainer.name}
        </h3>
        <p className="mt-3 min-h-[3.75rem] text-sm leading-relaxed text-zinc-400">
          {retainer.scope}
        </p>

        <div className="mt-auto pt-8">
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
            Recurring support
          </div>
          <div className="mt-2 font-display text-xl font-bold text-white sm:text-2xl">
            {retainer.price}
          </div>
        </div>

        <a
          href="#contact"
          aria-label={`Discuss the ${retainer.name} retainer`}
          className="mt-8 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-zinc-300 transition group-hover:text-[#39FF14]"
        >
          Discuss this retainer
          <span className="transition group-hover:translate-x-1">→</span>
        </a>
      </article>
    </FadeUp>
  );
}

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-28 sm:py-36">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/4 h-80 w-80 rounded-full bg-[#39FF14]/10 blur-3xl" />
        <div className="absolute right-0 bottom-1/4 h-96 w-96 rounded-full bg-[#7CFF00]/10 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <FadeUp>
            <SectionLabel>Services</SectionLabel>
            <SectionTitle>
              Choose a <span className="text-neon">starting range</span>.
            </SectionTitle>
            <p className="mt-4 max-w-2xl text-zinc-400">
              Clear, flexible packages for brands and products at every stage.
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <a
              href="#contact"
              className="font-mono text-xs uppercase tracking-widest text-zinc-400 underline-offset-4 transition hover:text-[#39FF14] hover:underline"
            >
              Discuss your scope →
            </a>
          </FadeUp>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {SERVICE_PACKAGES.map((service, i) => (
            <FadeUp key={service.index} delay={i * 0.08}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-[#39FF14]/50 hover:shadow-[0_24px_60px_-30px_rgba(57,255,20,0.35)]">
                <div
                  aria-hidden
                  className="absolute inset-x-0 -top-px h-px scale-x-0 bg-gradient-to-r from-transparent via-[#39FF14] to-transparent transition-transform duration-500 group-hover:scale-x-100"
                />
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500">
                    {service.index} /
                  </span>
                  <span className="grid h-8 w-8 place-items-center rounded-full border border-white/10 font-mono text-[10px] text-zinc-400 transition group-hover:border-[#39FF14]/50 group-hover:text-[#39FF14]">
                    {service.index}
                  </span>
                </div>

                <h3 className="mt-8 font-display text-2xl font-bold text-white">
                  {service.name}
                </h3>
                <p className="mt-3 min-h-[3.75rem] text-sm leading-relaxed text-zinc-400">
                  {service.scope}
                </p>

                <div className="mt-auto pt-8">
                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                    Indicative starting range
                  </div>
                  <div className="mt-2 font-display text-xl font-bold text-white sm:text-2xl">
                    {service.price}
                  </div>
                </div>

                <a
                  href="#contact"
                  aria-label={`Discuss the ${service.name} package`}
                  className="mt-8 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-zinc-300 transition group-hover:text-[#39FF14]"
                >
                  Start a conversation
                  <span className="transition group-hover:translate-x-1">→</span>
                </a>
              </article>
            </FadeUp>
          ))}
        </div>

        <div className="mt-20">
          <FadeUp>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#39FF14] shadow-[0_0_8px_#39FF14]" />
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#7CFF00]">
                Monthly retainers
              </span>
            </div>
            <h3 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
              Ongoing support, <span className="text-neon">without</span> the guesswork.
            </h3>
            <p className="mt-3 max-w-2xl text-zinc-400">
              Flexible monthly partnerships for teams that need consistent design and technical support.
            </p>
          </FadeUp>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {RETAINER_PACKAGES.map((retainer, i) => (
              <RetainerCard key={retainer.name} retainer={retainer} i={i} />
            ))}
          </div>
        </div>

        <FadeUp delay={0.2}>
          <p className="mt-8 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
            Final scope and quote confirmed after discovery
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
