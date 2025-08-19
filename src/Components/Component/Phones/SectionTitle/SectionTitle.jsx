// SectionTitle.jsx
import React from "react";
import './style.css'

const SectionTitle = ({ text = "Pick Your Dream device" }) => {
  return (
    <div className="relative mx-auto my-2 w-full max-w-4xl px-4">
      {/* floating shapes */}
      <span className="pointer-events-none absolute -left-6 -top-6 h-10 w-10 rounded-full blur-xl bg-gradient-to-tr from-fuchsia-500/40 to-cyan-500/40 animate-pulse"></span>
      <span className="pointer-events-none absolute -right-8 -bottom-8 h-12 w-12 rounded-full blur-xl bg-gradient-to-tr from-amber-500/40 to-pink-500/40 animate-[ping_3s_ease-in-out_infinite]"></span>

      {/* tiny badge */}
      <div className="mx-auto mb-3 w-fit select-none rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs tracking-wider text-white/80 backdrop-blur">
        ✨ hand-picked collections
      </div>

      {/* main heading */}
      <h2
        className="
        group relative mx-auto w-fit text-center 
        bg-gradient-to-r from-violet-400 via-cyan-300 to-emerald-300 
        bg-clip-text text-3xl font-extrabold text-transparent 
        sm:text-4xl md:text-5xl
        drop-shadow-[0_0_20px_rgba(99,102,241,0.35)]
      "
      >
        <span className="inline-block animate-[shine_2.8s_linear_infinite] bg-[linear-gradient(110deg,rgba(255,255,255,0)_0%,rgba(255,255,255,.8)_40%,rgba(255,255,255,0)_60%)] bg-[length:250%_100%] bg-clip-text">
          {text}
        </span>

        {/* underline */}
        <span className="pointer-events-none absolute -bottom-2 left-1/2 h-[6px] w-[75%] -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-fuchsia-400/70 to-transparent blur-[2px]"></span>
        <span className="pointer-events-none absolute -bottom-2 left-1/2 h-px w-[78%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/60 to-transparent"></span>

        {/* sparkle */}
        <span className="absolute -right-6 -top-3 block h-4 w-4 animate-[twinkle_2.2s_ease-in-out_infinite] [filter:drop-shadow(0_0_10px_rgba(255,255,255,.8))]">
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white/90">
            <path d="M12 2l1.8 4.7L18 8.5l-4.2 1.8L12 15l-1.8-4.7L6 8.5l4.2-1.8L12 2z" />
          </svg>
        </span>
      </h2>

      {/* sub text */}
      <p className="mx-auto mt-3 max-w-xl text-center text-sm text-white/70 sm:text-base">
        phones, laptops, earbuds—everything you love, curated for you.
      </p>

      {/* gradient line */}
      <div className="mx-auto mt-6 h-px w-11/12 max-w-2xl bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
    </div>
  );
};

export default SectionTitle;
