import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../data/portfolioData';
import {
  ArrowRight,
  ArrowUpRight,
  Zap
} from 'lucide-react';
import { GithubIcon } from './Icons';
import ProjectModal from './ProjectModal';

const projectImageMap = {
  'ai-digital-human': './assets/projects/ai-digital-human.png',
  'goia-chatbot': './assets/projects/goia-chatbot.png',
  'potato-leaf-disease': './assets/projects/potato-disease.png',
  'sports-celebrity-classifier': './assets/projects/sports-celebrity.png',
  'footarena': './assets/projects/footarena.png',
  'quiz-application': './assets/projects/quiz-app.png',
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filterCategory, setFilterCategory] = useState('All');

  const categories = ['All', 'AI & Machine Learning', 'Full-Stack & Backend'];

  const filteredProjects = projectsData.filter((p) => {
    if (filterCategory === 'All') return true;
    if (filterCategory === 'AI & Machine Learning') {
      return (
        p.category.includes('AI') ||
        p.category.includes('ML') ||
        p.category.includes('Deep Learning') ||
        p.category.includes('Vision')
      );
    }
    if (filterCategory === 'Full-Stack & Backend') {
      return (
        p.category.includes('Full-Stack') ||
        p.category.includes('Backend') ||
        p.category.includes('Enterprise')
      );
    }
    return true;
  });

  return (
    <section
      id="projects"
      className="py-24 sm:py-32 relative overflow-hidden bg-[#F8F8F3] border-t border-black/[0.06]"
      aria-label="Featured Engineering Projects"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14 sm:mb-16 border-b border-black/[0.08] pb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs text-[#777777] uppercase tracking-widest">
              04 / Case Studies
            </span>
            <span className="w-8 h-[1px] bg-black/20" />
            <span className="text-xs font-mono text-[#111111] font-semibold">
              Selected Work
            </span>
          </div>
          <h2 className="font-editorial-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#111111] tracking-tight max-w-4xl leading-[1.08]">
            Featured Engineering <span className="italic">Projects</span>
          </h2>
          <p className="text-sm sm:text-base text-[#666666] max-w-2xl mt-4 leading-relaxed font-sans">
            Production-grade systems, computer vision classifiers, conversational agents, and high-concurrency web platforms built with AI and clean architecture.
          </p>
        </div>

        {/* Minimal Category Filter Pills */}
        <div className="flex items-center gap-2.5 mb-12 sm:mb-14 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilterCategory(cat)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                filterCategory === cat
                  ? 'bg-[#111111] text-white shadow-sm'
                  : 'bg-white text-[#555555] hover:text-[#111111] hover:bg-neutral-100 border border-black/[0.08]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dynamic Project Grid */}
        <div
          className={`grid gap-8 ${
            filterCategory === 'All'
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
              : 'grid-cols-1 md:grid-cols-2'
          }`}
        >
          {filteredProjects.map((project, idx) => {
            const projectNumber = String(idx + 1).padStart(2, '0');
            const projectImg = project.image || projectImageMap[project.id];

            // In "All" view: Project 1 spans 2 cols, Project 6 spans 3 cols (full row bookend)
            const isFeaturedTwoCol = filterCategory === 'All' && idx === 0;
            const isWideBottomCard = filterCategory === 'All' && idx === 5;

            const colSpanClass = isFeaturedTwoCol
              ? 'lg:col-span-2'
              : isWideBottomCard
              ? 'lg:col-span-3'
              : 'lg:col-span-1';

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                className={`relative rounded-[30px] bg-white border border-black/[0.07] shadow-[0_15px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.09)] hover:border-black/20 flex flex-col justify-between overflow-hidden group transition-all duration-400 ease-out ${colSpanClass}`}
              >
                {/* When wide bottom card on desktop, render horizontal two-column split */}
                {isWideBottomCard ? (
                  <div className="grid grid-cols-1 lg:grid-cols-12 flex-1">
                    {/* Left: 16:10 Image area */}
                    <div className="lg:col-span-7 relative overflow-hidden bg-[#F1F1EC] rounded-t-[28px] lg:rounded-tr-none lg:rounded-l-[28px]">
                      <div className="relative w-full aspect-[16/10] lg:h-full overflow-hidden">
                        <img
                          src={projectImg}
                          alt={`${project.title} Interface Preview`}
                          className="w-full h-full object-cover object-center group-hover:scale-[1.04] transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] select-none"
                          loading="lazy"
                        />
                        {/* Hover Overlay */}
                        <div
                          onClick={() => setSelectedProject(project)}
                          className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 backdrop-blur-[2px] cursor-pointer"
                        >
                          <span className="px-5 py-2.5 rounded-full bg-white text-[#111111] text-xs sm:text-sm font-semibold tracking-tight shadow-lg flex items-center gap-2 group-hover:scale-105 transition-transform duration-300">
                            <span>Open Case Study</span>
                            <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Right: Project Details */}
                    <div className="lg:col-span-5 p-7 sm:p-9 flex flex-col justify-between">
                      <div>
                        {/* Project Number + Category Pill */}
                        <div className="flex items-center justify-between mb-4">
                          <span className="font-editorial-serif italic text-[28px] sm:text-[32px] text-[#111111] font-normal leading-none select-none">
                            {projectNumber}
                          </span>
                          <span className="px-3.5 py-1.5 rounded-full text-xs font-mono bg-[#F4F4F0] text-[#555555] border border-black/[0.04]">
                            {project.category}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-editorial-serif text-2xl sm:text-[28px] lg:text-[32px] font-medium text-[#111111] tracking-tight leading-snug mb-3 group-hover:text-black">
                          {project.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm sm:text-[15px] text-[#666666] leading-[1.6] mb-5 font-sans">
                          {project.overview}
                        </p>

                        {/* Problem Solved callout */}
                        <div className="p-4 rounded-2xl bg-[#F8F8F3] border border-black/[0.05] mb-5 space-y-1">
                          <span className="text-[11px] font-mono uppercase text-[#111111] font-semibold flex items-center gap-1.5">
                            <Zap className="w-3.5 h-3.5" />
                            Problem Solved
                          </span>
                          <p className="text-xs text-[#555555] leading-relaxed">
                            {project.problemSolved}
                          </p>
                        </div>

                        {/* Tech tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.map((t) => (
                            <span
                              key={t}
                              className="px-3 py-1 rounded-full text-xs font-mono bg-[#F4F4F0] text-[#333333] border border-black/[0.04]"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Actions */}
                      <div className="pt-5 border-t border-black/[0.06] flex items-center justify-between gap-3 mt-auto">
                        <button
                          type="button"
                          onClick={() => setSelectedProject(project)}
                          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#111111] group/btn hover:underline cursor-pointer"
                        >
                          <span>Explore Case Study</span>
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform" />
                        </button>

                        <div className="flex items-center gap-2">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-full bg-[#F4F4F0] border border-black/[0.08] text-[#111111] hover:bg-black hover:text-white flex items-center justify-center transition-all hover:scale-105"
                            aria-label={`${project.title} on GitHub`}
                          >
                            <GithubIcon className="w-3.5 h-3.5" />
                          </a>

                          {project.hasLiveDemo && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-9 h-9 rounded-full bg-[#111111] text-white hover:bg-black flex items-center justify-center transition-all hover:scale-105"
                              aria-label={`${project.title} Live Demo`}
                            >
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Standard & 2-Col Featured Card Layout */
                  <>
                    {/* Top: 16:10 Project Visual Image */}
                    <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#F1F1EC] rounded-t-[28px] border-b border-black/[0.05]">
                      <img
                        src={projectImg}
                        alt={`${project.title} Interface Preview`}
                        className="w-full h-full object-cover object-center group-hover:scale-[1.04] transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] select-none"
                        loading="lazy"
                      />

                      {/* Hover Overlay with View Action */}
                      <div
                        onClick={() => setSelectedProject(project)}
                        className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 backdrop-blur-[2px] cursor-pointer"
                      >
                        <span className="px-5 py-2.5 rounded-full bg-white text-[#111111] text-xs sm:text-sm font-semibold tracking-tight shadow-lg flex items-center gap-2 group-hover:scale-105 transition-transform duration-300">
                          <span>Open Case Study</span>
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>

                    {/* Bottom: Project Metadata & Actions */}
                    <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
                      <div>
                        {/* Project Number + Category Badge */}
                        <div className="flex items-center justify-between mb-4">
                          <span className="font-editorial-serif italic text-[28px] sm:text-[32px] text-[#111111] font-normal leading-none select-none">
                            {projectNumber}
                          </span>
                          <span className="px-3.5 py-1.5 rounded-full text-xs font-mono bg-[#F4F4F0] text-[#555555] border border-black/[0.04]">
                            {project.category}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-editorial-serif text-2xl sm:text-[28px] lg:text-[32px] font-medium text-[#111111] tracking-tight leading-snug mb-3 group-hover:text-black">
                          {project.title}
                        </h3>

                        {/* Tagline */}
                        {project.tagline && (
                          <p className="text-xs font-mono text-[#888888] uppercase tracking-wider mb-3">
                            {project.tagline}
                          </p>
                        )}

                        {/* Description */}
                        <p className="text-sm sm:text-[15px] text-[#666666] leading-[1.6] mb-5 font-sans">
                          {project.overview}
                        </p>

                        {/* Problem Solved box */}
                        <div className="p-4 rounded-2xl bg-[#F8F8F3] border border-black/[0.05] mb-5 space-y-1">
                          <span className="text-[11px] font-mono uppercase text-[#111111] font-semibold flex items-center gap-1.5">
                            <Zap className="w-3.5 h-3.5" />
                            Problem Solved
                          </span>
                          <p className="text-xs text-[#555555] leading-relaxed">
                            {project.problemSolved}
                          </p>
                        </div>

                        {/* Core Architecture Highlights for Featured Cards */}
                        {isFeaturedTwoCol && project.highlights && (
                          <div className="mb-5 space-y-2">
                            <span className="text-xs font-mono uppercase text-[#777777] font-semibold block">
                              Core Architecture Highlights:
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {project.highlights.slice(0, 4).map((h, hIdx) => (
                                <div key={hIdx} className="flex items-start gap-2 text-xs text-[#444444]">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#111111] shrink-0 mt-1.5" />
                                  <span>{h}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Technology tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.map((t) => (
                            <span
                              key={t}
                              className="px-3 py-1 rounded-full text-xs font-mono bg-[#F4F4F0] text-[#333333] border border-black/[0.04]"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Card Footer / CTAs */}
                      <div className="pt-5 border-t border-black/[0.06] flex items-center justify-between gap-3 mt-auto">
                        <button
                          type="button"
                          onClick={() => setSelectedProject(project)}
                          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#111111] group/btn hover:underline cursor-pointer"
                        >
                          <span>Explore Case Study</span>
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform" />
                        </button>

                        <div className="flex items-center gap-2">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-full bg-[#F4F4F0] border border-black/[0.08] text-[#111111] hover:bg-black hover:text-white flex items-center justify-center transition-all hover:scale-105"
                            aria-label={`${project.title} on GitHub`}
                          >
                            <GithubIcon className="w-3.5 h-3.5" />
                          </a>

                          {project.hasLiveDemo && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-9 h-9 rounded-full bg-[#111111] text-white hover:bg-black flex items-center justify-center transition-all hover:scale-105"
                              aria-label={`${project.title} Live Demo`}
                            >
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Modal View for In-Depth Exploration */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
