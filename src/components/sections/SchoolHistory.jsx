import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    year: '2020 — 2023',
    number: '01',
    title: 'SMA N 1 Kubu',
    subtitle: 'Pendidikan Menengah',
    description:
      'Lulusan SMA N 1 Kubu (2023), tempat saya membangun pola pikir akademis, kedisiplinan, dan rasa tanggung jawab yang menjadi fondasi perjalanan saya selanjutnya.',
    image: '/sma-photo.png',
    status: 'Completed',
  },
  {
    year: '2023 — Present',
    number: '02',
    title: 'UNDIKSHA',
    subtitle: 'S1 Sistem Informasi',
    description:
      'Mendalami teknologi informasi, pengembangan sistem, analisis data, dan berbagai aspek rekayasa perangkat lunak.',
    image: '/univ-photo.png',
    status: 'Currently Studying',
  },
];

const SchoolHistory = () => {
  return (
    <section
      id="school-history"
      className="relative overflow-hidden bg-[#f7f7f5] py-28 text-slate-900 md:py-36"
    >

      {/* =========================================================
          MODERN BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Large ambient glow - top right */}
        <div
          className="absolute -right-32 -top-32 h-105 w-105 rounded-full opacity-40 blur-3xl"
          style={{
            background:
              'radial-gradient(circle, rgba(59,130,246,0.14) 0%, rgba(59,130,246,0.04) 40%, transparent 72%)',
          }}
        />

        {/* Large ambient glow - bottom left */}
        <div
          className="absolute -bottom-40 -left-32 h-105 w-105 rounded-full opacity-50 blur-3xl"
          style={{
            background:
              'radial-gradient(circle, rgba(148,163,184,0.18) 0%, rgba(148,163,184,0.05) 45%, transparent 72%)',
          }}
        />

        {/* Center light */}
        <div
          className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
          style={{
            background:
              'radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.35) 45%, transparent 75%)',
          }}
        />

        {/* Very subtle grain */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg viewBox=%220 0 180 180%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%220.5%22/%3E%3C/svg%3E")',
          }}
        />

      </div>

      {/* =========================================================
          CONTENT
      ========================================================= */}

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: 'easeOut',
          }}
          className="mb-20 max-w-3xl"
        >

          {/* Eyebrow */}
          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-10 bg-blue-600" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">
              Education / 01
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-5xl font-semibold leading-[0.95] tracking-tighter md:text-7xl">
            Riwayat
            <br />
            <span className="text-slate-400">
              Pendidikan.
            </span>
          </h2>

          {/* Description + stats */}
          <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

            <p className="max-w-xl text-sm leading-7 text-slate-500 md:text-base">
              Perjalanan akademis yang membentuk cara saya berpikir,
              menganalisis masalah, dan memahami teknologi dari dasar hingga
              pengembangan sistem informasi.
            </p>

            <div className="flex shrink-0 items-center gap-8 border-l border-slate-300 pl-6">

              <div>
                <p className="text-2xl font-semibold tracking-tight">
                  2023
                </p>

                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">
                  University
                </p>
              </div>

              <div>
                <p className="text-2xl font-semibold tracking-tight">
                  S1
                </p>

                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">
                  Information System
                </p>
              </div>

            </div>
          </div>

        </motion.div>

        {/* =====================================================
            EDUCATION TIMELINE
        ===================================================== */}

        <div className="relative">

          {/* Timeline line */}
          <div className="absolute left-4 top-0 hidden h-full w-px bg-slate-300 md:block" />

          <div className="space-y-16 md:space-y-24">

            {educationData.map((item, index) => (

              <motion.article
                key={item.number}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: '-80px',
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                  ease: 'easeOut',
                }}
                className="relative grid grid-cols-1 gap-8 md:grid-cols-[70px_1fr] lg:grid-cols-[70px_0.8fr_1.2fr]"
              >

                {/* =================================================
                    NUMBER
                ================================================= */}

                <div className="relative z-10 flex h-10 w-10 items-center justify-center border border-slate-300 bg-[#f7f7f5] text-[10px] font-semibold tracking-widest text-slate-500">
                  {item.number}
                </div>

                {/* =================================================
                    TEXT
                ================================================= */}

                <div className="flex flex-col justify-center">

                  {/* Year */}
                  <div className="mb-4 flex items-center gap-3">

                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-600">
                      {item.year}
                    </span>

                    {index === 1 && (
                      <>
                        <span className="h-1 w-1 rounded-full bg-slate-300" />

                        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                          Active
                        </span>
                      </>
                    )}

                  </div>

                  {/* Title */}
                  <h3 className="text-3xl font-semibold tracking-tight md:text-4xl">
                    {item.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="mt-2 text-sm font-medium text-slate-500">
                    {item.subtitle}
                  </p>

                  {/* Description */}
                  <p className="mt-5 max-w-md text-sm leading-7 text-slate-500">
                    {item.description}
                  </p>

                  {/* Status */}
                  <div className="mt-7">

                    <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">

                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />

                      {item.status}

                    </span>

                  </div>

                </div>

                {/* =================================================
                    IMAGE
                ================================================= */}

                <div className="group relative overflow-hidden bg-slate-200">

                  <div className="aspect-16/10 overflow-hidden md:aspect-video">

                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover grayscale-20 transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                    />

                  </div>

                  {/* Image gradient */}
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-60" />

                  {/* Image number */}
                  <div className="absolute bottom-4 left-4">

                    <span className="bg-black/70 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                      {item.number} / 02
                    </span>

                  </div>

                </div>

              </motion.article>

            ))}

          </div>

        </div>

        {/* =====================================================
            FOOTER
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="mt-24 flex items-center justify-between border-t border-slate-300 pt-6"
        >

          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400">
            Academic Journey
          </p>

          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400">
            2020 — Present
          </p>

        </motion.div>

      </div>

    </section>
  );
};

export default SchoolHistory;