import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Download, Mail, Github, Linkedin, Twitter, Instagram, Sparkles, Code2, Cpu, Palette, CheckCircle2 } from 'lucide-react';
import { ProfileData, Language, AnimationPreset, ThemeConfig } from '../types';
import { ScrollReveal } from './ScrollReveal';

interface HeroSectionProps {
  profile: ProfileData;
  lang: Language;
  animPreset: AnimationPreset;
  activeTheme: ThemeConfig;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ profile, lang, animPreset, activeTheme }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const isArtistic = activeTheme.id === 'artistic-flair';

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background Decorative Glowing Orbs */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] blur-[130px] rounded-full pointer-events-none transition-all duration-700"
        style={{ backgroundColor: activeTheme.glowColor }}
      />
      <div
        className="absolute top-1/3 right-10 w-[380px] h-[380px] blur-[110px] rounded-full pointer-events-none transition-all duration-700 opacity-70"
        style={{ backgroundColor: activeTheme.glowColor }}
      />
      <div
        className="absolute bottom-10 left-10 w-[300px] h-[300px] blur-[90px] rounded-full pointer-events-none transition-all duration-700 opacity-50"
        style={{ backgroundColor: activeTheme.glowColor }}
      />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
            
            {/* Status Badge */}
            <ScrollReveal preset={animPreset} delay={0.1} direction="up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/80 border border-zinc-700/60 backdrop-blur-md mb-6 shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-medium text-zinc-300">
                  {profile.availableForHire
                    ? lang === 'id'
                      ? 'Tersedia Untuk Proyek Baru'
                      : 'Available for New Projects'
                    : lang === 'id'
                    ? 'Penuh / Busy'
                    : 'Currently Booked'}
                </span>
                <Sparkles className="w-3.5 h-3.5 text-fuchsia-400 ml-1" />
              </div>
            </ScrollReveal>

            {/* Main Greeting & Title */}
            <ScrollReveal preset={animPreset} delay={0.2} direction="up">
              <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-4 ${isArtistic ? 'font-serif-artistic' : ''}`}>
                {lang === 'id' ? 'Halo, Saya' : 'Hi, I am'}{' '}
                <span className={`bg-gradient-to-r ${activeTheme.accentClass} bg-clip-text text-transparent`}>
                  {profile.name}
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal preset={animPreset} delay={0.3} direction="up">
              <p className={`text-xl sm:text-2xl font-semibold mb-4 ${activeTheme.textAccentClass}`}>
                {profile.role}
              </p>
            </ScrollReveal>

            <ScrollReveal preset={animPreset} delay={0.4} direction="up">
              <p className="text-sm sm:text-base text-zinc-300/80 max-w-2xl leading-relaxed mb-8">
                {profile.bio}
              </p>
            </ScrollReveal>

            {/* Action Buttons */}
            <ScrollReveal preset={animPreset} delay={0.5} direction="up">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
                <button
                  onClick={() => scrollTo('projects')}
                  className={`px-6 py-3.5 rounded-xl bg-gradient-to-r ${activeTheme.accentClass} text-white font-semibold text-sm shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center gap-2 group`}
                >
                  <span>{lang === 'id' ? 'Jelajahi Proyek' : 'View Projects'}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => scrollTo('contact')}
                  className="px-6 py-3.5 rounded-xl bg-zinc-900/90 border border-zinc-700/80 text-zinc-200 hover:text-white font-semibold text-sm hover:border-zinc-500 hover:bg-zinc-800 transition-all cursor-pointer flex items-center gap-2 shadow-sm"
                >
                  <Mail className={`w-4 h-4 ${activeTheme.textAccentClass}`} />
                  <span>{lang === 'id' ? 'Hubungi Saya' : 'Contact Me'}</span>
                </button>

                <a
                  href={profile.cvUrl}
                  download
                  className="px-4 py-3.5 rounded-xl bg-zinc-900/50 border border-zinc-800 text-zinc-400 hover:text-zinc-200 font-medium text-sm hover:border-zinc-700 transition-all cursor-pointer flex items-center gap-2"
                  title="Unduh Curriculum Vitae"
                >
                  <Download className="w-4 h-4" />
                  <span className="hidden sm:inline">CV</span>
                </a>
              </div>
            </ScrollReveal>

            {/* Social Media Links */}
            <ScrollReveal preset={animPreset} delay={0.6} direction="up">
              <div className="flex items-center gap-3">
                <span className="text-xs text-zinc-500 font-mono uppercase tracking-wider mr-2">
                  {lang === 'id' ? 'Ikuti Saya:' : 'Follow:'}
                </span>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:border-fuchsia-500/50 hover:bg-zinc-800 transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:border-fuchsia-500/50 hover:bg-zinc-800 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={profile.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:border-fuchsia-500/50 hover:bg-zinc-800 transition-all"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href={profile.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:border-fuchsia-500/50 hover:bg-zinc-800 transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Image Column with Floating Tech Badges */}
          <div className="lg:col-span-5 flex justify-center relative">
            <ScrollReveal preset={animPreset} delay={0.3} direction="up" className="relative">
              
              {/* Outer Decorative Ring */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-tr ${activeTheme.accentClass} opacity-30 blur-xl animate-pulse`} />

              {/* Main Profile Container */}
              <div className={`relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl p-2 bg-gradient-to-tr ${activeTheme.accentClass} backdrop-blur-md border border-white/20 shadow-2xl overflow-hidden group`}>
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent rounded-2xl opacity-60" />
                
                <div className="absolute bottom-4 left-4 right-4 p-3 bg-zinc-900/80 border border-white/10 rounded-xl backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-white">{profile.name}</p>
                      <p className={`text-[10px] font-mono ${activeTheme.textAccentClass}`}>{profile.location}</p>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: React / Frontend */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute -top-4 -left-6 bg-zinc-900/90 border border-zinc-700/60 p-2.5 rounded-2xl shadow-xl backdrop-blur-md flex items-center gap-2.5 z-20"
              >
                <div className={`p-2 rounded-xl bg-fuchsia-500/20 ${activeTheme.textAccentClass}`}>
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-white">Full-Stack Dev</p>
                  <p className="text-[9px] text-zinc-400">React & Node.js</p>
                </div>
              </motion.div>

              {/* Floating Badge 2: UI/UX Design */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -right-4 bg-zinc-900/90 border border-zinc-700/60 p-2.5 rounded-2xl shadow-xl backdrop-blur-md flex items-center gap-2.5 z-20"
              >
                <div className="p-2 rounded-xl bg-purple-500/20 text-purple-400">
                  <Palette className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-white">UI/UX Design</p>
                  <p className="text-[9px] text-zinc-400">Figma & Animation</p>
                </div>
              </motion.div>

              {/* Floating Badge 3: AI Integration */}
              <motion.div
                animate={{ x: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 0.5 }}
                className="absolute top-1/2 -right-8 bg-zinc-900/90 border border-zinc-700/60 p-2.5 rounded-2xl shadow-xl backdrop-blur-md flex items-center gap-2 z-20 hidden sm:flex"
              >
                <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-white">AI Apps</p>
                  <p className="text-[9px] text-zinc-400">Gemini & Web APIs</p>
                </div>
              </motion.div>

            </ScrollReveal>
          </div>
        </div>

        {/* Bottom Key Stats Bar with Scroll Reveal */}
        <div className="mt-20 pt-10 border-t border-zinc-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            
            <ScrollReveal preset={animPreset} delay={0.1} direction="up">
              <div className={activeTheme.cardBgClass + ' p-4 rounded-2xl border'}>
                <p className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
                  {profile.stats.yearsExp}+
                </p>
                <p className="text-xs text-zinc-400 font-medium">
                  {lang === 'id' ? 'Tahun Pengalaman' : 'Years Experience'}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal preset={animPreset} delay={0.2} direction="up">
              <div className={activeTheme.cardBgClass + ' p-4 rounded-2xl border'}>
                <p className={`text-3xl sm:text-4xl font-extrabold mb-1 ${activeTheme.textAccentClass}`}>
                  {profile.stats.projectsDone}+
                </p>
                <p className="text-xs text-zinc-400 font-medium">
                  {lang === 'id' ? 'Proyek Selesai' : 'Projects Completed'}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal preset={animPreset} delay={0.3} direction="up">
              <div className={activeTheme.cardBgClass + ' p-4 rounded-2xl border'}>
                <p className="text-3xl sm:text-4xl font-extrabold text-rose-400 mb-1">
                  {profile.stats.satisfiedClients}+
                </p>
                <p className="text-xs text-zinc-400 font-medium">
                  {lang === 'id' ? 'Klien Puas' : 'Satisfied Clients'}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal preset={animPreset} delay={0.4} direction="up">
              <div className={activeTheme.cardBgClass + ' p-4 rounded-2xl border'}>
                <p className="text-3xl sm:text-4xl font-extrabold text-amber-400 mb-1">
                  {(profile.stats.codeCommits / 1000).toFixed(1)}k+
                </p>
                <p className="text-xs text-zinc-400 font-medium">
                  {lang === 'id' ? 'Git Commits' : 'Git Commits'}
                </p>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </div>
    </section>
  );
};
