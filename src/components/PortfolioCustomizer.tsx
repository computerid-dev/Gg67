import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sliders, Sparkles, User, Palette, RefreshCw, Check, Download } from 'lucide-react';
import { ProfileData, Language, ThemeConfig, AnimationPreset } from '../types';
import { themePresets } from '../data/portfolioData';

interface PortfolioCustomizerProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
  onUpdateProfile: (updated: ProfileData) => void;
  activeTheme: ThemeConfig;
  onSelectTheme: (theme: ThemeConfig) => void;
  animPreset: AnimationPreset;
  onSelectAnimPreset: (preset: AnimationPreset) => void;
  lang: Language;
}

export const PortfolioCustomizer: React.FC<PortfolioCustomizerProps> = ({
  isOpen,
  onClose,
  profile,
  onUpdateProfile,
  activeTheme,
  onSelectTheme,
  animPreset,
  onSelectAnimPreset,
  lang,
}) => {
  const [editedProfile, setEditedProfile] = useState<ProfileData>(profile);
  const [activeTab, setActiveTab] = useState<'anim' | 'profile' | 'theme'>('anim');

  if (!isOpen) return null;

  const handleSaveProfile = () => {
    onUpdateProfile(editedProfile);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex justify-end">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs cursor-pointer"
        />

        {/* Drawer Content */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="relative w-full max-w-md bg-slate-900 border-l border-white/10 h-full overflow-y-auto z-10 flex flex-col justify-between shadow-2xl p-6"
        >
          <div>
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div className="flex items-center gap-2">
                <Sliders className="w-5 h-5 text-indigo-400" />
                <h3 className="text-base font-bold text-white">
                  {lang === 'id' ? 'Kustomisasi Portofolio' : 'Portfolio Studio Panel'}
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full bg-slate-800 text-slate-400 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Inner Navigation */}
            <div className="flex items-center gap-2 p-1 rounded-xl bg-slate-950 border border-slate-800 mb-6 text-xs font-semibold">
              <button
                onClick={() => setActiveTab('anim')}
                className={`flex-1 py-2 rounded-lg transition-colors flex items-center justify-center gap-1 cursor-pointer ${
                  activeTab === 'anim' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Animasi Scroll</span>
              </button>
              <button
                onClick={() => setActiveTab('profile')}
                className={`flex-1 py-2 rounded-lg transition-colors flex items-center justify-center gap-1 cursor-pointer ${
                  activeTab === 'profile' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                <User className="w-3.5 h-3.5" />
                <span>Edit Profil</span>
              </button>
              <button
                onClick={() => setActiveTab('theme')}
                className={`flex-1 py-2 rounded-lg transition-colors flex items-center justify-center gap-1 cursor-pointer ${
                  activeTab === 'theme' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Palette className="w-3.5 h-3.5" />
                <span>Tema Warna</span>
              </button>
            </div>

            {/* TAB 1: Animation Settings */}
            {activeTab === 'anim' && (
              <div className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    {lang === 'id' ? 'Gaya Efek Scroll Saat Dilihat:' : 'Scroll Reveal Effect:'}
                  </label>
                  <p className="text-[11px] text-slate-400 mb-4 leading-relaxed">
                    Setiap elemen pada website akan otomatis melakukan animasi fade-in & zoom saat di-scroll masuk/keluar layar.
                  </p>

                  <div className="space-y-2.5">
                    {[
                      {
                        id: 'zoom-in',
                        title: '✨ Zoom In (Rekomendasi)',
                        desc: 'Elemen membesar dari 82% ke 100% secara mulus disertai fade-in.',
                      },
                      {
                        id: 'zoom-out',
                        title: '🔍 Zoom Out',
                        desc: 'Elemen mengecil dari 125% ke 100% disertai fade-in.',
                      },
                      {
                        id: 'blur-zoom',
                        title: '🌫️ Blur Zoom',
                        desc: 'Efek lensa kamera: blur 12px & zoom-in saat muncul.',
                      },
                      {
                        id: 'flip-zoom',
                        title: '🔄 3D Flip Zoom',
                        desc: 'Efek rotasi 3D perspektif dengan kombinasi zoom.',
                      },
                      {
                        id: 'fade-up',
                        title: '⬆️ Classic Fade Up',
                        desc: 'Geser ke atas dengan fade-in standar.',
                      },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => onSelectAnimPreset(item.id as AnimationPreset)}
                        className={`w-full text-left p-3.5 rounded-2xl border transition-all cursor-pointer ${
                          animPreset === item.id
                            ? 'bg-indigo-600/20 border-indigo-500 text-white ring-1 ring-indigo-500'
                            : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-bold">{item.title}</span>
                          {animPreset === item.id && <Check className="w-4 h-4 text-indigo-400" />}
                        </div>
                        <p className="text-[10px] text-slate-400 leading-snug">{item.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: Live Profile Data Edit */}
            {activeTab === 'profile' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    value={editedProfile.name}
                    onChange={(e) => setEditedProfile({ ...editedProfile, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                    Role / Jabatan
                  </label>
                  <input
                    type="text"
                    value={editedProfile.role}
                    onChange={(e) => setEditedProfile({ ...editedProfile, role: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                    Lokasi
                  </label>
                  <input
                    type="text"
                    value={editedProfile.location}
                    onChange={(e) => setEditedProfile({ ...editedProfile, location: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                    Bio Singkat
                  </label>
                  <textarea
                    rows={3}
                    value={editedProfile.bio}
                    onChange={(e) => setEditedProfile({ ...editedProfile, bio: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs resize-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                    Email Contact
                  </label>
                  <input
                    type="email"
                    value={editedProfile.email}
                    onChange={(e) => setEditedProfile({ ...editedProfile, email: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                    WhatsApp Number
                  </label>
                  <input
                    type="text"
                    value={editedProfile.whatsapp}
                    onChange={(e) => setEditedProfile({ ...editedProfile, whatsapp: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs"
                  />
                </div>

                <button
                  onClick={handleSaveProfile}
                  className="w-full mt-2 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs"
                >
                  Simpan Perubahan Profil
                </button>
              </div>
            )}

            {/* TAB 3: Theme Presets */}
            {activeTab === 'theme' && (
              <div className="space-y-3">
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  Pilih Skema Warna Tema:
                </label>
                {themePresets.map((theme) => (
                  <button
                    key={theme.id}
                    onClick={() => onSelectTheme(theme)}
                    className={`w-full p-3.5 rounded-2xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                      activeTheme.id === theme.id
                        ? 'bg-indigo-600/20 border-indigo-500 text-white ring-1 ring-indigo-500'
                        : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div>
                      <p className="text-xs font-bold mb-1">{theme.name}</p>
                      <div className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-indigo-500" />
                        <span className="w-3 h-3 rounded-full bg-purple-500" />
                        <span className="w-3 h-3 rounded-full bg-pink-500" />
                      </div>
                    </div>
                    {activeTheme.id === theme.id && <Check className="w-4 h-4 text-indigo-400" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-white/10 text-center">
            <p className="text-[10px] text-slate-500 font-mono">
              Framer Motion Scroll Engine Active
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
