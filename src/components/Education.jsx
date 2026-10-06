import React from 'react';
import { motion } from 'framer-motion';
import { educationData } from '../data/portfolioData';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-28 relative overflow-hidden bg-[#F8F8F3] border-t border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 border-b border-black/[0.08] pb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs text-[#777777] uppercase tracking-widest">
              07 / Foundations
            </span>
            <span className="w-8 h-[1px] bg-black/20" />
            <span className="text-xs font-mono text-[#111111] font-semibold">
              Academics
            </span>
          </div>
          <h2 className="font-editorial-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#111111] tracking-tight max-w-4xl leading-[1.08]">
            Education &amp; <span className="italic">Specialization</span>
          </h2>
          <p className="text-sm sm:text-base text-[#666666] max-w-2xl mt-4 leading-relaxed font-sans">
            Rigorous undergraduate degree combining computational theory, machine intelligence, and modern infrastructure engineering.
          </p>
        </div>

        {/* Education Highlight Card */}
        <div className="max-w-4xl">
          <div className="p-8 sm:p-12 rounded-3xl editorial-card space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-6 border-b border-black/[0.06]">
              <div className="space-y-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#111111] text-white inline-block">
                  GRADUATE DEGREE
                </span>
                <h3 className="font-editorial-serif text-3xl sm:text-4xl font-medium text-[#111111] tracking-tight pt-1">
                  {educationData.degree}
                </h3>
                <div className="text-sm sm:text-base font-semibold text-[#111111]">
                  Specialization: <span className="underline decoration-[#B8FF3D] decoration-4 underline-offset-4">{educationData.specialization}</span>
                </div>
              </div>

              <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center text-[#111111] shrink-0 self-start sm:self-auto">
                <GraduationCap className="w-6 h-6" />
              </div>
            </div>

            <p className="text-[#444444] text-base leading-relaxed font-sans">
              {educationData.summary}
            </p>

            {/* Coursework Section */}
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#777777] font-semibold block">
                Relevant Rigorous Coursework:
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {educationData.coursework.map((course, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -2 }}
                    className="p-4 rounded-2xl bg-[#F8F8F3] border border-black/[0.04] flex flex-col justify-between"
                  >
                    <span className="text-xs font-semibold text-[#111111] mb-1">
                      {course.name}
                    </span>
                    <span className="text-[10px] font-mono text-[#777777]">
                      {course.category}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Core Competency Pillars */}
            <div className="pt-6 border-t border-black/[0.06] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
              <div className="p-3.5 rounded-xl bg-neutral-50 border border-black/[0.04]">
                <span className="font-bold text-[#111111] block mb-1">1. AI Theory &amp; Practice</span>
                <p className="text-[#666666] font-sans text-[11px]">Neural nets, loss functions, NLP embeddings, computer vision algorithms.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-neutral-50 border border-black/[0.04]">
                <span className="font-bold text-[#111111] block mb-1">2. Systems &amp; Databases</span>
                <p className="text-[#666666] font-sans text-[11px]">OS internals, memory management, relational schema &amp; SQL transactions.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-neutral-50 border border-black/[0.04]">
                <span className="font-bold text-[#111111] block mb-1">3. Cloud &amp; Automation</span>
                <p className="text-[#666666] font-sans text-[11px]">Containerization, virtualization, continuous integration &amp; deployment.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
