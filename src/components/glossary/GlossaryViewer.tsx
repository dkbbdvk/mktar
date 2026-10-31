import React, { useState } from 'react';
import { GlossaryTerm } from '../../types/glossary';
import { Search, BookMarked, Filter, Hash, Sparkles, Volume2, Cpu } from 'lucide-react';
import { playCyberClick } from '../../utils/cyberAudio';

interface GlossaryViewerProps {
  terms: GlossaryTerm[];
  onSpeak?: (text: string, title: string, id: string) => void;
  activeSpeechId?: string | null;
  isSpeaking?: boolean;
}

export const GlossaryViewer: React.FC<GlossaryViewerProps> = ({ 
  terms,
  onSpeak,
  activeSpeechId,
  isSpeaking
}) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Money', 'Banking', 'RBI & Policy'];

  const filteredTerms = terms.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.termEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.termHi.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.definitionHi.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.definitionEn.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-slate-900/90 backdrop-blur-2xl p-6 md:p-8 rounded-3xl border border-cyan-500/30 shadow-2xl shadow-cyan-950/40 space-y-6 text-white relative">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-cyan-500/20 pb-5">
        <div>
          <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
            [ BILINGUAL_TERMINOLOGY_DATABASE ]
          </span>
          <h3 className="font-heading font-extrabold text-xl md:text-3xl text-white mt-1">
            द्विभाषी पारिभाषिक शब्दावली (Glossary)
          </h3>
          <p className="text-xs md:text-sm text-cyan-200/70 mt-0.5 font-mono">
            सभी महत्वपूर्ण अंग्रेजी और हिंदी तकनीकी अर्थशास्त्र शब्दों की स्पष्ट परिभाषाएं
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-cyan-400 absolute left-3 top-3" />
          <input
            type="text"
            placeholder="शब्द खोजें (Search terms)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs md:text-sm rounded-xl border border-cyan-500/30 bg-slate-950/80 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 font-mono"
          />
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2">
        <Filter className="w-4 h-4 text-cyan-400 shrink-0 ml-1 mr-1" />
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              playCyberClick();
              setSelectedCategory(cat);
            }}
            className={`text-xs font-mono px-3 py-1.5 rounded-xl font-medium transition cursor-pointer ${
              selectedCategory === cat
                ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 text-white shadow-md shadow-cyan-600/30 border border-cyan-400/50'
                : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-cyan-200 hover:border-cyan-500/30'
            }`}
          >
            {cat === 'All' ? 'सभी श्रेणियां (ALL)' : cat}
          </button>
        ))}
        <span className="text-xs text-slate-400 ml-auto font-mono">
          {filteredTerms.length} शब्द उपलब्ध
        </span>
      </div>

      {/* Glossary Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredTerms.length > 0 ? (
          filteredTerms.map((term) => (
            <div
              key={term.id}
              className="p-5 rounded-2xl border border-cyan-500/20 bg-slate-950/80 hover:bg-slate-900 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-950/50 transition space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <h4 className="font-heading font-bold text-base text-white">
                    {term.termHi}
                  </h4>
                  <div className="flex items-center gap-1.5 shrink-0">
                    {onSpeak && (
                      <button
                        onClick={() => {
                          playCyberClick();
                          onSpeak(
                            `${term.termHi}। अंग्रेजी में ${term.termEn}। परिभाषा: ${term.definitionHi}`,
                            term.termHi,
                            `glossary-${term.id}`
                          );
                        }}
                        className={`p-1.5 rounded-lg transition cursor-pointer ${
                          activeSpeechId === `glossary-${term.id}` && isSpeaking
                            ? 'bg-rose-500 text-white animate-pulse'
                            : 'bg-cyan-950 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-900'
                        }`}
                        title="परिभाषा सुनें"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                    <span className="text-[10px] font-mono font-bold text-cyan-300 bg-cyan-950 px-2 py-0.5 rounded-md border border-cyan-500/30">
                      {term.category}
                    </span>
                  </div>
                </div>
                <div className="text-xs font-mono font-semibold text-cyan-400/80 italic">
                  {term.termEn}
                </div>

                <p className="text-xs md:text-sm text-slate-200 leading-relaxed font-normal pt-1">
                  {term.definitionHi}
                </p>

                <p className="text-xs text-slate-400 leading-relaxed italic font-mono">
                  "{term.definitionEn}"
                </p>
              </div>

              {(term.exampleHi || term.relatedFormula) && (
                <div className="pt-2 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono">
                  {term.exampleHi && (
                    <span className="text-slate-400">
                      <strong className="text-cyan-400">उदा:</strong> {term.exampleHi}
                    </span>
                  )}
                  {term.relatedFormula && (
                    <span className="font-mono text-cyan-300 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-500/30 font-bold ml-auto">
                      {term.relatedFormula}
                    </span>
                  )}
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="col-span-2 py-12 text-center text-slate-500 font-mono text-sm">
            कोई शब्द नहीं मिला। कृपया अन्य कीवर्ड से खोजें।
          </div>
        )}
      </div>
    </div>
  );
};
