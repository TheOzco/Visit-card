import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { care, doctor, redFlags, type CareItem } from "../data";
import { GiltRule } from "./Ornaments";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

function Points({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-3">
      {items.map((p) => (
        <li key={p} className="flex gap-3">
          <span
            className="mt-[0.6rem] h-[5px] w-[5px] shrink-0 rotate-45 bg-gold"
            aria-hidden="true"
          />
          <span className="text-[0.86rem] leading-[2] text-ink/85">{p}</span>
        </li>
      ))}
    </ul>
  );
}

function Panel({ item }: { item: CareItem }) {
  const [tab, setTab] = useState(0);
  const tabs = item.tabs ?? [];
  const active = tabs.length ? tabs[tab] : null;
  const lead = active ? active.lead : item.lead;
  const points = active ? active.points : item.points;

  return (
    <div className="pb-8">
      <p className="font-naskh border-r-2 border-gold pr-4 text-[0.95rem] leading-[2.1] text-ink/90">
        {lead}
      </p>

      {tabs.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2" role="tablist" aria-label={`زیرمجموعه‌های ${item.title}`}>
          {tabs.map((t, i) => (
            <button
              key={t.label}
              role="tab"
              aria-selected={i === tab}
              onClick={() => setTab(i)}
              className={`font-naskh rounded-[2px] border px-4 py-2 text-[0.82rem] transition-all focus:outline-none focus-visible:ring-1 focus-visible:ring-gold-deep ${
                i === tab
                  ? "border-gold-deep bg-gold-deep text-paper"
                  : "border-gold-deep/35 text-taupe hover:border-gold-deep/70 hover:text-ink"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={active ? active.label : "single"}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.35, ease }}
        >
          <Points items={points} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function Row({ item, open, onToggle }: { item: CareItem; open: boolean; onToggle: () => void }) {
  return (
    <li className="relative border-b border-gold-deep/25">
      {/* شمارهٔ آویز در حاشیه */}
      <span
        aria-hidden="true"
        className="font-nastaliq pointer-events-none absolute right-0 top-3 w-12 text-center text-[1.7rem] text-gold-deep/75 sm:w-16 sm:text-[2rem]"
        style={{ lineHeight: 1.15 }}
      >
        {item.numeral}
      </span>

      <div className="pr-16 sm:pr-24">
        <button
          onClick={onToggle}
          aria-expanded={open}
          className="group flex w-full items-start gap-3 py-5 text-right focus:outline-none focus-visible:ring-1 focus-visible:ring-gold-deep"
        >
          <span className="min-w-0 flex-1">
            <span className="font-naskh block text-[1.15rem] text-ink transition-colors group-hover:text-gold-deep sm:text-[1.35rem]">
              {item.title}
            </span>
            <span className="mt-1 block text-[0.72rem] text-taupe">{item.tag}</span>
          </span>
          <span
            className={`relative mt-2 grid h-6 w-6 shrink-0 place-items-center transition-transform duration-500 ${
              open ? "rotate-[135deg]" : ""
            }`}
            aria-hidden="true"
          >
            <span className="absolute h-px w-5 bg-gold-deep" />
            <span className="absolute h-5 w-px bg-gold-deep" />
          </span>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="panel"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease }}
              className="overflow-hidden"
            >
              <Panel item={item} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* خطِ طلایی که زیر آیتم باز می‌شود */}
        <motion.span
          aria-hidden="true"
          className="gilt-rule mb-px block h-px origin-right"
          initial={false}
          animate={{ scaleX: open ? 1 : 0 }}
          transition={{ duration: 0.6, ease }}
        />
      </div>
    </li>
  );
}

export default function Aftercare() {
  const [open, setOpen] = useState<string | null>("cosmetic");

  return (
    <section id="care" className="relative paper-surface" style={{ backgroundImage: "url(images/paper.jpg)" }}>
      {/* باند تمام‌عرض ابزارها */}
      <div className="relative isolate overflow-hidden">
        <img
          src="images/instruments.jpg"
          alt="ابزارهای دندانپزشکی روی سینی چرمی"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          style={{ transform: "scaleX(-1)", filter: "sepia(0.3) contrast(1.05)" }}
        />
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(to left, rgba(23,15,10,0.93) 0%, rgba(23,15,10,0.65) 45%, rgba(23,15,10,0.15) 100%)",
          }}
        />
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(to bottom, rgba(23,15,10,0.45), rgba(241,231,211,0) 35%, rgba(241,231,211,0.85) 100%)",
          }}
        />
        <div className="mx-auto w-full max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
          <span className="font-naskh block text-[0.6rem] tracked text-gold-light/85">
            دفترچهٔ همراه بیمار
          </span>
          <h2 className="gilt font-nastaliq mt-1 text-[clamp(1.7rem,7vw,3.2rem)]">
            مراقبت‌های پس از درمان
          </h2>
          <p className="mt-1 max-w-md text-[0.78rem] leading-7 text-paper-deep/85">
            پیش از خروج از مطب این برگه را مرور کنید؛ رعایت دقیق همین نکته‌ها
            نتیجهٔ درمان را ماندگار می‌کند.
          </p>
        </div>
      </div>

      {/* ریل عمودی حاشیه + فهرست */}
      <div className="mx-auto flex max-w-5xl gap-0 px-5 sm:px-8">
        <div className="relative hidden w-16 shrink-0 lg:block">
          <div className="absolute inset-y-0 right-3 w-px bg-gold-deep/35" />
          <div className="absolute inset-y-0 right-[1.15rem] w-px bg-gold-deep/15" />
          <div className="sticky top-16 flex justify-center pt-16">
            <span
              className="font-naskh tracked text-[0.6rem] text-gold-deep/80"
              style={{ writingMode: "vertical-rl" }}
            >
              مراقبت‌های پس از درمان
            </span>
          </div>
        </div>

        <div className="min-w-0 flex-1 pb-16 pt-10 sm:pb-24 sm:pt-14">
          <GiltRule className="mb-8" tone="ink" />
          <ul className="border-t border-gold-deep/25">
            {care.map((item) => (
              <Row
                key={item.id}
                item={item}
                open={open === item.id}
                onToggle={() => setOpen(open === item.id ? null : item.id)}
              />
            ))}
          </ul>

          {/* هشدارها */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="mt-12 border border-lacquer/45 bg-lacquer/[0.05] p-6 sm:p-8"
          >
            <h3 className="font-naskh flex items-center gap-3 text-[1.05rem] text-lacquer sm:text-[1.2rem]">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
                <path d="M12 3.5 21 20H3Z" strokeLinejoin="round" />
                <path d="M12 9.5v5M12 17.2v.2" strokeLinecap="round" />
              </svg>
              چه زمانی بی‌درنگ تماس بگیریم؟
            </h3>
            <ul className="mt-5 space-y-3">
              {redFlags.map((f) => (
                <li key={f} className="flex gap-3">
                  <span className="mt-[0.6rem] h-[5px] w-[5px] shrink-0 rotate-45 bg-lacquer" aria-hidden="true" />
                  <span className="text-[0.85rem] leading-[2] text-ink/85">{f}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-lacquer/25 pt-4 text-[0.78rem] leading-7 text-taupe tnum">
              در ساعات غیراداری با شمارهٔ مطب تماس بگیرید و پیامک بگذارید تا در
              اولین فرصت بازگردانده شود: {doctor.phone}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
