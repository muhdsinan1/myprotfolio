import React from 'react';
import { motion } from 'framer-motion';
import { personalData } from '../data/portfolioData';
import { GraduationCap, Layers, Brain, Server } from 'lucide-react';

export default function About() {
  const statIcons = [
    <GraduationCap key="grad" className="w-5 h-5 text-[#111111]" />,
    <Layers key="layers" className="w-5 h-5 text-[#111111]" />,
    <Brain key="brain" className="w-5 h-5 text-[#111111]" />,
    <Server key="server" className="w-5 h-5 text-[#111111]" />,
  ];

  return (
    <section id="about" className="py-28 relative overflow-hidden bg-[#F8F8F3]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 border-b border-black/[0.08] pb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs text-[#777777] uppercase tracking-widest">
              02 / About
            </span>
            <span className="w-8 h-[1px] bg-black/20" />
            <span className="text-xs font-mono text-[#111111] font-semibold">
              Muhammad Sinan
            </span>
          </div>
          <h2 className="font-editorial-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#111111] tracking-tight max-w-4xl leading-[1.08]">
            Turning Ideas Into <span className="italic">Intelligent Software</span>
          </h2>
        </div>

        {/* Editorial 2-Column Story Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          {/* Left Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-[#444444] text-base sm:text-lg leading-relaxed font-sans">
            <p className="text-xl sm:text-2xl text-[#111111] font-medium leading-snug tracking-tight">
              I am a <strong className="font-semibold text-black">Bachelor of Computer Applications (BCA)</strong> graduate specializing in <span className="underline decoration-[#B8FF3D] decoration-4 underline-offset-4 font-semibold text-black">Artificial Intelligence, Cloud Computing, and DevOps</span>.
            </p>
            <p>
              My work centers on closing the gap between machine learning research and usable software engineering. Rather than stopping at model prototyping inside Jupyter notebooks, I build complete, production-ready solutions: architecting high-throughput <strong className="text-[#111111] font-semibold">FastAPI &amp; Django REST</strong> backends, deploying <strong className="text-[#111111] font-semibold">computer vision &amp; NLP pipelines</strong>, and delivering reactive <strong className="text-[#111111] font-semibold">React</strong> frontends backed by relational databases and Docker containerization.
            </p>
            <p className="text-sm sm:text-base text-[#666666]">
              Whether optimizing inference latency, structuring scalable API schemas, or automating containerized CI/CD builds, I take pride in crafting clean, maintainable, and resilient code that brings intelligent products to life.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-black/[0.06]">
              {[
                "Production-ready AI & ML pipelines",
                "Asynchronous & high-throughput APIs",
                "Clean relational schema design",
                "Containerized Docker deployments"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-[#222222]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Architectural Focus Blocks */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="p-6 sm:p-7 rounded-3xl editorial-card editorial-card-hover group">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#111111]" />
                  <h3 className="text-base font-bold text-[#111111] tracking-tight">
                    Model-to-Production
                  </h3>
                </div>
                <span className="font-mono text-[11px] text-[#777777]">AI / ML</span>
              </div>
              <p className="text-sm text-[#555555] leading-relaxed">
                Transforming trained weights (CNNs, NLP intent models, SVMs) into low-latency endpoints ready for real-time web clients.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-3xl editorial-card editorial-card-hover group">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#111111]" />
                  <h3 className="text-base font-bold text-[#111111] tracking-tight">
                    Scalable Architecture
                  </h3>
                </div>
                <span className="font-mono text-[11px] text-[#777777]">BACKEND</span>
              </div>
              <p className="text-sm text-[#555555] leading-relaxed">
                Building resilient backend architectures with Python FastAPI, Django, PostgreSQL, and ACID transaction guarantees.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-3xl editorial-card editorial-card-hover group">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#111111]" />
                  <h3 className="text-base font-bold text-[#111111] tracking-tight">
                    Cloud &amp; DevOps
                  </h3>
                </div>
                <span className="font-mono text-[11px] text-[#777777]">INFRA</span>
              </div>
              <p className="text-sm text-[#555555] leading-relaxed">
                Ensuring reproducible runtime environments through multi-stage Docker builds, Git versioning, and cloud deployments.
              </p>
            </div>
          </div>
        </div>

        {/* Existing Statistics / Cards presented with high-end editorial clarity */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {personalData.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="p-6 sm:p-7 rounded-3xl editorial-card editorial-card-hover flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-[11px] font-mono text-[#777777] uppercase tracking-wider">
                  {stat.title}
                </span>
                <span className="w-7 h-7 rounded-full bg-neutral-100 flex items-center justify-center text-[#111111]">
                  {statIcons[idx]}
                </span>
              </div>

              <div>
                <div className="font-editorial-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111111] tracking-tight mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-[#555555]">
                  {stat.subtitle}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
