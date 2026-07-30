import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Menu, X, Sparkles, Sliders, Globe, Download, Sun, Moon } from 'lucide-react';
import { ProfileData, Language, ThemeConfig, AnimationPreset } from '../types';

interface NavbarProps {
  profile: ProfileData;
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  activeTheme: ThemeConfig;
  onOpenCustomizer: () => void;
  animPreset: AnimationPreset;
  onAnimPresetChange: (preset: AnimationPreset) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  profile,
  lang,
  onLanguageChange,
  activeTheme,
  onOpenCustomizer,
  animPreset,
  onAnimPresetChange,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const navLinks = [
    { id: 'hero', label: lang === 'id' ? 'Beranda' : 'Home' },
    { id: 'about', label: lang === 'id' ? 'Tentang' : 'About' },
    { id: 'skills', label: lang === 'id' ? 'Keahlian' : 'Skills' },
    { id: 'projects', label: lang === 'id' ? 'Proyek' : 'Projects' },
    { id: 'experience', label: lang === 'id' ? 'Pengalaman' : 'Experience' },
    { id: 'testimonials', label: lang === 'id' ? 'Testimoni' : 'Testimonials' },
    { id: 'contact', label: lang === 'id' ? 'Kontak' : 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Intersection detection for nav highlight
      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lang]);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Scroll Progress Line */}
      <motion.div
        className="h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 origin-left"
        style={{ scaleX }}
      />

      <nav
        className={`px-4 sm:px-6 lg:px-8 py-3.5 transition-all duration-300 ${
          scrolled
            ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo / Name */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2 group text-left cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-105 transition-transform duration-300">
              {profile.nickname.charAt(0)}
            </div>
            <div>
              <span className="font-bold text-base sm:text-lg tracking-tight group-hover:text-indigo-400 transition-colors">
                {profile.name}
              </span>
              <span className="hidden sm:block text-xs text-slate-400 font-mono">
                portfolio.dev
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`relative px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200 cursor-pointer ${
                    isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-gradient-to-r from-indigo-500/80 to-purple-600/80 rounded-full shadow-sm"
                      transition={{ type: 'spring', duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              );
            })}
          </div>

          {/* Action Buttons & Settings */}
          <div className="flex items-center gap-2">
            {/* Quick Animation Preset Selector */}
            <div className="hidden sm:flex items-center gap-1 bg-slate-900/60 border border-white/10 p-1 rounded-xl text-xs">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400 ml-1.5" />
              <select
                value={animPreset}
                onChange={(e) => onAnimPresetChange(e.target.value as AnimationPreset)}
                className="bg-transparent text-slate-300 text-xs px-2 py-1 outline-none cursor-pointer rounded-lg hover:text-white"
                title="Pilih Efek Animasi Scroll"
              >
                <option value="zoom-in" className="bg-slate-900 text-slate-200">
                  ✨ Zoom In
                </option>
                <option value="zoom-out" className="bg-slate-900 text-slate-200">
                  🔍 Zoom Out
                </option>
                <option value="blur-zoom" className="bg-slate-900 text-slate-200">
                  🌫️ Blur Zoom
                </option>
                <option value="flip-zoom" className="bg-slate-900 text-slate-200">
                  🔄 3D Flip Zoom
                </option>
                <option value="fade-up" className="bg-slate-900 text-slate-200">
                  ⬆️ Fade Up
                </option>
              </select>
            </div>

            {/* Language Switcher */}
            <button
              onClick={() => onLanguageChange(lang === 'id' ? 'en' : 'id')}
              className="px-2.5 py-1.5 rounded-xl bg-slate-900/80 border border-white/10 text-xs text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Ganti Bahasa"
            >
              <Globe className="w-3.5 h-3.5 text-indigo-400" />
              <span className="font-semibold uppercase">{lang}</span>
            </button>

            {/* Customizer Drawer Trigger */}
            <button
              onClick={onOpenCustomizer}
              className="p-2 rounded-xl bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 hover:bg-indigo-600/30 hover:text-white transition-all cursor-pointer flex items-center gap-1.5 text-xs font-medium"
              title="Kustomisasi Tampilan"
            >
              <Sliders className="w-4 h-4" />
              <span className="hidden md:inline">
                {lang === 'id' ? 'Edit Data' : 'Customize'}
              </span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-slate-900/80 border border-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-slate-950/95 border-b border-white/10 backdrop-blur-2xl px-6 py-6"
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-left py-2 px-4 rounded-xl text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-indigo-600/20 text-indigo-400 font-semibold border border-indigo-500/30'
                    : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}

            <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Efek Scroll:</span>
                <select
                  value={animPreset}
                  onChange={(e) => onAnimPresetChange(e.target.value as AnimationPreset)}
                  className="bg-slate-900 text-slate-200 border border-white/10 text-xs px-2 py-1 rounded-lg outline-none"
                >
                  <option value="zoom-in">Zoom In</option>
                  <option value="zoom-out">Zoom Out</option>
                  <option value="blur-zoom">Blur Zoom</option>
                  <option value="flip-zoom">3D Flip Zoom</option>
                  <option value="fade-up">Fade Up</option>
                </select>
              </div>

              <a
                href={profile.cvUrl}
                download
                className="w-full py-2.5 px-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl text-white text-xs font-medium text-center flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                {lang === 'id' ? 'Unduh Resume / CV' : 'Download CV'}
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};
