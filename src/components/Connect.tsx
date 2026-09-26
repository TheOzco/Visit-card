import { motion } from "framer-motion";
import { doctor, links, mapHref } from "../data";
import { GiltRule, SocialGlyph } from "./Ornaments";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Connect() {
  return (
    <section id="contact" className="relative paper-surface" style={{ backgroundImage: "url(images/paper.jpg)" }}>
      <div className="mx-auto max-w-2xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="text-center">
          <h2 className="font-naskh text-[1.35rem] sm:text-[1.7rem] text-ink">
            راه‌های ارتباط
          </h2>
          <p className="mt-2 text-[0.75rem] text-taupe">
            برای نوبت‌دهی، مشاوره و ارسال مدارک قبلی
          </p>
          <GiltRule className="mx-auto mt-5 max-w-[15rem]" tone="ink" />
        </div>

        <ul className="mt-10 border-t border-gold-deep/25">
          {links.map((l, i) => (
            <motion.li
              key={l.id}
              initial={{ opacity: 0, x: 14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, ease, delay: i * 0.06 }}
              className="border-b border-gold-deep/25"
            >
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 py-4 transition-colors hover:bg-gold/[0.07] focus:outline-none focus-visible:bg-gold/[0.12] focus-visible:ring-1 focus-visible:ring-gold-deep/60"
              >
                <span className="relative grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold-deep/45 text-gold-deep transition-colors group-hover:border-gold-deep group-hover:bg-gold/15">
                  <SocialGlyph id={l.id} className="h-5 w-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-naskh text-[1.02rem] text-ink">
                    {l.label}
                  </span>
                  <span className="mt-0.5 block truncate text-[0.72rem] tracking-[0.12em] text-taupe" dir="ltr">
                    {l.handle}
                  </span>
                </span>
                <span className="hidden shrink-0 text-[0.6rem] tracking-[0.35em] text-taupe/70 sm:block" dir="ltr">
                  {l.latin}
                </span>
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 shrink-0 text-gold-deep/70 transition-transform group-hover:-translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  aria-hidden="true"
                >
                  <path d="M15 5 8 12l7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </motion.li>
          ))}
        </ul>

        {/* مسیریابی مستقیم */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mt-10"
        >
          <a
            href={mapHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-full items-center justify-center gap-3 bg-gold-deep px-6 py-5 text-paper shadow-[0_12px_30px_-14px_rgba(36,26,19,0.9)] transition-all hover:bg-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6 text-gold-light"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              aria-hidden="true"
            >
              <path
                d="M12 21.5s7-6.1 7-11.1a7 7 0 1 0-14 0c0 5 7 11.1 7 11.1Z"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="10.2" r="2.6" />
            </svg>
            <span className="font-naskh text-[1.05rem]">مسیریابی مستقیم به مطب</span>
            <span className="text-[0.62rem] tracking-[0.3em] text-gold-light/80" dir="ltr">
              MAPS
            </span>
          </a>
          <p className="mt-4 text-center text-[0.75rem] leading-6 text-taupe">
            {doctor.address}
          </p>
          <a
            href={doctor.phoneHref}
            className="mt-3 flex items-center justify-center gap-2 text-[0.9rem] text-ink underline decoration-gold-deep/50 underline-offset-[6px] transition-colors hover:text-gold-deep tnum"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
              <path
                d="M5 3.5h3l1.6 4-2 1.4a12 12 0 0 0 5.5 5.5l1.4-2 4 1.6v3a1.5 1.5 0 0 1-1.7 1.5C9.7 18.9 5.1 14.3 3.5 5.2A1.5 1.5 0 0 1 5 3.5Z"
                strokeLinejoin="round"
              />
            </svg>
            {doctor.phone}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
