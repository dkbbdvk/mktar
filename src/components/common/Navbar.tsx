import React, { useState } from 'react';
import { ChapterManifest } from '../../types/chapter';
import { 
  Landmark, 
  ChevronDown, 
  Sparkles, 
  Lock, 
  Volume2, 
  VolumeX, 
  Cpu, 
  Radio, 
  ShieldCheck 
} from 'lucide-react';
import { playCyberClick, toggleSfx, getSfxStatus } from '../../utils/cyberAudio';

interface NavbarProps {
  chapters: ChapterManifest[];
  currentChapterId: string;
  onSelectChapter: (id: string) => void;
  activeTab: string;
  onSelectTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  chapters,
  currentChapterId,
  onSelectChapter,
}) => {
  const [isChapterDropdownOpen, setIsChapterDropdownOpen] = useState<boolean>(false);
  const [sfxActive, setSfxActive] = useState<boolean>(getSfxStatus());

  const currentChapter = chapters.find((c) => c.id === currentChapterId) || chapters[0];

  const handleToggleSfx = () => {
    const next = toggleSfx();
    setSfxActive(next);
    if (next) playCyberClick();
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-2xl border-b border-cyan-500/30 shadow-xl shadow-cyan-950/40">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 gap-2">
          {/* Brand Logo & Futuristic HUD Identity */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <div className="relative group">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-cyan-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/30 shrink-0 border border-cyan-400/50 group-hover:shadow-cyan-400/50 transition-all duration-300">
                <Landmark className="w-5 h-5 text-cyan-200 animate-pulse" />
              </div>
              {/* Corner tech accents */}
              <span className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-cyan-400" />
              <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-purple-400" />
            </div>

            <div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-heading font-black text-base sm:text-xl text-white tracking-tight">
                  EconMaster<span className="text-cyan-400 neon-text-cyan">12</span>
                </span>
                <span className="text-[9px] sm:text-[10px] font-mono font-bold tracking-widest text-cyan-300 bg-cyan-950/80 border border-cyan-500/40 px-1.5 py-0.5 rounded-full flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping inline-block" />
                  NEURAL
                </span>
              </div>
              <div className="text-[10px] sm:text-[11px] text-cyan-200/70 font-mono truncate max-w-[150px] sm:max-w-none flex items-center gap-1">
                <span>मुद्रा और बैंकिंग</span>
                <span className="text-cyan-500">•</span>
                <span className="text-slate-400">Class 12</span>
              </div>
            </div>
          </div>

          {/* Right Controls: SFX Sound FX Toggle & Chapter Selector */}
          <div className="flex items-center gap-2">
            {/* Sci-Fi UI Sound Effects Toggle */}
            <button
              onClick={handleToggleSfx}
              className={`p-2 rounded-xl text-xs font-mono font-bold flex items-center gap-1.5 border transition cursor-pointer ${
                sfxActive
                  ? 'bg-cyan-950/60 border-cyan-500/50 text-cyan-300 shadow-sm shadow-cyan-500/20'
                  : 'bg-slate-900 border-slate-700 text-slate-500'
              }`}
              title={sfxActive ? 'साइबर साउंड इफेक्ट्स चालू हैं (Click to Mute SFX)' : 'साइबर साउंड इफेक्ट्स बंद हैं (Click to Unmute SFX)'}
            >
              {sfxActive ? <Volume2 className="w-3.5 h-3.5 text-cyan-400" /> : <VolumeX className="w-3.5 h-3.5" />}
              <span className="hidden md:inline">{sfxActive ? 'SFX ON' : 'SFX OFF'}</span>
            </button>

            {/* Chapter Selector Dropdown (Hologram Styled) */}
            <div className="relative">
              <button
                onClick={() => {
                  playCyberClick();
                  setIsChapterDropdownOpen(!isChapterDropdownOpen);
                }}
                className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-cyan-100 transition text-xs sm:text-sm font-bold border border-cyan-500/30 max-w-[170px] sm:max-w-xs cursor-pointer shadow-md shadow-cyan-950/50"
              >
                <Cpu className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span className="text-cyan-400 shrink-0">Ch {currentChapter.number}:</span>
                <span className="truncate">{currentChapter.titleHi}</span>
                <ChevronDown className={`w-3.5 h-3.5 text-cyan-400 shrink-0 transition-transform duration-200 ${isChapterDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {isChapterDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-xs"
                    onClick={() => setIsChapterDropdownOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 w-[calc(100vw-1.5rem)] sm:w-96 rounded-2xl bg-slate-950/95 border border-cyan-500/40 shadow-2xl shadow-cyan-950 z-50 p-2 space-y-1 max-h-[80vh] overflow-y-auto backdrop-blur-2xl">
                    <div className="px-3 py-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest border-b border-cyan-900/50 flex items-center justify-between">
                      <span>पाठ्यक्रम डेटाबेस (SYLLABUS_INDEX)</span>
                      <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                    </div>
                    {chapters.map((ch) => (
                      <button
                        key={ch.id}
                        disabled={!ch.available}
                        onClick={() => {
                          if (ch.available) {
                            playCyberClick();
                            onSelectChapter(ch.id);
                            setIsChapterDropdownOpen(false);
                          }
                        }}
                        className={`w-full p-2.5 sm:p-3 rounded-xl text-left transition flex items-start justify-between gap-2 cursor-pointer ${
                          ch.id === currentChapterId
                            ? 'bg-cyan-950/80 text-cyan-200 font-bold border border-cyan-500/50 shadow-inner'
                            : ch.available
                            ? 'hover:bg-slate-900 text-slate-300'
                            : 'opacity-40 cursor-not-allowed bg-slate-950/50 text-slate-500'
                        }`}
                      >
                        <div className="space-y-0.5 min-w-0">
                          <div className="text-xs font-semibold truncate text-white">
                            अध्याय {ch.number}: {ch.titleHi}
                          </div>
                          <div className="text-[10px] sm:text-[11px] text-cyan-400/70 font-mono truncate">{ch.titleEn}</div>
                        </div>
                        {ch.available ? (
                          <span className="text-[9px] sm:text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30 shrink-0">
                            ONLINE
                          </span>
                        ) : (
                          <span className="text-[9px] sm:text-[10px] font-medium text-slate-500 bg-slate-900 px-2 py-0.5 rounded flex items-center gap-1 shrink-0">
                            <Lock className="w-3 h-3" /> LOCKED
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
