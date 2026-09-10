"use client";

import { useState } from "react";
import { FadeUp, SectionLabel, SectionTitle } from "@/components/ui/Reveal";
import { KeyHint } from "@/components/ui/HintOnHover";

const SOCIALS = [
  { name: "GitHub", href: "https://github.com/", glyph: "GH" },
  { name: "LinkedIn", href: "https://linkedin.com/", glyph: "in" },
  { name: "Twitter / X", href: "https://x.com/", glyph: "𝕏" },
  { name: "Dribbble", href: "https://dribbble.com/", glyph: "Dr" },
  { name: "Email", href: "mailto:hello@codebyray.dev", glyph: "@" },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
  }

  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="blob-a absolute -left-20 top-20 h-80 w-80 rounded-full bg-[#39FF14]/15 blur-3xl" />
        <div className="blob-b absolute -right-20 bottom-20 h-80 w-80 rounded-full bg-[#7CFF00]/15 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <FadeUp>
              <SectionLabel>Contact</SectionLabel>
              <SectionTitle>
                Let&apos;s build <span className="text-neon">something</span>.
              </SectionTitle>
              <p className="mt-4 max-w-md text-zinc-400">
                Got a product, a brand, or just a half-baked idea? Tell me about it. I usually reply within a day.
              </p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="mt-10 space-y-4">
                {SOCIALS.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4 transition hover:border-[#39FF14]/40 hover:shadow-[0_0_24px_rgba(57,255,20,0.12)]"
                  >
                    <div className="flex items-center gap-4">
                      <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] font-display text-sm text-chrome ring-1 ring-white/10 transition group-hover:text-[#39FF14] group-hover:ring-[#39FF14]/40">
                        {s.glyph}
                      </div>
                      <div>
                        <div className="font-display text-sm font-semibold text-white">
                          {s.name}
                        </div>
                        <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                          {s.href.replace(/^https?:\/\//, "").split("/")[0]}
                        </div>
                      </div>
                    </div>
                    <span className="text-zinc-500 transition group-hover:translate-x-1 group-hover:text-[#39FF14]">
                      →
                    </span>
                  </a>
                ))}
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={0.15}>
            <form
              onSubmit={onSubmit}
              className="glass-strong relative overflow-hidden rounded-2xl border border-white/10 p-6 sm:p-8"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-px rounded-2xl ring-1 ring-inset ring-white/5"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-[#39FF14]/20 blur-3xl"
              />

              <div className="relative">
                <div className="mb-6 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-[#39FF14]">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#39FF14] shadow-[0_0_8px_#39FF14]" />
                  new_message.init()
                </div>

                <Field
                  label="Name"
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                />
                <Field
                  label="Email"
                  type="email"
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                />
                <div className="mt-5">
                  <label className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                    Project / Message
                  </label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="// tell me about your project..."
                    className="neu w-full resize-none rounded-xl bg-[#141414] px-4 py-3 font-mono text-sm text-white placeholder-zinc-600 outline-none transition focus:ring-2 focus:ring-[#39FF14]/60"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sent}
                  className="group mt-6 inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-[#39FF14] px-6 py-3.5 font-mono text-sm font-bold uppercase tracking-wider text-black transition hover:shadow-[0_0_40px_rgba(57,255,20,0.55)] disabled:opacity-70"
                >
                  <span className="relative z-10 flex items-center justify-center gap-1">
                    {sent ? "Message sent ✓" : "Let's build something"} <KeyHint hint="↵" />
                  </span>
                  {!sent && (
                    <span className="relative z-10 transition group-hover:translate-x-0.5">
                      →
                    </span>
                  )}
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                </button>

                <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-widest text-zinc-600">
                  or email directly · hello@codebyray.dev
                </p>
              </div>
            </form>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  return (
    <div className="mt-5 first:mt-0">
      <label className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-zinc-500">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="neu w-full rounded-xl bg-[#141414] px-4 py-3 font-mono text-sm text-white outline-none transition focus:ring-2 focus:ring-[#39FF14]/60"
      />
    </div>
  );
}
