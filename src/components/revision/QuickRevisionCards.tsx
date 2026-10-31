import React, { useState } from 'react';
import { RevisionRelationship } from '../../content/chapters/money-and-banking/revisionNotes';
import { 
  Zap, 
  TrendingUp, 
  TrendingDown, 
  CheckCircle2, 
  RotateCw, 
  Volume2, 
  Sparkles, 
  Table, 
  Layers, 
  Award,
  HelpCircle
} from 'lucide-react';

interface QuickRevisionCardsProps {
  relationships: RevisionRelationship[];
  onSpeak?: (text: string, title: string, id: string) => void;
  activeSpeechId?: string | null;
  isSpeaking?: boolean;
}

export const QuickRevisionCards: React.FC<QuickRevisionCardsProps> = ({ 
  relationships,
  onSpeak,
  activeSpeechId,
  isSpeaking
}) => {
  const [viewFormat, setViewFormat] = useState<'flashcards' | 'table'>('flashcards');
  const [filterMode, setFilterMode] = useState<'all' | 'inflation' | 'deflation'>('all');
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});
  const [masteredCards, setMasteredCards] = useState<Record<number, boolean>>({});

  const toggleFlip = (index: number) => {
    setFlippedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const toggleMastered = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setMasteredCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const masteredCount = Object.values(masteredCards).filter(Boolean).length;

  const handleSpeakCard = (rel: RevisionRelationship, idx: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!onSpeak) return;

    const speechText = `${rel.toolHi} (${rel.tool})। मुद्रास्फीति में इसे ${rel.inflationAction} जाता है, जबकि मंदी में इसे ${rel.deflationAction} जाता है। इससे मुद्रा पूर्ति ${rel.impactOnMoneySupply}। कारण: ${rel.logicHi}।`;
    onSpeak(speechText, rel.toolHi, `card-${idx}`);
  };

  return (
    <div className="bg-white p-4 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6 sm:space-y-8">
      {/* Header Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 uppercase tracking-wider">
              त्वरित पुनरावलोकन नोट्स (Quick Revision)
            </span>
            <span className="text-xs text-amber-600 font-bold flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> 100/100 स्कोर बूस्टर
            </span>
          </div>
          <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900 mt-1">
            मौद्रिक नीति उपकरण एवं संबंध
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            परीक्षा से पहले 5 मिनट में सभी नीतिगत क्रियाओं का मास्टर सार व इंटरएक्टिव 3D कार्ड्स
          </p>
        </div>

        {/* View Toggle & Filter Switcher */}
        <div className="flex flex-wrap items-center gap-2 self-start md:self-auto">
          {/* Format Toggle: Flashcards vs Table */}
          <div className="flex items-center p-1 bg-slate-100 rounded-2xl border border-slate-200">
            <button
              onClick={() => setViewFormat('flashcards')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                viewFormat === 'flashcards'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>3D फ्लैशकार्ड्स</span>
            </button>
            <button
              onClick={() => setViewFormat('table')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                viewFormat === 'table'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Table className="w-3.5 h-3.5" />
              <span>मैट्रिक्स सारणी</span>
            </button>
          </div>

          {/* Filter Mode */}
          <div className="flex items-center p-1 bg-slate-100 rounded-2xl border border-slate-200">
            <button
              onClick={() => setFilterMode('all')}
              className={`text-xs px-2.5 py-1.5 rounded-xl font-bold transition cursor-pointer ${
                filterMode === 'all' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-600'
              }`}
            >
              सभी
            </button>
            <button
              onClick={() => setFilterMode('inflation')}
              className={`text-xs px-2.5 py-1.5 rounded-xl font-bold transition cursor-pointer ${
                filterMode === 'inflation' ? 'bg-rose-600 text-white shadow-sm' : 'text-slate-600'
              }`}
            >
              महंगाई
            </button>
            <button
              onClick={() => setFilterMode('deflation')}
              className={`text-xs px-2.5 py-1.5 rounded-xl font-bold transition cursor-pointer ${
                filterMode === 'deflation' ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-600'
              }`}
            >
              मंदी
            </button>
          </div>
        </div>
      </div>

      {/* Gamified Mastery Bar for Flashcards Mode */}
      {viewFormat === 'flashcards' && (
        <div className="bg-gradient-to-r from-indigo-50 via-blue-50 to-cyan-50 p-3 sm:p-4 rounded-2xl border border-indigo-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold shadow-md shadow-indigo-600/20">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-slate-800">
                आपकी याददाश्त प्रगति: {masteredCount} / {relationships.length} उपकरण कंठस्थ
              </div>
              <div className="text-[11px] text-slate-500">
                कार्ड पर क्लिक करके पलटें और "याद हो गया" पर टिक करें
              </div>
            </div>
          </div>

          <div className="w-full sm:w-48 bg-white rounded-full h-2.5 overflow-hidden border border-indigo-200 shadow-inner">
            <div
              className="bg-gradient-to-r from-indigo-600 to-emerald-500 h-full rounded-full transition-all duration-500"
              style={{ width: `${(masteredCount / relationships.length) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 3D FLASHCARDS GRID MODE                                  */}
      {/* ========================================================= */}
      {viewFormat === 'flashcards' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {relationships.map((rel, idx) => {
            const isFlipped = !!flippedCards[idx];
            const isMastered = !!masteredCards[idx];
            const isCardSpeaking = activeSpeechId === `card-${idx}` && isSpeaking;

            return (
              <div
                key={idx}
                className="perspective-1000 h-[280px] cursor-pointer group"
                onClick={() => toggleFlip(idx)}
              >
                <div
                  className={`w-full h-full relative transition-transform duration-500 transform-style-3d ${
                    isFlipped ? 'rotate-y-180' : ''
                  }`}
                >
                  {/* FRONT SIDE */}
                  <div
                    className={`absolute inset-0 w-full h-full backface-hidden rounded-3xl p-5 border flex flex-col justify-between shadow-sm transition-all duration-300 ${
                      isCardSpeaking
                        ? 'bg-gradient-to-br from-indigo-50 to-blue-50 border-indigo-500 ring-2 ring-indigo-500/30 shadow-indigo-500/20 shadow-lg'
                        : isMastered
                        ? 'bg-emerald-50/40 border-emerald-300 hover:shadow-md'
                        : 'bg-white hover:bg-slate-50/80 border-slate-200 hover:border-indigo-300 hover:shadow-md'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                          उपकरण #{idx + 1}
                        </span>
                        {isMastered && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" /> कंठस्थ
                          </span>
                        )}
                      </div>

                      <div className="mt-4 space-y-1">
                        <h4 className="font-heading font-extrabold text-xl text-slate-900 group-hover:text-indigo-600 transition">
                          {rel.toolHi}
                        </h4>
                        <div className="text-xs font-semibold text-slate-400">
                          {rel.tool}
                        </div>
                      </div>

                      <div className="mt-4 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600 space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-slate-400">मुद्रास्फीति (महंगाई):</span>
                          <span className="font-bold text-rose-600 flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" /> {rel.inflationAction}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-slate-400">अपस्फीति (मंदी):</span>
                          <span className="font-bold text-emerald-600 flex items-center gap-1">
                            <TrendingDown className="w-3 h-3" /> {rel.deflationAction}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-[11px] text-slate-400">
                      <span className="flex items-center gap-1 text-indigo-600 font-semibold">
                        <RotateCw className="w-3 h-3 group-hover:rotate-180 transition-transform duration-500" />
                        विस्तार व तर्क देखने के लिए पलटें
                      </span>
                      {onSpeak && (
                        <button
                          type="button"
                          onClick={(e) => handleSpeakCard(rel, idx, e)}
                          className="p-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 transition"
                          title="कार्ड का सार सुनें"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* BACK SIDE */}
                  <div
                    className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-3xl p-5 border flex flex-col justify-between shadow-lg ${
                      isCardSpeaking
                        ? 'bg-indigo-900 text-white border-indigo-400 ring-2 ring-indigo-400/50'
                        : 'bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white border-slate-800'
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-300">
                          {rel.toolHi} • अवधारणा तर्क
                        </span>
                        <span className="text-[10px] text-slate-400 flex items-center gap-1">
                          <RotateCw className="w-3 h-3" /> वापस पलटें
                        </span>
                      </div>

                      <div className="text-xs text-indigo-100 leading-relaxed bg-white/10 p-3 rounded-xl backdrop-blur-xs border border-white/10">
                        <strong className="text-amber-300 block mb-1">CBSE परीक्षा तर्क:</strong>
                        {rel.logicHi}
                      </div>

                      <div className="text-xs text-slate-300">
                        <strong className="text-white">मुद्रा पूर्ति प्रभाव:</strong>{' '}
                        <span className="text-cyan-300 font-semibold">{rel.impactOnMoneySupply}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-white/10">
                      <button
                        type="button"
                        onClick={(e) => toggleMastered(idx, e)}
                        className={`text-xs font-bold px-3 py-1.5 rounded-xl flex items-center gap-1.5 transition ${
                          isMastered
                            ? 'bg-emerald-500 text-white'
                            : 'bg-white/10 hover:bg-white/20 text-slate-200'
                        }`}
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>{isMastered ? 'याद हो गया ✅' : 'कंठस्थ करें'}</span>
                      </button>

                      {onSpeak && (
                        <button
                          type="button"
                          onClick={(e) => handleSpeakCard(rel, idx, e)}
                          className="px-2.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center gap-1"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                          <span>सुनें</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ========================================================= */}
      {/* MASTER RELATIONSHIPS MATRIX TABLE MODE                   */}
      {/* ========================================================= */}
      {viewFormat === 'table' && (
        <div className="space-y-3">
          <div className="text-[10px] sm:text-xs text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200 font-medium sm:hidden inline-block">
            👉 तालिका को दाएँ-बाएँ स्वाइप करें
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 touch-pan-x">
            <table className="w-full text-left text-xs sm:text-sm min-w-[580px]">
              <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200 text-xs">
                <tr>
                  <th className="py-3 px-3 sm:px-4">मौद्रिक उपकरण</th>
                  {(filterMode === 'all' || filterMode === 'inflation') && (
                    <th className="py-3 px-3 sm:px-4 text-rose-800 bg-rose-50/50">
                      मुद्रास्फीति (Inflation)
                    </th>
                  )}
                  {(filterMode === 'all' || filterMode === 'deflation') && (
                    <th className="py-3 px-3 sm:px-4 text-emerald-800 bg-emerald-50/50">
                      मंदी (Deflation)
                    </th>
                  )}
                  <th className="py-3 px-3 sm:px-4 text-blue-900 bg-blue-50/50">
                    मुद्रा पूर्ति
                  </th>
                  <th className="py-3 px-3 sm:px-4">तार्किक कारण (Logic)</th>
                  {onSpeak && <th className="py-3 px-3 text-center">ऑडियो</th>}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs">
                {relationships.map((rel, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-3 sm:px-4 font-bold text-slate-900 whitespace-nowrap">
                      <div>{rel.toolHi}</div>
                      <div className="text-[10px] text-slate-400 font-normal">{rel.tool}</div>
                    </td>

                    {(filterMode === 'all' || filterMode === 'inflation') && (
                      <td className="py-3 px-3 sm:px-4 text-rose-700 font-semibold bg-rose-50/20 whitespace-nowrap">
                        <span className="inline-flex items-center gap-1">
                          <TrendingUp className="w-3.5 h-3.5" /> {rel.inflationAction}
                        </span>
                      </td>
                    )}

                    {(filterMode === 'all' || filterMode === 'deflation') && (
                      <td className="py-3 px-3 sm:px-4 text-emerald-700 font-semibold bg-emerald-50/20 whitespace-nowrap">
                        <span className="inline-flex items-center gap-1">
                          <TrendingDown className="w-3.5 h-3.5" /> {rel.deflationAction}
                        </span>
                      </td>
                    )}

                    <td className="py-3 px-3 sm:px-4 text-blue-800 font-medium bg-blue-50/20 whitespace-nowrap">
                      {rel.impactOnMoneySupply}
                    </td>

                    <td className="py-3 px-3 sm:px-4 text-slate-600 text-xs leading-relaxed min-w-[200px]">
                      {rel.logicHi}
                    </td>

                    {onSpeak && (
                      <td className="py-3 px-3 text-center">
                        <button
                          onClick={(e) => handleSpeakCard(rel, idx, e)}
                          className="p-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 transition"
                          title="इस उपकरण का विवरण सुनें"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Essential Formulas Cheat Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 pt-2">
        <div className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50/30 border border-blue-200/80 space-y-1">
          <div className="text-[10px] sm:text-xs font-bold text-blue-800 uppercase truncate">साख गुणक</div>
          <div className="font-mono text-base sm:text-lg font-extrabold text-blue-700">k = 1 / LRR</div>
          <p className="text-[10px] sm:text-[11px] text-slate-500 truncate">LRR से उल्टा संबंध</p>
        </div>

        <div className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50/30 border border-emerald-200/80 space-y-1">
          <div className="text-[10px] sm:text-xs font-bold text-emerald-800 uppercase truncate">कुल जमा सृजन</div>
          <div className="font-mono text-xs sm:text-base font-extrabold text-emerald-700 truncate">Initial × (1/LRR)</div>
          <p className="text-[10px] sm:text-[11px] text-slate-500 truncate">जमा का गुणक गुना</p>
        </div>

        <div className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50/30 border border-indigo-200/80 space-y-1">
          <div className="text-[10px] sm:text-xs font-bold text-indigo-800 uppercase truncate">संकीर्ण माप (M1)</div>
          <div className="font-mono text-xs sm:text-base font-extrabold text-indigo-700 truncate">M1 = C+DD+OD</div>
          <p className="text-[10px] sm:text-[11px] text-slate-500 truncate">सर्वाधिक तरल</p>
        </div>

        <div className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50/30 border border-purple-200/80 space-y-1">
          <div className="text-[10px] sm:text-xs font-bold text-purple-800 uppercase truncate">उच्च-शक्ति मुद्रा</div>
          <div className="font-mono text-xs sm:text-base font-extrabold text-purple-700 truncate">H = C + R</div>
          <p className="text-[10px] sm:text-[11px] text-slate-500 truncate">करेंसी + बैंक रिज़र्व</p>
        </div>
      </div>
    </div>
  );
};
