import React, { useState } from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { Experience, Language, AnimationPreset, ThemeConfig } from '../types';
import { ScrollReveal } from './ScrollReveal';

interface ExperienceSectionProps {
  experiences: Experience[];
  lang: Language;
  animPreset: AnimationPreset;
  activeTheme: ThemeConfig;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences, lang, animPreset, activeTheme }) => {
  const [filter, setFilter] = useState<'all' | 'work' | 'education'>('all');

  const isArtistic = activeTheme.id === 'artistic-flair';

  const filtered = filter === 'all'
    ? experiences
    : experiences.filter((e) => e.type === filter);

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-zinc-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <ScrollReveal preset={animPreset} direction="up">
            <span className={`px-4 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-700/60 ${activeTheme.textAccentClass} text-xs font-mono tracking-wider uppercase mb-3 inline-block shadow-sm`}>
              {lang === 'id' ? 'REKAM JEJAK' : 'CAREER TIMELINE'}
            </span>
          </ScrollReveal>

          <ScrollReveal preset={animPreset} delay={0.1} direction="up">
            <h2 className={`text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 ${isArtistic ? 'font-serif-artistic' : ''}`}>
              {lang === 'id' ? 'Pengalaman Kerja & Pendidikan' : 'Work Experience & Education'}
            </h2>
          </ScrollReveal>

          <ScrollReveal preset={animPreset} delay={0.2} direction="up">
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              {lang === 'id'
                ? 'Perjalanan karir profesional dan latar belakang pendidikan yang membentuk keahlian teknis saya saat ini.'
                : 'My professional journey, roles, and academic foundations in software engineering.'}
            </p>
          </ScrollReveal>
        </div>

        {/* Filter Buttons */}
        <ScrollReveal preset={animPreset} delay={0.3} direction="up">
          <div className="flex items-center justify-center gap-2 mb-14">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                filter === 'all'
                  ? `bg-gradient-to-r ${activeTheme.accentClass} text-white font-semibold shadow-md`
                  : 'bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white'
              }`}
            >
              {lang === 'id' ? 'Semua' : 'All'}
            </button>
            <button
              onClick={() => setFilter('work')}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                filter === 'work'
                  ? `bg-gradient-to-r ${activeTheme.accentClass} text-white font-semibold shadow-md`
                  : 'bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>{lang === 'id' ? 'Pekerjaan' : 'Work'}</span>
            </button>
            <button
              onClick={() => setFilter('education')}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                filter === 'education'
                  ? `bg-gradient-to-r ${activeTheme.accentClass} text-white font-semibold shadow-md`
                  : 'bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>{lang === 'id' ? 'Pendidikan' : 'Education'}</span>
            </button>
          </div>
        </ScrollReveal>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-zinc-800 -translate-x-1/2" />

          <div className="space-y-12">
            {filtered.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={item.id} className="relative flex flex-col md:flex-row items-center">
                  
                  {/* Timeline Point Node */}
                  <div className={`absolute left-4 md:left-1/2 -translate-x-1/2 z-20 w-8 h-8 rounded-full bg-zinc-950 border-2 border-fuchsia-500 flex items-center justify-center ${activeTheme.textAccentClass} shadow-lg shadow-fuchsia-500/20`}>
                    {item.type === 'work' ? (
                      <Briefcase className="w-4 h-4" />
                    ) : (
                      <GraduationCap className="w-4 h-4" />
                    )}
                  </div>

                  {/* Card Content Wrapper */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-10 md:text-right' : 'md:pl-10 md:ml-auto'}`}>
                    <ScrollReveal
                      preset={animPreset}
                      delay={0.1}
                      direction={isEven ? 'left' : 'right'}
                    >
                      <div className={`p-6 rounded-3xl ${activeTheme.cardBgClass} border transition-all shadow-xl`}>
                        
                        <div className={`flex flex-wrap items-center gap-2 mb-2 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                          <span className={`px-2.5 py-1 rounded-md bg-zinc-950/80 ${activeTheme.textAccentClass} border border-white/10 text-[11px] font-mono font-semibold flex items-center gap-1`}>
                            <Calendar className="w-3 h-3" />
                            {item.period}
                          </span>
                          <span className="px-2.5 py-1 rounded-md bg-zinc-800 text-zinc-400 text-[11px] font-mono flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {item.location}
                          </span>
                        </div>

                        <h3 className={`text-lg font-bold text-white mb-0.5 ${isArtistic ? 'font-serif-artistic' : ''}`}>
                          {item.role}
                        </h3>
                        <p className={`text-xs font-semibold ${activeTheme.textAccentClass} mb-4`}>
                          {item.company}
                        </p>

                        <ul className="space-y-2 text-xs text-zinc-300 mb-5">
                          {item.description.map((desc, dIdx) => (
                            <li key={dIdx} className={`flex items-start gap-2 ${isEven ? 'md:flex-row-reverse md:text-right' : 'text-left'}`}>
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{desc}</span>
                            </li>
                          ))}
                        </ul>

                        <div className={`flex flex-wrap gap-1.5 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                          {item.skills.map((s, sIdx) => (
                            <span
                              key={sIdx}
                              className="px-2.5 py-0.5 rounded-md bg-zinc-800/80 text-zinc-300 text-[10px] font-mono border border-zinc-700/60"
                            >
                              {s}
                            </span>
                          ))}
                        </div>

                      </div>
                    </ScrollReveal>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
