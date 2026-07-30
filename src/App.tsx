import React, { useState } from 'react';
import { initialProfileData, skillsData, projectsData, experienceData, testimonialsData, themePresets } from './data/portfolioData';
import { ProfileData, Language, ThemeConfig, AnimationPreset } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PortfolioCustomizer } from './components/PortfolioCustomizer';

export default function App() {
  const [profile, setProfile] = useState<ProfileData>(initialProfileData);
  const [lang, setLang] = useState<Language>('id');
  const [animPreset, setAnimPreset] = useState<AnimationPreset>('zoom-in');
  const [activeTheme, setActiveTheme] = useState<ThemeConfig>(themePresets[0]);
  const [customizerOpen, setCustomizerOpen] = useState<boolean>(false);

  return (
    <div className={`min-h-screen ${activeTheme.bgClass} font-sans selection:bg-indigo-500 selection:text-white transition-colors duration-500`}>
      {/* Sticky Top Navbar */}
      <Navbar
        profile={profile}
        lang={lang}
        onLanguageChange={setLang}
        activeTheme={activeTheme}
        onOpenCustomizer={() => setCustomizerOpen(true)}
        animPreset={animPreset}
        onAnimPresetChange={setAnimPreset}
      />

      {/* Main Sections with Scroll-Triggered Zoom & Fade Animations */}
      <main className="relative z-10">
        <HeroSection
          profile={profile}
          lang={lang}
          animPreset={animPreset}
          activeTheme={activeTheme}
        />

        <AboutSection
          profile={profile}
          lang={lang}
          animPreset={animPreset}
          activeTheme={activeTheme}
        />

        <SkillsSection
          skills={skillsData}
          lang={lang}
          animPreset={animPreset}
          activeTheme={activeTheme}
        />

        <ProjectsSection
          projects={projectsData}
          lang={lang}
          animPreset={animPreset}
          activeTheme={activeTheme}
        />

        <ExperienceSection
          experiences={experienceData}
          lang={lang}
          animPreset={animPreset}
          activeTheme={activeTheme}
        />

        <TestimonialsSection
          testimonials={testimonialsData}
          lang={lang}
          animPreset={animPreset}
          activeTheme={activeTheme}
        />

        <ContactSection
          profile={profile}
          lang={lang}
          animPreset={animPreset}
          activeTheme={activeTheme}
        />
      </main>

      {/* Footer */}
      <Footer
        profile={profile}
        lang={lang}
        animPreset={animPreset}
        activeTheme={activeTheme}
      />

      {/* Customizer Drawer */}
      <PortfolioCustomizer
        isOpen={customizerOpen}
        onClose={() => setCustomizerOpen(false)}
        profile={profile}
        onUpdateProfile={setProfile}
        activeTheme={activeTheme}
        onSelectTheme={setActiveTheme}
        animPreset={animPreset}
        onSelectAnimPreset={setAnimPreset}
        lang={lang}
      />
    </div>
  );
}
