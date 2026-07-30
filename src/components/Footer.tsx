import React from 'react';
import { ArrowUp, Github, Linkedin, Twitter, Instagram, Heart } from 'lucide-react';
import { ProfileData, Language, AnimationPreset, ThemeConfig } from '../types';
import { ScrollReveal } from './ScrollReveal';

interface FooterProps {
  profile: ProfileData;
  lang: Language;
  animPreset: AnimationPreset;
  activeTheme: ThemeConfig;
}

export const Footer: React.FC<FooterProps> = ({ profile, lang, animPreset, activeTheme }) => {
  const isArtistic = activeTheme.id === 'artistic-flair';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal preset={animPreset} direction="up">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-zinc-900">
            
            {/* Brand */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-tr ${activeTheme.accentClass} flex items-center justify-center text-white font-bold text-sm shadow-md`}>
                  {profile.nickname.charAt(0)}
                </div>
                <span className={`font-bold text-lg text-white tracking-tight ${isArtistic ? 'font-serif-artistic' : ''}`}>
                  {profile.name}
                </span>
              </div>
              <p className="text-xs text-zinc-400 max-w-sm">
                {profile.subRole}
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-amber-500/50 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-amber-500/50 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={profile.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-amber-500/50 transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={profile.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-amber-500/50 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>

            {/* Back To Top Button */}
            <button
              onClick={scrollToTop}
              className="px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-800 text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer group"
            >
              <span>{lang === 'id' ? 'Kembali Ke Atas' : 'Back to Top'}</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>

          </div>
        </ScrollReveal>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>
            © {new Date().getFullYear()} {profile.name}. {lang === 'id' ? 'Hak Cipta Dilindungi.' : 'All rights reserved.'}
          </p>
          <div className="flex items-center gap-1.5 font-mono">
            <span>Dibuat dengan</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
            <span>menggunakan React, Tailwind CSS & Framer Motion</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
