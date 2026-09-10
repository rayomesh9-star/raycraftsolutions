"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export function Odometer({
  value,
  label,
  suffix = "",
}: {
  value: number;
  label: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(() => 0);

  useEffect(() => {
    if (!isInView) return;
    let raf: number;
    const start = 0;
    const end = value;
    const duration = 1400;
    const step = Math.max(1, Math.floor(end / (duration / 16)));
    let current = start;

    const tick = () => {
      current += step;
      if (current >= end) {
        setCount(end);
      } else {
        setCount(current);
        raf = window.requestAnimationFrame(tick);
      }
    };

    raf = window.requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isInView, value]);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="font-display text-4xl font-bold text-white">
        {count >= value ? (
          <span>
            {value >= 1000 ? `${(value / 1000).toFixed(value % 1000 === 0 ? 0 : 1)}k` : value}
            {suffix}
          </span>
        ) : (
          <span>
            {count >= 1000 ? `${(count / 1000).toFixed(1)}k` : count}
            {suffix}
          </span>
        )}
      </div>
      <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
        {label}
      </div>
    </div>
  );
}

export function InfinityStat({ label }: { label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isInView) {
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, [isInView]);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div
        className={`font-display text-4xl font-bold transition-all duration-700 ${
          visible ? "text-[#39FF14] glow-text" : "text-zinc-800"
        }`}
      >
        ∞
      </div>
      <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
        {label}
      </div>
    </div>
  );
}
