import React from 'react';
import { motion } from 'framer-motion';
import { githubShowcase } from '../data/portfolioData';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function GitHubSection() {
  const githubUser = import.meta.env.VITE_GITHUB_USERNAME || githubShowcase.username;
  const githubUrl = `https://github.com/${githubUser}`;

  const weeks = 40;
  const daysPerWeek = 7;
  const contributionGrid = Array.from({ length: weeks }, (_, wIndex) => {
    return Array.from({ length: daysPerWeek }, (_, dIndex) => {
      const seed = Math.sin(wIndex * 13 + dIndex * 7);
      if (seed > 0.6) return 3; // High
      if (seed > 0.2) return 2; // Medium
      if (seed > -0.2) return 1; // Low
      return 0; // Empty
    });
  });

  const getHeatmapColor = (level) => {
    switch (level) {
      case 3:
        return 'bg-[#111111]';
      case 2:
        return 'bg-[#9FE800]';
      case 1:
        return 'bg-[#D6FF75]';
      default:
        return 'bg-neutral-100 border border-black/[0.04]';
    }
  };

  return (
    <section className="py-28 relative overflow-hidden bg-[#F8F8F3] border-t border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 border-b border-black/[0.08] pb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs text-[#777777] uppercase tracking-widest">
              09 / Codebase
            </span>
            <span className="w-8 h-[1px] bg-black/20" />
            <span className="text-xs font-mono text-[#111111] font-semibold">
              Open Source
            </span>
          </div>
          <h2 className="font-editorial-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#111111] tracking-tight max-w-4xl leading-[1.08]">
            {githubShowcase.title}
          </h2>
          <p className="text-sm sm:text-base text-[#666666] max-w-2xl mt-4 leading-relaxed font-sans">
            {githubShowcase.subtitle}
          </p>
        </div>

        {/* GitHub Heatmap Box */}
        <div className="p-8 sm:p-10 rounded-3xl editorial-card mb-12 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-6 pb-4 border-b border-black/[0.06]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#111111] text-white flex items-center justify-center">
                <GithubIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#111111] flex items-center gap-2">
                  <span>@{githubUser}</span>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-neutral-100 text-[#333333]">
                    Active Commits
                  </span>
                </h3>
                <p className="text-xs text-[#666666] font-mono">
                  Continuous development cadence across Python, React &amp; AI
                </p>
              </div>
            </div>

            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-pill-btn inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold shadow-xs self-start sm:self-auto"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Visit GitHub Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Grid of Commit Boxes */}
          <div className="overflow-x-auto pb-2">
            <div className="min-w-[700px] flex gap-1.5 justify-center">
              {contributionGrid.map((week, wIdx) => (
                <div key={wIdx} className="flex flex-col gap-1.5">
                  {week.map((level, dIdx) => (
                    <div
                      key={dIdx}
                      className={`w-3 h-3 rounded-[3px] transition-all hover:scale-125 ${getHeatmapColor(
                        level
                      )}`}
                      title={`Week ${wIdx + 1}, Day ${dIdx + 1}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Heatmap Legend */}
          <div className="flex items-center justify-between pt-4 mt-2 border-t border-black/[0.06] text-xs font-mono text-[#777777]">
            <span>Learn &bull; Build &bull; Commit &bull; Deploy</span>
            <div className="flex items-center gap-2">
              <span>Less</span>
              <div className="flex items-center gap-1">
                <div className="w-2.5 h-2.5 rounded-[2px] bg-neutral-100 border border-black/[0.04]" />
                <div className="w-2.5 h-2.5 rounded-[2px] bg-[#D6FF75]" />
                <div className="w-2.5 h-2.5 rounded-[2px] bg-[#9FE800]" />
                <div className="w-2.5 h-2.5 rounded-[2px] bg-[#111111]" />
              </div>
              <span>More</span>
            </div>
          </div>
        </div>

        {/* Pinned Repository Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {githubShowcase.pinnedRepos.map((repo) => (
            <motion.div
              key={repo.name}
              whileHover={{ y: -3 }}
              className="p-6 rounded-3xl editorial-card editorial-card-hover flex flex-col justify-between group transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <GithubIcon className="w-4 h-4 text-[#111111]" />
                    <span className="font-mono text-xs font-bold text-[#111111] truncate">
                      {repo.name}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-neutral-100 text-[#555555]">
                    Public
                  </span>
                </div>

                <p className="text-xs text-[#555555] leading-relaxed mb-4 line-clamp-3 font-sans">
                  {repo.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs font-mono text-[#777777]">
                <div className="flex items-center gap-1.5">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: repo.langColor }}
                  />
                  <span>{repo.lang}</span>
                </div>

                <a
                  href={`${githubUrl}/${repo.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#111111] hover:underline text-[11px] font-semibold flex items-center gap-1"
                >
                  <span>Code</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
