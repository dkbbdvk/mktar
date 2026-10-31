import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { ALL_CHAPTERS } from './content/chapterRegistry';
import { 
  MONEY_AND_BANKING_SECTIONS, 
  MONEY_AND_BANKING_FORMULAS, 
  MONEY_AND_BANKING_DIFFERENCES, 
  MONEY_AND_BANKING_MCQS, 
  MONEY_AND_BANKING_ASSERTION_REASON, 
  MONEY_AND_BANKING_CASE_STUDIES, 
  MONEY_AND_BANKING_BOARD_QUESTIONS, 
  MONEY_AND_BANKING_GLOSSARY, 
  REVISION_RELATIONSHIPS 
} from './content/chapters/money-and-banking';

import { Navbar } from './components/common/Navbar';
import { TabNavigation } from './components/common/TabNavigation';
import { Footer } from './components/common/Footer';

import { SectionViewer } from './components/theory/SectionViewer';
import { CreditCreationSimulator } from './components/simulator/CreditCreationSimulator';
import { MoneySupplyCalculator } from './components/simulator/MoneySupplyCalculator';
import { BankingArchitecture } from './components/visualizers/BankingArchitecture';
import { MonetaryPolicyTransmission } from './components/visualizers/MonetaryPolicyTransmission';
import { BarterVsMoneyFlow } from './components/visualizers/BarterVsMoneyFlow';
import { DifferenceTable } from './components/theory/DifferenceTable';
import { NumericalSolver } from './components/practice/NumericalSolver';
import { MCQQuiz } from './components/practice/MCQQuiz';
import { AssertionReasonQuiz } from './components/practice/AssertionReasonQuiz';
import { CaseStudyViewer } from './components/practice/CaseStudyViewer';
import { BoardQuestionsViewer } from './components/practice/BoardQuestionsViewer';
import { QuickRevisionCards } from './components/revision/QuickRevisionCards';
import { CommonMistakes } from './components/revision/CommonMistakes';
import { GlossaryViewer } from './components/glossary/GlossaryViewer';

import { 
  Sparkles, 
  GraduationCap, 
  Calculator, 
  BookOpen, 
  CheckCircle2, 
  Award,
  Layers,
  ArrowRight,
  ShieldCheck,
  UserCheck
} from 'lucide-react';

export const App: React.FC = () => {
  const [currentChapterId, setCurrentChapterId] = useState<string>('money-and-banking');
  const [activeTab, setActiveTab] = useState<string>('theory');
  const [practiceSubTab, setPracticeSubTab] = useState<'mcq' | 'ar' | 'case' | 'board'>('mcq');
  
  // Dialog modal state - starts open so user MUST click OK to enter website
  const [isWelcomeModalOpen, setIsWelcomeModalOpen] = useState<boolean>(true);

  const handleDismissModal = () => {
    setIsWelcomeModalOpen(false);
    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // ignore
    }
  };

  const currentChapter = ALL_CHAPTERS.find((c) => c.id === currentChapterId) || ALL_CHAPTERS[0];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans relative overflow-x-hidden">
      {/* ========================================================= */}
      {/* MANDATORY WELCOME DIALOG (MUKHTAR CREATOR POPUP)         */}
      {/* ========================================================= */}
      {isWelcomeModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md transition-all duration-300">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-5 sm:p-7 border border-slate-200 text-center space-y-4 sm:space-y-5 relative overflow-hidden max-h-[92vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
            {/* Background Decorative Glow */}
            <div className="absolute -right-12 -top-12 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -left-12 -bottom-12 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

            {/* Icon Header */}
            <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-blue-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/30 shrink-0">
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>

            {/* Text Content */}
            <div className="space-y-2 sm:space-y-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                <UserCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> आधिकारिक सूचना (Official Notice)
              </span>

              <h2 className="text-xl sm:text-2xl font-extrabold font-heading text-slate-900 leading-tight">
                यह वेबसाइट <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">मुख्तार</span> द्वारा बनाया गया है।
              </h2>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Class 12 CBSE Economics – <strong>Money and Banking (मुद्रा और बैंकिंग)</strong> के संपूर्ण इंटरएक्टिव लर्निंग प्लेटफॉर्म में आपका स्वागत है।
              </p>
            </div>

            {/* Features preview pill list */}
            <div className="bg-slate-50 rounded-2xl p-3 border border-slate-100 grid grid-cols-2 gap-1.5 text-left text-[11px] sm:text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="truncate">साख निर्माण सिमुलेटर</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="truncate">20 बोर्ड MCQs</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="truncate">बैंकिंग आर्किटेक्चर</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="truncate">100% NCERT नोट्स</span>
              </div>
            </div>

            {/* Mandatory OK Button */}
            <button
              onClick={handleDismissModal}
              className="w-full py-3 sm:py-3.5 px-5 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-500/25 active:scale-[0.98] transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer touch-manipulation"
            >
              <span>OK (ठीक है - वेबसाइट खोलें)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Top Navigation */}
      <Navbar
        chapters={ALL_CHAPTERS}
        currentChapterId={currentChapterId}
        onSelectChapter={setCurrentChapterId}
        activeTab={activeTab}
        onSelectTab={setActiveTab}
      />

      {/* Main Tab Bar */}
      <TabNavigation activeTab={activeTab} onSelectTab={setActiveTab} />

      {/* Hero Welcome Bar */}
      <div className="bg-gradient-to-b from-blue-900 to-indigo-950 text-white py-6 sm:py-10 px-3 sm:px-6 lg:px-8 border-b border-indigo-900 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div className="space-y-2 sm:space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-[10px] sm:text-xs font-semibold uppercase tracking-wider">
              <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
              CBSE Class 12 समष्टि अर्थशास्त्र • Unit 2
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              {currentChapter.titleHi}
            </h1>
            <div className="text-sm sm:text-lg text-blue-200 font-medium">
              {currentChapter.titleEn}
            </div>
            <p className="text-xs sm:text-base text-blue-100 leading-relaxed pt-0.5">
              {currentChapter.descriptionHi}
            </p>
            <div className="text-[11px] sm:text-xs text-blue-300 font-medium flex items-center gap-2 pt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
              <span>वेबसाइट निर्माता: <strong>मुख्तार (Mukhtar)</strong></span>
            </div>
          </div>

          {/* Quick Stats Pills */}
          <div className="grid grid-cols-4 md:grid-cols-2 gap-2 sm:gap-3 shrink-0">
            <div className="p-2 sm:p-3.5 bg-white/10 rounded-xl sm:rounded-2xl backdrop-blur-xs border border-white/10 text-center">
              <div className="text-lg sm:text-2xl font-black text-amber-300">9</div>
              <div className="text-[9px] sm:text-[11px] text-blue-200 uppercase font-bold truncate">थ्योरी खंड</div>
            </div>
            <div className="p-2 sm:p-3.5 bg-white/10 rounded-xl sm:rounded-2xl backdrop-blur-xs border border-white/10 text-center">
              <div className="text-lg sm:text-2xl font-black text-emerald-300">20+</div>
              <div className="text-[9px] sm:text-[11px] text-blue-200 uppercase font-bold truncate">बोर्ड MCQs</div>
            </div>
            <div className="p-2 sm:p-3.5 bg-white/10 rounded-xl sm:rounded-2xl backdrop-blur-xs border border-white/10 text-center">
              <div className="text-lg sm:text-2xl font-black text-cyan-300">8</div>
              <div className="text-[9px] sm:text-[11px] text-blue-200 uppercase font-bold truncate">अंतर सारणियाँ</div>
            </div>
            <div className="p-2 sm:p-3.5 bg-white/10 rounded-xl sm:rounded-2xl backdrop-blur-xs border border-white/10 text-center">
              <div className="text-lg sm:text-2xl font-black text-purple-300">100%</div>
              <div className="text-[9px] sm:text-[11px] text-blue-200 uppercase font-bold truncate">NCERT हल</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Dynamic Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 lg:px-8 py-5 sm:py-8">
        {/* TAB 1: Theory Master */}
        {activeTab === 'theory' && (
          <div className="space-y-6 sm:space-y-8 animate-fadeIn">
            <SectionViewer sections={MONEY_AND_BANKING_SECTIONS} />
          </div>
        )}

        {/* TAB 2: Credit Creation Simulator */}
        {activeTab === 'simulator' && (
          <div className="space-y-8 sm:space-y-10 animate-fadeIn">
            <CreditCreationSimulator />
            <MoneySupplyCalculator />
          </div>
        )}

        {/* TAB 3: Visual Flowcharts & Architecture */}
        {activeTab === 'visualizers' && (
          <div className="space-y-8 sm:space-y-10 animate-fadeIn">
            <BankingArchitecture />
            <MonetaryPolicyTransmission />
            <BarterVsMoneyFlow />
          </div>
        )}

        {/* TAB 4: Numericals & Solved Step-by-Step */}
        {activeTab === 'numericals' && (
          <div className="space-y-8 sm:space-y-10 animate-fadeIn">
            <NumericalSolver formulas={MONEY_AND_BANKING_FORMULAS} />
            <MoneySupplyCalculator />
          </div>
        )}

        {/* TAB 5: Differences (8 Comparison Tables) */}
        {activeTab === 'differences' && (
          <div className="space-y-6 sm:space-y-8 animate-fadeIn">
            <DifferenceTable tables={MONEY_AND_BANKING_DIFFERENCES} />
          </div>
        )}

        {/* TAB 6: Practice & Board Questions */}
        {activeTab === 'practice' && (
          <div className="space-y-6 sm:space-y-8 animate-fadeIn">
            {/* Sub-tab switcher - mobile horizontal scrolling */}
            <div className="flex items-center gap-1.5 p-1.5 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-x-auto scrollbar-none whitespace-nowrap">
              <button
                onClick={() => setPracticeSubTab('mcq')}
                className={`text-xs sm:text-sm px-3.5 py-2 rounded-xl font-bold transition shrink-0 ${
                  practiceSubTab === 'mcq'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                20 MCQs (क्विज)
              </button>
              <button
                onClick={() => setPracticeSubTab('ar')}
                className={`text-xs sm:text-sm px-3.5 py-2 rounded-xl font-bold transition shrink-0 ${
                  practiceSubTab === 'ar'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                अभिकथन-कारण (A&R)
              </button>
              <button
                onClick={() => setPracticeSubTab('case')}
                className={`text-xs sm:text-sm px-3.5 py-2 rounded-xl font-bold transition shrink-0 ${
                  practiceSubTab === 'case'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                केस-स्टडी प्रश्न
              </button>
              <button
                onClick={() => setPracticeSubTab('board')}
                className={`text-xs sm:text-sm px-3.5 py-2 rounded-xl font-bold transition shrink-0 ${
                  practiceSubTab === 'board'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                1, 2, 3, 4, 6 Marks प्रश्न
              </button>
            </div>

            {/* Sub-tab view */}
            {practiceSubTab === 'mcq' && <MCQQuiz questions={MONEY_AND_BANKING_MCQS} />}
            {practiceSubTab === 'ar' && (
              <AssertionReasonQuiz questions={MONEY_AND_BANKING_ASSERTION_REASON} />
            )}
            {practiceSubTab === 'case' && (
              <CaseStudyViewer caseStudies={MONEY_AND_BANKING_CASE_STUDIES} />
            )}
            {practiceSubTab === 'board' && (
              <BoardQuestionsViewer questions={MONEY_AND_BANKING_BOARD_QUESTIONS} />
            )}
          </div>
        )}

        {/* TAB 7: Quick Revision Notes & Traps */}
        {activeTab === 'revision' && (
          <div className="space-y-8 sm:space-y-10 animate-fadeIn">
            <QuickRevisionCards relationships={REVISION_RELATIONSHIPS} />
            <CommonMistakes />
          </div>
        )}

        {/* TAB 8: Glossary */}
        {activeTab === 'glossary' && (
          <div className="space-y-6 sm:space-y-8 animate-fadeIn">
            <GlossaryViewer terms={MONEY_AND_BANKING_GLOSSARY} />
          </div>
        )}
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export default App;
