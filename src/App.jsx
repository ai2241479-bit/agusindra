import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import HeroSection from './components/sections/HeroSection';
import SchoolHistory from './components/sections/SchoolHistory';
import AboutSection from './components/sections/AboutSection';
import ProjectSukaLaundry from './components/sections/ProjectSukaLaundry';

/* =========================================================
   NAV ITEM
========================================================= */

const NavItem = ({ title, href, active }) => {
  return (
    <motion.a
      href={href}
      className={`relative flex items-center justify-center whitespace-nowrap px-2 py-1.5 text-[8px] font-medium transition-colors sm:px-3 sm:text-[10px] md:px-5 md:py-2 md:text-[11px] ${
        active
          ? 'text-slate-900'
          : 'text-slate-500 hover:text-slate-800'
      }`}
    >
      {/* =====================================================
          SLIDING GLASS ACTIVE INDICATOR
      ===================================================== */}

      {active && (
        <motion.div
          layoutId="active-nav-pill"
          transition={{
            type: 'spring',
            stiffness: 380,
            damping: 30,
            mass: 0.6,
          }}
          className="absolute inset-0 rounded-full border border-white/80 bg-white/65 shadow-[0_4px_15px_rgba(15,23,42,0.06)] backdrop-blur-md"
        />
      )}

      {/* =====================================================
          HOVER EFFECT
      ===================================================== */}

      {!active && (
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.92,
          }}
          whileHover={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.2,
            ease: 'easeOut',
          }}
          className="absolute inset-0 rounded-full bg-white/35 backdrop-blur-sm"
        />
      )}

      {/* =====================================================
          TEXT
      ===================================================== */}

      <span className="relative z-10">
        {title}
      </span>
    </motion.a>
  );
};

/* =========================================================
   CONTACT MENU
========================================================= */

const ContactMenu = () => {
  const [open, setOpen] = useState(false);

  /*
   * =======================================================
   * GANTI DATA KONTAK DI SINI
   * =======================================================
   */

  const whatsappNumber = '082138740594';
  const email = 'agusindra22019@gmail.com';

  return (
    <div className="relative z-50 shrink-0">

      {/* ===================================================
          LET'S TALK BUTTON
      =================================================== */}

      <motion.button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        whileTap={{ scale: 0.96 }}
        className={`group flex items-center gap-1.5 rounded-full border px-3 py-2 text-[10px] font-semibold tracking-[0.12em] transition-all duration-300 sm:gap-2 sm:px-4 sm:text-[9px] md:px-5 md:py-2.5 md:text-[10px] ${
          open
            ? 'border-slate-300 bg-white/80 text-slate-900 shadow-sm'
            : 'border-white/60 bg-white/40 text-slate-700 hover:bg-white/70 hover:text-slate-900'
        }`}
      >
        <span>Let's Talk</span>

        <motion.span
          animate={{
            rotate: open ? 45 : 0,
          }}
          transition={{
            duration: 0.2,
            ease: 'easeOut',
          }}
          className="text-sm leading-none text-slate-400"
        >
          ↗
        </motion.span>
      </motion.button>

      {/* ===================================================
          CONTACT DROPDOWN
      =================================================== */}

      <AnimatePresence>
        {open && (
          <>
            {/* Invisible backdrop */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setOpen(false)}
            />

            <motion.div
              initial={{
                opacity: 0,
                y: -8,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -8,
                scale: 0.96,
              }}
              transition={{
                duration: 0.2,
                ease: 'easeOut',
              }}
              className="absolute right-0 top-[calc(100%+12px)] z-50 w-55 overflow-hidden rounded-3xl border border-white/70 bg-white/75 p-2 shadow-[0_10px_30px_rgba(15,23,42,0.1)] backdrop-blur-lg md:shadow-[0_20px_50px_rgba(15,23,42,0.12)] md:backdrop-blur-2xl"
            >

              {/* =================================================
                  DROPDOWN HEADER
              ================================================= */}

              <div className="px-3 pb-2 pt-2">
                <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Let's connect
                </p>

                <p className="mt-1 text-[10px] text-slate-500">
                  Choose your preferred way to reach me.
                </p>
              </div>

              {/* =================================================
                  WHATSAPP
              ================================================= */}

              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="group flex items-center justify-between rounded-2xl px-3 py-3 transition-all duration-200 hover:bg-white/80"
              >
                <div className="flex items-center gap-3">

                  {/* Icon */}
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-50 text-sm text-emerald-600">
                    ◉
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-slate-800">
                      WhatsApp
                    </p>

                    <p className="mt-0.5 text-[9px] text-slate-400">
                      Quick conversation
                    </p>
                  </div>

                </div>

                <span className="text-sm text-slate-300 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-slate-700">
                  ↗
                </span>
              </a>

              {/* =================================================
                  EMAIL
              ================================================= */}

              <a
                href={`mailto:${email}`}
                onClick={() => setOpen(false)}
                className="group flex items-center justify-between rounded-2xl px-3 py-3 transition-all duration-200 hover:bg-white/80"
              >
                <div className="flex items-center gap-3">

                  {/* Icon */}
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-50 text-sm text-blue-600">
                    @
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-slate-800">
                      Email
                    </p>

                    <p className="mt-0.5 text-[9px] text-slate-400">
                      Send me a message
                    </p>
                  </div>

                </div>

                <span className="text-sm text-slate-300 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-slate-700">
                  ↗
                </span>
              </a>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

/* =========================================================
   APP
========================================================= */

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  /* =======================================================
     NAVIGATION ITEMS
  ======================================================= */

  const menuItems = [
    {
      title: 'Home',
      href: '#home',
      id: 'home',
    },
    {
      title: 'Education',
      href: '#school-history',
      id: 'school-history',
    },
    {
      title: 'About',
      href: '#about',
      id: 'about',
    },
    {
      title: 'Projects',
      href: '#projects',
      id: 'projects',
    },
  ];

  /* =======================================================
     SCROLL STATE
  ======================================================= */

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40);

          const scrollPosition = window.scrollY + window.innerHeight * 0.35;
          let currentSection = 'home';

          menuItems.forEach((item) => {
            const el = document.getElementById(item.id);
            if (el && scrollPosition >= el.offsetTop) {
              currentSection = item.id;
            }
          });

          setActiveSection(currentSection);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <div className="min-h-dvh overflow-x-hidden bg-[#f7f7f5] font-sans text-slate-900 antialiased motion-reduce:transition-none motion-reduce:transform-none">

      {/* =====================================================
          GLOBAL AMBIENT BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">

        {/* Blue ambient glow */}
        <div
          className="absolute -right-40 -top-40 h-80 w-80 rounded-full blur-2xl md:h-120 md:w-120 md:blur-3xl"
          style={{
            background:
              'radial-gradient(circle, rgba(59,130,246,0.08) 0%, rgba(59,130,246,0.025) 45%, transparent 72%)',
          }}
        />

        {/* Neutral ambient glow */}
        <div
          className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full blur-2xl md:h-120 md:w-120 md:blur-3xl"
          style={{
            background:
              'radial-gradient(circle, rgba(148,163,184,0.10) 0%, rgba(148,163,184,0.025) 45%, transparent 72%)',
          }}
        />

        {/* Center subtle glow */}
        <div
          className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl md:h-100 md:w-100 md:blur-3xl"
          style={{
            background:
              'radial-gradient(circle, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0.15) 45%, transparent 75%)',
          }}
        />

      </div>

      {/* =====================================================
          PREMIUM LIQUID GLASS NAVBAR
      ===================================================== */}

      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-4 sm:pt-4 md:px-8 md:pt-6">

        <motion.nav
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`relative flex w-full max-w-6xl items-center justify-between border border-white/60 bg-white/45 backdrop-blur-md transition-all duration-500 md:backdrop-blur-2xl ${
            scrolled
              ? 'rounded-3xl px-4 py-2.5 shadow-[0_8px_30px_rgba(15,23,42,0.06)] md:px-6 md:py-2 md:shadow-[0_12px_40px_rgba(15,23,42,0.08)]'
              : 'rounded-[2rem] px-4 py-3 shadow-[0_4px_25px_rgba(15,23,42,0.04)] md:rounded-4xl md:px-7 md:py-3.5 md:shadow-[0_8px_35px_rgba(15,23,42,0.05)]'
          }`}
        >

          {/* =================================================
              GLASS HIGHLIGHT
          ================================================= */}

          <div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-white/90" />

          <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-linear-to-b from-white/20 to-transparent" />

          {/* =================================================
              LOGO
          ================================================= */}

          <motion.a
            href="#home"
            whileHover={{
              scale: 1.02,
            }}
            className="relative z-10 flex shrink-0 items-center gap-3"
          >

            <div className="flex items-baseline text-lg font-black tracking-[-0.08em] text-slate-900 md:text-2xl">
              A<span className="font-light">G</span>
              <span className="ml-0.5 text-blue-600">.</span>
            </div>

            {/* Availability */}

            <div className="hidden items-center gap-2 border-l border-slate-300/70 pl-3 lg:flex">

              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60 motion-reduce:animate-none" />

                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>

              <span className="text-[8px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                Available
              </span>

            </div>

          </motion.a>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <div className="relative z-10 hidden items-center md:flex">

            {menuItems.map((item) => (
              <NavItem
                key={item.id}
                title={item.title}
                href={item.href}
                active={activeSection === item.id}
              />
            ))}

          </div>

          {/* =================================================
              CONTACT MENU
          ================================================= */}

          <ContactMenu />

        </motion.nav>

      </header>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <main className="relative z-10">

        {/* HOME */}

        <div id="home">
          <HeroSection />
        </div>

        {/* EDUCATION */}

        <SchoolHistory />

        {/* ABOUT */}

        <div id="about">
          <AboutSection />
        </div>

        {/* PROJECTS */}

        <ProjectSukaLaundry />

      </main>

    </div>
  );
}