"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

export function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="mb-3 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-[#7CFF00]">
      <span className="h-px w-6 bg-[#39FF14] shadow-[0_0_8px_#39FF14]" />
      {children}
    </div>
  );
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
      {children}
    </h2>
  );
}
