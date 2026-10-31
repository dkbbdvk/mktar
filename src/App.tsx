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
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // ignore
    }
  };

  const currentChapter = ALL_CHAPTERS.find((c) => c.id === currentChapterId) || ALL_CHAPTERS[0];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans relative">
      {/* ========================================================= */}
      {/* MANDATORY WELCOME DIALOG (MUKHTAR CREATOR POPUP)         */}
      {/* ========================================================= */}
      {isWelcomeModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md transition-all duration-300">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-6 md:p-8 border border-slate-200 text-center space-y-6 relative overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* Background Decorative Glow */}
            <div className="absolute -right-12 -top-12 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -left-12 -bottom-12 w-40 h-40 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

            {/* Icon Header */}
            <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-blue-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
              <Sparkles className="w-8 h-8" />
            </div>

            {/* Text Content */}
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
                <UserCheck className="w-3.5 h-3.5" /> आधिकारिक सूचना (Official Notice)
              </span>

              <h2 className="text-2xl font-extrabold font-heading text-slate-900 leading-tight">
                यह वेबसाइट <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">मुख्तार</span> द्वारा बनाया गया है।
              </h2>

              <p className="text-slate-600 text-sm leading-relaxed">
                Class 12 CBSE Economics – <strong>Money and Banking (मुद्रा और बैंकिंग)</strong> के संपूर्ण इंटरएक्टिव लर्निंग प्लेटफॉर्म में आपका स्वागत है।
              </p>
            </div>

            {/* Features preview pill list */}
            <div className="bg-slate-50 rounded-2xl p-3.5 border border-slate-100 grid grid-cols-2 gap-2 text-left text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>साख निर्माण सिमुलेटर</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>20 बोर्ड MCQs</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>बैंकिंग आर्किटेक्चर</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>100% NCERT नोट्स</span>
              </div>
            </div>

            {/* Mandatory OK Button */}
            <button
              onClick={handleDismissModal}
              className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold text-base shadow-lg shadow-blue-500/25 active:scale-[0.98] transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer"
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
      <div className="bg-gradient-to-b from-blue-900 to-indigo-950 text-white py-10 px-4 sm:px-6 lg:px-8 border-b border-indigo-900 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider">
              <GraduationCap className="w-4 h-4 text-blue-400" />
              CBSE Class 12 समष्टि अर्थशास्त्र (Macroeconomics) • Unit 2
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
              {currentChapter.titleHi}
            </h1>
            <div className="text-lg text-blue-200 font-medium">
              {currentChapter.titleEn}
            </div>
            <p className="text-sm md:text-base text-blue-100 leading-relaxed pt-1">
              {currentChapter.descriptionHi}
            </p>
            <div className="text-xs text-blue-300 font-medium flex items-center gap-2 pt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
              <span>प्लेटफॉर्म निर्माता: <strong>मुख्तार (Mukhtar)</strong></span>
            </div>
          </div>

          {/* Quick Stats Pills */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 shrink-0">
            <div className="p-3.5 bg-white/10 rounded-2xl backdrop-blur-xs border border-white/10 text-center">
              <div className="text-2xl font-black text-amber-300">9</div>
              <div className="text-[11px] text-blue-200 uppercase font-bold">थ्योरी खंड</div>
            </div>
            <div className="p-3.5 bg-white/10 rounded-2xl backdrop-blur-xs border border-white/10 text-center">
              <div className="text-2xl font-black text-emerald-300">20+</div>
              <div className="text-[11px] text-blue-200 uppercase font-bold">बोर्ड MCQs</div>
            </div>
            <div className="p-3.5 bg-white/10 rounded-2xl backdrop-blur-xs border border-white/10 text-center">
              <div className="text-2xl font-black text-cyan-300">8</div>
              <div className="text-[11px] text-blue-200 uppercase font-bold">अंतर सारणियाँ</div>
            </div>
            <div className="p-3.5 bg-white/10 rounded-2xl backdrop-blur-xs border border-white/10 text-center">
              <div className="text-2xl font-black text-purple-300">100%</div>
              <div className="text-[11px] text-blue-200 uppercase font-bold">NCERT हल</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Dynamic Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* TAB 1: Theory Master */}
        {activeTab === 'theory' && (
          <div className="space-y-8 animate-fadeIn">
            <SectionViewer sections={MONEY_AND_BANKING_SECTIONS} />
          </div>
        )}

        {/* TAB 2: Credit Creation Simulator */}
        {activeTab === 'simulator' && (
          <div className="space-y-10 animate-fadeIn">
            <CreditCreationSimulator />
            <MoneySupplyCalculator />
          </div>
        )}

        {/* TAB 3: Visual Flowcharts & Architecture */}
        {activeTab === 'visualizers' && (
          <div className="space-y-10 animate-fadeIn">
            <BankingArchitecture />
            <MonetaryPolicyTransmission />
            <BarterVsMoneyFlow />
          </div>
        )}

        {/* TAB 4: Numericals & Solved Step-by-Step */}
        {activeTab === 'numericals' && (
          <div className="space-y-10 animate-fadeIn">
            <NumericalSolver formulas={MONEY_AND_BANKING_FORMULAS} />
            <MoneySupplyCalculator />
          </div>
        )}

        {/* TAB 5: Differences (8 Comparison Tables) */}
        {activeTab === 'differences' && (
          <div className="space-y-8 animate-fadeIn">
            <DifferenceTable tables={MONEY_AND_BANKING_DIFFERENCES} />
          </div>
        )}

        {/* TAB 6: Practice & Board Questions */}
        {activeTab === 'practice' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Sub-tab switcher */}
            <div className="flex flex-wrap items-center gap-2 p-1.5 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <button
                onClick={() => setPracticeSubTab('mcq')}
                className={`text-xs md:text-sm px-4 py-2 rounded-xl font-bold transition ${
                  practiceSubTab === 'mcq'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                20 बहुविकल्पीय प्रश्न (MCQs)
              </button>
              <button
                onClick={() => setPracticeSubTab('ar')}
                className={`text-xs md:text-sm px-4 py-2 rounded-xl font-bold transition ${
                  practiceSubTab === 'ar'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                अभिकथन-कारण (Assertion-Reason)
              </button>
              <button
                onClick={() => setPracticeSubTab('case')}
                className={`text-xs md:text-sm px-4 py-2 rounded-xl font-bold transition ${
                  practiceSubTab === 'case'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                केस-स्टडी प्रश्न (Case-Based)
              </button>
              <button
                onClick={() => setPracticeSubTab('board')}
                className={`text-xs md:text-sm px-4 py-2 rounded-xl font-bold transition ${
                  practiceSubTab === 'board'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                1, 2, 3, 4, 6 Marks बोर्ड प्रश्न
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
          <div className="space-y-10 animate-fadeIn">
            <QuickRevisionCards relationships={REVISION_RELATIONSHIPS} />
            <CommonMistakes />
          </div>
        )}

        {/* TAB 8: Glossary */}
        {activeTab === 'glossary' && (
          <div className="space-y-8 animate-fadeIn">
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
