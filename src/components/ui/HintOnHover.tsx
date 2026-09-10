"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

export function KeyHint({
  hint = "↵",
}: {
  hint?: string;
}) {
  return (
    <motion.span
      initial={{ opacity: 0, x: -6, scale: 0.8 }}
      animate={{ opacity: 0, scale: 0.8 }}
      whileHover={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.2 }}
      className="ml-2 inline-block font-mono text-xs text-zinc-600 opacity-0"
    >
      [{hint}]
    </motion.span>
  );
}

export function HintOnHover({
  children,
  hint = "↵",
}: {
  children: ReactNode;
  hint?: string;
}) {
  return (
    <span className="relative">
      {children}
      <KeyHint hint={hint} />
    </span>
  );
}
