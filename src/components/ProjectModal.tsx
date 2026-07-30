import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, Calendar, TrendingUp, Tag, Sparkles } from 'lucide-react';
import { Project, Language } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  lang: Language;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, lang }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 30 }}
          transition={{ type: 'spring', duration: 0.5 }}
          className="relative w-full max-w-3xl bg-slate-900 border border-white/10 rounded-3xl shadow-2xl overflow-hidden z-10 my-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-950/80 text-slate-300 hover:text-white border border-white/10 transition-all cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Project Image Header */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

            <div className="absolute bottom-4 left-6 right-6 flex flex-wrap items-center justify-between gap-2">
              <span className="px-3 py-1 rounded-full bg-indigo-500/80 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider">
                {project.category}
              </span>
              {project.metrics && (
                <span className="px-3 py-1 rounded-full bg-emerald-500/80 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  {project.metrics}
                </span>
              )}
            </div>
          </div>

          {/* Modal Body Content */}
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <div className="flex items-center gap-3 text-xs text-slate-400 font-mono mb-2">
                <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                <span>Rilis: {project.year}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {project.title}
              </h3>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase text-indigo-400 tracking-wider mb-2">
                {lang === 'id' ? 'Deskripsi Lengkap Proyek' : 'Full Project Description'}
              </h4>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            {/* Tech Stack Tags */}
            <div>
              <h4 className="text-xs font-mono uppercase text-indigo-400 tracking-wider mb-2.5 flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5" />
                <span>Tech Stack & Tools</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-xl bg-slate-800 text-slate-200 text-xs font-medium border border-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Links */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold text-xs flex items-center gap-2 hover:opacity-90 transition-opacity"
                  >
                    <span>{lang === 'id' ? 'Lihat Demo Langsung' : 'Live Demo'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-slate-800 text-slate-200 hover:text-white border border-slate-700 font-medium text-xs flex items-center gap-2 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Source Code</span>
                  </a>
                )}
              </div>

              <button
                onClick={onClose}
                className="text-xs text-slate-400 hover:text-slate-200 cursor-pointer"
              >
                {lang === 'id' ? 'Tutup Modal' : 'Close Modal'}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
