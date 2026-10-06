import React from 'react';
import { Download, Eye, FileText } from 'lucide-react';

export default function ResumeSection({ onOpenResumeModal }) {
  return (
    <section className="py-24 relative overflow-hidden bg-[#F8F8F3] border-t border-black/[0.06]">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative">
        <div className="p-10 sm:p-14 rounded-3xl bg-white border border-black/[0.08] shadow-sm text-center relative overflow-hidden">
          {/* Subtle top lime indicator */}
          <div className="w-12 h-1 bg-[#B8FF3D] rounded-full mx-auto mb-6" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-100 text-[#555555] text-xs font-mono mb-4">
            <FileText className="w-3.5 h-3.5 text-[#111111]" />
            <span>CURRICULUM VITAE</span>
          </div>

          {/* Required Title */}
          <h2 className="font-editorial-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111111] tracking-tight mb-4">
            Want to know more about <span className="italic">my work?</span>
          </h2>

          {/* Required Text */}
          <p className="text-sm sm:text-base text-[#555555] max-w-xl mx-auto leading-relaxed mb-8 font-sans">
            Download my resume to explore my technical experience, projects and career journey.
          </p>

          {/* Competency badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-8 text-xs text-[#666666] font-mono">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
              Verified TCS Remote Internship
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
              BCA AI &amp; Cloud Specialization
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
              Production Engineering Portfolio
            </span>
          </div>

          {/* Buttons: Download Resume & View Resume */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="./assets/resume.pdf"
              download="Muhammad_Sinan_Resume.pdf"
              className="editorial-pill-btn inline-flex items-center justify-center gap-2 px-7 py-3.5 font-semibold text-xs sm:text-sm shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>

            <button
              type="button"
              onClick={onOpenResumeModal}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-medium text-xs sm:text-sm text-[#111111] bg-neutral-100 hover:bg-neutral-200 border border-black/10 transition-all shadow-xs"
            >
              <Eye className="w-4 h-4 text-[#111111]" />
              <span>View Resume</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
