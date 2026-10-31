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
  activeTab,
  onSelectTab
}) => {
  const [isChapterDropdownOpen, setIsChapterDropdownOpen] = useState<boolean>(false);

  const currentChapter = chapters.find((c) => c.id === currentChapterId) || chapters[0];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Brand Logo & Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
              <Landmark className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading font-black text-lg md:text-xl text-slate-900 tracking-tight">
                  EconMaster<span className="text-blue-600">12</span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-full hidden sm:inline">
                  CBSE Class 12
                </span>
              </div>
              <div className="text-[11px] text-slate-500 font-medium">
                समष्टि अर्थशास्त्र (Macroeconomics)
              </div>
            </div>
          </div>

          {/* Chapter Selector Dropdown (Scalable Content Architecture!) */}
          <div className="relative">
            <button
              onClick={() => setIsChapterDropdownOpen(!isChapterDropdownOpen)}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200/80 transition text-xs md:text-sm font-bold text-slate-800 border border-slate-200"
            >
              <span className="text-blue-600">अध्याय {currentChapter.number}:</span>
              <span className="truncate max-w-[150px] sm:max-w-xs">{currentChapter.titleHi}</span>
              <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${isChapterDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {isChapterDropdownOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setIsChapterDropdownOpen(false)}
                />
                <div className="absolute right-0 mt-2 w-80 md:w-96 rounded-2xl bg-white border border-slate-200 shadow-xl z-50 p-2 space-y-1">
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
                      className={`w-full p-3 rounded-xl text-left transition flex items-start justify-between gap-2 ${
                        ch.id === currentChapterId
                          ? 'bg-blue-50 text-blue-900 font-bold border border-blue-200'
                          : ch.available
                          ? 'hover:bg-slate-50 text-slate-800'
                          : 'opacity-50 cursor-not-allowed bg-slate-50/50 text-slate-400'
                      }`}
                    >
                      <div className="space-y-0.5">
                        <div className="text-xs font-semibold">
                          अध्याय {ch.number}: {ch.titleHi}
                        </div>
                        <div className="text-[11px] text-slate-500">{ch.titleEn}</div>
                      </div>
                      {ch.available ? (
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 shrink-0">
                          Active
                        </span>
                      ) : (
                        <span className="text-[10px] font-medium text-slate-400 bg-slate-100 px-2 py-0.5 rounded flex items-center gap-1 shrink-0">
                          <Lock className="w-3 h-3" /> Phase 2
                        </span>
                      )}
                    </button>
                  ))}
                  <div className="p-2 text-[11px] text-slate-500 text-center bg-slate-50 rounded-xl border border-slate-100 italic">
                    * वर्तमान में फेज 1: "मुद्रा और बैंकिंग" पूर्णतः सक्रिय है। अन्य अध्याय स्केलेबल आर्किटेक्चर के तहत तैयार हैं।
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
