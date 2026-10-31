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
  Network
} from 'lucide-react';

interface SectionViewerProps {
  sections: Section[];
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

export const SectionViewer: React.FC<SectionViewerProps> = ({ sections }) => {
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
    setExpandedSubsections((prev) => ({
      ...prev,
      [subId]: !prev[subId]
    }));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Table of Contents / Sidebar (Left 4 cols) */}
      <div className="lg:col-span-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3 sticky top-24">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider px-2 border-b border-slate-100 pb-2">
          <BookOpen className="w-4 h-4 text-blue-600" />
          <span>अध्याय अनुक्रमणिका (Sections 1 - {sections.length})</span>
        </div>

        <nav className="space-y-1.5 max-h-[75vh] overflow-y-auto pr-1">
          {sections.map((sec) => {
            const ItemIcon = ICON_MAP[sec.iconName] || BookOpen;
            const isActive = sec.id === activeSectionId;
            return (
              <button
                key={sec.id}
                onClick={() => setActiveSectionId(sec.id)}
                className={`w-full p-3 rounded-xl text-left transition flex items-start gap-3 border ${
                  isActive
                    ? 'bg-blue-600 text-white font-bold border-blue-600 shadow-sm shadow-blue-500/20'
                    : 'bg-white text-slate-700 border-transparent hover:bg-slate-50 hover:border-slate-200'
                }`}
              >
                <div
                  className={`p-1.5 rounded-lg shrink-0 ${
                    isActive ? 'bg-white/20 text-white' : 'bg-blue-50 text-blue-600'
                  }`}
                >
                  <ItemIcon className="w-4 h-4" />
                </div>
                <div className="space-y-0.5 overflow-hidden">
                  <div className={`text-[11px] uppercase tracking-wider font-semibold ${isActive ? 'text-blue-100' : 'text-slate-400'}`}>
                    खंड {sec.number}
                  </div>
                  <div className="text-xs md:text-sm truncate">
                    {sec.titleHi}
                  </div>
                </div>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Main Section Content (Right 8 cols) */}
      <div className="lg:col-span-8 space-y-6">
        {/* Section Header Card */}
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white p-6 md:p-8 rounded-2xl shadow-lg space-y-3">
          <div className="flex items-center gap-2 text-blue-300 text-xs font-bold uppercase tracking-wider">
            <IconComponent className="w-4 h-4" />
            <span>खण्ड {activeSection.number} • NCERT Theory Master</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold font-heading">
            {activeSection.titleHi}
          </h2>
          <div className="text-xs md:text-sm text-blue-200">
            {activeSection.titleEn}
          </div>
          <p className="text-sm text-blue-100 leading-relaxed pt-1">
            {activeSection.summaryHi}
          </p>
        </div>

        {/* Subsections List */}
        <div className="space-y-5">
          {activeSection.subSections.map((sub) => {
            const isExpanded = expandedSubsections[sub.id] !== false;
            return (
              <div
                key={sub.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition"
              >
                {/* Subsection Accordion Header */}
                <button
                  onClick={() => toggleSubsection(sub.id)}
                  className="w-full p-5 bg-slate-50/80 hover:bg-slate-100/80 transition flex items-center justify-between text-left border-b border-slate-100"
                >
                  <div>
                    <h3 className="font-heading font-bold text-lg text-slate-900">
                      {sub.titleHi}
                    </h3>
                    <div className="text-xs text-slate-500">{sub.titleEn}</div>
                  </div>
                  <div className="p-1 rounded-full bg-white text-slate-600 border border-slate-200">
                    {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                  </div>
                </button>

                {/* Subsection Body */}
                {isExpanded && (
                  <div className="p-6 space-y-5 text-slate-700">
                    {/* Definitions (if any) */}
                    {(sub.content.definitionHi || sub.content.definitionEn) && (
                      <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 space-y-2">
                        <div className="text-xs font-bold text-blue-800 uppercase flex items-center gap-1.5">
                          <BookOpen className="w-3.5 h-3.5" /> प्रमाणिक परिभाषा (Standard Definition)
                        </div>
                        {sub.content.definitionHi && (
                          <p className="text-sm md:text-base font-semibold text-slate-900 leading-relaxed">
                            {sub.content.definitionHi}
                          </p>
                        )}
                        {sub.content.definitionEn && (
                          <p className="text-xs md:text-sm text-slate-600 italic">
                            "{sub.content.definitionEn}"
                          </p>
                        )}
                      </div>
                    )}

                    {/* Main Explanation */}
                    <div className="text-sm md:text-base leading-relaxed text-slate-700">
                      {sub.content.explanationHi}
                    </div>

                    {/* Bullet Points (if any) */}
                    {sub.content.bulletPoints && sub.content.bulletPoints.length > 0 && (
                      <div className="space-y-2 pl-1">
                        {sub.content.bulletPoints.map((pt, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs md:text-sm leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-2" />
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Logic Box (if any) */}
                    {sub.content.logicHi && (
                      <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-900 space-y-1">
                        <div className="text-xs font-bold uppercase flex items-center gap-1.5 text-amber-800">
                          <Lightbulb className="w-3.5 h-3.5" /> संप्रत्ययात्मक तर्क (Conceptual Logic)
                        </div>
                        <p className="text-xs md:text-sm leading-relaxed">
                          {sub.content.logicHi}
                        </p>
                      </div>
                    )}

                    {/* Real-World Examples */}
                    {sub.content.examples && sub.content.examples.length > 0 && (
                      <div className="space-y-2 pt-1">
                        <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                          वास्तविक जीवन का उदाहरण (Real-World Application)
                        </div>
                        {sub.content.examples.map((ex, idx) => (
                          <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs md:text-sm">
                            <strong className="text-slate-900 block mb-0.5">{ex.title}:</strong>
                            <span className="text-slate-600">{ex.desc}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Exam Alert (if any) */}
                    {sub.content.examImportance && (
                      <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start gap-2.5 text-xs">
                        <Award className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                        <div>
                          <strong className="font-bold block">CBSE बोर्ड परीक्षा दृष्टिकोण (Exam Alert):</strong>
                          <span>{sub.content.examImportance}</span>
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
