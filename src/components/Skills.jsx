import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BarChart3,
  LayoutGrid,
  Sparkles,
  Info,
  CheckCircle2
} from 'lucide-react';
import {
  PythonIcon,
  JavaScriptIcon,
  HtmlIcon,
  CssIcon,
  JavaIcon,
  SqlIcon,
  ReactIcon,
  AngularIcon,
  DjangoIcon,
  DrfIcon,
  FastApiIcon,
  FlaskIcon,
  SpringBootIcon,
  PostgresIcon,
  MySqlIcon,
  TensorFlowIcon,
  KerasIcon,
  ScikitLearnIcon,
  OpenCvIcon,
  PandasIcon,
  NumPyIcon,
  DockerIcon,
  GitIcon,
  GitHubIcon
} from './TechIcons';

const technicalSkills = [
  {
    name: 'Python',
    level: 90,
    category: 'AI / Machine Learning',
    categories: ['AI / Machine Learning', 'Backend'],
    usedFor: 'AI/ML model architectures, async FastAPI/Django microservices, data processing pipelines, and automation scripting.',
    icon: PythonIcon,
    tag: 'Core Language'
  },
  {
    name: 'JavaScript',
    level: 85,
    category: 'Frontend',
    categories: ['Frontend'],
    usedFor: 'Modern ES6+ web apps, interactive client logic, React component ecosystems, and asynchronous API consumption.',
    icon: JavaScriptIcon,
    tag: 'Frontend / Web'
  },
  {
    name: 'HTML',
    level: 90,
    category: 'Frontend',
    categories: ['Frontend'],
    usedFor: 'Semantic, accessible document structure, high-standard web layouts, and cross-browser accessibility.',
    icon: HtmlIcon,
    tag: 'Markup'
  },
  {
    name: 'CSS',
    level: 85,
    category: 'Frontend',
    categories: ['Frontend'],
    usedFor: 'Tailwind styling architectures, responsive flexbox/grid systems, keyframe animations, and micro-interactions.',
    icon: CssIcon,
    tag: 'Styling'
  },
  {
    name: 'SQL',
    level: 85,
    category: 'Database',
    categories: ['Database', 'Backend'],
    usedFor: 'Complex multi-table queries, indexed relational data schemas, subqueries, and analytical data aggregations.',
    icon: SqlIcon,
    tag: 'Querying'
  },
  {
    name: 'React',
    level: 82,
    category: 'Frontend',
    categories: ['Frontend'],
    usedFor: 'Modular component architecture, custom hooks, reactive state workflows, and fast single-page user interfaces.',
    icon: ReactIcon,
    tag: 'UI Library'
  },
  {
    name: 'Django',
    level: 85,
    category: 'Backend',
    categories: ['Backend'],
    usedFor: 'Full-stack web applications, secure ORM modeling, built-in admin suites, authentication, and MVC architectures.',
    icon: DjangoIcon,
    tag: 'Web Framework'
  },
  {
    name: 'Django REST Framework',
    level: 84,
    category: 'Backend',
    categories: ['Backend'],
    usedFor: 'Production RESTful API architecture, serializer validations, token authentication, and viewsets.',
    icon: DrfIcon,
    tag: 'API Architecture'
  },
  {
    name: 'FastAPI',
    level: 82,
    category: 'Backend',
    categories: ['Backend'],
    usedFor: 'High-performance asynchronous microservices, Pydantic type validation, and automatic OpenAPI documentation.',
    icon: FastApiIcon,
    tag: 'Async Framework'
  },
  {
    name: 'Flask',
    level: 75,
    category: 'Backend',
    categories: ['Backend'],
    usedFor: 'Lightweight microservices, rapid AI model inference endpoints, and minimal backend service prototypes.',
    icon: FlaskIcon,
    tag: 'Micro-framework'
  },
  {
    name: 'Angular',
    level: 72,
    category: 'Frontend',
    categories: ['Frontend'],
    usedFor: 'Structured enterprise TypeScript web applications, dependency injection, and component services.',
    icon: AngularIcon,
    tag: 'SPA Framework'
  },
  {
    name: 'Java',
    level: 70,
    category: 'Backend',
    categories: ['Backend'],
    usedFor: 'Object-oriented system engineering, JVM software design, and enterprise backend logic.',
    icon: JavaIcon,
    tag: 'OOP Language'
  },
  {
    name: 'Spring Boot',
    level: 68,
    category: 'Backend',
    categories: ['Backend'],
    usedFor: 'Enterprise Java RESTful microservices, Spring Data JPA persistence, and dependency-injected services.',
    icon: SpringBootIcon,
    tag: 'Enterprise Backend'
  },
  {
    name: 'PostgreSQL',
    level: 82,
    category: 'Database',
    categories: ['Database', 'Backend'],
    usedFor: 'ACID-compliant relational database management, indexed JSONB storage, complex joins, and transactional data integrity.',
    icon: PostgresIcon,
    tag: 'RDBMS'
  },
  {
    name: 'MySQL',
    level: 82,
    category: 'Database',
    categories: ['Database', 'Backend'],
    usedFor: 'Relational database architecture, normalized schemas, stored procedures, and high read/write production tables.',
    icon: MySqlIcon,
    tag: 'RDBMS'
  },
  {
    name: 'TensorFlow',
    level: 82,
    category: 'AI / Machine Learning',
    categories: ['AI / Machine Learning'],
    usedFor: 'Deep learning neural network modeling, computer vision pipelines, and GPU-accelerated model training.',
    icon: TensorFlowIcon,
    tag: 'Deep Learning'
  },
  {
    name: 'Keras',
    level: 78,
    category: 'AI / Machine Learning',
    categories: ['AI / Machine Learning'],
    usedFor: 'High-level neural network architectures, custom CNN layer modeling, transfer learning, and evaluation callbacks.',
    icon: KerasIcon,
    tag: 'Neural Networks'
  },
  {
    name: 'Scikit-learn',
    level: 80,
    category: 'AI / Machine Learning',
    categories: ['AI / Machine Learning'],
    usedFor: 'Classical machine learning algorithms, classification models, cross-validation, and feature scaling pipelines.',
    icon: ScikitLearnIcon,
    tag: 'Machine Learning'
  },
  {
    name: 'OpenCV',
    level: 78,
    category: 'AI / Machine Learning',
    categories: ['AI / Machine Learning'],
    usedFor: 'Computer vision preprocessing, Haar Cascade facial recognition, wavelet transforms, and image filters.',
    icon: OpenCvIcon,
    tag: 'Computer Vision'
  },
  {
    name: 'Pandas',
    level: 85,
    category: 'AI / Machine Learning',
    categories: ['AI / Machine Learning'],
    usedFor: 'Data frame manipulation, exploratory data analysis, dataset cleaning, transformation, and statistical aggregation.',
    icon: PandasIcon,
    tag: 'Data Analysis'
  },
  {
    name: 'NumPy',
    level: 85,
    category: 'AI / Machine Learning',
    categories: ['AI / Machine Learning'],
    usedFor: 'Vectorized mathematical operations, multi-dimensional array manipulation, linear algebra, and tensor operations.',
    icon: NumPyIcon,
    tag: 'Scientific Computing'
  },
  {
    name: 'Docker',
    level: 68,
    category: 'DevOps / Tools',
    categories: ['DevOps / Tools'],
    usedFor: 'Containerizing full-stack microservices, multi-stage Docker builds, and isolated production deployment environments.',
    icon: DockerIcon,
    tag: 'Containerization'
  },
  {
    name: 'Git',
    level: 85,
    category: 'DevOps / Tools',
    categories: ['DevOps / Tools'],
    usedFor: 'Distributed version control, atomic commits, branch workflows, merge conflict resolution, and git flow.',
    icon: GitIcon,
    tag: 'Version Control'
  },
  {
    name: 'GitHub',
    level: 85,
    category: 'DevOps / Tools',
    categories: ['DevOps / Tools'],
    usedFor: 'Collaborative code hosting, CI/CD automated workflow actions, open-source repositories, and code reviews.',
    icon: GitHubIcon,
    tag: 'DevOps Platform'
  }
];

const categoryFilters = [
  'All',
  'AI / Machine Learning',
  'Backend',
  'Frontend',
  'Database',
  'DevOps / Tools'
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [viewMode, setViewMode] = useState('graph'); // 'graph' | 'grid'
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const filteredSkills =
    activeCategory === 'All'
      ? technicalSkills
      : technicalSkills.filter((s) => s.categories.includes(activeCategory));

  return (
    <section
      id="skills"
      className="py-24 sm:py-32 relative overflow-hidden bg-[#F8F8F3] border-t border-black/[0.06]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* ================= LEFT COLUMN: Editorial Heading & Controls ================= */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-8">
            {/* Section Tag */}
            <div className="flex items-center gap-2.5">
              <span className="font-mono text-xs text-[#777777] uppercase tracking-widest">
                03 / Expertise
              </span>
              <span className="w-8 h-[1px] bg-black/20" />
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-[#B8FF3D]/25 text-[#2A4700] border border-[#8FE200]/40">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5E9E00]" />
                Self-Assessed Proficiency
              </span>
            </div>

            {/* Large Heading */}
            <div className="space-y-3">
              <h2 className="font-editorial-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-[#111111] tracking-tight leading-[0.98]">
                Technical
                <br />
                <span className="italic">Skills</span>
              </h2>
              <p className="font-serif italic text-lg sm:text-xl text-[#333333] pt-1">
                &ldquo;Technologies I use to build intelligent, scalable and modern software.&rdquo;
              </p>
            </div>

            {/* Short Editorial Description */}
            <p className="text-sm text-[#555555] leading-relaxed font-sans">
              A comprehensive breakdown of individual engineering competencies across artificial intelligence, deep learning architectures, asynchronous backend microservices, and reactive web interfaces.
            </p>

            {/* View Mode Toggle Switch */}
            <div className="pt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#777777] block mb-2.5">
                Visualization Mode
              </span>
              <div className="inline-flex items-center p-1 rounded-full bg-[#EAEAE3] border border-black/[0.08]">
                <button
                  type="button"
                  onClick={() => setViewMode('graph')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                    viewMode === 'graph'
                      ? 'bg-[#111111] text-white shadow-sm'
                      : 'text-[#555555] hover:text-[#111111]'
                  }`}
                  aria-pressed={viewMode === 'graph'}
                >
                  <BarChart3 className="w-3.5 h-3.5" />
                  <span>Graph View</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('grid')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                    viewMode === 'grid'
                      ? 'bg-[#111111] text-white shadow-sm'
                      : 'text-[#555555] hover:text-[#111111]'
                  }`}
                  aria-pressed={viewMode === 'grid'}
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span>Grid View</span>
                </button>
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#777777] block">
                Filter by Domain
              </span>
              <div className="flex flex-wrap gap-2">
                {categoryFilters.map((category) => {
                  const isActive = activeCategory === category;
                  const count =
                    category === 'All'
                      ? technicalSkills.length
                      : technicalSkills.filter((s) => s.categories.includes(category)).length;

                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setActiveCategory(category)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${
                        isActive
                          ? 'bg-[#111111] text-white shadow-xs'
                          : 'bg-white text-[#555555] hover:text-[#111111] hover:bg-neutral-100 border border-black/[0.08]'
                      }`}
                    >
                      <span>{category}</span>
                      <span
                        className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                          isActive ? 'bg-white/20 text-white' : 'bg-neutral-100 text-[#777777]'
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Scale Legend Box */}
            <div className="p-4 rounded-2xl bg-white border border-black/[0.06] shadow-xs space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#111111] font-semibold">
                <Info className="w-3.5 h-3.5 text-[#555555]" />
                <span>Proficiency Scale Benchmark</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-[#555555]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#5E9E00]" />
                  <span>90%+ Expert / Primary</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#111111]" />
                  <span>80-89% Advanced</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-neutral-500" />
                  <span>70-79% Proficient</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-neutral-400" />
                  <span>65-69% Working</span>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: Interactive Skill Visualization ================= */}
          <div className="lg:col-span-7">
            {/* Active view status / count bar */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-black/[0.08] text-xs font-mono text-[#777777]">
              <div className="flex items-center gap-2">
                <span>Displaying</span>
                <span className="font-bold text-[#111111]">{filteredSkills.length}</span>
                <span>technologies</span>
                {activeCategory !== 'All' && (
                  <span className="text-[#111111] font-medium bg-[#EAEAE3] px-2 py-0.5 rounded-full">
                    in {activeCategory}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline-block">Hover on any skill for details</span>
            </div>

            {/* Visual Display based on viewMode */}
            {viewMode === 'graph' ? (
              /* ================= MODE 1: GRAPH VIEW (PROGRESS BARS) ================= */
              <motion.div layout className="space-y-3.5">
                <AnimatePresence mode="popLayout">
                  {filteredSkills.map((skill) => {
                    const IconComponent = skill.icon;
                    const isHovered = hoveredSkill === skill.name;

                    return (
                      <motion.div
                        key={skill.name}
                        layout
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className={`p-4 rounded-2xl bg-white border transition-all duration-200 relative group cursor-default ${
                          isHovered
                            ? 'border-black/30 shadow-md ring-1 ring-black/5 bg-[#FFFFFE]'
                            : 'border-black/[0.07] hover:border-black/20 shadow-xs'
                        }`}
                      >
                        {/* Top row: Icon, Name, Tag, Level Value */}
                        <div className="flex items-center justify-between gap-3 mb-2.5">
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                                isHovered
                                  ? 'bg-black text-[#B8FF3D]'
                                  : 'bg-[#F2F2EC] text-[#111111] group-hover:bg-black group-hover:text-white'
                              }`}
                            >
                              <IconComponent className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="font-semibold text-sm sm:text-base text-[#111111] tracking-tight">
                                  {skill.name}
                                </span>
                                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#F2F2EC] text-[#555555]">
                                  {skill.tag}
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-baseline gap-1 font-mono">
                            <span className="text-base sm:text-lg font-bold text-[#111111]">
                              {skill.level}
                            </span>
                            <span className="text-xs text-[#777777]">%</span>
                          </div>
                        </div>

                        {/* Progress Bar Track */}
                        <div className="w-full h-2 sm:h-2.5 bg-[#E8E8E1] rounded-full overflow-hidden relative">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.85, ease: 'easeOut' }}
                            className={`h-full rounded-full transition-colors duration-200 ${
                              isHovered
                                ? 'bg-gradient-to-r from-[#111111] to-[#8FE200]'
                                : 'bg-[#111111] group-hover:bg-[#111111]'
                            }`}
                          />
                        </div>

                        {/* Expandable "Used for" contextual banner / tooltip */}
                        <div
                          className={`overflow-hidden transition-all duration-200 ${
                            isHovered
                              ? 'max-h-24 opacity-100 mt-3 pt-3 border-t border-black/[0.06]'
                              : 'max-h-0 opacity-0 mt-0 pt-0'
                          }`}
                        >
                          <div className="flex items-start gap-2 text-xs text-[#444444] font-sans leading-relaxed">
                            <span className="inline-flex items-center gap-1 font-semibold text-[#111111] shrink-0 font-mono text-[11px]">
                              <Sparkles className="w-3 h-3 text-[#5E9E00]" />
                              Used for:
                            </span>
                            <span>{skill.usedFor}</span>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </motion.div>
            ) : (
              /* ================= MODE 2: GRID VIEW (INTERACTIVE CARDS) ================= */
              <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-4"
              >
                <AnimatePresence mode="popLayout">
                  {filteredSkills.map((skill) => {
                    const IconComponent = skill.icon;
                    const isHovered = hoveredSkill === skill.name;

                    return (
                      <motion.div
                        key={skill.name}
                        layout
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        whileHover={{ y: -3 }}
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className={`p-5 rounded-2xl bg-white border flex flex-col justify-between transition-all duration-200 group cursor-default ${
                          isHovered
                            ? 'border-black/30 shadow-md ring-1 ring-black/5 bg-[#FFFFFE]'
                            : 'border-black/[0.07] hover:border-black/20 shadow-xs'
                        }`}
                      >
                        {/* Top: Icon + Level Badge */}
                        <div>
                          <div className="flex items-start justify-between gap-2 mb-3">
                            <div
                              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                                isHovered
                                  ? 'bg-black text-[#B8FF3D]'
                                  : 'bg-[#F2F2EC] text-[#111111] group-hover:bg-black group-hover:text-white'
                              }`}
                            >
                              <IconComponent className="w-5 h-5" />
                            </div>
                            <div className="flex flex-col items-end">
                              <span className="font-mono text-sm font-bold text-[#111111]">
                                {skill.level}%
                              </span>
                              <span className="text-[10px] font-mono text-[#777777]">
                                Proficiency
                              </span>
                            </div>
                          </div>

                          {/* Tech Name & Tag */}
                          <div className="mb-2">
                            <h3 className="font-semibold text-base text-[#111111] group-hover:text-black">
                              {skill.name}
                            </h3>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#F2F2EC] text-[#555555] inline-block mt-1">
                              {skill.tag}
                            </span>
                          </div>

                          {/* Used for statement */}
                          <p className="text-xs text-[#666666] leading-relaxed mt-2 mb-4">
                            <span className="font-semibold text-[#222222]">Used for: </span>
                            {skill.usedFor}
                          </p>
                        </div>

                        {/* Progress Bar inside Card */}
                        <div>
                          <div className="w-full h-1.5 bg-[#E8E8E1] rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, ease: 'easeOut' }}
                              className={`h-full rounded-full transition-colors duration-200 ${
                                isHovered ? 'bg-[#8FE200]' : 'bg-[#111111]'
                              }`}
                            />
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </motion.div>
            )}

            {/* Bottom Note */}
            <div className="mt-8 pt-6 border-t border-black/[0.06] flex items-center justify-between text-xs font-mono text-[#777777]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#5E9E00]" />
                <span>All technologies actively deployed across portfolio projects</span>
              </div>
              <span>24 Core Competencies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
