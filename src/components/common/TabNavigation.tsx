import React from 'react';
import { 
  BookOpen, 
  Calculator, 
  GitBranch, 
  ArrowLeftRight, 
  CheckSquare, 
  Zap, 
  BookMarked,
  Layers,
  Sparkles
} from 'lucide-react';
import { playCyberClick } from '../../utils/cyberAudio';

export interface TabItem {
  id: string;
  labelHi: string;
  labelEn: string;
  icon: React.ElementType;
  badge?: string;
}

interface TabNavigationProps {
  activeTab: string;
  onSelectTab: (tabId: string) => void;
}

export const MAIN_TABS: TabItem[] = [
  { id: 'theory', labelHi: 'अध्याय व्याख्या', labelEn: 'NCERT Theory', icon: BookOpen },
  { id: 'simulator', labelHi: 'साख प्रयोगशाला', labelEn: 'Credit Simulator', icon: Calculator, badge: 'Live AI' },
  { id: 'visualizers', labelHi: 'दृश्य फ्लोचार्ट्स', labelEn: 'Visual Architecture', icon: GitBranch },
  { id: 'numericals', labelHi: 'संख्यात्मक हल', labelEn: 'Formulas & Solved', icon: Layers },
  { id: 'differences', labelHi: 'महत्वपूर्ण अंतर', labelEn: 'Differences (8 Tables)', icon: ArrowLeftRight },
  { id: 'practice', labelHi: 'अभ्यास व बोर्ड प्रश्न', labelEn: 'Practice & Board Qs', icon: CheckSquare, badge: '20 MCQs' },
  { id: 'revision', labelHi: '3D फ्लैशकार्ड्स', labelEn: '3D Cards & Traps', icon: Zap, badge: '3D' },
  { id: 'glossary', labelHi: 'शब्दावली', labelEn: 'Glossary', icon: BookMarked }
];

export const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, onSelectTab }) => {
  return (
    <div className="bg-slate-950/80 backdrop-blur-xl border-b border-cyan-500/20 sticky top-14 sm:top-16 z-40 shadow-lg shadow-black/40">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto py-2.5 scrollbar-none touch-pan-x">
          {MAIN_TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  playCyberClick();
                  onSelectTab(tab.id);
                }}
                className={`relative flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition shrink-0 border whitespace-nowrap active:scale-95 cursor-pointer group ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 text-white border-cyan-400 shadow-lg shadow-cyan-500/30 font-bold'
                    : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:border-cyan-500/40 hover:text-cyan-200 hover:bg-slate-800/80'
                }`}
              >
                {isActive && (
                  <>
                    <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-white" />
                    <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-white" />
                  </>
                )}
                <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 transition-transform group-hover:scale-110 ${isActive ? 'text-white' : 'text-cyan-400'}`} />
                <span>{tab.labelHi}</span>
                {tab.badge && (
                  <span
                    className={`text-[9px] sm:text-[10px] px-1.5 py-0.2 rounded-md font-mono font-bold uppercase ${
                      isActive
                        ? 'bg-white/20 text-white border border-white/30'
                        : 'bg-cyan-950 text-cyan-300 border border-cyan-500/30'
                    }`}
                  >
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
