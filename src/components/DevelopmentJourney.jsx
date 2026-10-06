import React from 'react';
import { motion } from 'framer-motion';
import { journeyData } from '../data/portfolioData';

export default function DevelopmentJourney() {
  return (
    <section className="py-28 relative overflow-hidden bg-[#F8F8F3] border-t border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 border-b border-black/[0.08] pb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs text-[#777777] uppercase tracking-widest">
              08 / Progression
            </span>
            <span className="w-8 h-[1px] bg-black/20" />
            <span className="text-xs font-mono text-[#111111] font-semibold">
              Milestones
            </span>
          </div>
          <h2 className="font-editorial-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#111111] tracking-tight max-w-4xl leading-[1.08]">
            The Engineering <span className="italic">Journey</span>
          </h2>
          <p className="text-sm sm:text-base text-[#666666] max-w-2xl mt-4 leading-relaxed font-sans">
            How foundational algorithmic programming evolved through machine learning and full-stack software development into end-to-end AI engineering.
          </p>
        </div>

        {/* Visual Roadmap */}
        <div className="max-w-4xl relative">
          <div className="space-y-6">
            {journeyData.map((step) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 sm:p-8 rounded-3xl editorial-card editorial-card-hover flex flex-col sm:flex-row sm:items-center justify-between gap-6"
              >
                <div className="flex items-start sm:items-center gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#111111] text-[#B8FF3D] flex items-center justify-center font-mono font-bold text-sm shrink-0 shadow-xs">
                    {step.phase}
                  </div>
                  <div>
                    <h3 className="font-editorial-serif text-2xl font-medium text-[#111111] tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#555555] mt-1 max-w-xl leading-relaxed font-sans">
                      {step.focus}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 self-start sm:self-center shrink-0">
                  {step.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-3 py-1 rounded-full bg-neutral-100 text-[#444444]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
