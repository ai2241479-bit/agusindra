import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative isolate flex min-h-dvh items-end overflow-hidden bg-[#f7f7f5] px-6 pt-24 text-slate-900 md:px-10">

      {/* =========================================================
          ATMOSPHERIC BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Blue ambient light */}
        <div
          className="absolute -right-32 -top-32 h-105 w-105 rounded-full blur-3xl"
          style={{
            background:
              'radial-gradient(circle, rgba(59,130,246,0.13) 0%, rgba(59,130,246,0.04) 40%, transparent 72%)',
          }}
        />

        {/* Neutral ambient light */}
        <div
          className="absolute -bottom-40 -left-32 h-105 w-105 rounded-full blur-3xl"
          style={{
            background:
              'radial-gradient(circle, rgba(148,163,184,0.18) 0%, rgba(148,163,184,0.05) 45%, transparent 72%)',
          }}
        />

        {/* Center glow */}
        <div
          className="absolute left-1/2 top-[52%] h-130 w-130 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
          style={{
            background:
              'radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.55) 38%, transparent 72%)',
          }}
        />

        {/* Subtle grain */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg viewBox=%220 0 180 180%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%220.5%22/%3E%3C/svg%3E")',
          }}
        />

      </div>

      {/* =========================================================
          TOP INFORMATION
      ========================================================= */}

      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: 'easeOut',
        }}
        className="absolute left-6 right-6 top-28 z-20 flex items-start justify-between md:left-10 md:right-10"
      >

        <div className="flex items-center gap-3">

          <span className="h-px w-8 bg-blue-600" />

          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-500">
            Portfolio / 2026
          </span>

        </div>

        <div className="hidden text-right md:block">

          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">
            Information System
          </p>

          <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-300">
            Developer · Designer
          </p>

        </div>

      </motion.div>

      {/* =========================================================
          GIANT TYPOGRAPHY
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 z-0 flex flex-col items-center justify-center overflow-hidden">

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.4,
            ease: 'easeOut',
          }}
          className="flex flex-col items-center leading-[0.78]"
        >

          {/* AGUS */}
          <h1
            className="select-none whitespace-nowrap text-[24vw] font-black tracking-tighter text-transparent md:text-[17vw]"
            style={{
              WebkitTextStroke: '1.5px rgba(71,85,105,0.32)',
            }}
          >
            AGUS
          </h1>

          {/* INDRA */}
          <h1
            className="mt-[-5vw] select-none whitespace-nowrap text-[24vw] font-black tracking-tighter text-transparent md:mt-[-4vw] md:text-[17vw]"
            style={{
              WebkitTextStroke: '1.5px rgba(71,85,105,0.32)',
            }}
          >
            INDRA
          </h1>

        </motion.div>

      </div>

      {/* =========================================================
          PORTRAIT
      ========================================================= */}

      <motion.div
        initial={{
          opacity: 0,
          y: 80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.1,
          delay: 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-10 mx-auto flex h-[72dvh] w-full max-w-5xl items-end justify-center md:h-[84dvh]"
      >

        {/* Portrait halo */}
        <div
          className="absolute bottom-[8%] left-1/2 h-[55%] w-[42%] -translate-x-1/2 rounded-full blur-3xl"
          style={{
            background:
              'radial-gradient(ellipse, rgba(255,255,255,0.85) 0%, rgba(226,232,240,0.35) 48%, transparent 75%)',
          }}
        />

        <motion.img
          src="/profile-cutout.png"
          alt="Agus Indra"
          initial={{
            scale: 0.97,
          }}
          animate={{
            scale: 1,
          }}
          transition={{
            duration: 1.2,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative z-10 h-full w-auto object-contain object-bottom drop-shadow-[0_30px_45px_rgba(15,23,42,0.18)]"
        />

      </motion.div>

      {/* =========================================================
          LEFT DESCRIPTION
      ========================================================= */}

      <motion.div
        initial={{
          opacity: 0,
          x: -25,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.8,
          delay: 0.65,
        }}
        className="absolute bottom-12 left-6 z-20 max-w-65 md:left-10 md:max-w-75"
      >

        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-blue-600">
          Hello, I'm Agus
        </p>

        <p className="text-sm leading-6 text-slate-500">
          Saya membangun pengalaman digital melalui{' '}
          <span className="font-medium text-slate-800">
            teknologi, desain, dan sistem informasi.
          </span>
        </p>

      </motion.div>

      {/* =========================================================
          RIGHT CTA
      ========================================================= */}

      <motion.div
        initial={{
          opacity: 0,
          x: 25,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.8,
          delay: 0.75,
        }}
        className="absolute bottom-12 right-6 z-20 md:right-10"
      >

        <a
          href="#projects"
          className="group inline-flex items-center gap-4 border-b border-slate-300 pb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-700 transition-colors duration-300 hover:border-blue-600 hover:text-blue-600"
        >
          <span>
            Explore Projects
          </span>

          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>

      </motion.div>

      {/* =========================================================
          SCROLL INDICATOR
      ========================================================= */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
          delay: 1.2,
        }}
        className="absolute bottom-12 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
      >

        <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-slate-400">
          Scroll
        </span>

        <span className="h-10 w-px bg-slate-300" />

      </motion.div>

    </section>
  );
};

export default HeroSection;