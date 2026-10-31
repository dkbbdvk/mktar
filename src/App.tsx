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
import { FuturisticCyberMatrix } from './components/common/FuturisticCyberMatrix';
import { playAccessGranted, playCyberClick } from './utils/cyberAudio';

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
  UserCheck,
  Cpu,
  Radio,
  Terminal,
  ShieldCheck,
  Activity,
  ScanLine,
  Compass
} from 'lucide-react';

const TICKER_MESSAGES = [
  'CBSE Class 12 समष्टि अर्थशास्त्र • Unit 2',
  '100/100 NCERT बोर्ड परीक्षा स्कोर बूस्टर',
  'अत्याधुनिक AI ऑडियो सिमुलेटर प्रयोगशाला',
  '3D फ्लिप कार्ड्स व 20 बोर्ड क्विज मैट्रिक्स'
];

export const App: React.FC = () => {
  const [currentChapterId, setCurrentChapterId] = useState<string>('money-and-banking');
  const [activeTab, setActiveTab] = useState<string>('theory');
  const [practiceSubTab, setPracticeSubTab] = useState<'mcq' | 'ar' | 'case' | 'board'>('mcq');
  
  // Track visited tabs for gamified cyber progress
  const [visitedTabs, setVisitedTabs] = useState<Set<string>>(new Set(['theory']));

  // Mandatory welcome dialog modal (Mukhtar Cyber Terminal)
  const [isWelcomeModalOpen, setIsWelcomeModalOpen] = useState<boolean>(true);

  // Dynamic cycling ticker index for hero animation
  const [tickerIndex, setTickerIndex] = useState<number>(0);

  // Animated numeric counter state
  const [counts, setCounts] = useState({ sec: 0, mcq: 0, diff: 0, ncert: 0 });

  // Global Text-to-Speech hook
  const speech = useSpeech();

  useEffect(() => {
    setVisitedTabs(prev => new Set([...prev, activeTab]));
  }, [activeTab]);

  // Animated ticker cycle
  useEffect(() => {
    const timer = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % TICKER_MESSAGES.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  // Animated numbers counter
  useEffect(() => {
    let c = 0;
    const interval = setInterval(() => {
      c += 1;
      setCounts({
        sec: Math.min(9, Math.round(c * 0.9)),
        mcq: Math.min(20, Math.round(c * 2)),
        diff: Math.min(8, Math.round(c * 0.8)),
        ncert: Math.min(100, Math.round(c * 10))
      });
      if (c >= 10) clearInterval(interval);
    }, 45);
    return () => clearInterval(interval);
  }, []);

  const handleDismissModal = () => {
    playAccessGranted();
    setIsWelcomeModalOpen(false);
    try {
      confetti({
        particleCount: 90,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#06b6d4', '#8b5cf6', '#ec4899', '#10b981', '#3b82f6']
      });
    } catch (e) {
      // ignore
    }
  };

  const handlePlayHeroOverview = () => {
    playCyberClick();
    const heroOverviewText = `नमस्कार विद्यार्थियों! समष्टि अर्थशास्त्र के अध्याय मुद्रा और बैंकिंग में आपका स्वागत है। इस अध्याय में सीबीएसई बोर्ड के लिए चार मुख्य बातें सर्वाधिक महत्वपूर्ण हैं: पहला, वस्तु विनिमय प्रणाली की कठिनाइयां और मुद्रा के चार कार्य जिसमें विनिमय का माध्यम सबसे प्राथमिक कार्य है। दूसरा, मुद्रा पूर्ति के चार माप जिसमें एम वन सर्वाधिक तरल संकीर्ण माप है। तीसरा, वाणिज्यिक बैंकों द्वारा साख निर्माण, जिसका सूत्र प्रारंभिक जमा गुना एक बटा एल आर आर होता है। और चौथा, भारतीय रिजर्व बैंक के सात केंद्रीय कार्य तथा मौद्रिक नीति के परिमाणात्मक व गुणात्मक उपकरण जैसे रेपो रेट, सी आर आर और एस एल आर। संपूर्ण तैयारी के लिए नीचे दिए गए विभिन्न अध्यायों और सिमुलेटर का अभ्यास करें।`;
    speech.speak(heroOverviewText, 'अध्याय का 2-मिनट न्यूरल ऑडियो सार', 'hero-overview');
  };

  const currentChapter = ALL_CHAPTERS.find((c) => c.id === currentChapterId) || ALL_CHAPTERS[0];
  const progressPercent = Math.min(100, Math.round((visitedTabs.size / 8) * 100));

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans relative overflow-x-hidden pb-20 sm:pb-16 selection:bg-cyan-500 selection:text-black">
      {/* ========================================================= */}
      {/* INTERACTIVE CYBER LASER PARTICLE MATRIX (BACKGROUND)     */}
      {/* ========================================================= */}
      <FuturisticCyberMatrix />

      {/* ========================================================= */}
      {/* MANDATORY WELCOME DIALOG (MUKHTAR CYBER ACCESS PORTAL)   */}
      {/* ========================================================= */}
      {isWelcomeModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 bg-black/90 backdrop-blur-xl transition-all duration-300">
          <div className="relative rounded-3xl p-[1px] max-w-md w-full bg-gradient-to-b from-cyan-400 via-indigo-500 to-purple-600 shadow-2xl shadow-cyan-950 animate-in fade-in zoom-in-95 duration-300">
            {/* Corner Tech Accents */}
            <span className="absolute -top-1.5 -left-1.5 w-4 h-4 border-t-2 border-l-2 border-cyan-400 z-20" />
            <span className="absolute -top-1.5 -right-1.5 w-4 h-4 border-t-2 border-r-2 border-cyan-400 z-20" />
            <span className="absolute -bottom-1.5 -left-1.5 w-4 h-4 border-b-2 border-l-2 border-purple-400 z-20" />
            <span className="absolute -bottom-1.5 -right-1.5 w-4 h-4 border-b-2 border-r-2 border-purple-400 z-20" />

            <div className="bg-slate-950/95 rounded-3xl p-5 sm:p-7 border border-cyan-500/30 text-center space-y-4 sm:space-y-5 relative overflow-hidden max-h-[92vh] overflow-y-auto">
              {/* Animated Laser Scanline */}
              <div className="absolute inset-x-0 h-6 bg-gradient-to-b from-cyan-400/20 via-cyan-400/10 to-transparent animate-scanline pointer-events-none" />

              {/* Holographic Glowing Chip Icon with Concentric Rings */}
              <div className="relative mx-auto w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                {/* Outer Rotating Ring */}
                <div className="absolute inset-0 rounded-full border border-dashed border-cyan-400/60 animate-spin-slow" />
                {/* Inner Counter-Rotating Ring */}
                <div className="absolute inset-2 rounded-full border border-purple-500/50 animate-spin-reverse" />
                {/* Central Hologram Core */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-cyan-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/40 border border-cyan-300">
                  <Cpu className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-200 animate-pulse" />
                </div>
              </div>

              {/* Text Content */}
              <div className="space-y-2 sm:space-y-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest shadow-inner">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" /> [ VERIFIED CREATOR CLEARANCE ]
                </span>

                <h2 className="text-xl sm:text-2xl font-extrabold font-heading text-white leading-tight">
                  यह वेबसाइट <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 neon-text-cyan">मुख्तार (Mukhtar)</span> द्वारा बनाया गया है।
                </h2>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Class 12 CBSE Economics – <strong>Money & Banking (मुद्रा और बैंकिंग)</strong> के नेक्स्ट-जेनरेशन AI ऑडियो लर्निंग प्लेटफॉर्म में आपका स्वागत है।
                </p>
              </div>

              {/* Cyber Features Preview List */}
              <div className="bg-slate-900/80 rounded-2xl p-3.5 border border-cyan-500/20 grid grid-cols-2 gap-2 text-left text-[11px] sm:text-xs font-mono text-cyan-100">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping shrink-0" />
                  <span className="truncate">🔊 न्यूरल ऑडियो वाचक</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-ping shrink-0" />
                  <span className="truncate">🎴 3D फ्लिप कार्ड्स</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping shrink-0" />
                  <span className="truncate">⚡ साख सिमुलेटर</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-ping shrink-0" />
                  <span className="truncate">🎯 20 बोर्ड MCQs</span>
                </div>
              </div>

              {/* Mandatory Access Button */}
              <button
                onClick={handleDismissModal}
                className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-mono font-bold text-sm sm:text-base shadow-xl shadow-cyan-600/30 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer border border-cyan-400/50"
              >
                <span>ENTER SYSTEM // प्रणाली में प्रवेश करें (OK)</span>
                <ArrowRight className="w-4 h-4 text-cyan-200" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Top Futuristic Navigation Bar */}
      <Navbar
        chapters={ALL_CHAPTERS}
        currentChapterId={currentChapterId}
        onSelectChapter={setCurrentChapterId}
        activeTab={activeTab}
        onSelectTab={setActiveTab}
      />

      {/* Main Tab Navigation Bar */}
      <TabNavigation activeTab={activeTab} onSelectTab={setActiveTab} />

      {/* ========================================================= */}
      {/* FUTURISTIC SCI-FI HERO COCKPIT WITH ANIMATED TICKER       */}
      {/* ========================================================= */}
      <div className="relative py-8 sm:py-12 px-3 sm:px-6 lg:px-8 border-b border-cyan-500/20 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900/90 to-slate-950">
        {/* Animated Radar Scanner Background Circle */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-cyan-500/10 pointer-events-none hidden md:block">
          <div className="absolute inset-8 rounded-full border border-dashed border-cyan-500/25 animate-spin-slow" />
          <div className="absolute inset-16 rounded-full border border-purple-500/25 animate-spin-reverse" />
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-full animate-spin" style={{ animationDuration: '6s' }} />
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-3.5 max-w-3xl">
            {/* Dynamic Animated System Status Ticker */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-[10px] sm:text-xs font-mono font-bold tracking-wider animate-in fade-in duration-300">
                <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                <span key={tickerIndex} className="animate-in fade-in duration-300">
                  {TICKER_MESSAGES[tickerIndex]}
                </span>
              </span>

              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-[10px] sm:text-xs font-mono font-bold">
                <Zap className="w-3 h-3 text-emerald-400" /> 100% NCERT SYLLABUS
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight leading-tight text-white">
              {currentChapter.titleHi}
            </h1>

            <div className="text-sm sm:text-lg text-cyan-300/90 font-mono tracking-wide">
              // {currentChapter.titleEn}
            </div>

            <p className="text-xs sm:text-base text-slate-300 leading-relaxed max-w-2xl font-normal">
              {currentChapter.descriptionHi}
            </p>

            {/* Quick Actions & Mukhtar Creator Badge with Laser Border */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              {/* Quick 2-Minute Audio Overview Button */}
              <button
                onClick={handlePlayHeroOverview}
                className={`px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl text-xs sm:text-sm font-mono font-bold flex items-center gap-2.5 transition shadow-xl cursor-pointer ${
                  speech.activeSpeechId === 'hero-overview' && speech.isSpeaking
                    ? 'bg-rose-500 text-white animate-pulse shadow-rose-500/40'
                    : 'bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white shadow-cyan-500/30 border border-cyan-400/50'
                }`}
              >
                <Volume2 className="w-4 h-4 text-cyan-200" />
                <span>
                  {speech.activeSpeechId === 'hero-overview' && speech.isSpeaking
                    ? (speech.isPaused ? '▶️ वाचन जारी रखें' : '⏸️ वाचन रोकें')
                    : '🎧 2-मिनट न्यूरल ऑडियो सार (Listen Audio)'}
                </span>
              </button>

              {/* Mukhtar Creator Holographic Badge with Continuous Laser Shine */}
              <div className="relative p-[1.5px] rounded-2xl laser-border shadow-xl">
                <div className="px-3.5 py-2 rounded-2xl bg-slate-950/95 backdrop-blur-md text-xs font-mono text-cyan-200 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-300 animate-spin" style={{ animationDuration: '6s' }} />
                  <span>निर्माता: <strong className="text-white font-extrabold text-amber-300">मुख्तार (Mukhtar)</strong></span>
                </div>
              </div>
            </div>
          </div>

          {/* Futuristic Floating HUD Stats Matrix with Live Animated Counters */}
          <div className="grid grid-cols-4 md:grid-cols-2 gap-2.5 sm:gap-3.5 shrink-0">
            {/* Stat 1 - Floating Slow */}
            <div className="p-3 sm:p-4 bg-slate-900/90 rounded-2xl backdrop-blur-xl border border-cyan-500/30 text-center shadow-lg hover:border-cyan-400 transition animate-float-slow">
              <div className="text-2xl sm:text-3xl font-black font-mono text-cyan-400">
                {counts.sec}
              </div>
              <div className="text-[10px] sm:text-xs text-slate-400 font-mono uppercase tracking-wider truncate">थ्योरी खंड</div>
            </div>

            {/* Stat 2 - Floating Reverse */}
            <div className="p-3 sm:p-4 bg-slate-900/90 rounded-2xl backdrop-blur-xl border border-emerald-500/30 text-center shadow-lg hover:border-emerald-400 transition animate-float-reverse">
              <div className="text-2xl sm:text-3xl font-black font-mono text-emerald-400">
                {counts.mcq}+
              </div>
              <div className="text-[10px] sm:text-xs text-slate-400 font-mono uppercase tracking-wider truncate">बोर्ड MCQs</div>
            </div>

            {/* Stat 3 - Floating Slow */}
            <div className="p-3 sm:p-4 bg-slate-900/90 rounded-2xl backdrop-blur-xl border border-purple-500/30 text-center shadow-lg hover:border-purple-400 transition animate-float-slow">
              <div className="text-2xl sm:text-3xl font-black font-mono text-purple-400">
                {counts.diff}
              </div>
              <div className="text-[10px] sm:text-xs text-slate-400 font-mono uppercase tracking-wider truncate">अंतर सारणियाँ</div>
            </div>

            {/* Stat 4 - Floating Reverse */}
            <div className="p-3 sm:p-4 bg-slate-900/90 rounded-2xl backdrop-blur-xl border border-pink-500/30 text-center shadow-lg hover:border-pink-400 transition animate-float-reverse">
              <div className="text-2xl sm:text-3xl font-black font-mono text-pink-400">
                {counts.ncert}%
              </div>
              <div className="text-[10px] sm:text-xs text-slate-400 font-mono uppercase tracking-wider truncate">NCERT हल</div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* FUTURISTIC NEURAL STUDY PROGRESS HUD                     */}
      {/* ========================================================= */}
      <div className="bg-slate-950/90 border-b border-cyan-500/20 px-3 sm:px-6 lg:px-8 py-2.5 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-cyan-950 border border-cyan-500/40 text-cyan-400 flex items-center justify-center font-bold text-xs shrink-0">
              <Activity className="w-4 h-4 animate-pulse" />
            </div>
            <div className="text-xs text-slate-300 font-mono font-semibold flex items-center gap-2 flex-wrap">
              <span>अध्ययन प्रगति (NEURAL_PROGRESS):</span>
              <span className="text-cyan-400 font-bold">{visitedTabs.size} / 8 मॉड्यूल्स</span>
              <span className="text-slate-500">({progressPercent}%)</span>
              {progressPercent === 100 && (
                <span className="px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-500/40 text-[10px] font-bold">
                  🌟 100% TOPPERS_CORE_UNLOCKED!
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-72">
            <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden border border-cyan-500/30">
              <div
                className="bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 h-full rounded-full transition-all duration-500 shadow-sm shadow-cyan-400"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span className="text-[11px] font-mono font-bold text-cyan-400 shrink-0">
              {progressPercent}%
            </span>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* MAIN DYNAMIC CONTENT AREA WITH SMOOTH TAB TRANSITIONS    */}
      {/* ========================================================= */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 lg:px-8 py-5 sm:py-8 relative z-10">
        {/* Animated Wrapper per tab */}
        <div key={activeTab} className="animate-in fade-in slide-in-from-bottom-3 duration-300">
          {/* TAB 1: Theory Master */}
          {activeTab === 'theory' && (
            <div className="space-y-6 sm:space-y-8">
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
            <div className="space-y-8 sm:space-y-10">
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
            <div className="space-y-8 sm:space-y-10">
              <BarterVsMoneyFlow />
              <MonetaryPolicyTransmission />
              <BankingArchitecture />
            </div>
          )}

          {/* TAB 4: Numericals & Solved Step-by-Step */}
          {activeTab === 'numericals' && (
            <div className="space-y-8 sm:space-y-10">
              <NumericalSolver formulas={MONEY_AND_BANKING_FORMULAS} />
              <MoneySupplyCalculator />
            </div>
          )}

          {/* TAB 5: Differences (8 Comparison Tables) */}
          {activeTab === 'differences' && (
            <div className="space-y-6 sm:space-y-8">
              <DifferenceTable tables={MONEY_AND_BANKING_DIFFERENCES} />
            </div>
          )}

          {/* TAB 6: Practice & Board Questions */}
          {activeTab === 'practice' && (
            <div className="space-y-6 sm:space-y-8">
              {/* Sub-tab switcher - mobile horizontal scrolling */}
              <div className="flex items-center gap-1.5 p-1.5 bg-slate-900/90 rounded-2xl border border-cyan-500/30 shadow-lg overflow-x-auto scrollbar-none whitespace-nowrap">
                <button
                  onClick={() => {
                    playCyberClick();
                    setPracticeSubTab('mcq');
                  }}
                  className={`text-xs sm:text-sm px-3.5 py-2 rounded-xl font-bold transition shrink-0 cursor-pointer ${
                    practiceSubTab === 'mcq'
                      ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-cyan-200 hover:bg-slate-800'
                  }`}
                >
                  20 MCQs (क्विज)
                </button>
                <button
                  onClick={() => {
                    playCyberClick();
                    setPracticeSubTab('ar');
                  }}
                  className={`text-xs sm:text-sm px-3.5 py-2 rounded-xl font-bold transition shrink-0 cursor-pointer ${
                    practiceSubTab === 'ar'
                      ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-cyan-200 hover:bg-slate-800'
                  }`}
                >
                  अभिकथन-कारण (A&R)
                </button>
                <button
                  onClick={() => {
                    playCyberClick();
                    setPracticeSubTab('case');
                  }}
                  className={`text-xs sm:text-sm px-3.5 py-2 rounded-xl font-bold transition shrink-0 cursor-pointer ${
                    practiceSubTab === 'case'
                      ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-cyan-200 hover:bg-slate-800'
                  }`}
                >
                  केस-स्टडी प्रश्न
                </button>
                <button
                  onClick={() => {
                    playCyberClick();
                    setPracticeSubTab('board');
                  }}
                  className={`text-xs sm:text-sm px-3.5 py-2 rounded-xl font-bold transition shrink-0 cursor-pointer ${
                    practiceSubTab === 'board'
                      ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-cyan-200 hover:bg-slate-800'
                  }`}
                >
                  1, 2, 3, 4, 6 Marks प्रश्न
                </button>
              </div>

              {/* Sub-tab view with smooth entrance */}
              <div key={practiceSubTab} className="animate-in fade-in duration-200">
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
            </div>
          )}

          {/* TAB 7: Quick Revision Notes & 3D Flashcards */}
          {activeTab === 'revision' && (
            <div className="space-y-8 sm:space-y-10">
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
            <div className="space-y-6 sm:space-y-8">
              <GlossaryViewer
                terms={MONEY_AND_BANKING_GLOSSARY}
                onSpeak={speech.speak}
                activeSpeechId={speech.activeSpeechId}
                isSpeaking={speech.isSpeaking}
              />
            </div>
          )}
        </div>
      </main>

      {/* Floating Futuristic Cyber Audio Player Widget */}
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

      {/* Futuristic Global Footer */}
      <Footer />
    </div>
  );
};

export default App;
