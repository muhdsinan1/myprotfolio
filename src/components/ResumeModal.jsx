import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Printer } from 'lucide-react';
import { personalData, educationData, experienceData, skillsData, projectsData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto print:p-0">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm print:hidden"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          className="relative w-full max-w-4xl bg-white border border-black/10 rounded-3xl shadow-2xl z-10 max-h-[92vh] flex flex-col overflow-hidden print:max-h-none print:border-none print:bg-white print:text-black"
        >
          {/* Top Bar */}
          <div className="p-4 sm:p-5 border-b border-black/[0.08] flex items-center justify-between bg-[#FBFBF8] print:hidden">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#8FE200]" />
              <span className="text-xs font-mono text-[#111111] font-semibold uppercase tracking-wider">
                Resume Viewer &bull; Muhammad Sinan
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium text-[#444444] hover:text-black bg-neutral-100 hover:bg-neutral-200 transition-colors"
                title="Print resume"
              >
                <Printer className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Print</span>
              </button>

              <a
                href="./assets/resume.pdf"
                download="Muhammad_Sinan_Resume.pdf"
                className="editorial-pill-btn inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>

              <button
                type="button"
                onClick={onClose}
                className="w-8 h-8 rounded-full text-[#666666] hover:text-black bg-neutral-100 hover:bg-neutral-200 transition-colors flex items-center justify-center ml-2"
                aria-label="Close resume viewer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Printable Resume Content */}
          <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-white print:p-0 print:space-y-4">
            {/* Header info */}
            <div className="border-b border-black/[0.08] pb-6">
              <h2 className="font-editorial-serif text-3xl sm:text-4xl font-normal text-[#111111] tracking-tight">
                {personalData.name}
              </h2>
              <p className="text-base font-semibold text-[#333333] mt-1 font-sans">
                {personalData.headline}
              </p>
              <div className="flex flex-wrap items-center gap-3 sm:gap-6 mt-3 text-xs font-mono text-[#666666]">
                <span>Email: {personalData.socials.email}</span>
                <span>GitHub: github.com/muhdsinan1</span>
                <span>LinkedIn: www.linkedin.com/in/muhammad-sinancp</span>
                <span>Location: India</span>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#111111] font-bold block">
                Professional Summary
              </span>
              <p className="text-sm text-[#444444] leading-relaxed font-sans">
                BCA graduate specializing in Artificial Intelligence, Cloud Computing &amp; DevOps. Experienced in designing and implementing end-to-end intelligent systems, machine learning &amp; computer vision pipelines, high-throughput asynchronous backend APIs (FastAPI, Django), and modern reactive web applications with Docker containerization.
              </p>
            </div>

            {/* Technical Skills */}
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[#111111] font-bold block">
                Technical Skills
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans">
                {skillsData.map((group) => (
                  <div key={group.category} className="p-3 rounded-2xl bg-[#F8F8F3] border border-black/[0.04]">
                    <span className="font-bold text-[#111111] block mb-1">
                      {group.category}:
                    </span>
                    <span className="text-[#555555]">
                      {group.skills.map((s) => s.name).join(', ')}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#111111] font-bold block">
                Experience
              </span>
              {experienceData.map((exp, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-[#F8F8F3] border border-black/[0.06] space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-[#111111]">
                        {exp.role} &mdash; <span>{exp.company}</span>
                      </h4>
                    </div>
                    <span className="text-xs font-mono text-[#777777]">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-[#555555]">
                    {exp.responsibilities.map((r, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2">
                        <span className="text-[#111111]">&bull;</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Key Technical Projects */}
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[#111111] font-bold block">
                Key Technical Projects
              </span>
              <div className="space-y-2.5">
                {projectsData.slice(0, 4).map((proj) => (
                  <div key={proj.id} className="p-4 rounded-2xl bg-[#F8F8F3] border border-black/[0.04]">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-[#111111]">
                        {proj.title}
                      </span>
                      <span className="text-[10px] font-mono text-[#777777]">
                        {proj.technologies.slice(0, 4).join(' • ')}
                      </span>
                    </div>
                    <p className="text-xs text-[#555555] leading-relaxed">
                      {proj.overview}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="space-y-2 pb-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#111111] font-bold block">
                Education
              </span>
              <div className="p-4 rounded-2xl bg-[#F8F8F3] border border-black/[0.06] flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div>
                  <h4 className="text-sm font-bold text-[#111111]">
                    {educationData.degree}
                  </h4>
                  <p className="text-xs text-[#555555]">
                    Specialization: {educationData.specialization}
                  </p>
                </div>
                <span className="text-xs font-mono text-[#777777]">Undergraduate Degree</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
