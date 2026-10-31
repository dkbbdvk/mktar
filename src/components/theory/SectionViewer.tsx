import React, { useState } from 'react';
import { Section } from '../../types/chapter';
import { 
  BookOpen, 
  ChevronRight, 
  ChevronDown, 
  AlertCircle, 
  CheckCircle, 
  Lightbulb, 
  Award,
  Sparkles,
  Repeat,
  Coins,
  Layers,
  Building2,
  TrendingUp,
  Landmark,
  Sliders,
  Network,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Cpu,
  Radio,
  ScanLine
} from 'lucide-react';
import { playCyberClick } from '../../utils/cyberAudio';

interface SectionViewerProps {
  sections: Section[];
  onSpeak?: (text: string, title: string, id: string) => void;
  activeSpeechId?: string | null;
  isSpeaking?: boolean;
  isPaused?: boolean;
}

const ICON_MAP: Record<string, React.ElementType> = {
  Sparkles,
  Repeat,
  Coins,
  Layers,
  Building2,
  TrendingUp,
  Landmark,
  Sliders,
  Network
};

export const SectionViewer: React.FC<SectionViewerProps> = ({ 
  sections,
  onSpeak,
  activeSpeechId,
  isSpeaking,
  isPaused
}) => {
  const [activeSectionId, setActiveSectionId] = useState<string>(sections[0]?.id || '');
  const [expandedSubsections, setExpandedSubsections] = useState<Record<string, boolean>>({
    'meaning-of-money': true,
    'banking-system-role': true,
    'barter-meaning': true,
    'double-coincidence': true,
    'difficulties-of-barter': true,
    'primary-functions': true,
    'secondary-functions': true,
    'legal-classification': true,
    'money-supply-concept': true,
    'measures-m1-to-m4': true,
    'commercial-bank-meaning': true,
    'primary-derivative-deposits': true,
    'credit-creation-process': true,
    'central-bank-concept': true,
    'seven-core-functions': true,
    'quantitative-tools': true,
    'qualitative-tools': true,
    'holistic-synthesis': true
  });

  const activeSection = sections.find((s) => s.id === activeSectionId) || sections[0];
  const IconComponent = ICON_MAP[activeSection?.iconName] || BookOpen;

  const toggleSubsection = (subId: string) => {
    playCyberClick();
    setExpandedSubsections((prev) => ({
      ...prev,
      [subId]: !prev[subId]
    }));
  };

  const handleSelectSection = (id: string) => {
    playCyberClick();
    setActiveSectionId(id);
  };

  const buildSectionSpeechText = (sec: Section): string => {
    let text = `खण्ड ${sec.number}: ${sec.titleHi}। ${sec.summaryHi}। `;
    sec.subSections.forEach((sub, i) => {
      text += `भाग ${i + 1}: ${sub.titleHi}। `;
      if (sub.content.definitionHi) text += `परिभाषा: ${sub.content.definitionHi}। `;
      if (sub.content.explanationHi) text += `${sub.content.explanationHi}। `;
      if (sub.content.logicHi) text += `तर्क: ${sub.content.logicHi}। `;
    });
    return text;
  };

  const buildSubsectionSpeechText = (sub: Section['subSections'][0]): string => {
    let text = `${sub.titleHi}। `;
    if (sub.content.definitionHi) text += `परिभाषा: ${sub.content.definitionHi}। `;
    if (sub.content.explanationHi) text += `${sub.content.explanationHi}। `;
    if (sub.content.bulletPoints && sub.content.bulletPoints.length > 0) {
      text += `मुख्य बिंदु: ${sub.content.bulletPoints.join('। ')}। `;
    }
    if (sub.content.logicHi) text += `अवधारणात्मक तर्क: ${sub.content.logicHi}। `;
    if (sub.content.examImportance) text += `परीक्षा दृष्टिकोण: ${sub.content.examImportance}। `;
    return text;
  };

  return (
    <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-12 lg:gap-8 items-start">
      {/* Mobile Horizontal Section Selector */}
      <div className="lg:hidden bg-slate-900/90 backdrop-blur-xl p-3 rounded-2xl border border-cyan-500/30 shadow-lg space-y-2">
        <div className="flex items-center justify-between text-xs font-mono font-bold text-cyan-300 px-1">
          <span className="flex items-center gap-1.5">
            <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>खण्ड चुनें (SECTION_{activeSection.number}):</span>
          </span>
          <span className="text-cyan-400">{activeSection.number}/9</span>
        </div>
        <div className="flex gap-1.5 overflow-x-auto scrollbar-none pb-1 touch-pan-x">
          {sections.map((sec) => (
            <button
              key={sec.id}
              onClick={() => handleSelectSection(sec.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-semibold shrink-0 transition border cursor-pointer ${
                sec.id === activeSectionId
                  ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 text-white border-cyan-400 shadow-md shadow-cyan-600/30 font-bold'
                  : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-cyan-500/40'
              }`}
            >
              SEC {sec.number}
            </button>
          ))}
        </div>
      </div>

      {/* Desktop Sidebar (Left 4 cols) */}
      <div className="hidden lg:block lg:col-span-4 bg-slate-900/90 backdrop-blur-xl p-5 rounded-2xl border border-cyan-500/30 shadow-xl space-y-3 sticky top-28">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest px-2 border-b border-cyan-500/20 pb-2">
          <Cpu className="w-4 h-4 text-cyan-400" />
          <span>अध्याय अनुक्रमणिका [SECTIONS 1 - {sections.length}]</span>
        </div>

        <nav className="space-y-1.5 max-h-[75vh] overflow-y-auto pr-1">
          {sections.map((sec) => {
            const ItemIcon = ICON_MAP[sec.iconName] || BookOpen;
            const isActive = sec.id === activeSectionId;
            return (
              <button
                key={sec.id}
                onClick={() => handleSelectSection(sec.id)}
                className={`w-full p-3 rounded-xl text-left transition flex items-start gap-3 border cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 text-white font-bold border-cyan-400 shadow-lg shadow-cyan-600/30'
                    : 'bg-slate-950/60 text-slate-300 border-slate-800/80 hover:bg-slate-900 hover:border-cyan-500/30'
                }`}
              >
                <div
                  className={`p-1.5 rounded-lg shrink-0 ${
                    isActive ? 'bg-white/20 text-white' : 'bg-cyan-950 text-cyan-400 border border-cyan-500/30'
                  }`}
                >
                  <ItemIcon className="w-4 h-4" />
                </div>
                <div className="space-y-0.5 overflow-hidden">
                  <div className={`text-[10px] font-mono uppercase tracking-widest ${isActive ? 'text-cyan-200' : 'text-slate-500'}`}>
                    SECTION {sec.number}
                  </div>
                  <div className="text-xs md:text-sm truncate font-medium">
                    {sec.titleHi}
                  </div>
                </div>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Main Section Content (Right 8 cols) */}
      <div className="lg:col-span-8 space-y-4 sm:space-y-6">
        {/* Section Header Card */}
        <div className="relative rounded-2xl p-[1px] bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 shadow-2xl shadow-cyan-950/40">
          {/* Corner Tech Accents */}
          <span className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-cyan-400 z-10" />
          <span className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-purple-400 z-10" />

          <div className="bg-slate-950/95 backdrop-blur-2xl text-white p-5 sm:p-8 rounded-2xl space-y-3 sm:space-y-4 relative overflow-hidden">
            {/* Subtle Scanline */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent h-6 animate-scanline pointer-events-none" />

            <div className="flex flex-wrap items-center justify-between gap-2 relative z-10">
              <div className="flex items-center gap-2 text-cyan-400 text-[11px] sm:text-xs font-mono font-bold uppercase tracking-widest">
                <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400" />
                <span>खण्ड {activeSection.number} // NCERT_CORE_MODULE</span>
              </div>
              {onSpeak && (
                <button
                  onClick={() => {
                    playCyberClick();
                    onSpeak(
                      buildSectionSpeechText(activeSection),
                      `खण्ड ${activeSection.number}: ${activeSection.titleHi}`,
                      `section-${activeSection.id}`
                    );
                  }}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs font-mono font-bold flex items-center gap-2 transition-all duration-200 cursor-pointer shadow-md ${
                    activeSpeechId === `section-${activeSection.id}` && isSpeaking
                      ? 'bg-rose-500 hover:bg-rose-600 text-white animate-pulse shadow-rose-500/40'
                      : 'bg-cyan-950/80 hover:bg-cyan-900 text-cyan-300 border border-cyan-500/40'
                  }`}
                  title="पूरा खण्ड ऑडियो में सुनें"
                >
                  <Volume2 className="w-4 h-4 text-cyan-300" />
                  <span>
                    {activeSpeechId === `section-${activeSection.id}` && isSpeaking
                      ? (isPaused ? '▶️ वाचन जारी रखें' : '⏸️ वाचन रोकें')
                      : '🎧 पूरा खंड सुनें (Listen All)'}
                  </span>
                </button>
              )}
            </div>

            <h2 className="text-xl sm:text-3xl font-extrabold font-heading text-white leading-tight relative z-10">
              {activeSection.titleHi}
            </h2>
            <div className="text-xs sm:text-sm text-cyan-300/80 font-mono relative z-10">
              // {activeSection.titleEn}
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1 relative z-10 font-normal">
              {activeSection.summaryHi}
            </p>
          </div>
        </div>

        {/* Subsections List */}
        <div className="space-y-3 sm:space-y-5">
          {activeSection.subSections.map((sub) => {
            const isExpanded = expandedSubsections[sub.id] !== false;
            const isSubSpeaking = activeSpeechId === sub.id && isSpeaking;

            return (
              <div
                key={sub.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isSubSpeaking
                    ? 'border-cyan-400 ring-2 ring-cyan-400/50 shadow-2xl shadow-cyan-500/30 bg-slate-900'
                    : 'border-cyan-500/20 bg-slate-900/80 backdrop-blur-xl hover:border-cyan-500/40'
                }`}
              >
                {/* Subsection Accordion Header */}
                <div
                  onClick={() => toggleSubsection(sub.id)}
                  className="w-full p-4 sm:p-5 bg-slate-950/60 hover:bg-slate-900/80 transition flex items-center justify-between text-left border-b border-cyan-500/15 gap-2 cursor-pointer"
                >
                  <div className="space-y-0.5 min-w-0 pr-2">
                    <div className="flex items-center gap-2">
                      <h3 className="font-heading font-bold text-base sm:text-lg text-white leading-snug">
                        {sub.titleHi}
                      </h3>
                      {isSubSpeaking && (
                        <span className="flex items-center gap-1 h-4 px-2 py-0.5 rounded-full bg-cyan-950 border border-cyan-500/50 text-[10px] text-cyan-300 font-mono font-bold shrink-0">
                          <span className="w-1 h-2 bg-cyan-400 rounded-full animate-bounce" />
                          <span className="w-1 h-3 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                          <span className="w-1 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                          <span className="ml-1 hidden sm:inline">वाचन चालू</span>
                        </span>
                      )}
                    </div>
                    <div className="text-[11px] sm:text-xs text-cyan-400/70 font-mono truncate">{sub.titleEn}</div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {onSpeak && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          playCyberClick();
                          onSpeak(
                            buildSubsectionSpeechText(sub),
                            sub.titleHi,
                            sub.id
                          );
                        }}
                        className={`px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-xl text-xs font-mono font-bold flex items-center gap-1.5 transition cursor-pointer ${
                          isSubSpeaking
                            ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-600/40 border border-cyan-300'
                            : 'bg-slate-950 text-cyan-300 hover:bg-cyan-950 border border-cyan-500/30'
                        }`}
                        title="यह विषय सुनें"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                        <span className="text-[11px] sm:text-xs">
                          {isSubSpeaking ? (isPaused ? '▶️' : '⏸️') : '🔊 सुनें'}
                        </span>
                      </button>
                    )}
                    <div className="p-1 rounded-full bg-slate-800 text-cyan-300 border border-cyan-500/20 shrink-0">
                      {isExpanded ? <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                    </div>
                  </div>
                </div>

                {/* Subsection Body */}
                {isExpanded && (
                  <div className="p-4 sm:p-6 space-y-4 sm:space-y-5 text-slate-200">
                    {/* Definitions (if any) */}
                    {(sub.content.definitionHi || sub.content.definitionEn) && (
                      <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/30 space-y-2">
                        <div className="text-[11px] sm:text-xs font-mono font-bold text-cyan-300 uppercase flex items-center gap-1.5 tracking-wider">
                          <BookOpen className="w-3.5 h-3.5" /> प्रमाणिक परिभाषा [OFFICIAL DEFINITION]
                        </div>
                        {sub.content.definitionHi && (
                          <p className="text-xs sm:text-base font-semibold text-white leading-relaxed">
                            {sub.content.definitionHi}
                          </p>
                        )}
                        {sub.content.definitionEn && (
                          <p className="text-[11px] sm:text-sm text-cyan-200/70 italic font-mono">
                            "{sub.content.definitionEn}"
                          </p>
                        )}
                      </div>
                    )}

                    {/* Main Explanation */}
                    <div className="text-xs sm:text-base leading-relaxed text-slate-300 font-normal">
                      {sub.content.explanationHi}
                    </div>

                    {/* Bullet Points */}
                    {sub.content.bulletPoints && sub.content.bulletPoints.length > 0 && (
                      <div className="space-y-2 pl-0.5">
                        {sub.content.bulletPoints.map((pt, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs sm:text-sm leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-2" />
                            <span className="text-slate-200">{pt}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Logic Box */}
                    {sub.content.logicHi && (
                      <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-500/30 text-amber-200 space-y-1 font-mono">
                        <div className="text-[11px] sm:text-xs font-bold uppercase flex items-center gap-1.5 text-amber-400">
                          <Lightbulb className="w-3.5 h-3.5" /> संप्रत्ययात्मक तर्क [CONCEPT_LOGIC]
                        </div>
                        <p className="text-xs sm:text-sm leading-relaxed text-amber-100 font-sans">
                          {sub.content.logicHi}
                        </p>
                      </div>
                    )}

                    {/* Real-World Examples */}
                    {sub.content.examples && sub.content.examples.length > 0 && (
                      <div className="space-y-2 pt-1">
                        <div className="text-[10px] sm:text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
                          [ REAL_WORLD_EXAMPLES ]
                        </div>
                        {sub.content.examples.map((ex, idx) => (
                          <div key={idx} className="p-3.5 rounded-xl bg-slate-950/80 border border-cyan-500/20 text-xs sm:text-sm">
                            <strong className="text-cyan-300 block mb-0.5 font-mono">{ex.title}:</strong>
                            <span className="text-slate-300 leading-relaxed font-sans">{ex.desc}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Exam Alert */}
                    {sub.content.examImportance && (
                      <div className="p-3.5 sm:p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-200 flex items-start gap-2.5 text-xs">
                        <Award className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <div>
                          <strong className="font-mono text-emerald-300 block">CBSE बोर्ड परीक्षा दृष्टिकोण [BOARD_INSIGHT]:</strong>
                          <span className="text-slate-200">{sub.content.examImportance}</span>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
