import React, { useState, useEffect } from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

const navLinks = [
  { name: 'Home', href: '#home', number: '01' },
  { name: 'About', href: '#about', number: '02' },
  { name: 'Skills', href: '#skills', number: '03' },
  { name: 'Projects', href: '#projects', number: '04' },
  { name: 'Architecture', href: '#pipeline', number: '05' },
  { name: 'Experience', href: '#experience', number: '06' },
  { name: 'Education', href: '#education', number: '07' },
  { name: 'Contact', href: '#contact', number: '08' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'projects', 'pipeline', 'experience', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#F8F8F3]/85 backdrop-blur-md border-b border-black/[0.05] py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Left: Editorial Serif Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-baseline gap-2 text-decoration-none focus:outline-none"
          >
            <h1 className="font-editorial-serif text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-[#111111] group-hover:translate-x-1 transition-transform">
              {personalData.name}
            </h1>
          </a>

          {/* Right: Desktop Links + Minimal Circular Menu Button */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Quick Let's Talk CTA */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-[#111111] text-white hover:bg-black transition-all hover:shadow-md"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Circular Hamburger Menu Button (Matches Reference Exactly: 48px-52px with 3 clean horizontal lines) */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-md border border-black/15 hover:border-black/40 flex items-center justify-center text-[#111111] hover:bg-neutral-50 shadow-xs transition-all focus:outline-none focus:ring-2 focus:ring-black"
              aria-label={menuOpen ? 'Close menu' : 'Open navigation menu'}
            >
              {menuOpen ? (
                <X className="w-5 h-5 text-[#111111]" />
              ) : (
                <div className="flex flex-col gap-[3.5px] items-center justify-center">
                  <span className="w-4.5 h-[1.75px] bg-[#111111] rounded-full block" />
                  <span className="w-4.5 h-[1.75px] bg-[#111111] rounded-full block" />
                  <span className="w-4.5 h-[1.75px] bg-[#111111] rounded-full block" />
                </div>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen / High-End Editorial Navigation Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-[#F8F8F3]/95 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-12 lg:p-16 pt-28 sm:pt-32"
          >
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center flex-1">
              {/* Left Column: Huge Editorial Navigation Links */}
              <div className="lg:col-span-8 space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-[#777777] block mb-4">
                  Navigation
                </span>
                <nav className="flex flex-col gap-1 sm:gap-2">
                  {navLinks.map((link) => {
                    const isActive = activeSection === link.href.replace('#', '');
                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className="group flex items-baseline gap-4 py-1.5 focus:outline-none"
                      >
                        <span className="font-mono text-xs text-[#999999] group-hover:text-[#111111] transition-colors">
                          {link.number}
                        </span>
                        <span
                          className={`font-editorial-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight transition-all duration-200 ${
                            isActive
                              ? 'italic text-[#111111] underline decoration-[#B8FF3D] decoration-4 underline-offset-8'
                              : 'text-[#444444] group-hover:text-[#111111] group-hover:translate-x-2'
                          }`}
                        >
                          {link.name}
                        </span>
                      </a>
                    );
                  })}
                </nav>
              </div>

              {/* Right Column: Contact & Professional Coordinates */}
              <div className="lg:col-span-4 p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.08] shadow-sm space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#777777] block mb-2">
                    Direct Contact
                  </span>
                  <a
                    href={`mailto:${personalData.socials.email}`}
                    className="text-sm sm:text-base font-semibold text-[#111111] hover:underline block break-all"
                  >
                    {personalData.socials.email}
                  </a>
                </div>

                <div className="pt-4 border-t border-black/[0.06]">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#777777] block mb-3">
                    Profiles
                  </span>
                  <div className="flex items-center gap-3">
                    <a
                      href={personalData.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-neutral-100 hover:bg-[#111111] hover:text-white text-[#111111] transition-colors"
                      aria-label="GitHub"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={personalData.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-neutral-100 hover:bg-[#111111] hover:text-white text-[#111111] transition-colors"
                      aria-label="LinkedIn"
                    >
                      <LinkedinIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="pt-4 border-t border-black/[0.06]">
                  <a
                    href="#contact"
                    onClick={(e) => handleNavClick(e, '#contact')}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#111111] text-white font-semibold text-sm hover:bg-black transition-all"
                  >
                    <span>Get in Touch</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Bar in Overlay */}
            <div className="max-w-7xl mx-auto w-full pt-6 border-t border-black/[0.06] flex items-center justify-between text-xs text-[#777777] font-mono">
              <span>{personalData.headline}</span>
              <span>&copy; 2026 {personalData.name}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
