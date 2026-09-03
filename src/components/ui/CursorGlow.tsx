"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorGlow() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const sx = useSpring(x, { stiffness: 250, damping: 30, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 250, damping: 30, mass: 0.5 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="cursor-glow pointer-events-none fixed left-0 top-0 z-[60] hidden h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full md:block"
      style={{
        x: sx,
        y: sy,
        background:
          "radial-gradient(circle, rgba(57,255,20,0.18) 0%, rgba(57,255,20,0.04) 35%, transparent 70%)",
        mixBlendMode: "screen",
      }}
    />
  );
}

export function useReducedMotion() {
  const [reduced, setReduced] = useState<boolean | null>(null);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return reduced ?? false;
}
