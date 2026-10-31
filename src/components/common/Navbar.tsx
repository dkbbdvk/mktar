import React, { useState } from 'react';
import { ChapterManifest } from '../../types/chapter';
import { Landmark, ChevronDown, Sparkles, BookOpen, Layers, CheckCircle2, Lock } from 'lucide-react';

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

  const currentChapter = chapters.find((c) => c.id === currentChapterId) || chapters[0];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 gap-2">
          {/* Brand Logo & Title */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-blue-700 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 shrink-0">
              <Landmark className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-heading font-black text-base sm:text-lg md:text-xl text-slate-900 tracking-tight">
                  EconMaster<span className="text-blue-600">12</span>
                </span>
                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-1.5 sm:px-2 py-0.5 rounded-full hidden xs:inline">
                  CBSE
                </span>
              </div>
              <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium truncate max-w-[140px] sm:max-w-none">
                मुद्रा और बैंकिंग
              </div>
            </div>
          </div>

          {/* Chapter Selector Dropdown (Scalable Content Architecture!) */}
          <div className="relative">
            <button
              onClick={() => setIsChapterDropdownOpen(!isChapterDropdownOpen)}
              className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl bg-slate-100 hover:bg-slate-200/80 transition text-xs sm:text-sm font-bold text-slate-800 border border-slate-200 max-w-[170px] sm:max-w-xs"
            >
              <span className="text-blue-600 shrink-0">अध्याय {currentChapter.number}:</span>
              <span className="truncate">{currentChapter.titleHi}</span>
              <ChevronDown className={`w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-500 shrink-0 transition-transform ${isChapterDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu - Mobile Safe */}
            {isChapterDropdownOpen && (
              <>
                <div
                  className="fixed inset-0 z-40 bg-slate-950/20 backdrop-blur-xs"
                  onClick={() => setIsChapterDropdownOpen(false)}
                />
                <div className="absolute right-0 mt-2 w-[calc(100vw-1.5rem)] sm:w-96 rounded-2xl bg-white border border-slate-200 shadow-xl z-50 p-2 space-y-1 max-h-[80vh] overflow-y-auto">
                  <div className="px-3 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                    अर्थशास्त्र पाठ्यक्रम (Syllabus Chapters)
                  </div>
                  {chapters.map((ch) => (
                    <button
                      key={ch.id}
                      disabled={!ch.available}
                      onClick={() => {
                        if (ch.available) {
                          onSelectChapter(ch.id);
                          setIsChapterDropdownOpen(false);
                        }
                      }}
                      className={`w-full p-2.5 sm:p-3 rounded-xl text-left transition flex items-start justify-between gap-2 ${
                        ch.id === currentChapterId
                          ? 'bg-blue-50 text-blue-900 font-bold border border-blue-200'
                          : ch.available
                          ? 'hover:bg-slate-50 text-slate-800'
                          : 'opacity-50 cursor-not-allowed bg-slate-50/50 text-slate-400'
                      }`}
                    >
                      <div className="space-y-0.5 min-w-0">
                        <div className="text-xs font-semibold truncate">
                          अध्याय {ch.number}: {ch.titleHi}
                        </div>
                        <div className="text-[10px] sm:text-[11px] text-slate-500 truncate">{ch.titleEn}</div>
                      </div>
                      {ch.available ? (
                        <span className="text-[9px] sm:text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 shrink-0">
                          Active
                        </span>
                      ) : (
                        <span className="text-[9px] sm:text-[10px] font-medium text-slate-400 bg-slate-100 px-2 py-0.5 rounded flex items-center gap-1 shrink-0">
                          <Lock className="w-3 h-3" /> Phase 2
                        </span>
                      )}
                    </button>
                  ))}
                  <div className="p-2 text-[10px] sm:text-[11px] text-slate-500 text-center bg-slate-50 rounded-xl border border-slate-100 italic">
                    * फेज 1: "मुद्रा और बैंकिंग" सक्रिय है।
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
