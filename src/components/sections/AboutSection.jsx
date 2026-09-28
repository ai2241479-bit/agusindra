import React from 'react';
import { motion } from 'framer-motion';

const highlights = [
  {
    number: '01',
    title: 'Information System',
    description:
      'Mempelajari bagaimana teknologi dapat digunakan untuk membangun sistem yang efektif, terstruktur, dan relevan dengan kebutuhan pengguna.',
  },
  {
    number: '02',
    title: 'Development',
    description:
      'Tertarik pada web development, UI, dan bagaimana sebuah ide dapat diterjemahkan menjadi produk digital yang fungsional.',
  },
  {
    number: '03',
    title: 'Communication',
    description:
      'Terbiasa berkomunikasi, bekerja dalam tim, dan menyampaikan ide melalui berbagai kegiatan dan pengalaman.',
  },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#f7f7f5] py-28 text-slate-900 md:py-36"
    >
      {/* =========================================================
          AMBIENT BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Blue ambient light */}
        <div
          className="absolute -left-40 top-20 h-105 w-105 rounded-full blur-2xl md:blur-3xl"
          style={{
            background:
              'radial-gradient(circle, rgba(59,130,246,0.10) 0%, rgba(59,130,246,0.035) 45%, transparent 72%)',
          }}
        />

        {/* Neutral ambient light */}
        <div
          className="absolute -right-40 bottom-0 h-105 w-105 rounded-full blur-2xl md:blur-3xl"
          style={{
            background:
              'radial-gradient(circle, rgba(148,163,184,0.14) 0%, rgba(148,163,184,0.035) 45%, transparent 72%)',
          }}
        />

        {/* Center glow */}
        <div
          className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl md:blur-3xl"
          style={{
            background:
              'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.25) 45%, transparent 75%)',
          }}
        />

        {/* Decorative vertical line */}
        <div className="absolute left-[8%] top-0 h-full w-px bg-slate-200/50" />

        <div className="absolute right-[8%] top-0 h-full w-px bg-slate-200/50" />
      </div>

      {/* =========================================================
          CONTENT
      ========================================================= */}

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">

        {/* =======================================================
            HEADER
        ======================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: '-100px',
          }}
          transition={{
            duration: 0.7,
            ease: 'easeOut',
          }}
          className="mb-16"
        >
          {/* Section label */}
          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-10 bg-blue-600" />

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              About / 02
            </span>
          </div>

          {/* Main heading */}
          <h2 className="text-5xl font-semibold leading-none tracking-tight md:text-7xl">
            Who I am.
            <br />

            <span className="text-slate-400">
              What I build.
            </span>
          </h2>

          {/* Intro line */}
          <div className="mt-8 flex max-w-4xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <p className="max-w-2xl text-sm leading-7 text-slate-500 md:text-base">
              Mengenal lebih dekat siapa saya, apa yang saya pelajari, dan
              bagaimana saya melihat teknologi sebagai bagian dari proses
              membangun sesuatu yang bermanfaat.
            </p>

            <div className="flex shrink-0 items-center gap-6 border-l border-slate-300 pl-6">
              <div>
                <p className="text-2xl font-semibold tracking-tight">
                  02
                </p>

                <p className="mt-1 text-xs font-medium uppercase tracking-[0.15em] text-slate-400">
                  Section
                </p>
              </div>

              <div>
                <p className="text-2xl font-semibold tracking-tight">
                  AG
                </p>

                <p className="mt-1 text-xs font-medium uppercase tracking-[0.15em] text-slate-400">
                  Portfolio
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =======================================================
            MAIN PROFILE
        ======================================================= */}

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-20">

          {/* =====================================================
              PHOTO
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: '-100px',
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto w-full max-w-md lg:mx-0"
          >
            {/* Image glow */}
            <div
              className="absolute left-1/2 top-1/2 h-4/5 w-3/4 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl md:blur-3xl"
              style={{
                background:
                  'radial-gradient(ellipse, rgba(255,255,255,0.95) 0%, rgba(226,232,240,0.45) 48%, transparent 75%)',
              }}
            />

            {/* Image card */}
            <div className="group relative overflow-hidden rounded-4xl border border-white/70 bg-white/50 p-2 shadow-[0_25px_70px_rgba(15,23,42,0.08)] backdrop-blur-xl">

              {/* Inner image */}
              <div className="relative overflow-hidden rounded-3xl bg-slate-100">
                <img
                  src={`${import.meta.env.BASE_URL}about-profile.png`}
                  alt="Agus Indra"
                  loading="lazy"
                  className="relative z-10 h-auto w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                />

                {/* Bottom gradient */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-40 bg-linear-to-t from-black/30 via-black/5 to-transparent" />

                {/* Image label */}
                <div className="absolute bottom-5 left-5 z-30">
                  <span className="rounded-full border border-white/20 bg-black/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-white shadow-lg backdrop-blur-md">
                    01 / 01
                  </span>
                </div>
              </div>

              {/* Small corner detail */}
              <div className="pointer-events-none absolute right-5 top-5 z-30 flex h-9 w-9 items-center justify-center rounded-full border border-white/70 bg-white/60 text-xs font-bold text-slate-700 shadow-sm backdrop-blur-md">
                AG
              </div>
            </div>


          </motion.div>

          {/* =====================================================
              PROFILE CONTENT
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              margin: '-100px',
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: 'easeOut',
            }}
            className="flex flex-col justify-center"
          >

            {/* Intro */}
            <div className="mb-12">

              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                Hello, I'm Agus
              </p>

              <h3 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                A student who is curious about technology,
                <span className="text-slate-400">
                  {' '}design, and creating meaningful digital experiences.
                </span>
              </h3>

              <div className="mt-7 max-w-xl space-y-4 text-sm leading-7 text-slate-500 md:text-base">

                <p>
                  Saya adalah mahasiswa S1 Sistem Informasi yang memiliki
                  ketertarikan pada dunia teknologi, pengembangan software,
                  dan pengembangan produk digital.
                </p>

                <p>
                  Bagi saya, teknologi bukan hanya tentang bagaimana sebuah
                  sistem bekerja, tetapi juga bagaimana sistem tersebut dapat
                  memberikan pengalaman yang sederhana, efektif, dan mudah
                  digunakan.
                </p>

              </div>
            </div>

            {/* =================================================
                HIGHLIGHTS
            ================================================= */}

            <div className="border-t border-slate-300">

              {highlights.map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.15 + index * 0.1,
                  }}
                  className="group grid grid-cols-[45px_1fr] gap-4 border-b border-slate-300 py-6 md:grid-cols-[60px_1fr_1.2fr] md:gap-6"
                >

                  {/* Number */}
                  <span className="text-xs font-semibold tracking-[0.15em] text-slate-400">
                    {item.number}
                  </span>

                  {/* Title */}
                  <h4 className="text-sm font-semibold text-slate-800 transition-colors duration-300 group-hover:text-blue-600">
                    {item.title}
                  </h4>

                  {/* Description */}
                  <p className="col-span-2 text-xs leading-6 text-slate-500 md:col-span-1">
                    {item.description}
                  </p>

                </motion.div>
              ))}

            </div>

            {/* =================================================
                META INFORMATION
            ================================================= */}

            <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3">

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                  Based in
                </p>

                <p className="mt-1 text-sm font-medium text-slate-700">
                  Indonesia
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                  Focus
                </p>

                <p className="mt-1 text-sm font-medium text-slate-700">
                  Information System
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                  Currently
                </p>

                <p className="mt-1 text-sm font-medium text-slate-700">
                  Learning & Building
                </p>
              </div>

            </div>

          </motion.div>

        </div>

        {/* =======================================================
            FOOTER
        ======================================================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="mt-24 flex items-center justify-between border-t border-slate-300 pt-6"
        >

          <span className="text-xs font-medium uppercase tracking-[0.15em] text-slate-400">
            Personal Profile
          </span>

          <span className="text-xs font-medium uppercase tracking-[0.15em] text-slate-400">
            Agus Indra
          </span>

        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;