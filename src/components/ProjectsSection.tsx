import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, Eye, Sparkles, Filter, TrendingUp } from 'lucide-react';
import { Project, Language, AnimationPreset, ThemeConfig } from '../types';
import { ScrollReveal } from './ScrollReveal';
import { ProjectModal } from './ProjectModal';

interface ProjectsSectionProps {
  projects: Project[];
  lang: Language;
  animPreset: AnimationPreset;
  activeTheme: ThemeConfig;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects, lang, animPreset, activeTheme }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'web' | 'mobile' | 'ai' | 'design'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const isArtistic = activeTheme.id === 'artistic-flair';

  const filterOptions = [
    { id: 'all', label: lang === 'id' ? 'Semua Proyek' : 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'ai', label: 'AI Products' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'design', label: 'UI/UX Design' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-950/80">
      {/* Background Decorative Lighting */}
      <div
        className="absolute top-1/3 right-0 w-[400px] h-[400px] blur-[140px] rounded-full pointer-events-none transition-all duration-700 opacity-30"
        style={{ backgroundColor: activeTheme.glowColor }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <ScrollReveal preset={animPreset} direction="up">
            <span className={`px-4 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-700/60 ${activeTheme.textAccentClass} text-xs font-mono tracking-wider uppercase mb-3 inline-block shadow-sm`}>
              {lang === 'id' ? 'PORTFOLIO KARYA' : 'FEATURED WORKS'}
            </span>
          </ScrollReveal>

          <ScrollReveal preset={animPreset} delay={0.1} direction="up">
            <h2 className={`text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 ${isArtistic ? 'font-serif-artistic' : ''}`}>
              {lang === 'id' ? 'Proyek Pilihan & Studi Kasus' : 'Crafted Digital Solutions'}
            </h2>
          </ScrollReveal>

          <ScrollReveal preset={animPreset} delay={0.2} direction="up">
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              {lang === 'id'
                ? 'Koleksi aplikasi web, platform AI, dan sistem desain yang telah dirancang & dibangun dari ide hingga rilis.'
                : 'A curated showcase of web apps, AI systems, and UI platforms engineered with accuracy and speed.'}
            </p>
          </ScrollReveal>
        </div>

        {/* Filter Tab Bar */}
        <ScrollReveal preset={animPreset} delay={0.3} direction="up">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setSelectedCategory(opt.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                  selectedCategory === opt.id
                    ? `bg-gradient-to-r ${activeTheme.accentClass} text-white shadow-lg font-semibold`
                    : 'bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ScrollReveal
              key={project.id}
              preset={animPreset}
              delay={0.08 * (index % 6)}
              direction="up"
            >
              <div className={`rounded-3xl ${activeTheme.cardBgClass} border overflow-hidden transition-all duration-300 group hover:-translate-y-2 flex flex-col h-full shadow-xl`}>
                
                {/* Image Showcase Container */}
                <div className="relative h-52 w-full overflow-hidden bg-zinc-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className={`px-2.5 py-1 rounded-lg bg-zinc-950/90 backdrop-blur-md ${activeTheme.textAccentClass} border border-white/10 text-[10px] font-mono uppercase font-semibold`}>
                      {project.category}
                    </span>
                    {project.metrics && (
                      <span className="px-2.5 py-1 rounded-lg bg-emerald-950/80 backdrop-blur-md text-emerald-400 border border-emerald-500/30 text-[10px] font-semibold flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        {project.metrics}
                      </span>
                    )}
                  </div>

                  {/* Quick Overlay Action */}
                  <div className="absolute inset-0 bg-indigo-950/60 opacity-0 group-hover:opacity-100 backdrop-blur-xs transition-opacity duration-300 flex items-center justify-center gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-4 py-2 rounded-xl bg-white text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-lg hover:scale-105 transition-transform cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>{lang === 'id' ? 'Detail Proyek' : 'View Details'}</span>
                    </button>
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="text-[11px] font-mono text-slate-500 mb-1">
                      {project.year}
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors mb-2 line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-2">
                      {project.shortDescription}
                    </p>
                  </div>

                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-0.5 rounded-md bg-slate-800/80 text-slate-300 text-[10px] font-mono border border-slate-700/60"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-2 py-0.5 rounded-md bg-slate-800/50 text-slate-500 text-[10px] font-mono">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Links */}
                    <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors cursor-pointer flex items-center gap-1"
                      >
                        <span>{lang === 'id' ? 'Selengkapnya' : 'Read More'}</span>
                      </button>

                      <div className="flex items-center gap-2">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                            title="GitHub"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-lg text-indigo-400 hover:text-white hover:bg-indigo-600 transition-colors"
                            title="Live Demo"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        lang={lang}
      />
    </section>
  );
};
