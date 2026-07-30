import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Testimonial, Language, AnimationPreset, ThemeConfig } from '../types';
import { ScrollReveal } from './ScrollReveal';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  lang: Language;
  animPreset: AnimationPreset;
  activeTheme: ThemeConfig;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials, lang, animPreset, activeTheme }) => {
  const isArtistic = activeTheme.id === 'artistic-flair';

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-zinc-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal preset={animPreset} direction="up">
            <span className={`px-4 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-700/60 ${activeTheme.textAccentClass} text-xs font-mono tracking-wider uppercase mb-3 inline-block shadow-sm`}>
              {lang === 'id' ? 'ULASAN & REKOMENDASI' : 'TESTIMONIALS'}
            </span>
          </ScrollReveal>

          <ScrollReveal preset={animPreset} delay={0.1} direction="up">
            <h2 className={`text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 ${isArtistic ? 'font-serif-artistic' : ''}`}>
              {lang === 'id' ? 'Kata Mereka Tentang Hasil Kerja Saya' : 'What Clients & Collaborators Say'}
            </h2>
          </ScrollReveal>

          <ScrollReveal preset={animPreset} delay={0.2} direction="up">
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              {lang === 'id'
                ? 'Testimoni langsung dari pimpinan proyek dan mitra kerja yang telah mempercayakan aplikasi mereka.'
                : 'Real feedback from team leaders, product owners, and engineering managers.'}
            </p>
          </ScrollReveal>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <ScrollReveal
              key={item.id}
              preset={animPreset}
              delay={0.1 * index}
              direction="up"
            >
              <div className={`p-8 rounded-3xl ${activeTheme.cardBgClass} border relative flex flex-col justify-between h-full transition-all group hover:-translate-y-1 shadow-xl`}>
                
                <Quote className="absolute top-6 right-6 w-8 h-8 text-zinc-800 group-hover:text-amber-500/20 transition-colors pointer-events-none" />

                <div>
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 mb-6 text-amber-400">
                    {Array.from({ length: item.rating }).map((_, rIdx) => (
                      <Star key={rIdx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Content Quote */}
                  <p className="text-zinc-300 text-sm leading-relaxed mb-8 italic">
                    "{item.content}"
                  </p>
                </div>

                {/* Client Profile */}
                <div className="flex items-center gap-3 pt-6 border-t border-zinc-800">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-11 h-11 rounded-full object-cover border-2 border-fuchsia-500/40"
                  />
                  <div>
                    <h4 className={`text-sm font-bold text-white transition-colors ${isArtistic ? 'font-serif-artistic' : ''}`}>
                      {item.name}
                    </h4>
                    <p className="text-xs text-zinc-400">
                      {item.role}, <span className={`${activeTheme.textAccentClass} font-semibold`}>{item.company}</span>
                    </p>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
