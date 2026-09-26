import type { ReactNode } from "react";
import { motion } from "framer-motion";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* ── شمسه: هشت‌پر مرکزی، کشیده‌شده با مسیرهای دست‌نویس ── */
export function Shamseh({
  className = "",
  size = 120,
  stroke = "currentColor",
  animated = false,
}: {
  className?: string;
  size?: number;
  stroke?: string;
  animated?: boolean;
}) {
  const petal =
    "M60 6 C66 30 76 44 98 52 C76 60 66 74 60 98 C54 74 44 60 22 52 C44 44 54 30 60 6 Z";
  const anim = animated
    ? {
        initial: { pathLength: 0, opacity: 0 },
        animate: { pathLength: 1, opacity: 1 },
        transition: { duration: 1.4, ease },
      }
    : {};
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <motion.circle
        cx="60"
        cy="52"
        r="47"
        stroke={stroke}
        strokeWidth="1"
        opacity="0.55"
        {...anim}
      />
      {[0, 45, 90, 135].map((a) => (
        <g key={a} transform={`rotate(${a} 60 52)`}>
          <motion.path d={petal} stroke={stroke} strokeWidth="1.1" {...anim} />
        </g>
      ))}
      {[22.5, 67.5, 112.5, 157.5].map((a) => (
        <path
          key={a}
          d="M60 26 C63 38 68 45 78 50 C68 55 63 62 60 74 C57 62 52 55 42 50 C52 45 57 38 60 26 Z"
          stroke={stroke}
          strokeWidth="0.8"
          opacity="0.7"
          transform={`rotate(${a} 60 52)`}
        />
      ))}
      <circle cx="60" cy="52" r="4.5" stroke={stroke} strokeWidth="1" />
    </svg>
  );
}

/* ── گلدستهٔ گوشه: زینت گوشه‌های قاب ── */
export function Guldasta({
  className = "",
  size = 64,
  stroke = "currentColor",
  animated = false,
}: {
  className?: string;
  size?: number;
  stroke?: string;
  animated?: boolean;
}) {
  const d =
    "M2 62 C2 30 14 10 46 3 C36 14 34 22 38 29 C43 37 55 38 62 33 C57 45 48 53 34 54 C24 55 17 50 14 43 C13 51 9 58 2 62 Z";
  const anim = animated
    ? {
        initial: { pathLength: 0, opacity: 0 },
        animate: { pathLength: 1, opacity: 1 },
        transition: { duration: 1.6, ease, delay: 0.25 },
      }
    : {};
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <motion.path d={d} stroke={stroke} strokeWidth="1.1" {...anim} />
      <motion.path
        d="M8 56 C8 34 18 18 42 10"
        stroke={stroke}
        strokeWidth="0.7"
        opacity="0.6"
        {...anim}
      />
      <circle cx="44" cy="45" r="2.2" stroke={stroke} strokeWidth="0.9" />
      <circle cx="24" cy="24" r="1.4" fill={stroke} opacity="0.7" />
    </svg>
  );
}

/* ── خط‌کشِ تذهیب: دو خط مویی با نشان وسط ── */
export function GiltRule({
  className = "",
  tone = "gold",
}: {
  className?: string;
  tone?: "gold" | "ink";
}) {
  const c = tone === "gold" ? "#b4893c" : "#6b6152";
  return (
    <div className={`flex items-center gap-3 ${className}`} aria-hidden="true">
      <span
        className="h-px flex-1"
        style={{
          background: `linear-gradient(90deg, transparent, ${c}, transparent)`,
        }}
      />
      <svg width="34" height="9" viewBox="0 0 34 9" fill="none">
        <path
          d="M17 1 C19 3 21 3.6 24 4.5 C21 5.4 19 6 17 8 C15 6 13 5.4 10 4.5 C13 3.6 15 3 17 1 Z"
          stroke={c}
          strokeWidth="0.9"
        />
        <path d="M0 4.5 H6 M28 4.5 H34" stroke={c} strokeWidth="0.9" />
      </svg>
      <span
        className="h-px flex-1"
        style={{
          background: `linear-gradient(90deg, transparent, ${c}, transparent)`,
        }}
      />
    </div>
  );
}

/* ── قاب کارتوش: طاقِ اُجی با گلدسته‌ها ── */
export function Cartouche({ children }: { children: ReactNode }) {
  return (
    <div className="relative w-full max-w-[280px] mx-auto">
      <div
        className="absolute inset-0 -m-3 border border-gold/45"
        style={{ borderRadius: "48% 48% 5% 5% / 38% 38% 3% 3%" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -m-3 border border-gold/20"
        style={{ borderRadius: "48% 48% 5% 5% / 38% 38% 3% 3%", transform: "scale(1.03)" }}
        aria-hidden="true"
      />
      <div
        className="relative overflow-hidden shadow-[0_24px_60px_-18px_rgba(0,0,0,0.8)]"
        style={{ borderRadius: "48% 48% 5% 5% / 38% 38% 3% 3%" }}
      >
        {children}
      </div>
      <Guldasta
        className="absolute -top-6 -right-5 text-gold-light/70 rotate-[8deg]"
        size={46}
        stroke="currentColor"
        animated
      />
      <Guldasta
        className="absolute -top-6 -left-5 text-gold-light/70 scale-x-[-1] rotate-[8deg]"
        size={46}
        stroke="currentColor"
        animated
      />
    </div>
  );
}

/* ── نشان‌های پیام‌رسان‌ها (هندسهٔ ساده، بدون لوگوی تقلبی) ── */
export function SocialGlyph({ id, className = "" }: { id: string; className?: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.3,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      {id === "telegram" && (
        <g {...common}>
          <path d="M21.5 2.8 2.9 9.9l6.5 2.4 2.4 6.6 3.2-4.4 4.6 3.4z" />
          <path d="M9.4 12.3 21.5 2.8" />
        </g>
      )}
      {id === "instagram" && (
        <g {...common}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4.1" />
          <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
        </g>
      )}
      {id === "eitaa" && (
        <g {...common}>
          <path d="M20.5 12c0 4.1-3.8 7.4-8.5 7.4-1 0-2-.15-2.9-.43L4 20.5l1.6-3.4C4.1 15.8 3.5 14 3.5 12 3.5 7.9 7.3 4.6 12 4.6s8.5 3.3 8.5 7.4Z" />
          <path d="M8.4 12h7.2M12 8.4v7.2" opacity="0.55" />
        </g>
      )}
      {id === "bale" && (
        <g {...common}>
          <path d="M12 3.4c4.8 0 8.6 3.2 8.6 7.2S16.8 17.8 12 17.8c-.9 0-1.8-.12-2.6-.35L4.6 20.4l1.5-3.6C4.4 15.4 3.4 13.5 3.4 11c0-4 3.8-7.6 8.6-7.6Z" />
          <path d="M8.6 11.2 11 13.6l4.4-4.6" />
        </g>
      )}
      {id === "rubika" && (
        <g {...common}>
          <path d="M12 3.2 20 7.6v8.8L12 20.8 4 16.4V7.6Z" />
          <path d="M9 15.4V8.6h3.6a2.3 2.3 0 0 1 0 4.6H9m3.4 0 2.4 2.2" />
        </g>
      )}
    </svg>
  );
}

/* ── جای لوگو: پلاک حکاکی‌شدهٔ خالی ── */
export function LogoSlot() {
  return (
    <div className="relative mx-auto w-full max-w-[240px]">
      <div
        className="flex flex-col items-center justify-center gap-3 px-8 py-10 border border-dashed border-gold/55"
        style={{ borderRadius: "50% 50% 6% 6% / 34% 34% 4% 4%" }}
      >
        <Shamseh size={54} stroke="#b4893c" className="opacity-60" />
        <span className="font-naskh text-[0.72rem] tracked text-gold-deep/80">
          جای لوگو
        </span>
        <span className="text-[0.6rem] tracking-[0.45em] text-taupe/70">LOGO</span>
      </div>
    </div>
  );
}
