import React from 'react';
import { motion } from 'framer-motion';
import { experienceData } from '../data/portfolioData';
import { Calendar } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-28 relative overflow-hidden bg-[#F8F8F3] border-t border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 border-b border-black/[0.08] pb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs text-[#777777] uppercase tracking-widest">
              06 / Industry
            </span>
            <span className="w-8 h-[1px] bg-black/20" />
            <span className="text-xs font-mono text-[#111111] font-semibold">
              Work History
            </span>
          </div>
          <h2 className="font-editorial-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#111111] tracking-tight max-w-4xl leading-[1.08]">
            Professional <span className="italic">Experience</span>
          </h2>
          <p className="text-sm sm:text-base text-[#666666] max-w-2xl mt-4 leading-relaxed font-sans">
            Hands-on engineering contributions developing machine learning workflows, data preprocessing pipelines, and model evaluation protocols.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl space-y-8">
          {experienceData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 sm:p-10 rounded-3xl editorial-card editorial-card-hover space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-6 border-b border-black/[0.06]">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap mb-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#111111] text-white">
                      {item.badge}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-neutral-100 text-[#555555]">
                      {item.type}
                    </span>
                  </div>
                  <h3 className="font-editorial-serif text-3xl font-medium text-[#111111] tracking-tight">
                    {item.role}
                  </h3>
                  <div className="text-base font-semibold text-[#111111] pt-1">
                    {item.company}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-neutral-100 text-xs font-mono text-[#555555] self-start sm:self-auto">
                  <Calendar className="w-3.5 h-3.5 text-[#111111]" />
                  <span>{item.period}</span>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[#777777] font-semibold block">
                  Core Responsibilities &amp; Impact:
                </span>
                <div className="space-y-2.5">
                  {item.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-3 text-sm text-[#444444] font-sans">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#111111] shrink-0 mt-2" />
                      <span className="leading-relaxed">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech stack */}
              <div className="pt-4 border-t border-black/[0.06] flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-[#777777] mr-2">TECH STACK:</span>
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs font-mono bg-neutral-100 text-[#333333]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
