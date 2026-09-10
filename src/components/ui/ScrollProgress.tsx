"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      className="fixed top-0 left-0 h-0.5 w-full origin-left bg-[#39FF14] shadow-[0_0_8px_#39FF14] dark:shadow-[0_0_12px_#39FF14] z-[60]"
      style={{ scaleX }}
    />
  );
}
