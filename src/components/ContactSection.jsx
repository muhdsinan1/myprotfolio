import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personalData } from '../data/portfolioData';
import {
  Mail,
  CheckCircle2,
  Copy,
  Check,
  AlertCircle,
  ArrowRight
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please specify a subject.';
    if (!formData.message.trim()) {
      errs.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setStatus('submitting');

    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 6000);
    }, 1000);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(personalData.socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden bg-[#F8F8F3] border-t border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 border-b border-black/[0.08] pb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs text-[#777777] uppercase tracking-widest">
              10 / Inquiries
            </span>
            <span className="w-8 h-[1px] bg-black/20" />
            <span className="text-xs font-mono text-[#111111] font-semibold">
              Get in Touch
            </span>
          </div>

          {/* Floating Availability Pill */}
          <div className="editorial-floating-pill px-4 py-1.5 rounded-full inline-flex items-center gap-2 text-xs font-medium text-[#111111] mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B8FF3D] opacity-80" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8FE200]" />
            </span>
            <span>Open to AI / Software Engineering Opportunities</span>
          </div>

          <h2 className="font-editorial-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#111111] tracking-tight max-w-4xl leading-[1.08]">
            Let's Build Something <span className="italic">Intelligent.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#666666] max-w-2xl mt-4 leading-relaxed font-sans">
            I'm open to opportunities, collaborations and interesting software/AI projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct channels and Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 sm:p-10 rounded-3xl editorial-card space-y-6">
              <div>
                <h3 className="font-editorial-serif text-2xl font-medium text-[#111111] tracking-tight">
                  Direct Communication
                </h3>
                <p className="text-xs sm:text-sm text-[#555555] mt-1 font-sans">
                  Have a role, AI prototype or collaborative opportunity? Reach out directly.
                </p>
              </div>

              {/* Copy Email Card */}
              <div className="p-4 rounded-2xl bg-[#F8F8F3] border border-black/[0.06] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-9 h-9 rounded-full bg-[#111111] text-[#B8FF3D] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] font-mono uppercase text-[#777777] block">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${personalData.socials.email}`}
                      className="text-xs sm:text-sm font-semibold text-[#111111] hover:underline truncate block"
                    >
                      {personalData.socials.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={copyEmailToClipboard}
                  className="p-2.5 rounded-full bg-white text-[#444444] hover:text-black hover:bg-neutral-100 transition-colors shrink-0 shadow-xs border border-black/[0.06]"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? (
                    <Check className="w-3.5 h-3.5 text-[#111111]" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Social Channels Required: GitHub & LinkedIn */}
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase text-[#777777] block">
                  Professional Profiles:
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={personalData.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-2xl bg-[#F8F8F3] border border-black/[0.06] hover:border-black/30 flex items-center gap-2.5 text-xs font-medium text-[#222222] transition-all group"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                    <span>LinkedIn Profile</span>
                  </a>

                  <a
                    href={personalData.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-2xl bg-[#F8F8F3] border border-black/[0.06] hover:border-black/30 flex items-center gap-2.5 text-xs font-medium text-[#222222] transition-all group"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub Profile</span>
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-black/[0.06] flex items-center gap-2 text-xs font-mono text-[#777777]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
                <span>Typical response time: Under 24 hours</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl editorial-card">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono font-medium text-[#444444] mb-1.5"
                    >
                      Your Name <span className="text-[#111111]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Henderson"
                      className={`w-full px-4 py-3 rounded-2xl bg-[#F8F8F3] border text-sm text-[#111111] placeholder-[#888888] focus:outline-none transition-colors ${
                        errors.name
                          ? 'border-red-500/60 focus:border-red-500'
                          : 'border-black/10 focus:border-black'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono font-medium text-[#444444] mb-1.5"
                    >
                      Email Address <span className="text-[#111111]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className={`w-full px-4 py-3 rounded-2xl bg-[#F8F8F3] border text-sm text-[#111111] placeholder-[#888888] focus:outline-none transition-colors ${
                        errors.email
                          ? 'border-red-500/60 focus:border-red-500'
                          : 'border-black/10 focus:border-black'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-mono font-medium text-[#444444] mb-1.5"
                  >
                    Subject <span className="text-[#111111]">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="AI Engineering Role / Project Inquiry"
                    className={`w-full px-4 py-3 rounded-2xl bg-[#F8F8F3] border text-sm text-[#111111] placeholder-[#888888] focus:outline-none transition-colors ${
                      errors.subject
                        ? 'border-red-500/60 focus:border-red-500'
                        : 'border-black/10 focus:border-black'
                    }`}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" />
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono font-medium text-[#444444] mb-1.5"
                  >
                    Message <span className="text-[#111111]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Muhammad, we are interested in discussing an AI engineering role / software engineering project..."
                    className={`w-full px-4 py-3 rounded-2xl bg-[#F8F8F3] border text-sm text-[#111111] placeholder-[#888888] focus:outline-none transition-colors resize-none ${
                      errors.message
                        ? 'border-red-500/60 focus:border-red-500'
                        : 'border-black/10 focus:border-black'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Status Notice */}
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-2xl bg-[#F8F8F3] border border-black/10 text-xs font-mono text-[#111111] flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#111111] shrink-0" />
                    <span>Thank you! Your message has been received. I will respond promptly.</span>
                  </motion.div>
                )}

                {/* Submit Pill Button */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="editorial-pill-btn group w-full flex items-center justify-center gap-2.5 py-4 font-semibold text-sm shadow-md cursor-pointer disabled:opacity-60"
                >
                  {status === 'submitting' ? (
                    <span>Dispatching Message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
