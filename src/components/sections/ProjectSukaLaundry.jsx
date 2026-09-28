import React from 'react';
import { motion } from 'framer-motion';

const ProjectSukaLaundry = () => {
  const features = [
    {
      number: '01',
      title: 'Order Management',
      description:
        'Mengelola pesanan laundry mulai dari pencatatan pelanggan hingga status pengerjaan.',
    },
    {
      number: '02',
      title: 'Financial Tracking',
      description:
        'Mencatat pemasukan dan pengeluaran untuk memberikan gambaran kondisi usaha.',
    },
    {
      number: '03',
      title: 'Customer Management',
      description:
        'Menyimpan dan mengelola informasi pelanggan agar proses operasional lebih terstruktur.',
    },
    {
      number: '04',
      title: 'Business Dashboard',
      description:
        'Menyajikan ringkasan aktivitas usaha melalui dashboard yang mudah dipahami.',
    },
  ];

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#f7f7f5] py-28 text-slate-900 md:py-40"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div
          className="absolute -right-48 top-20 h-120 w-120 rounded-full blur-3xl"
          style={{
            background:
              'radial-gradient(circle, rgba(59,130,246,0.10) 0%, rgba(59,130,246,0.025) 45%, transparent 72%)',
          }}
        />

        <div
          className="absolute -left-48 bottom-0 h-120 w-120 rounded-full blur-3xl"
          style={{
            background:
              'radial-gradient(circle, rgba(148,163,184,0.12) 0%, rgba(148,163,184,0.025) 45%, transparent 72%)',
          }}
        />

      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">

        {/* =======================================================
            SECTION HEADER
        ======================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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
          className="mb-20"
        >

          <div className="mb-7 flex items-center gap-3">

            <span className="h-px w-10 bg-blue-600" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-500">
              Selected Project / 01
            </span>

          </div>

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <h2 className="max-w-4xl text-5xl font-semibold leading-[0.92] tracking-tighter md:text-7xl">
              Suka_
              <br />
              <span className="text-slate-400">
                Laundry.
              </span>
            </h2>

            <div className="max-w-sm">

              <p className="text-sm leading-7 text-slate-500">
                Aplikasi mobile untuk membantu pengelolaan operasional
                laundry secara lebih terstruktur, mulai dari pesanan hingga
                pencatatan keuangan.
              </p>

            </div>

          </div>

        </motion.div>

        {/* =======================================================
            MAIN PROJECT SHOWCASE
        ======================================================= */}

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-24">

          {/* =====================================================
              PROJECT DESCRIPTION
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
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
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            {/* Role */}
            <div className="mb-8">

              <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                My Role
              </p>

              <p className="text-lg font-semibold text-slate-800">
                Developer & Product Maintainer
              </p>

            </div>

            {/* Story */}
            <div className="mb-10">

              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-blue-600">
                The Project
              </p>

              <h3 className="mb-6 text-2xl font-semibold leading-tight tracking-tight md:text-3xl">
                Built from
                <span className="text-slate-400">
                  {' '}zero.
                </span>
              </h3>

              <div className="space-y-4 text-sm leading-7 text-slate-500">

                <p>
                  Suka_Laundry merupakan aplikasi yang saya kembangkan
                  sendiri dari awal untuk membantu proses pengelolaan usaha
                  laundry secara digital.
                </p>

                <p>
                  Saya bertanggung jawab terhadap proses pengembangan,
                  perbaikan, dan pembaruan aplikasi sehingga sistem dapat
                  terus dikembangkan sesuai kebutuhan.
                </p>

              </div>

            </div>

            {/* Tech Stack */}

            <div className="mb-10">

              <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                Technology
              </p>

              <div className="flex flex-wrap gap-2">

                {[
                  'Flutter',
                  'Dart',
                  'Mobile Development',
                  'UI / UX',
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-200 bg-white/60 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-600 backdrop-blur-md"
                  >
                    {tech}
                  </span>
                ))}

              </div>

            </div>

            {/* Project meta */}

            <div className="grid grid-cols-2 border-t border-slate-300 pt-6">

              <div>

                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Platform
                </p>

                <p className="mt-2 text-sm font-semibold text-slate-800">
                  Android
                </p>

              </div>

              <div>

                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Category
                </p>

                <p className="mt-2 text-sm font-semibold text-slate-800">
                  Business App
                </p>

              </div>

            </div>

          </motion.div>

          {/* =====================================================
              DEVICE SHOWCASE
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              margin: '-100px',
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >

            {/* Ambient glow */}

            <div
              className="absolute left-1/2 top-1/2 h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
              style={{
                background:
                  'radial-gradient(circle, rgba(59,130,246,0.12) 0%, rgba(255,255,255,0.4) 45%, transparent 72%)',
              }}
            />

            {/* Glass stage */}

            <div className="relative overflow-hidden rounded-4x1 border border-white/70 bg-white/45 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.10)] backdrop-blur-2xl md:p-8">

              {/* Top glass highlight */}

              <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-white" />

              {/* Project label */}

              <div className="mb-6 flex items-center justify-between">

                <div>

                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Mobile Application
                  </p>

                  <p className="mt-1 text-xs font-semibold text-slate-700">
                    Suka_Laundry
                  </p>

                </div>

                <span className="flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50/80 px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[0.14em] text-emerald-600">

                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

                  Active Project

                </span>

              </div>

              {/* Screenshot */}

              <div className="relative flex min-h-130 items-center justify-center overflow-hidden rounded-3x1 bg-linear-to-b from-slate-100 to-white p-8 md:min-h-150">

                {/* Decorative circles */}

                <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full border border-white/80" />

                <div className="pointer-events-none absolute -bottom-24 -left-20 h-60 w-60 rounded-full border border-white/80" />

                {/* Phone */}

                <motion.div
                  whileHover={{
                    y: -8,
                    rotate: 1,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: 'easeOut',
                  }}
                  className="relative z-10 w-[62%] max-w-65 md:w-[48%]"
                >

                  <div className="overflow-hidden rounded-[2.2rem] border-8 border-slate-900 bg-slate-900 shadow-[0_35px_60px_rgba(15,23,42,0.28)]">

                    <img
                      src="/suka-laundry.png"
                      alt="Suka Laundry mobile application"
                      className="block h-auto w-full"
                    />

                  </div>

                </motion.div>

              </div>

            </div>

          </motion.div>

        </div>

        {/* =======================================================
            FEATURES
        ======================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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
          }}
          className="mt-24"
        >

          <div className="mb-8 flex items-end justify-between">

            <div>

              <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.22em] text-blue-600">
                Core Features
              </p>

              <h3 className="text-2xl font-semibold tracking-tight">
                What I built.
              </h3>

            </div>

            <span className="hidden text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-400 md:block">
              04 Features
            </span>

          </div>

          <div className="grid grid-cols-1 border-t border-slate-300 md:grid-cols-2">

            {features.map((feature, index) => (
              <motion.div
                key={feature.number}
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
                  delay: index * 0.08,
                }}
                className="group grid grid-cols-[50px_1fr] gap-5 border-b border-slate-300 py-7 md:even:border-l md:even:pl-8 md:odd:pr-8"
              >

                <span className="text-[9px] font-semibold tracking-[0.18em] text-slate-400">
                  {feature.number}
                </span>

                <div>

                  <h4 className="mb-2 text-sm font-semibold text-slate-800 transition-colors duration-300 group-hover:text-blue-600">
                    {feature.title}
                  </h4>

                  <p className="max-w-md text-xs leading-6 text-slate-500">
                    {feature.description}
                  </p>

                </div>

              </motion.div>
            ))}

          </div>

        </motion.div>

        {/* =======================================================
            BOTTOM STATEMENT
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
          }}
          className="mt-24 border-t border-slate-300 pt-6"
        >

          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">

            <p className="max-w-xl text-xs leading-6 text-slate-500">
              From idea, development, maintenance, hingga continuous
              improvement — Suka_Laundry menjadi salah satu project yang
              memperkenalkan saya pada proses membangun produk digital secara
              nyata.
            </p>

            <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-slate-400">
              Flutter / Dart / Mobile
            </span>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default ProjectSukaLaundry;