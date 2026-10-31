import React, { useState, useEffect } from 'react';
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

import { useSpeech } from './hooks/useSpeech';
import { AudioPlayerBar } from './components/common/AudioPlayerBar';

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
  Volume2, 
  Play, 
  Pause, 
  Zap, 
  Flame, 
  UserCheck 
} from 'lucide-react';

export const App: React.FC = () => {
  const [currentChapterId, setCurrentChapterId] = useState<string>('money-and-banking');
  const [activeTab, setActiveTab] = useState<string>('theory');
  const [practiceSubTab, setPracticeSubTab] = useState<'mcq' | 'ar' | 'case' | 'board'>('mcq');
  
  // Track visited tabs for gamified learning progress
  const [visitedTabs, setVisitedTabs] = useState<Set<string>>(new Set(['theory']));

  // Mandatory welcome dialog modal (Mukhtar creator notice)
  const [isWelcomeModalOpen, setIsWelcomeModalOpen] = useState<boolean>(true);

  // Global Text-to-Speech hook
  const speech = useSpeech();

  useEffect(() => {
    setVisitedTabs(prev => new Set([...prev, activeTab]));
  }, [activeTab]);

  const handleDismissModal = () => {
    setIsWelcomeModalOpen(false);
    try {
      confetti({
        particleCount: 70,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // ignore
    }
  };

  const handlePlayHeroOverview = () => {
    const heroOverviewText = `नमस्कार विद्यार्थियों! समष्टि अर्थशास्त्र के अध्याय मुद्रा और बैंकिंग में आपका स्वागत है। इस अध्याय में सीबीएसई बोर्ड के लिए चार मुख्य बातें सर्वाधिक महत्वपूर्ण हैं: पहला, वस्तु विनिमय प्रणाली की कठिनाइयां और मुद्रा के चार कार्य जिसमें विनिमय का माध्यम सबसे प्राथमिक कार्य है। दूसरा, मुद्रा पूर्ति के चार माप जिसमें एम वन सर्वाधिक तरल संकीर्ण माप है। तीसरा, वाणिज्यिक बैंकों द्वारा साख निर्माण, जिसका सूत्र प्रारंभिक जमा गुना एक बटा एल आर आर होता है। और चौथा, भारतीय रिजर्व बैंक के सात केंद्रीय कार्य तथा मौद्रिक नीति के परिमाणात्मक व गुणात्मक उपकरण जैसे रेपो रेट, सी आर आर और एस एल आर। संपूर्ण तैयारी के लिए नीचे दिए गए विभिन्न अध्यायों और सिमुलेटर का अभ्यास करें।`;
    speech.speak(heroOverviewText, 'अध्याय का 2-मिनट ऑडियो सार (Money & Banking)', 'hero-overview');
  };

  const currentChapter = ALL_CHAPTERS.find((c) => c.id === currentChapterId) || ALL_CHAPTERS[0];
  const progressPercent = Math.min(100, Math.round((visitedTabs.size / 8) * 100));

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans relative overflow-x-hidden pb-20 sm:pb-16 selection:bg-indigo-500 selection:text-white">
      {/* ========================================================= */}
      {/* MANDATORY WELCOME DIALOG (MUKHTAR CREATOR POPUP)         */}
      {/* ========================================================= */}
      {isWelcomeModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md transition-all duration-300">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-5 sm:p-7 border border-indigo-100 text-center space-y-4 sm:space-y-5 relative overflow-hidden max-h-[92vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
            {/* Background Decorative Glow */}
            <div className="absolute -right-12 -top-12 w-36 h-36 bg-indigo-500/15 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -left-12 -bottom-12 w-36 h-36 bg-blue-500/15 rounded-full blur-2xl pointer-events-none" />

            {/* Icon Header */}
            <div className="mx-auto w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-tr from-indigo-600 via-blue-600 to-indigo-500 flex items-center justify-center text-white shadow-xl shadow-indigo-500/30 shrink-0">
              <Sparkles className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>

            {/* Text Content */}
            <div className="space-y-2 sm:space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                <UserCheck className="w-3.5 h-3.5" /> आधिकारिक सूचना (Official Notice)
              </span>

              <h2 className="text-xl sm:text-2xl font-extrabold font-heading text-slate-900 leading-tight">
                यह वेबसाइट <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">मुख्तार</span> द्वारा बनाया गया है।
              </h2>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Class 12 CBSE Economics – <strong>Money and Banking (मुद्रा और बैंकिंग)</strong> के इंटरएक्टिव AI ऑडियो-सक्षम लर्निंग प्लेटफॉर्म में आपका स्वागत है।
              </p>
            </div>

            {/* Features preview pill list */}
            <div className="bg-slate-50/80 rounded-2xl p-3.5 border border-slate-200/80 grid grid-cols-2 gap-2 text-left text-[11px] sm:text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="truncate">🔊 AI ऑडियो वाचक</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="truncate">🎴 3D फ्लिप कार्ड्स</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="truncate">साख निर्माण सिमुलेटर</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="truncate">20 बोर्ड MCQs + नोट्स</span>
              </div>
            </div>

            {/* Mandatory OK Button */}
            <button
              onClick={handleDismissModal}
              className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700 hover:from-indigo-700 hover:to-blue-800 text-white font-bold text-sm sm:text-base shadow-xl shadow-indigo-500/25 active:scale-[0.98] transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer touch-manipulation"
            >
              <span>OK (ठीक है - वेबसाइट खोलें)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Top Navigation Bar */}
      <Navbar
        chapters={ALL_CHAPTERS}
        currentChapterId={currentChapterId}
        onSelectChapter={setCurrentChapterId}
        activeTab={activeTab}
        onSelectTab={setActiveTab}
      />

      {/* Main Tab Navigation */}
      <TabNavigation activeTab={activeTab} onSelectTab={setActiveTab} />

      {/* ========================================================= */}
      {/* HERO BANNER WITH AUDIO SUMMARY & CREATOR ATTRIBUTION     */}
      {/* ========================================================= */}
      <div className="bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-950 text-white py-6 sm:py-10 px-3 sm:px-6 lg:px-8 border-b border-indigo-900/60 shadow-xl relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-3 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
                CBSE Class 12 समष्टि अर्थशास्त्र • Unit 2
              </span>

              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-[10px] sm:text-xs font-bold">
                <Zap className="w-3 h-3 text-emerald-400" /> 100% बोर्ड सिलेबस
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              {currentChapter.titleHi}
            </h1>

            <div className="text-sm sm:text-lg text-blue-200 font-medium">
              {currentChapter.titleEn}
            </div>

            <p className="text-xs sm:text-base text-blue-100/90 leading-relaxed max-w-2xl">
              {currentChapter.descriptionHi}
            </p>

            {/* Quick Actions & Creator Badge */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              {/* Quick 2-Minute Audio Overview Button */}
              <button
                onClick={handlePlayHeroOverview}
                className={`px-4 py-2 sm:py-2.5 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2 transition shadow-lg cursor-pointer ${
                  speech.activeSpeechId === 'hero-overview' && speech.isSpeaking
                    ? 'bg-rose-500 text-white animate-pulse shadow-rose-500/30'
                    : 'bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white shadow-indigo-500/25'
                }`}
              >
                <Volume2 className="w-4 h-4 text-cyan-200" />
                <span>
                  {speech.activeSpeechId === 'hero-overview' && speech.isSpeaking
                    ? (speech.isPaused ? '▶️ वाचन जारी रखें' : '⏸️ वाचन रोकें')
                    : '🎧 2-मिनट अध्याय सार सुनें (Listen Audio)'}
                </span>
              </button>

              {/* Mukhtar Creator Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-xs text-amber-200">
                <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin" style={{ animationDuration: '6s' }} />
                <span>निर्माता: <strong className="text-white font-extrabold">मुख्तार (Mukhtar)</strong></span>
              </div>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-4 md:grid-cols-2 gap-2 sm:gap-3 shrink-0">
            <div className="p-2.5 sm:p-4 bg-white/10 rounded-2xl backdrop-blur-md border border-white/15 text-center shadow-lg hover:border-white/30 transition">
              <div className="text-xl sm:text-2xl font-black text-amber-300">9</div>
              <div className="text-[10px] sm:text-xs text-blue-200 uppercase font-bold truncate">थ्योरी खंड</div>
            </div>
            <div className="p-2.5 sm:p-4 bg-white/10 rounded-2xl backdrop-blur-md border border-white/15 text-center shadow-lg hover:border-white/30 transition">
              <div className="text-xl sm:text-2xl font-black text-emerald-300">20+</div>
              <div className="text-[10px] sm:text-xs text-blue-200 uppercase font-bold truncate">बोर्ड MCQs</div>
            </div>
            <div className="p-2.5 sm:p-4 bg-white/10 rounded-2xl backdrop-blur-md border border-white/15 text-center shadow-lg hover:border-white/30 transition">
              <div className="text-xl sm:text-2xl font-black text-cyan-300">8</div>
              <div className="text-[10px] sm:text-xs text-blue-200 uppercase font-bold truncate">अंतर सारणियाँ</div>
            </div>
            <div className="p-2.5 sm:p-4 bg-white/10 rounded-2xl backdrop-blur-md border border-white/15 text-center shadow-lg hover:border-white/30 transition">
              <div className="text-xl sm:text-2xl font-black text-purple-300">100%</div>
              <div className="text-[10px] sm:text-xs text-blue-200 uppercase font-bold truncate">NCERT हल</div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* GAMIFIED STUDY PROGRESS TRACKER BAR                      */}
      {/* ========================================================= */}
      <div className="bg-white border-b border-slate-200 px-3 sm:px-6 lg:px-8 py-2.5 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-700 flex items-center justify-center font-bold text-xs shrink-0">
              <Award className="w-4 h-4" />
            </div>
            <div className="text-xs text-slate-700 font-semibold flex items-center gap-1.5 flex-wrap">
              <span>आपकी अध्ययन प्रगति:</span>
              <span className="text-indigo-600 font-bold">{visitedTabs.size} / 8 भाग खोजे गए</span>
              <span className="text-slate-400">({progressPercent}%)</span>
              {progressPercent === 100 && (
                <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                  🌟 टॉपर्स क्लब अनलॉक!
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-64">
            <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden border border-slate-200">
              <div
                className="bg-gradient-to-r from-indigo-500 via-blue-500 to-emerald-500 h-full rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span className="text-[11px] font-bold text-slate-500 shrink-0 font-mono">
              {progressPercent}%
            </span>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* MAIN DYNAMIC CONTENT AREA                                 */}
      {/* ========================================================= */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 lg:px-8 py-5 sm:py-8">
        {/* TAB 1: Theory Master */}
        {activeTab === 'theory' && (
          <div className="space-y-6 sm:space-y-8 animate-fadeIn">
            <SectionViewer
              sections={MONEY_AND_BANKING_SECTIONS}
              onSpeak={speech.speak}
              activeSpeechId={speech.activeSpeechId}
              isSpeaking={speech.isSpeaking}
              isPaused={speech.isPaused}
            />
          </div>
        )}

        {/* TAB 2: Credit Creation Simulator */}
        {activeTab === 'simulator' && (
          <div className="space-y-8 sm:space-y-10 animate-fadeIn">
            <CreditCreationSimulator
              onSpeak={speech.speak}
              activeSpeechId={speech.activeSpeechId}
              isSpeaking={speech.isSpeaking}
            />
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
                className={`text-xs sm:text-sm px-3.5 py-2 rounded-xl font-bold transition shrink-0 cursor-pointer ${
                  practiceSubTab === 'mcq'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                20 MCQs (क्विज)
              </button>
              <button
                onClick={() => setPracticeSubTab('ar')}
                className={`text-xs sm:text-sm px-3.5 py-2 rounded-xl font-bold transition shrink-0 cursor-pointer ${
                  practiceSubTab === 'ar'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                अभिकथन-कारण (A&R)
              </button>
              <button
                onClick={() => setPracticeSubTab('case')}
                className={`text-xs sm:text-sm px-3.5 py-2 rounded-xl font-bold transition shrink-0 cursor-pointer ${
                  practiceSubTab === 'case'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                केस-स्टडी प्रश्न
              </button>
              <button
                onClick={() => setPracticeSubTab('board')}
                className={`text-xs sm:text-sm px-3.5 py-2 rounded-xl font-bold transition shrink-0 cursor-pointer ${
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
            <QuickRevisionCards
              relationships={REVISION_RELATIONSHIPS}
              onSpeak={speech.speak}
              activeSpeechId={speech.activeSpeechId}
              isSpeaking={speech.isSpeaking}
            />
            <CommonMistakes />
          </div>
        )}

        {/* TAB 8: Glossary */}
        {activeTab === 'glossary' && (
          <div className="space-y-6 sm:space-y-8 animate-fadeIn">
            <GlossaryViewer
              terms={MONEY_AND_BANKING_GLOSSARY}
              onSpeak={speech.speak}
              activeSpeechId={speech.activeSpeechId}
              isSpeaking={speech.isSpeaking}
            />
          </div>
        )}
      </main>

      {/* Floating Audio Player Widget (Visible whenever audio is playing or paused) */}
      <AudioPlayerBar
        isSpeaking={speech.isSpeaking}
        isPaused={speech.isPaused}
        currentTitle={speech.currentTitle}
        rate={speech.rate}
        onPause={speech.pause}
        onResume={speech.resume}
        onStop={speech.stop}
        onSetRate={speech.setRate}
      />

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export default App;
