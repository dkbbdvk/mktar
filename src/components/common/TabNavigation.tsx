import React from 'react';
import { 
  BookOpen, 
  Calculator, 
  GitBranch, 
  ArrowLeftRight, 
  CheckSquare, 
  Zap, 
  BookMarked,
  Layers
} from 'lucide-react';

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
  { id: 'simulator', labelHi: 'साख निर्माण प्रयोगशाला', labelEn: 'Credit Simulator', icon: Calculator, badge: 'Live' },
  { id: 'visualizers', labelHi: 'दृश्य फ्लोचार्ट्स', labelEn: 'Visual Architecture', icon: GitBranch },
  { id: 'numericals', labelHi: 'संख्यात्मक हल', labelEn: 'Formulas & Solved', icon: Layers },
  { id: 'differences', labelHi: 'महत्वपूर्ण अंतर', labelEn: 'Differences (8 Tables)', icon: ArrowLeftRight },
  { id: 'practice', labelHi: 'अभ्यास व बोर्ड प्रश्न', labelEn: 'Practice & Board Qs', icon: CheckSquare, badge: '20 MCQs' },
  { id: 'revision', labelHi: 'रिवीजन नोट्स', labelEn: 'Cheat-Sheet & Traps', icon: Zap },
  { id: 'glossary', labelHi: 'शब्दावली', labelEn: 'Glossary', icon: BookMarked }
];

export const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, onSelectTab }) => {
  return (
    <div className="bg-white border-b border-slate-200 sticky top-14 sm:top-16 z-40 shadow-xs">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto py-2 scrollbar-none touch-pan-x">
          {MAIN_TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onSelectTab(tab.id)}
                className={`flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold transition shrink-0 border whitespace-nowrap active:scale-95 ${
                  isActive
                    ? 'bg-blue-600 text-white border-blue-600 shadow-sm shadow-blue-500/20'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span>{tab.labelHi}</span>
                {tab.badge && (
                  <span
                    className={`text-[9px] sm:text-[10px] px-1.5 py-0.2 rounded-md font-bold uppercase ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-blue-100 text-blue-700'
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
