import Hero from "./components/Hero";
import Connect from "./components/Connect";
import Aftercare from "./components/Aftercare";
import { MotionConfig } from "framer-motion";
import { doctor, mapHref } from "./data";
import { GiltRule, LogoSlot, Shamseh } from "./components/Ornaments";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
    <div className="relative min-h-screen bg-paper">
      <Hero />
      <Connect />
      <Aftercare />

      <footer
        className="relative paper-surface border-t border-gold-deep/30"
        style={{ backgroundImage: "url(images/paper.jpg)" }}
      >
        <div className="mx-auto max-w-2xl px-5 pb-28 pt-16 text-center sm:px-8 sm:pb-20 sm:pt-20">
          <Shamseh size={38} stroke="#6e4f1c" className="mx-auto opacity-60" />

          {/* جای لوگو */}
          <div className="mt-10">
            <LogoSlot />
          </div>

          <GiltRule className="mx-auto mt-12 max-w-xs" tone="ink" />

          <p className="font-nastaliq gilt-paper mt-8 text-[clamp(1.5rem,6.5vw,2.4rem)]">
            {doctor.name}
          </p>
          <p className="font-naskh mt-1 text-[0.75rem] tracked text-taupe">
            {doctor.specialty}
          </p>

          <div className="mt-8 flex flex-col items-center gap-2 text-[0.78rem] text-taupe tnum">
            <a
              href={doctor.phoneHref}
              className="text-ink underline decoration-gold-deep/50 underline-offset-[6px] transition-colors hover:text-gold-deep"
            >
              {doctor.phone}
            </a>
            <span className="leading-6">{doctor.address}</span>
          </div>

          <p className="mt-10 text-[0.62rem] tracked text-taupe/80">
            کارت ویزیت دیجیتال · نسخهٔ ۱۴۰۵
          </p>
        </div>
      </footer>

      {/* نوار اقدام سریع برای گوشی */}
      <div
        className="fixed inset-x-0 bottom-0 z-40 border-t border-gold-deep/40 bg-leather-deep/95 px-4 py-3 backdrop-blur-sm lg:hidden"
        style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
      >
        <div className="mx-auto flex max-w-md gap-3">
          <a
            href={mapHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 bg-gold-deep py-3 text-[0.9rem] text-paper transition-colors hover:bg-gold"
          >
            <svg viewBox="0 0 24 24" className="h-[1.1rem] w-[1.1rem]" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M12 21.5s7-6.1 7-11.1a7 7 0 1 0-14 0c0 5 7 11.1 7 11.1Z" strokeLinejoin="round" />
              <circle cx="12" cy="10.2" r="2.6" />
            </svg>
            مسیریابی به مطب
          </a>
          <a
            href={doctor.phoneHref}
            className="flex items-center justify-center gap-2 border border-gold/60 px-5 py-3 text-[0.9rem] text-gold-light transition-colors hover:bg-gold/15"
          >
            <svg viewBox="0 0 24 24" className="h-[1.1rem] w-[1.1rem]" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M5 3.5h3l1.6 4-2 1.4a12 12 0 0 0 5.5 5.5l1.4-2 4 1.6v3a1.5 1.5 0 0 1-1.7 1.5C9.7 18.9 5.1 14.3 3.5 5.2A1.5 1.5 0 0 1 5 3.5Z" strokeLinejoin="round" />
            </svg>
            تماس
          </a>
        </div>
      </div>
    </div>
    </MotionConfig>
  );
}
