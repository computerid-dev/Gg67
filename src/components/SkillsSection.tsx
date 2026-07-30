import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Code, Server, Layout, Wrench, Layers } from 'lucide-react';
import { Skill, Language, AnimationPreset, ThemeConfig } from '../types';
import { ScrollReveal } from './ScrollReveal';

interface SkillsSectionProps {
  skills: Skill[];
  lang: Language;
  animPreset: AnimationPreset;
  activeTheme: ThemeConfig;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills, lang, animPreset, activeTheme }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'frontend' | 'backend' | 'design' | 'tools'>('all');

  const isArtistic = activeTheme.id === 'artistic-flair';

  const categories = [
    { id: 'all', label: lang === 'id' ? 'Semua' : 'All', icon: <Layers className="w-3.5 h-3.5" /> },
    { id: 'frontend', label: 'Frontend', icon: <Code className="w-3.5 h-3.5" /> },
    { id: 'backend', label: 'Backend', icon: <Server className="w-3.5 h-3.5" /> },
    { id: 'design', label: 'UI/UX Design', icon: <Layout className="w-3.5 h-3.5" /> },
    { id: 'tools', label: 'Tools & DevOps', icon: <Wrench className="w-3.5 h-3.5" /> },
  ];

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-zinc-950/40">
      {/* Background Subtle Gradient */}
      <div
        className="absolute top-1/2 left-0 w-96 h-96 blur-[130px] rounded-full pointer-events-none opacity-30"
        style={{ backgroundColor: activeTheme.glowColor }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 blur-[130px] rounded-full pointer-events-none opacity-30"
        style={{ backgroundColor: activeTheme.glowColor }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <ScrollReveal preset={animPreset} direction="up">
            <span className={`px-4 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-700/60 ${activeTheme.textAccentClass} text-xs font-mono tracking-wider uppercase mb-3 inline-block shadow-sm`}>
              {lang === 'id' ? 'KEAHLIAN & TEKNOLOGI' : 'SKILLS & EXPERTISE'}
            </span>
          </ScrollReveal>

          <ScrollReveal preset={animPreset} delay={0.1} direction="up">
            <h2 className={`text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 ${isArtistic ? 'font-serif-artistic' : ''}`}>
              {lang === 'id' ? 'Tech Stack & Spesialisasi Utama' : 'Core Technologies & Skillset'}
            </h2>
          </ScrollReveal>

          <ScrollReveal preset={animPreset} delay={0.2} direction="up">
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              {lang === 'id'
                ? 'Teknologi dan alat terbaik yang saya gunakan secara profesional untuk memproduksi aplikasi web berkualitas tinggi.'
                : 'Modern tools and frameworks I use professionally to construct high-performance web applications.'}
            </p>
          </ScrollReveal>
        </div>

        {/* Category Filter Pills */}
        <ScrollReveal preset={animPreset} delay={0.3} direction="up">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-2 cursor-pointer ${
                  activeCategory === cat.id
                    ? `bg-gradient-to-r ${activeTheme.accentClass} text-white shadow-lg`
                    : 'bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
                }`}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Skill Cards Grid with Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <ScrollReveal
              key={skill.id}
              preset={animPreset}
              delay={0.05 * (index % 6)}
              direction="up"
            >
              <div className={`p-5 rounded-2xl ${activeTheme.cardBgClass} border transition-all duration-300 group hover:-translate-y-1 shadow-md`}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-bold text-white transition-colors">
                    {skill.name}
                  </span>
                  <span className={`text-xs font-mono font-semibold ${activeTheme.textAccentClass} bg-zinc-950/80 px-2.5 py-0.5 rounded-md border border-white/10`}>
                    {skill.level}%
                  </span>
                </div>

                {/* Animated Level Bar */}
                <div className="w-full h-2 rounded-full bg-zinc-950 overflow-hidden relative">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: false }}
                    transition={{ duration: 1, delay: 0.1, ease: 'easeOut' }}
                    className={`h-full rounded-full bg-gradient-to-r ${activeTheme.accentClass} relative`}
                  >
                    <div className="absolute top-0 right-0 bottom-0 w-2 bg-white/40 blur-[1px]" />
                  </motion.div>
                </div>

                <div className="mt-3 flex items-center justify-between text-[11px] text-zinc-500 capitalize">
                  <span>Kategori: {skill.category}</span>
                  <span className="text-zinc-400 font-mono">
                    {skill.level >= 90 ? 'Expert' : skill.level >= 80 ? 'Advanced' : 'Proficient'}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
