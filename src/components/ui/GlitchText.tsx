"use client";

import { motion, AnimatePresence } from "framer-motion";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type GlitchTextProps = {
  children: ReactNode;
  className?: string;
  trigger?: "hover" | "visible";
};

export function GlitchText({ children, className, trigger = "hover" }: GlitchTextProps) {
  const base =
    "relative inline-block text-white transition-colors duration-300";

  return (
    <div className={cn(base, className, "group")}>
      <span className="relative z-10 block">{children}</span>

      {/* Glitch layers (invisible unless hovered or triggered) */}
      <AnimatePresence>
        <GlitchLayer
          text={children}
          offset={-1}
          color="text-[#39FF14]"
          delay={0}
          show={trigger === "visible"}
        />
        <GlitchLayer
          text={children}
          offset={1}
          color="text-[#FF396C]"
          delay={0.04}
          show={trigger === "visible"}
        />
        {trigger === "hover" && (
          <>
            <GlitchHoverLayer text={children} offset={-1} color="text-[#39FF14]" />
            <GlitchHoverLayer text={children} offset={1} color="text-[#FF396C]" />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

function GlitchLayer({
  text,
  offset,
  color,
  delay,
  show,
}: {
  text: ReactNode;
  offset: number;
  color: string;
  delay: number;
  show: boolean;
}) {
  if (!show) return null;
  return (
    <motion.span
      className={cn("absolute inset-0 z-0", color)}
      style={{ left: 0, top: offset }}
      initial={{ opacity: 0, x: offset }}
      animate={{ opacity: 0.6, x: offset }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18, delay }}
    >
      {text}
    </motion.span>
  );
}

function GlitchHoverLayer({
  text,
  offset,
  color,
}: {
  text: ReactNode;
  offset: number;
  color: string;
}) {
  return (
    <motion.span
      className={cn(
        "absolute inset-0 z-0 opacity-0 group-hover:animate-glitch",
        color,
      )}
      style={{ left: 0, top: offset }}
    >
      {text}
    </motion.span>
  );
}
