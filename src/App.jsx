import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IntroStatement from './components/IntroStatement';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CaseStudy from './components/CaseStudy';
import Experience from './components/Experience';
import Education from './components/Education';
import DevelopmentJourney from './components/DevelopmentJourney';
import GitHubSection from './components/GitHubSection';
import ResumeSection from './components/ResumeSection';
import ResumeModal from './components/ResumeModal';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [is404View, setIs404View] = useState(() => {
    return typeof window !== 'undefined' && window.location.pathname === '/404';
  });

  useEffect(() => {
    // Keyboard shortcut: ESC closes modal
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsResumeModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (is404View) {
    return <NotFound onReturnHome={() => setIs404View(false)} />;
  }

  return (
    <div className="min-h-screen bg-[#F8F8F3] text-[#111111] flex flex-col selection:bg-[#B8FF3D] selection:text-black">
      {/* Skip to Content for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#111111] focus:text-white focus:rounded-full"
      >
        Skip to main content
      </a>

      {/* Sticky Glassmorphic Navbar */}
      <Navbar />

      {/* Main Portfolio Content */}
      <main id="main-content" className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Intro Philosophy & Statement Section */}
        <IntroStatement />

        {/* 3. About Me Section */}
        <About />

        {/* 3. Technical Skills Section */}
        <Skills />

        {/* 4. Featured Projects Section */}
        <Projects />

        {/* 5. Project Case Study / Production AI Pipeline */}
        <CaseStudy />

        {/* 6. Experience Section */}
        <Experience />

        {/* 7. Education Section */}
        <Education />

        {/* 8. Development Journey Section */}
        <DevelopmentJourney />

        {/* 9. GitHub & Open Source Section */}
        <GitHubSection />

        {/* 10. Resume Call-to-Action Section */}
        <ResumeSection onOpenResumeModal={() => setIsResumeModalOpen(true)} />

        {/* 11. Contact Section */}
        <ContactSection />
      </main>

      {/* Minimal Footer */}
      <Footer />

      {/* Interactive Resume Modal Viewer */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
