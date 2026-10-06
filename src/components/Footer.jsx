import React from 'react';
import { personalData } from '../data/portfolioData';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-black/[0.08] bg-[#F8F8F3] py-14 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <span className="font-editorial-serif italic text-2xl font-medium text-[#111111]">
              Muhammad Sinan
            </span>

            <span className="hidden sm:inline text-black/20">&bull;</span>

            <p className="text-xs sm:text-sm text-[#666666] font-mono">
              &copy; 2026 Muhammad Sinan. Built with React, AI &amp; lots of curiosity.
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <a
                href={personalData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-black/10 hover:border-black flex items-center justify-center text-[#111111] transition-colors shadow-xs"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={personalData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-black/10 hover:border-black flex items-center justify-center text-[#111111] transition-colors shadow-xs"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalData.socials.email}`}
                className="w-9 h-9 rounded-full bg-white border border-black/10 hover:border-black flex items-center justify-center text-[#111111] transition-colors shadow-xs"
                aria-label="Email Muhammad Sinan"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="w-9 h-9 rounded-full bg-[#111111] text-white hover:bg-black flex items-center justify-center transition-all ml-2 shadow-xs"
              title="Scroll to top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
