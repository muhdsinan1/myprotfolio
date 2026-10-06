import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/portfolioData';
import {
  Code,
  Brain,
  Server,
  Layout,
  Database,
  Cloud
} from 'lucide-react';

const categoryIcons = {
  Languages: <Code className="w-3.5 h-3.5" />,
  "AI / Machine Learning": <Brain className="w-3.5 h-3.5" />,
  Backend: <Server className="w-3.5 h-3.5" />,
  Frontend: <Layout className="w-3.5 h-3.5" />,
  Databases: <Database className="w-3.5 h-3.5" />,
  "Cloud / DevOps": <Cloud className="w-3.5 h-3.5" />,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...skillsData.map((s) => s.category)];

  const filteredCategories =
    activeCategory === 'All'
      ? skillsData
      : skillsData.filter((item) => item.category === activeCategory);

  return (
    <section id="skills" className="py-28 relative overflow-hidden bg-[#F8F8F3] border-t border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 border-b border-black/[0.08] pb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs text-[#777777] uppercase tracking-widest">
              03 / Expertise
            </span>
            <span className="w-8 h-[1px] bg-black/20" />
            <span className="text-xs font-mono text-[#111111] font-semibold">
              Capabilities
            </span>
          </div>
          <h2 className="font-editorial-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#111111] tracking-tight max-w-4xl leading-[1.08]">
            Technical Skills &amp; <span className="italic">Core Tooling</span>
          </h2>
          <p className="text-sm sm:text-base text-[#666666] max-w-2xl mt-4 leading-relaxed font-sans">
            A comprehensive overview of competencies across artificial intelligence, scalable backend APIs, reactive web engineering, and DevOps pipelines.
          </p>
        </div>

        {/* Minimal Category Tabs Filter */}
        <div className="flex items-center gap-2 mb-14 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                activeCategory === cat
                  ? 'bg-[#111111] text-white shadow-sm'
                  : 'bg-white text-[#555555] hover:text-[#111111] hover:bg-neutral-100 border border-black/[0.08]'
              }`}
            >
              {cat !== 'All' && categoryIcons[cat]}
              <span>{cat}</span>
            </button>
          ))}
        </div>

        {/* Skills Groups */}
        <div className="space-y-14">
          {filteredCategories.map((group) => (
            <div key={group.category} className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-black/[0.06]">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-black text-[#B8FF3D] flex items-center justify-center">
                    {categoryIcons[group.category]}
                  </div>
                  <h3 className="font-editorial-serif text-2xl font-normal text-[#111111]">
                    {group.category}
                  </h3>
                </div>
                <p className="text-xs text-[#777777] font-mono hidden md:block">
                  {group.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {group.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ y: -2 }}
                    className="p-5 rounded-2xl editorial-card editorial-card-hover flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <span className="font-semibold text-sm text-[#111111] group-hover:text-black">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-neutral-100 text-[#555555]">
                          {skill.tag}
                        </span>
                      </div>
                      <p className="text-xs text-[#666666] mb-4 leading-normal">
                        {skill.note}
                      </p>
                    </div>

                    <div>
                      <div className="flex justify-between items-center text-[10px] font-mono mb-1.5 text-[#777777]">
                        <span>Level</span>
                        <span className="text-[#111111] font-bold">{skill.level}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-neutral-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.7, ease: 'easeOut' }}
                          className="h-full bg-[#111111] group-hover:bg-[#8FE200] rounded-full transition-colors"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
