import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Clock, MessageSquare, ExternalLink } from 'lucide-react';
import { ProfileData, Language, AnimationPreset, ThemeConfig } from '../types';
import { ScrollReveal } from './ScrollReveal';

interface ContactSectionProps {
  profile: ProfileData;
  lang: Language;
  animPreset: AnimationPreset;
  activeTheme: ThemeConfig;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile, lang, animPreset, activeTheme }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const isArtistic = activeTheme.id === 'artistic-flair';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-zinc-950/60">
      {/* Glow Orbs */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] blur-[150px] rounded-full pointer-events-none opacity-30 transition-all duration-700"
        style={{ backgroundColor: activeTheme.glowColor }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal preset={animPreset} direction="up">
            <span className={`px-4 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-700/60 ${activeTheme.textAccentClass} text-xs font-mono tracking-wider uppercase mb-3 inline-block shadow-sm`}>
              {lang === 'id' ? 'HUBUNGI SAYA' : 'GET IN TOUCH'}
            </span>
          </ScrollReveal>

          <ScrollReveal preset={animPreset} delay={0.1} direction="up">
            <h2 className={`text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 ${isArtistic ? 'font-serif-artistic' : ''}`}>
              {lang === 'id' ? 'Mari Mulai Diskusi Proyek Anda' : 'Let us Build Something Great Together'}
            </h2>
          </ScrollReveal>

          <ScrollReveal preset={animPreset} delay={0.2} direction="up">
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              {lang === 'id'
                ? 'Punya ide proyek menarik atau ingin berkonsultasi? Kirim pesan atau hubungi melalui WhatsApp.'
                : 'Have a project proposal, freelance job, or consultation inquiry? Drop me a message below.'}
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <ScrollReveal preset={animPreset} delay={0.1} direction="up">
              <div className={`p-6 rounded-3xl ${activeTheme.cardBgClass} border backdrop-blur-md space-y-6 shadow-xl`}>
                
                <h3 className={`text-lg font-bold text-white mb-2 ${isArtistic ? 'font-serif-artistic' : ''}`}>
                  {lang === 'id' ? 'Informasi Kontak Direct' : 'Direct Contact Channels'}
                </h3>

                {/* Email Item */}
                <div className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className={`p-2.5 rounded-xl bg-fuchsia-500/20 ${activeTheme.textAccentClass} shrink-0`}>
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-[10px] text-zinc-500 font-mono uppercase">Email</p>
                      <p className="text-xs font-medium text-zinc-200 truncate">{profile.email}</p>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl bg-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-700 transition-colors shrink-0 cursor-pointer"
                    title="Salin Email"
                  >
                    {copiedEmail ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* WhatsApp Item */}
                <div className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400 shrink-0">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] text-zinc-500 font-mono uppercase">WhatsApp</p>
                      <p className="text-xs font-medium text-zinc-200">{profile.whatsapp}</p>
                    </div>
                  </div>
                  <a
                    href={`https://wa.me/${profile.whatsapp.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center gap-1 transition-colors"
                  >
                    <span>Chat</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* Location Item */}
                <div className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800 flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-rose-500/20 text-rose-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-zinc-500 font-mono uppercase">Lokasi</p>
                    <p className="text-xs font-medium text-zinc-200">{profile.location}</p>
                  </div>
                </div>

                {/* Response Time Notice */}
                <div className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800 flex items-center gap-3">
                  <Clock className={`w-5 h-5 ${activeTheme.textAccentClass} shrink-0`} />
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {lang === 'id'
                      ? 'Waktu balasan rata-rata: kurang dari 2 jam di hari kerja.'
                      : 'Average response time: under 2 hours during business days.'}
                  </p>
                </div>

              </div>
            </ScrollReveal>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ScrollReveal preset={animPreset} delay={0.2} direction="up">
              <div className={`p-8 rounded-3xl ${activeTheme.cardBgClass} border backdrop-blur-md relative shadow-xl`}>
                
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className={`text-2xl font-bold text-white ${isArtistic ? 'font-serif-artistic' : ''}`}>
                      {lang === 'id' ? 'Pesan Terkirim!' : 'Message Sent Successfully!'}
                    </h3>
                    <p className="text-zinc-300 text-sm max-w-md mx-auto leading-relaxed">
                      {lang === 'id'
                        ? `Terima kasih ${formData.name}, pesan Anda telah diterima. Saya akan segera menghubungi Anda kembali melalui ${formData.email}.`
                        : `Thank you ${formData.name}, your inquiry has been received. I will reply shortly to ${formData.email}.`}
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-6 py-2.5 rounded-xl bg-zinc-800 text-zinc-200 hover:text-white text-xs font-semibold cursor-pointer transition-colors"
                    >
                      {lang === 'id' ? 'Kirim Pesan Lain' : 'Send Another Message'}
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h3 className={`text-lg font-bold text-white mb-2 ${isArtistic ? 'font-serif-artistic' : ''}`}>
                      {lang === 'id' ? 'Formulir Kontak Direct' : 'Send a Message'}
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-zinc-300 mb-2">
                          {lang === 'id' ? 'Nama Lengkap *' : 'Full Name *'}
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Budi Wijaya"
                          className="w-full px-4 py-3 rounded-xl bg-zinc-950/80 border border-zinc-800 text-white text-xs focus:outline-none focus:border-amber-500 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-zinc-300 mb-2">
                          {lang === 'id' ? 'Alamat Email *' : 'Email Address *'}
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@example.com"
                          className="w-full px-4 py-3 rounded-xl bg-zinc-950/80 border border-zinc-800 text-white text-xs focus:outline-none focus:border-amber-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-2">
                        {lang === 'id' ? 'Subjek / Jenis Layanan' : 'Subject / Project Type'}
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="e.g. Pembuatan Website SaaS / Konsultasi UI UX"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950/80 border border-zinc-800 text-white text-xs focus:outline-none focus:border-amber-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-2">
                        {lang === 'id' ? 'Detail Pesan *' : 'Message Details *'}
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tuliskan detail kebutuhan proyek atau pertanyaan Anda di sini..."
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950/80 border border-zinc-800 text-white text-xs focus:outline-none focus:border-amber-500 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className={`w-full py-3.5 rounded-xl bg-gradient-to-r ${activeTheme.accentClass} text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer`}
                    >
                      <Send className="w-4 h-4" />
                      <span>{lang === 'id' ? 'Kirim Pesan Sekarang' : 'Send Message Now'}</span>
                    </button>
                  </form>
                )}

              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
};
