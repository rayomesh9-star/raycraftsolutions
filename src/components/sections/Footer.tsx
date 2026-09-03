export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <div className="flex items-center gap-3">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] ring-1 ring-white/10 font-mono text-[11px] text-chrome">
            R
          </span>
          <span className="font-display text-sm font-semibold text-white">
            codebyray
          </span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
            Design • Develop • Elevate
          </span>
        </div>
        <div className="font-mono text-[11px] text-zinc-500">
          © {new Date().getFullYear()} codebyray. Built with{" "}
          <span className="text-[#39FF14]">Next.js</span> +{" "}
          <span className="text-[#39FF14]">Tailwind</span>.
        </div>
      </div>
    </footer>
  );
}
