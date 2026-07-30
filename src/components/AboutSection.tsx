import React, { useState } from 'react';
import { motion } from 'motion/react';
import { User, ShieldCheck, Zap, Heart, Award, Sparkles, Terminal, FileText, CheckCircle } from 'lucide-react';
import { ProfileData, Language, AnimationPreset, ThemeConfig } from '../types';
import { ScrollReveal } from './ScrollReveal';

interface AboutSectionProps {
  profile: ProfileData;
  lang: Language;
  animPreset: AnimationPreset;
  activeTheme: ThemeConfig;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ profile, lang, animPreset, activeTheme }) => {
  const [activeTab, setActiveTab] = useState<'story' | 'values' | 'tech'>('story');

  const isArtistic = activeTheme.id === 'artistic-flair';

  const values = [
    {
      icon: <Zap className="w-5 h-5 text-amber-400" />,
      title: lang === 'id' ? 'Performa Kilat' : 'High Performance',
      desc: lang === 'id' ? 'Aplikasi cepat, ringan, dan dioptimalkan untuk SEO & Lighthouse 90+.' : 'Fast, lightweight apps optimized for high Lighthouse scores.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      title: lang === 'id' ? 'Kode Bersih & Aman' : 'Clean & Scalable Code',
      desc: lang === 'id' ? 'Arsitektur terstruktur menggunakan TypeScript & best-practice standar industri.' : 'Structured architecture using TypeScript & modern best practices.',
    },
    {
      icon: <Heart className="w-5 h-5 text-fuchsia-400" />,
      title: lang === 'id' ? 'UI/UX Intuitif' : 'User-Centric UI/UX',
      desc: lang === 'id' ? 'Desain responsif, ramah aksesibilitas, dan mikro-interaksi yang memanjakan mata.' : 'Responsive, accessible design with delighting micro-interactions.',
    },
    {
      icon: <Award className="w-5 h-5 text-indigo-400" />,
      title: lang === 'id' ? 'Komitmen Kualitas' : 'Quality First',
      desc: lang === 'id' ? 'Pengujian menyeluruh dan perhatian mendalam pada setiap detail Piksel.' : 'Thorough testing and pixel-perfect attention to every UI detail.',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-zinc-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal preset={animPreset} direction="up">
            <span className={`px-4 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-700/60 ${activeTheme.textAccentClass} text-xs font-mono tracking-wider uppercase mb-3 inline-block shadow-sm`}>
              {lang === 'id' ? 'TENTANG SAYA' : 'ABOUT ME'}
            </span>
          </ScrollReveal>

          <ScrollReveal preset={animPreset} delay={0.1} direction="up">
            <h2 className={`text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 ${isArtistic ? 'font-serif-artistic' : ''}`}>
              {lang === 'id' ? 'Mengenal Lebih Dekat Dedikasi Saya' : 'Get to Know My Passion & Experience'}
            </h2>
          </ScrollReveal>

          <ScrollReveal preset={animPreset} delay={0.2} direction="up">
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              {profile.subRole}
            </p>
          </ScrollReveal>
        </div>

        {/* About Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Feature Card & Interactive Tabs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tab Navigation Buttons */}
            <ScrollReveal preset={animPreset} delay={0.1} direction="up">
              <div className="flex items-center gap-2 bg-zinc-900/80 p-1.5 rounded-2xl border border-zinc-800/80 max-w-md shadow-sm">
                <button
                  onClick={() => setActiveTab('story')}
                  className={`flex-1 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                    activeTab === 'story'
                      ? `bg-gradient-to-r ${activeTheme.accentClass} text-white shadow-md`
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {lang === 'id' ? 'Cerita Singkat' : 'My Story'}
                </button>
                <button
                  onClick={() => setActiveTab('values')}
                  className={`flex-1 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                    activeTab === 'values'
                      ? `bg-gradient-to-r ${activeTheme.accentClass} text-white shadow-md`
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {lang === 'id' ? 'Prinsip Kerja' : 'Core Values'}
                </button>
                <button
                  onClick={() => setActiveTab('tech')}
                  className={`flex-1 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                    activeTab === 'tech'
                      ? `bg-gradient-to-r ${activeTheme.accentClass} text-white shadow-md`
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {lang === 'id' ? 'Pendekatan' : 'Approach'}
                </button>
              </div>
            </ScrollReveal>

            {/* Tab Content Box */}
            <ScrollReveal preset={animPreset} delay={0.2} direction="up">
              <div className={`p-6 sm:p-8 rounded-3xl ${activeTheme.cardBgClass} border relative shadow-xl`}>
                
                {activeTab === 'story' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed"
                  >
                    <p>{profile.longBio}</p>
                    <p>
                      {lang === 'id'
                        ? 'Setiap baris kode yang saya tulis ditujukan untuk menyelesaikan masalah nyata, memberikan nilai bisnis bagi pengguna, serta menjaga skalabilitas produk jangka panjang.'
                        : 'Every line of code I write aims to solve real-world problems, deliver business value, and maintain long-term product scalability.'}
                    </p>
                    <div className="pt-4 flex flex-wrap items-center gap-3">
                      <span className="px-3 py-1 rounded-lg bg-fuchsia-500/10 text-fuchsia-400 border border-fuchsia-500/20 text-xs font-medium">
                        📍 {profile.location}
                      </span>
                      <span className="px-3 py-1 rounded-lg bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-medium">
                        💼 Full-Stack & UI/UX
                      </span>
                      <span className="px-3 py-1 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-medium">
                        🚀 Tech Enthusiast
                      </span>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'values' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                  >
                    {values.map((v, idx) => (
                      <div key={idx} className="p-4 rounded-2xl bg-zinc-950/70 border border-zinc-800">
                        <div className="mb-2">{v.icon}</div>
                        <h4 className="text-sm font-bold text-white mb-1">{v.title}</h4>
                        <p className="text-xs text-zinc-400 leading-relaxed">{v.desc}</p>
                      </div>
                    ))}
                  </motion.div>
                )}

                {activeTab === 'tech' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-3 font-mono text-xs text-zinc-300"
                  >
                    <div className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800">
                      <div className={`flex items-center gap-2 mb-2 ${activeTheme.textAccentClass}`}>
                        <Terminal className="w-4 h-4" />
                        <span className="font-bold">// Alur Kerja & Metodologi</span>
                      </div>
                      <ul className="space-y-2 pl-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                          <span>1. Riset & UI Architecture Wireframing (Figma)</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                          <span>2. Development dengan Component-Driven System</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                          <span>3. Smooth Framer Motion & Responsive Layouting</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                          <span>4. Optimasi Performa, SEO & Automated Testing</span>
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                )}

              </div>
            </ScrollReveal>

          </div>

          {/* Right Column: Key Highlights & Quick Card */}
          <div className="lg:col-span-5 space-y-6">
            
            <ScrollReveal preset={animPreset} delay={0.2} direction="up">
              <div className={`p-6 rounded-3xl ${activeTheme.cardBgClass} border relative overflow-hidden group shadow-xl`}>
                <div className="absolute top-0 right-0 p-8 bg-fuchsia-500/10 rounded-full blur-2xl group-hover:bg-fuchsia-500/20 transition-all pointer-events-none" />
                
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-2xl bg-fuchsia-500/20 ${activeTheme.textAccentClass}`}>
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {lang === 'id' ? 'Mengapa Bekerja Sama?' : 'Why Work With Me?'}
                    </h3>
                    <p className="text-xs text-zinc-400">
                      {lang === 'id' ? 'Nilai tambah untuk proyek Anda' : 'Value added for your project'}
                    </p>
                  </div>
                </div>

                <ul className="space-y-3 text-xs text-zinc-300">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                    <span>
                      {lang === 'id'
                        ? 'Komunikasi transparan & pembaruan kemajuan secara berkala.'
                        : 'Transparent communication & regular progress updates.'}
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0" />
                    <span>
                      {lang === 'id'
                        ? 'Kemampuan adaptasi cepat dengan stack & framework baru.'
                        : 'Fast adaptability with new frameworks & modern tech stack.'}
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400 mt-1.5 shrink-0" />
                    <span>
                      {lang === 'id'
                        ? 'Dukungan pemeliharaan kode pasca-peluncuran produk.'
                        : 'Post-launch code maintenance & performance support.'}
                    </span>
                  </li>
                </ul>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-zinc-400">
                    CV / Resume Version 2026
                  </span>
                  <a
                    href={profile.cvUrl}
                    download
                    className={`text-xs font-semibold text-white bg-gradient-to-r ${activeTheme.accentClass} px-3.5 py-1.5 rounded-xl transition-all inline-flex items-center gap-1.5 shadow-md`}
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>{lang === 'id' ? 'Buka Resume' : 'View Resume'}</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>

          </div>

        </div>

      </div>
    </section>
  );
};
