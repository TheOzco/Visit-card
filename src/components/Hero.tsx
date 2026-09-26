import { motion } from "framer-motion";
import { doctor } from "../data";
import { Cartouche, GiltRule, Shamseh } from "./Ornaments";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Hero() {
  return (
    <header className="relative isolate overflow-hidden bg-leather-deep grain">
      {/* چرم طلاکوب */}
      <img
        src="images/leather.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-[0.55]"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 8%, rgba(36,26,19,0.15) 0%, rgba(23,15,10,0.86) 62%, #170f0a 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, #170f0a 0%, rgba(23,15,10,0.35) 35%, rgba(23,15,10,0) 70%)",
        }}
      />

      <div className="relative mx-auto max-w-3xl px-6 pt-10 pb-16 sm:pt-14 sm:pb-24">
        {/* سرلوح */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease }}
          className="flex flex-col items-center gap-3"
        >
          <span className="font-naskh text-[0.6rem] sm:text-[0.7rem] tracked text-gold-light/80">
            کارت ویزیت دیجیتال
          </span>
          <div className="flex w-full items-center gap-2 opacity-70">
            <span className="h-px flex-1 bg-gradient-to-l from-transparent via-gold to-transparent" />
            <Shamseh size={26} stroke="#b4893c" />
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
          </div>
        </motion.div>

        {/* کارتوش و عکس */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease, delay: 0.15 }}
          className="mt-10 sm:mt-14"
        >
          <Cartouche>
            <div className="aspect-[3/4] w-full">
              <img
                src={doctor.photo}
                alt={`چهرهٔ ${doctor.nameFull}`}
                className="h-full w-full object-cover object-top"
                style={{ filter: "sepia(0.28) saturate(0.95) contrast(1.03)" }}
                onError={(e) => {
                  const el = e.currentTarget;
                  el.style.display = "none";
                  const p = el.parentElement;
                  if (p)
                    p.style.background =
                      "linear-gradient(160deg,#3b2a1c,#241a13 60%,#170f0a)";
                }}
              />
            </div>
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(23,15,10,0.85) 0%, rgba(23,15,10,0) 45%)",
              }}
            />
          </Cartouche>
        </motion.div>

        {/* نام */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease, delay: 0.45 }}
          className="relative -mt-6 text-center sm:-mt-8"
        >
          <h1 className="gilt font-nastaliq leading-[1.9]">
            <span className="block text-[clamp(2.1rem,10vw,4.4rem)]">
              محمد محمودیه
            </span>
            <span className="block text-[clamp(2.1rem,10vw,4.4rem)] -mt-1 sm:-mt-5">
              دهکردی
            </span>
          </h1>
          <p className="mt-2 font-naskh text-[0.78rem] sm:text-[0.95rem] tracked text-paper-deep/85">
            دندانپزشک و متخصص پروتزهای دندانی
          </p>
          <GiltRule className="mx-auto mt-6 max-w-xs" />
          <p className="mt-5 text-[0.78rem] sm:text-[0.85rem] leading-7 text-paper-deep/70">
            {doctor.bio}
          </p>
        </motion.div>

        {/* نشانی و ساعت */}
        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-10 grid gap-px overflow-hidden rounded-[2px] border border-gold/25 bg-gold/20 sm:grid-cols-2"
        >
          <div className="bg-leather-deep/85 px-5 py-4">
            <dt className="font-naskh text-[0.62rem] tracked text-gold-light/75">
              نشانی مطب
            </dt>
            <dd className="mt-2 text-[0.8rem] leading-6 text-paper-deep/85">
              {doctor.address}
            </dd>
          </div>
          <div className="bg-leather-deep/85 px-5 py-4">
            <dt className="font-naskh text-[0.62rem] tracked text-gold-light/75">
              ساعات ویزیت
            </dt>
            <dd className="mt-2 text-[0.8rem] leading-6 text-paper-deep/85 tnum">
              {doctor.hours}
            </dd>
          </div>
        </motion.dl>
      </div>
    </header>
  );
}
