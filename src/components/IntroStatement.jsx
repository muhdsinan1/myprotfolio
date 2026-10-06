import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import './IntroStatement.css';

const leftSkills = [
  {
    id: 'ai-eng',
    name: 'AI Engineering',
    color: '#8FE200', // soft lime
    bgGlow: 'rgba(143, 226, 0, 0.15)',
    desktopPos: 'lg:top-[12%] lg:-left-6 xl:-left-20',
    floatDuration: 5.2,
    floatDelay: 0.2,
  },
  {
    id: 'python-dev',
    name: 'Python Development',
    color: '#FF8A3D', // soft orange
    bgGlow: 'rgba(255, 138, 61, 0.15)',
    desktopPos: 'lg:top-[48%] lg:-left-12 xl:-left-28',
    floatDuration: 5.8,
    floatDelay: 1.2,
  },
  {
    id: 'backend-dev',
    name: 'Backend Development',
    color: '#3B82F6', // soft blue
    bgGlow: 'rgba(59, 130, 246, 0.15)',
    desktopPos: 'lg:top-[82%] lg:-left-6 xl:-left-20',
    floatDuration: 4.8,
    floatDelay: 2.0,
  },
];

const rightSkills = [
  {
    id: 'ml',
    name: 'Machine Learning',
    color: '#EC4899', // soft pink
    bgGlow: 'rgba(236, 72, 153, 0.15)',
    desktopPos: 'lg:top-[12%] lg:-right-6 xl:-right-20',
    floatDuration: 5.4,
    floatDelay: 0.6,
  },
  {
    id: 'fullstack',
    name: 'Full-Stack Development',
    color: '#10B981', // soft green / emerald
    bgGlow: 'rgba(16, 185, 129, 0.15)',
    desktopPos: 'lg:top-[48%] lg:-right-12 xl:-right-28',
    floatDuration: 6.0,
    floatDelay: 1.6,
  },
  {
    id: 'cloud-devops',
    name: 'Cloud & DevOps',
    color: '#F59E0B', // soft amber yellow
    bgGlow: 'rgba(245, 158, 11, 0.15)',
    desktopPos: 'lg:top-[82%] lg:-right-6 xl:-right-20',
    floatDuration: 5.0,
    floatDelay: 2.4,
  },
];

export default function IntroStatement() {
  const shouldReduceMotion = useReducedMotion();

  // Floating badge component
  const renderBadge = (skill, isDesktop = false) => {
    const floatAnimation = shouldReduceMotion
      ? {}
      : {
          y: [-4, 4, -4],
          transition: {
            duration: skill.floatDuration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: skill.floatDelay,
          },
        };

    return (
      <motion.div
        key={skill.id}
        initial={{ opacity: 0, scale: 0.9, y: 12 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, delay: skill.floatDelay * 0.3 }}
        className={isDesktop ? `absolute ${skill.desktopPos} z-20 pointer-events-auto` : 'pointer-events-auto'}
      >
        <motion.div
          animate={floatAnimation}
          className="intro-badge inline-flex items-center gap-2.5 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full backdrop-blur-md select-none cursor-default"
        >
          {/* Subtle colored circular indicator */}
          <span
            className="w-2.5 h-2.5 rounded-full shrink-0 shadow-xs"
            style={{ backgroundColor: skill.color }}
          />
          {/* Skill Title */}
          <span className="font-editorial-sans text-[13px] sm:text-[14px] font-medium text-[#222222] tracking-tight whitespace-nowrap">
            {skill.name}
          </span>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section
      id="philosophy"
      className="relative min-h-[75vh] md:min-h-[85vh] py-20 sm:py-28 lg:py-36 flex flex-col justify-center items-center overflow-hidden bg-[#F8F8F3] border-t border-black/[0.04]"
      aria-label="Introduction and Engineering Philosophy"
    >
      {/* Subtle Ambient Radial Glow */}
      <div
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(184, 255, 61, 0.08) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative">
        
        {/* Top: Small Elegant Italic Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-6 sm:mb-8 md:mb-10 select-none"
        >
          <span className="font-editorial-serif italic text-2xl sm:text-3xl md:text-4xl text-[#111111] tracking-tight block">
            Hello!
          </span>
        </motion.div>

        {/* Central Statement Container with Flanking Badges */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Desktop Left Badges (Absolute positioned around the typography) */}
          <div className="hidden lg:block">
            {leftSkills.map((skill) => renderBadge(skill, true))}
          </div>

          {/* Desktop Right Badges (Absolute positioned around the typography) */}
          <div className="hidden lg:block">
            {rightSkills.map((skill) => renderBadge(skill, true))}
          </div>

          {/* Central Typography Statement */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center relative z-10 px-2 sm:px-4"
          >
            <h2 className="font-editorial-sans text-[clamp(32px,8vw,46px)] sm:text-[clamp(36px,5.5vw,56px)] lg:text-[clamp(42px,5vw,72px)] font-normal leading-[1.08] sm:leading-[1.14] tracking-[-0.03em] select-none">
              {/* Line 1 */}
              <span className="block">
                <span className="text-[#111111]">I build </span>
                <span className="text-[#111111] font-medium">intelligent software</span>
              </span>

              {/* Line 2 */}
              <span className="block mt-1 sm:mt-1.5">
                <span className="text-[#B7B7B7]">that blends </span>
                <span className="text-[#111111] font-medium">AI</span>
                <span className="text-[#B7B7B7]">, thoughtful </span>
                <span className="text-[#111111]">engineering</span>
                <span className="text-[#B7B7B7]">,</span>
              </span>

              {/* Line 3 */}
              <span className="block mt-1 sm:mt-1.5">
                <span className="text-[#B7B7B7]">and </span>
                <span className="text-[#111111]">user-focused </span>
                <span className="text-[#111111] font-medium">experiences</span>
              </span>

              {/* Line 4 */}
              <span className="block mt-1 sm:mt-1.5">
                <span className="text-[#B7B7B7]">that solve </span>
                <span className="text-[#111111] font-medium">real-world problems.</span>
              </span>
            </h2>
          </motion.div>
        </div>

        {/* Mobile & Tablet: Responsive Skill Badges Grid (Shown below the main statement) */}
        <div className="lg:hidden mt-10 sm:mt-14 w-full">
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 max-w-xl mx-auto">
            {leftSkills.map((skill) => renderBadge(skill, false))}
            {rightSkills.map((skill) => renderBadge(skill, false))}
          </div>
        </div>

      </div>
    </section>
  );
}
