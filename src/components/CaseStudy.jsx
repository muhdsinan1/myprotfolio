import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { caseStudyPipeline } from '../data/portfolioData';
import {
  Target,
  Database,
  Brain,
  Server,
  Layout,
  Layers,
  Box,
  Cloud
} from 'lucide-react';

const stepIcons = {
  Target: <Target className="w-5 h-5" />,
  Database: <Database className="w-5 h-5" />,
  Brain: <Brain className="w-5 h-5" />,
  Server: <Server className="w-5 h-5" />,
  Layout: <Layout className="w-5 h-5" />,
  Layers: <Layers className="w-5 h-5" />,
  Box: <Box className="w-5 h-5" />,
  Cloud: <Cloud className="w-5 h-5" />,
};

export default function CaseStudy() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = caseStudyPipeline[activeStepIndex];

  return (
    <section id="pipeline" className="py-28 relative overflow-hidden bg-[#F8F8F3] border-t border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 border-b border-black/[0.08] pb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs text-[#777777] uppercase tracking-widest">
              05 / Architecture
            </span>
            <span className="w-8 h-[1px] bg-black/20" />
            <span className="text-xs font-mono text-[#111111] font-semibold">
              Engineering Lifecycle
            </span>
          </div>
          <h2 className="font-editorial-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#111111] tracking-tight max-w-4xl leading-[1.08]">
            How I Build Production-Ready <span className="italic">AI Applications</span>
          </h2>
          <p className="text-sm sm:text-base text-[#666666] max-w-3xl mt-4 leading-relaxed font-sans">
            Training a machine learning model is only the first 20% of an intelligent solution. Here is my rigorous 8-stage engineering pipeline for translating raw weights into robust, containerized, and deployable software products.
          </p>
        </div>

        {/* 8-Stage Pipeline Stepper Bar */}
        <div className="mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 p-2 rounded-2xl bg-white border border-black/[0.08] shadow-xs">
            {caseStudyPipeline.map((step, idx) => {
              const isActive = activeStepIndex === idx;
              return (
                <button
                  key={step.step}
                  type="button"
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-3 rounded-xl flex flex-col items-center text-center transition-all duration-200 relative ${
                    isActive
                      ? 'bg-[#111111] text-white shadow-sm'
                      : 'hover:bg-neutral-100 text-[#555555] hover:text-[#111111]'
                  }`}
                >
                  <div className={`mb-1.5 p-2 rounded-lg ${isActive ? 'text-[#B8FF3D]' : 'text-[#333333]'}`}>
                    {stepIcons[step.icon]}
                  </div>
                  <span className="text-[10px] font-mono opacity-70 mb-0.5">
                    Step {step.step}
                  </span>
                  <span className="text-xs font-bold leading-tight line-clamp-1">
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Detailed Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <motion.div
            key={activeStep.step}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-7 p-8 sm:p-10 rounded-3xl editorial-card space-y-6"
          >
            <div className="flex items-center gap-4">
              <div className="p-3.5 rounded-2xl bg-[#111111] text-[#B8FF3D]">
                {stepIcons[activeStep.icon]}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-neutral-100 text-[#111111] font-bold">
                    STAGE {activeStep.step} / 08
                  </span>
                  <span className="text-xs font-mono text-[#777777]">
                    {activeStep.badge}
                  </span>
                </div>
                <h3 className="font-editorial-serif text-3xl font-medium text-[#111111] tracking-tight mt-1">
                  {activeStep.title}
                </h3>
              </div>
            </div>

            <p className="text-[#444444] text-base sm:text-lg leading-relaxed font-sans">
              {activeStep.description}
            </p>

            <div className="pt-6 border-t border-black/[0.06] flex items-center justify-between">
              <span className="text-xs font-mono text-[#777777]">
                Standard: High-Throughput &bull; Production Rigor
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveStepIndex((prev) => (prev > 0 ? prev - 1 : caseStudyPipeline.length - 1))}
                  className="px-4 py-2 rounded-full text-xs font-mono bg-neutral-100 hover:bg-neutral-200 text-[#111111] transition-colors"
                >
                  &larr; Prev
                </button>
                <button
                  type="button"
                  onClick={() => setActiveStepIndex((prev) => (prev < caseStudyPipeline.length - 1 ? prev + 1 : 0))}
                  className="px-4 py-2 rounded-full text-xs font-mono bg-[#111111] text-white hover:bg-black transition-colors"
                >
                  Next &rarr;
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right: The Philosophy Statement Card */}
          <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-white border border-black/[0.06] shadow-xs space-y-5">
            <span className="text-xs font-mono uppercase tracking-widest text-[#777777] block">
              Core Engineering Principle
            </span>
            <h4 className="font-editorial-serif text-2xl sm:text-3xl font-medium text-[#111111] tracking-tight">
              Beyond Model Weights: <span className="italic">Full-Stack Ownership</span>
            </h4>
            <p className="text-sm text-[#555555] leading-relaxed font-sans">
              Anyone can run <code className="text-[#111111] bg-neutral-100 px-1.5 py-0.5 rounded font-mono text-xs">model.fit()</code>. The true engineering hurdle is building deterministic error handling, input validation, serialization protocols, database consistency, and latency management around stochastic model outputs.
            </p>

            <div className="p-5 rounded-2xl bg-[#F8F8F3] border border-black/[0.06] space-y-2 text-xs font-mono text-[#444444]">
              <div className="text-[#111111] font-bold">// Engineering Guarantees:</div>
              <div>&bull; Schema validation with Pydantic &amp; DRF</div>
              <div>&bull; Sub-100ms asynchronous API response goal</div>
              <div>&bull; Isolated Docker container environments</div>
              <div>&bull; ACID compliance in database transactions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
