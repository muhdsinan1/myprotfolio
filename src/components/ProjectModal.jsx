import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ExternalLink,
  Zap
} from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  // Interactive demo state for AI Digital Human
  const [chatMessages, setChatMessages] = useState([
    { role: 'assistant', text: 'Hello! I am the AI Digital Human assistant. How can I assist you with intelligent system architecture today?' },
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Interactive demo state for Potato Leaf Disease
  const [selectedLeafSample, setSelectedLeafSample] = useState('early_blight');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState({
    disease: 'Early Blight (Alternaria solani)',
    confidence: '97.8%',
    recommendation: 'Apply copper-based fungicidal spray and ensure drip irrigation to prevent moisture on foliage.'
  });

  if (!project) return null;

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userText = chatInput;
    setChatMessages((prev) => [...prev, { role: 'user', text: userText }]);
    setChatInput('');
    setIsTyping(true);

    setTimeout(() => {
      let reply = "I processed your request using the asynchronous FastAPI pipeline. Context memory preserved.";
      if (userText.toLowerCase().includes('hello') || userText.toLowerCase().includes('hi')) {
        reply = "Greetings! The conversational NLP system is running with sub-25ms response latency.";
      } else if (userText.toLowerCase().includes('tech') || userText.toLowerCase().includes('stack')) {
        reply = "This application runs a FastAPI async backend, WebSockets for real-time streaming, and a reactive React frontend.";
      } else if (userText.toLowerCase().includes('model') || userText.toLowerCase().includes('ai')) {
        reply = "The inference pipeline manages prompt templates, token embeddings, and multi-turn state persistence.";
      }

      setChatMessages((prev) => [...prev, { role: 'assistant', text: reply }]);
      setIsTyping(false);
    }, 600);
  };

  const handleSelectLeaf = (sampleKey) => {
    setSelectedLeafSample(sampleKey);
    setIsAnalyzing(true);
    setTimeout(() => {
      if (sampleKey === 'early_blight') {
        setAnalysisResult({
          disease: 'Early Blight (Alternaria solani)',
          confidence: '97.8%',
          recommendation: 'Apply copper-based fungicidal spray and ensure drip irrigation to prevent foliage dampness.'
        });
      } else if (sampleKey === 'late_blight') {
        setAnalysisResult({
          disease: 'Late Blight (Phytophthora infestans)',
          confidence: '99.2%',
          recommendation: 'Immediate systemic fungicide intervention required. Isolate affected plot areas.'
        });
      } else {
        setAnalysisResult({
          disease: 'Healthy Leaf Tissue',
          confidence: '98.5%',
          recommendation: 'No pathogenic lesions detected. Maintain regular nutrient and moisture monitoring.'
        });
      }
      setIsAnalyzing(false);
    }, 450);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl bg-[#FFFFFF] border border-black/10 rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="p-6 sm:p-7 border-b border-black/[0.08] flex items-center justify-between bg-[#FBFBF8]">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-neutral-100 text-[#444444] border border-black/[0.06]">
                {project.category}
              </span>
              <h3 className="font-editorial-serif text-2xl sm:text-3xl font-medium text-[#111111] tracking-tight">
                {project.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full text-[#555555] hover:text-black bg-neutral-100 hover:bg-neutral-200 transition-colors flex items-center justify-center"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8 bg-white">
            {/* Visual Project Preview Banner */}
            {project.image && (
              <div className="w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden bg-[#F1F1EC] border border-black/[0.06] shadow-xs">
                <img
                  src={project.image}
                  alt={`${project.title} Interface Preview`}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            )}

            {/* Overview & Problem Statement */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#777777] font-semibold">
                  Overview &amp; Purpose
                </span>
                <p className="text-[#333333] text-sm leading-relaxed font-sans">
                  {project.overview}
                </p>
              </div>

              <div className="space-y-2 p-5 rounded-2xl bg-[#F8F8F3] border border-black/[0.06]">
                <span className="text-xs font-mono uppercase tracking-wider text-[#111111] font-semibold flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5" />
                  Problem Solved
                </span>
                <p className="text-[#444444] text-sm leading-relaxed font-sans">
                  {project.problemSolved}
                </p>
              </div>
            </div>

            {/* Interactive Simulation Sandbox */}
            {project.id === 'ai-digital-human' && (
              <div className="p-6 rounded-2xl bg-[#F8F8F3] border border-black/[0.08]">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-black/[0.08]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#8FE200]" />
                    <span className="text-xs font-mono text-[#111111] font-semibold uppercase">
                      Interactive Conversational Sandbox Demo
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#777777]">FastAPI &bull; React Mock</span>
                </div>

                <div className="h-44 overflow-y-auto space-y-2 mb-3 p-3 rounded-xl bg-white border border-black/[0.06] text-xs">
                  {chatMessages.map((msg, i) => (
                    <div
                      key={i}
                      className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] px-3.5 py-2 rounded-2xl ${
                          msg.role === 'user'
                            ? 'bg-[#111111] text-white rounded-br-none'
                            : 'bg-neutral-100 text-[#222222] rounded-bl-none border border-black/[0.04]'
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex items-center gap-1.5 text-[#777777] text-xs italic">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#111111] animate-ping" />
                      <span>Synthesizing response via FastAPI...</span>
                    </div>
                  )}
                </div>

                <form onSubmit={handleSendMessage} className="flex gap-2">
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    placeholder="Ask about AI architecture, FastAPI, or real-time streaming..."
                    className="flex-1 bg-white border border-black/15 rounded-full px-4 py-2 text-xs text-[#111111] placeholder-[#888888] focus:outline-none focus:border-black"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-full bg-[#111111] hover:bg-black text-white text-xs font-semibold transition-colors"
                  >
                    Send
                  </button>
                </form>
              </div>
            )}

            {project.id === 'potato-leaf-disease' && (
              <div className="p-6 rounded-2xl bg-[#F8F8F3] border border-black/[0.08]">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-black/[0.08]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#8FE200]" />
                    <span className="text-xs font-mono text-[#111111] font-semibold uppercase">
                      Interactive CNN Diagnostic Inference Simulator
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#777777]">TensorFlow &amp; OpenCV Pipeline</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Select sample */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-mono text-[#777777] uppercase">Select Test Specimen:</span>
                    <div className="flex flex-col gap-1.5">
                      {[
                        { key: 'early_blight', label: 'Sample A: Concentric Rings' },
                        { key: 'late_blight', label: 'Sample B: Water-soaked Lesions' },
                        { key: 'healthy', label: 'Sample C: Normal Green Foliage' }
                      ].map((item) => (
                        <button
                          key={item.key}
                          type="button"
                          onClick={() => handleSelectLeaf(item.key)}
                          className={`text-left px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                            selectedLeafSample === item.key
                              ? 'bg-[#111111] text-white'
                              : 'bg-white text-[#555555] hover:text-black border border-black/[0.06]'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Inference Result Box */}
                  <div className="md:col-span-2 p-5 rounded-2xl bg-white border border-black/[0.08] flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono text-[#777777]">CNN Classification:</span>
                        <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-neutral-100 text-[#111111] font-bold">
                          {isAnalyzing ? 'Computing...' : `Confidence: ${analysisResult.confidence}`}
                        </span>
                      </div>
                      <div className="text-sm font-bold text-[#111111] mb-2">
                        {isAnalyzing ? 'Evaluating Convolutional Layers...' : analysisResult.disease}
                      </div>
                      <p className="text-xs text-[#555555] leading-relaxed">
                        {isAnalyzing ? 'Extracting visual features...' : analysisResult.recommendation}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-black/[0.06] text-[10px] font-mono text-[#777777] flex items-center justify-between">
                      <span>Pipeline: Input 256x256 &rarr; Conv2D &rarr; MaxPool</span>
                      <span className="text-[#111111] font-semibold">14ms Inference</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Key Features */}
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#777777] font-semibold block mb-3">
                Key Engineering Highlights
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-[#F8F8F3] border border-black/[0.04] text-xs text-[#333333]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#111111] shrink-0 mt-1.5" />
                    <span className="leading-relaxed">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies Used */}
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#777777] font-semibold block mb-2.5">
                Technologies &amp; Frameworks
              </span>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs font-mono font-medium text-[#111111] bg-neutral-100 border border-black/[0.06]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-6 border-t border-black/[0.08] bg-[#FBFBF8] flex items-center justify-between">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-full text-xs font-medium text-[#666666] hover:text-black transition-colors"
            >
              Close
            </button>

            <div className="flex items-center gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-[#111111] bg-white border border-black/15 hover:border-black transition-colors shadow-xs"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>View Repository</span>
              </a>

              {project.hasLiveDemo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-pill-btn inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold shadow-sm"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
