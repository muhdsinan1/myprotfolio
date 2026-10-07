import React from 'react';
import { motion } from 'framer-motion';
import { personalData } from '../data/portfolioData';

export default function Hero() {

  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 flex flex-col justify-between overflow-hidden"
    >
      {/* Editorial Radiant Lime-Green Background Gradient (Matches Reference Exactly) */}
      <div className="absolute inset-0 hero-radiant-gradient -z-20 pointer-events-none" />

      {/* Subtle Ambient Grid */}
      <div className="absolute inset-0 bg-subtle-grid -z-10 pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full flex-1 flex flex-col justify-between relative">
        
        {/* Top: Subtle Laurel / Status Badge (Matches Reference "Website of the Day" placement) */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="flex justify-center items-center gap-2 mb-2 sm:mb-4 select-none"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/70 backdrop-blur-md border border-black/[0.06] text-[11px] sm:text-xs font-mono font-medium text-[#444444] shadow-xs">
            <span className="text-[#8FE200] font-bold">✦</span>
            <span>BCA • Artificial Intelligence, Cloud & DevOps</span>
            <span className="text-[#8FE200] font-bold">✦</span>
          </div>
        </motion.div>

        {/* Center: Editorial Typography & Centered Overlapping Portrait */}
        <div className="relative flex-1 flex flex-col items-center justify-center my-auto">
          
          {/* Layer 1: Massive Editorial Headline (z-10) */}
          <div className="text-center relative z-10 max-w-6xl mx-auto select-none pointer-events-none">
            {/* Line 1: Modern Sans-Serif */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-editorial-sans font-extrabold text-[#111111] tracking-[-0.04em] leading-[0.92] text-[clamp(44px,7.8vw,115px)]"
            >
              Hi, I'm Muhammad
            </motion.h1>

            {/* Line 2: Elegant Serif Italic */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="-mt-1 sm:-mt-2 md:-mt-3"
            >
              <span className="font-editorial-serif italic font-normal text-[#111111] tracking-[-0.03em] leading-[0.88] block text-[clamp(54px,10vw,146px)]">
                AI Engineer
              </span>
            </motion.div>
          </div>

          {/* Layer 2: The Exact Monochrome Portrait with Soft Fade Overlapping Typography (z-20) */}
          <div className="relative w-full flex justify-center items-center -mt-10 sm:-mt-16 md:-mt-24 lg:-mt-32 xl:-mt-40 z-20">
            {/* Soft Radiant Glow behind the portrait */}
            <div className="absolute w-72 sm:w-96 md:w-[480px] h-72 sm:h-96 md:h-[480px] rounded-full bg-[#B8FF3D]/50 blur-3xl -z-10 pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-full select-none"
            >
              <img
                src="./assets/Monochrome%20Portrait%20with%20Soft%20Fade.png"
                alt="Muhammad Sinan - AI Engineer"
                className="w-[280px] sm:w-[380px] md:w-[460px] lg:w-[540px] xl:w-[580px] max-w-full h-auto object-contain block mx-auto select-none pointer-events-none"
                loading="eager"
                decoding="async"
              />
            </motion.div>

            {/* Left Floating Pill (Desktop & Tablet): Available for opportunities (z-30) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="hidden sm:block absolute left-2 sm:left-4 md:left-8 lg:left-14 top-1/2 -translate-y-1/2 z-30"
            >
              <div className="editorial-floating-pill px-4 sm:px-5 py-2.5 rounded-full flex items-center gap-3 text-xs sm:text-sm font-medium text-[#111111]">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B8FF3D] opacity-80" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#8DEB00] border-2 border-white" />
                </span>
                <span className="font-sans font-medium tracking-tight whitespace-nowrap">
                  {personalData.statusBadge}
                </span>
              </div>
            </motion.div>

            {/* Right Floating Content (Desktop): Exact Positioning Statement (z-30) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="hidden md:block absolute right-2 sm:right-4 md:right-8 lg:right-14 top-1/2 -translate-y-1/2 max-w-[280px] lg:max-w-[320px] z-30 text-left"
            >
              <p className="text-[15px] lg:text-[16px] text-[#222222] font-normal leading-[1.5] tracking-tight">
                {personalData.positioning}
              </p>
            </motion.div>
          </div>

          {/* Mobile Only: Floating Pill & Description stacked below portrait */}
          <div className="sm:hidden w-full flex flex-col items-center gap-4 mt-2 px-2 z-30 text-center">
            <div className="editorial-floating-pill px-4 py-2 rounded-full flex items-center gap-2.5 text-xs font-medium text-[#111111] shadow-xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B8FF3D] opacity-80" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#8DEB00] border border-white" />
              </span>
              <span className="font-sans tracking-tight">{personalData.statusBadge}</span>
            </div>

            <p className="text-sm text-[#333333] leading-relaxed max-w-sm">
              {personalData.positioning}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
