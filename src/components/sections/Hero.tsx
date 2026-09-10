"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Odometer, InfinityStat } from "@/components/ui/Odometer";
import { KeyHint } from "@/components/ui/HintOnHover";

const SNIPPET = `> initializing portfolio...
> designing experience ✦
> building interfaces ◆
> shipping code ●
> ready: elevate();`;

export function Hero() {
  const [typed, setTyped] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setTyped(SNIPPET.slice(0, i));
      if (i >= SNIPPET.length) {
        clearInterval(id);
        setTimeout(() => setDone(true), 600);
      }
    }, 35);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-28"
    >
      {/* Background blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="blob-a absolute -top-32 -left-20 h-[28rem] w-[28rem] rounded-full bg-[#39FF14]/20 blur-3xl" />
        <div className="blob-b absolute top-1/3 -right-20 h-[34rem] w-[34rem] rounded-full bg-[#7CFF00]/15 blur-3xl" />
        <div className="blob-c absolute bottom-0 left-1/3 h-[26rem] w-[26rem] rounded-full bg-[#39FF14]/10 blur-3xl" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          }}
        />
      </div>

      {/* Watermark R */}
      <div
        aria-hidden
        className="watermark-r absolute inset-x-0 -top-10 -z-10 flex justify-center"
      >
        R
      </div>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#39FF14]/30 bg-[#39FF14]/5 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.25em] text-[#7CFF00]"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#39FF14] shadow-[0_0_8px_#39FF14]" />
            Available for select projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(3rem,9vw,6.5rem)] font-bold leading-[0.95] tracking-tight"
          >
            <span className="text-chrome">code</span>
            <span className="text-neon">by</span>
            <span className="text-chrome">ray</span>
            <span className="ml-3 inline-block align-top text-[0.6em] text-[#39FF14] glow-text">
              &lt;/&gt;
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="mt-6 max-w-xl font-display text-2xl font-medium leading-tight text-zinc-200 sm:text-3xl"
          >
            Design <span className="text-neon">•</span> Develop{" "}
            <span className="text-neon">•</span> Elevate.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="mt-5 max-w-lg text-base leading-relaxed text-zinc-400 sm:text-lg"
          >
            I&apos;m <span className="text-white">Ray</span> — a web designer
            and software developer building premium, futuristic digital
            experiences that feel as good as they look.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#work"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#39FF14] px-6 py-3 font-mono text-sm font-bold uppercase tracking-wider text-black transition hover:shadow-[0_0_40px_rgba(57,255,20,0.55)]"
            >
              <span className="relative z-10 flex items-center">
                View My Work <KeyHint hint="↗" />
              </span>
              <span className="relative z-10 transition group-hover:translate-x-0.5">
                →
              </span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </a>
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-mono text-sm font-bold uppercase tracking-wider text-white backdrop-blur transition hover:border-[#39FF14] hover:text-[#39FF14]"
            >
              <span className="flex items-center">
                Let&apos;s Talk <KeyHint hint="↗" />
              </span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-12 flex flex-wrap items-center justify-start gap-x-6 gap-y-3 text-zinc-500"
          >
            <Odometer value={5} label="Years Coding" />
            <div className="hidden h-8 w-px bg-white/10 sm:block" />
            <Odometer value={40} label="Projects Shipped" />
            <div className="hidden h-8 w-px bg-white/10 sm:block" />
            <InfinityStat label="Curiosity" />
          </motion.div>
        </div>

        {/* Code panel */}
        <motion.div
          initial={{ opacity: 0, x: 30, rotateY: 8 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5"
        >
          <div className="glass-strong relative overflow-hidden rounded-2xl border border-white/10 p-1 shadow-[0_30px_80px_-30px_rgba(57,255,20,0.4)]">
            <div className="flex items-center justify-between border-b border-white/5 px-4 py-2.5">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
              </div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                ~/codebyray/init.ts
              </div>
              <div className="h-3 w-3" />
            </div>
            <pre className="m-0 overflow-x-auto break-all px-5 py-5 font-mono text-[13px] leading-relaxed text-zinc-300">
              <code>
                {typed}
                <span
                  className={`caret inline-block h-4 w-2 -translate-y-0.5 bg-[#39FF14] align-middle ${
                    done ? "opacity-0" : ""
                  }`}
                />
              </code>
            </pre>
            <div className="pointer-events-none absolute -inset-px rounded-2xl ring-1 ring-inset ring-white/5" />
          </div>

          <div className="mt-4 flex items-center justify-between text-zinc-500">
            <span className="font-mono text-[10px] uppercase tracking-widest">
              ⌘ + K — command palette
            </span>
            <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-[#39FF14]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#39FF14] shadow-[0_0_8px_#39FF14]" />
              online
            </span>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 font-mono text-[10px] uppercase tracking-widest text-zinc-500 transition hover:text-[#39FF14] md:flex"
      >
        scroll
        <span className="relative block h-8 w-px overflow-hidden bg-white/10">
          <span className="absolute inset-x-0 top-0 h-3 animate-[scroll-line_1.6s_ease-in-out_infinite] bg-[#39FF14] shadow-[0_0_8px_#39FF14]" />
        </span>
      </a>
      <style>{`@keyframes scroll-line{0%{transform:translateY(-100%)}100%{transform:translateY(200%)}}`}</style>
    </section>
  );
}
