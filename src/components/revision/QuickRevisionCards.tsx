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
  HelpCircle,
  Cpu,
  Radio
} from 'lucide-react';
import { playHologramFlip, playCyberClick } from '../../utils/cyberAudio';

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
    playHologramFlip();
    setFlippedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const toggleMastered = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    playCyberClick();
    setMasteredCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const masteredCount = Object.values(masteredCards).filter(Boolean).length;

  const handleSpeakCard = (rel: RevisionRelationship, idx: number, e: React.MouseEvent) => {
    e.stopPropagation();
    playCyberClick();
    if (!onSpeak) return;

    const speechText = `${rel.toolHi} (${rel.tool})। मुद्रास्फीति में इसे ${rel.inflationAction} जाता है, जबकि मंदी में इसे ${rel.deflationAction} जाता है। इससे मुद्रा पूर्ति ${rel.impactOnMoneySupply}। कारण: ${rel.logicHi}।`;
    onSpeak(speechText, rel.toolHi, `card-${idx}`);
  };

  return (
    <div className="bg-slate-900/90 backdrop-blur-2xl p-4 sm:p-8 rounded-3xl border border-cyan-500/30 shadow-2xl shadow-cyan-950/40 space-y-6 sm:space-y-8 text-white relative overflow-hidden">
      {/* Background Cyber Ambient */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-cyan-500/20 pb-5 relative z-10">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] sm:text-xs font-mono font-bold px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 uppercase tracking-widest">
              [ 3D NEURAL MATRIX REVISION ]
            </span>
            <span className="text-xs text-amber-400 font-bold flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> 100/100 SCORE MATRIX
            </span>
          </div>
          <h3 className="font-heading font-extrabold text-xl sm:text-3xl text-white mt-1">
            मौद्रिक नीति उपकरण एवं संबंध
          </h3>
          <p className="text-xs sm:text-sm text-cyan-200/70 mt-0.5 font-mono">
            परीक्षा से पहले 5 मिनट में सभी नीतिगत क्रियाओं का मास्टर सार व इंटरएक्टिव 3D कार्ड्स
          </p>
        </div>

        {/* View Toggle & Filter Switcher */}
        <div className="flex flex-wrap items-center gap-2 self-start md:self-auto">
          {/* Format Toggle: Flashcards vs Table */}
          <div className="flex items-center p-1 bg-slate-950 rounded-2xl border border-cyan-500/30">
            <button
              onClick={() => {
                playCyberClick();
                setViewFormat('flashcards');
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition cursor-pointer ${
                viewFormat === 'flashcards'
                  ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 text-white shadow-md shadow-cyan-600/30 border border-cyan-400/40'
                  : 'text-slate-400 hover:text-cyan-200'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>3D कार्ड्स</span>
            </button>
            <button
              onClick={() => {
                playCyberClick();
                setViewFormat('table');
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition cursor-pointer ${
                viewFormat === 'table'
                  ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 text-white shadow-md shadow-cyan-600/30 border border-cyan-400/40'
                  : 'text-slate-400 hover:text-cyan-200'
              }`}
            >
              <Table className="w-3.5 h-3.5" />
              <span>मैट्रिक्स सारणी</span>
            </button>
          </div>

          {/* Filter Mode */}
          <div className="flex items-center p-1 bg-slate-950 rounded-2xl border border-cyan-500/30">
            <button
              onClick={() => {
                playCyberClick();
                setFilterMode('all');
              }}
              className={`text-xs font-mono px-2.5 py-1.5 rounded-xl font-bold transition cursor-pointer ${
                filterMode === 'all' ? 'bg-cyan-600 text-white' : 'text-slate-400'
              }`}
            >
              सभी
            </button>
            <button
              onClick={() => {
                playCyberClick();
                setFilterMode('inflation');
              }}
              className={`text-xs font-mono px-2.5 py-1.5 rounded-xl font-bold transition cursor-pointer ${
                filterMode === 'inflation' ? 'bg-rose-600 text-white' : 'text-slate-400'
              }`}
            >
              महंगाई
            </button>
            <button
              onClick={() => {
                playCyberClick();
                setFilterMode('deflation');
              }}
              className={`text-xs font-mono px-2.5 py-1.5 rounded-xl font-bold transition cursor-pointer ${
                filterMode === 'deflation' ? 'bg-emerald-600 text-white' : 'text-slate-400'
              }`}
            >
              मंदी
            </button>
          </div>
        </div>
      </div>

      {/* Gamified Mastery Bar for Flashcards Mode */}
      {viewFormat === 'flashcards' && (
        <div className="bg-slate-950/80 p-3.5 sm:p-4 rounded-2xl border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-3 relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 to-indigo-600 text-white flex items-center justify-center font-bold shadow-lg shadow-cyan-600/30 border border-cyan-400/40">
              <Award className="w-5 h-5 text-cyan-200" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-mono font-bold text-white">
                याददाश्त प्रगति (MEMORY_INDEX): {masteredCount} / {relationships.length} उपकरण कंठस्थ
              </div>
              <div className="text-[11px] text-cyan-400/80 font-mono">
                कार्ड पर टच करके पलटें और "याद हो गया" पर टिक करें
              </div>
            </div>
          </div>

          <div className="w-full sm:w-56 bg-slate-900 rounded-full h-2.5 overflow-hidden border border-cyan-500/40">
            <div
              className="bg-gradient-to-r from-cyan-400 via-indigo-500 to-emerald-400 h-full rounded-full transition-all duration-500 shadow-sm shadow-cyan-400"
              style={{ width: `${(masteredCount / relationships.length) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 3D FLASHCARDS GRID MODE                                  */}
      {/* ========================================================= */}
      {viewFormat === 'flashcards' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 relative z-10">
          {relationships.map((rel, idx) => {
            const isFlipped = !!flippedCards[idx];
            const isMastered = !!masteredCards[idx];
            const isCardSpeaking = activeSpeechId === `card-${idx}` && isSpeaking;

            return (
              <div
                key={idx}
                className="perspective-1000 h-[290px] cursor-pointer group"
                onClick={() => toggleFlip(idx)}
              >
                <div
                  className={`w-full h-full relative transition-transform duration-500 transform-style-3d ${
                    isFlipped ? 'rotate-y-180' : ''
                  }`}
                >
                  {/* FRONT SIDE */}
                  <div
                    className={`absolute inset-0 w-full h-full backface-hidden rounded-3xl p-5 border flex flex-col justify-between shadow-xl transition-all duration-300 ${
                      isCardSpeaking
                        ? 'bg-slate-950 border-cyan-400 ring-2 ring-cyan-400/50 shadow-cyan-500/30'
                        : isMastered
                        ? 'bg-slate-950/90 border-emerald-500/60 hover:shadow-emerald-950/50'
                        : 'bg-slate-950/80 hover:bg-slate-900 border-cyan-500/30 hover:border-cyan-400/70 hover:shadow-cyan-950/50'
                    }`}
                  >
                    {/* Corner accents */}
                    <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-400" />
                    <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-purple-400" />

                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-900 text-cyan-300 border border-cyan-500/30">
                          TOOL #{idx + 1}
                        </span>
                        {isMastered && (
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-500/40 flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3 text-emerald-400" /> कंठस्थ
                          </span>
                        )}
                      </div>

                      <div className="mt-4 space-y-1">
                        <h4 className="font-heading font-extrabold text-xl text-white group-hover:text-cyan-300 transition">
                          {rel.toolHi}
                        </h4>
                        <div className="text-xs font-mono font-semibold text-cyan-400/80">
                          {rel.tool}
                        </div>
                      </div>

                      <div className="mt-4 p-2.5 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-xs text-slate-300 space-y-1.5 font-mono">
                        <div className="flex items-center justify-between">
                          <span className="text-slate-400">मुद्रास्फीति (महंगाई):</span>
                          <span className="font-bold text-rose-400 flex items-center gap-1">
                            <TrendingUp className="w-3.5 h-3.5" /> {rel.inflationAction}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-slate-400">अपस्फीति (मंदी):</span>
                          <span className="font-bold text-emerald-400 flex items-center gap-1">
                            <TrendingDown className="w-3.5 h-3.5" /> {rel.deflationAction}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-cyan-500/20 text-[11px] text-slate-400 font-mono">
                      <span className="flex items-center gap-1 text-cyan-400 font-semibold">
                        <RotateCw className="w-3 h-3 group-hover:rotate-180 transition-transform duration-500" />
                        तर्क देखने हेतु टच करें
                      </span>
                      {onSpeak && (
                        <button
                          type="button"
                          onClick={(e) => handleSpeakCard(rel, idx, e)}
                          className="p-1.5 rounded-lg bg-cyan-950/80 hover:bg-cyan-900 text-cyan-300 border border-cyan-500/30 transition cursor-pointer"
                          title="कार्ड का सार सुनें"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* BACK SIDE */}
                  <div
                    className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-3xl p-5 border flex flex-col justify-between shadow-2xl ${
                      isCardSpeaking
                        ? 'bg-slate-950 text-white border-purple-400 ring-2 ring-purple-400/50'
                        : 'bg-gradient-to-br from-slate-950 via-purple-950/50 to-slate-950 text-white border-purple-500/50'
                    }`}
                  >
                    {/* Corner accents */}
                    <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-purple-400" />
                    <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-400" />

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-300">
                          {rel.toolHi} // CBSE_LOGIC
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono flex items-center gap-1">
                          <RotateCw className="w-3 h-3" /> वापस पलटें
                        </span>
                      </div>

                      <div className="text-xs text-purple-100 leading-relaxed bg-black/40 p-3 rounded-xl border border-purple-500/30">
                        <strong className="text-amber-300 block mb-1 font-mono">CBSE परीक्षा तर्क:</strong>
                        {rel.logicHi}
                      </div>

                      <div className="text-xs text-slate-300 font-mono">
                        <strong className="text-white">मुद्रा पूर्ति प्रभाव:</strong>{' '}
                        <span className="text-cyan-300 font-semibold">{rel.impactOnMoneySupply}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-purple-500/30">
                      <button
                        type="button"
                        onClick={(e) => toggleMastered(idx, e)}
                        className={`text-xs font-mono font-bold px-3 py-1.5 rounded-xl flex items-center gap-1.5 transition cursor-pointer ${
                          isMastered
                            ? 'bg-emerald-500 text-white'
                            : 'bg-slate-900 border border-slate-700 hover:border-purple-400 text-slate-200'
                        }`}
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>{isMastered ? 'याद हो गया ✅' : 'कंठस्थ करें'}</span>
                      </button>

                      {onSpeak && (
                        <button
                          type="button"
                          onClick={(e) => handleSpeakCard(rel, idx, e)}
                          className="px-2.5 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-mono font-bold flex items-center gap-1 cursor-pointer border border-purple-400/40"
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
        <div className="space-y-3 relative z-10">
          <div className="text-[10px] sm:text-xs text-cyan-300 bg-cyan-950/80 px-2.5 py-1 rounded-md border border-cyan-500/30 font-mono sm:hidden inline-block">
            👉 तालिका को दाएँ-बाएँ स्वाइप करें
          </div>

          <div className="overflow-x-auto rounded-2xl border border-cyan-500/30 touch-pan-x bg-slate-950/80">
            <table className="w-full text-left text-xs sm:text-sm min-w-[580px]">
              <thead className="bg-slate-900 text-cyan-300 font-mono font-bold border-b border-cyan-500/30 text-xs">
                <tr>
                  <th className="py-3 px-3 sm:px-4">मौद्रिक उपकरण</th>
                  {(filterMode === 'all' || filterMode === 'inflation') && (
                    <th className="py-3 px-3 sm:px-4 text-rose-400 bg-rose-950/30">
                      मुद्रास्फीति (Inflation)
                    </th>
                  )}
                  {(filterMode === 'all' || filterMode === 'deflation') && (
                    <th className="py-3 px-3 sm:px-4 text-emerald-400 bg-emerald-950/30">
                      मंदी (Deflation)
                    </th>
                  )}
                  <th className="py-3 px-3 sm:px-4 text-cyan-400 bg-cyan-950/30">
                    मुद्रा पूर्ति
                  </th>
                  <th className="py-3 px-3 sm:px-4">तार्किक कारण (Logic)</th>
                  {onSpeak && <th className="py-3 px-3 text-center">ऑडियो</th>}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-xs font-mono">
                {relationships.map((rel, idx) => (
                  <tr key={idx} className="hover:bg-slate-900/60 transition-colors">
                    <td className="py-3 px-3 sm:px-4 font-bold text-white whitespace-nowrap">
                      <div>{rel.toolHi}</div>
                      <div className="text-[10px] text-cyan-400 font-normal">{rel.tool}</div>
                    </td>

                    {(filterMode === 'all' || filterMode === 'inflation') && (
                      <td className="py-3 px-3 sm:px-4 text-rose-300 font-semibold bg-rose-950/10 whitespace-nowrap">
                        <span className="inline-flex items-center gap-1">
                          <TrendingUp className="w-3.5 h-3.5" /> {rel.inflationAction}
                        </span>
                      </td>
                    )}

                    {(filterMode === 'all' || filterMode === 'deflation') && (
                      <td className="py-3 px-3 sm:px-4 text-emerald-300 font-semibold bg-emerald-950/10 whitespace-nowrap">
                        <span className="inline-flex items-center gap-1">
                          <TrendingDown className="w-3.5 h-3.5" /> {rel.deflationAction}
                        </span>
                      </td>
                    )}

                    <td className="py-3 px-3 sm:px-4 text-cyan-300 font-medium bg-cyan-950/10 whitespace-nowrap">
                      {rel.impactOnMoneySupply}
                    </td>

                    <td className="py-3 px-3 sm:px-4 text-slate-300 text-xs leading-relaxed min-w-[200px] font-sans">
                      {rel.logicHi}
                    </td>

                    {onSpeak && (
                      <td className="py-3 px-3 text-center">
                        <button
                          onClick={(e) => handleSpeakCard(rel, idx, e)}
                          className="p-1.5 rounded-lg bg-cyan-950 hover:bg-cyan-900 text-cyan-300 border border-cyan-500/30 transition cursor-pointer"
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
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 pt-2 relative z-10">
        <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-950/80 border border-cyan-500/30 space-y-1">
          <div className="text-[10px] sm:text-xs font-mono font-bold text-cyan-400 uppercase truncate">साख गुणक</div>
          <div className="font-mono text-base sm:text-lg font-extrabold text-white">k = 1 / LRR</div>
          <p className="text-[10px] sm:text-[11px] text-slate-400 truncate">LRR से उल्टा संबंध</p>
        </div>

        <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-950/80 border border-emerald-500/30 space-y-1">
          <div className="text-[10px] sm:text-xs font-mono font-bold text-emerald-400 uppercase truncate">कुल जमा सृजन</div>
          <div className="font-mono text-xs sm:text-base font-extrabold text-white truncate">Initial × (1/LRR)</div>
          <p className="text-[10px] sm:text-[11px] text-slate-400 truncate">जमा का गुणक गुना</p>
        </div>

        <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-950/80 border border-purple-500/30 space-y-1">
          <div className="text-[10px] sm:text-xs font-mono font-bold text-purple-400 uppercase truncate">संकीर्ण माप (M1)</div>
          <div className="font-mono text-xs sm:text-base font-extrabold text-white truncate">M1 = C+DD+OD</div>
          <p className="text-[10px] sm:text-[11px] text-slate-400 truncate">सर्वाधिक तरल</p>
        </div>

        <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-950/80 border border-pink-500/30 space-y-1">
          <div className="text-[10px] sm:text-xs font-mono font-bold text-pink-400 uppercase truncate">उच्च-शक्ति मुद्रा</div>
          <div className="font-mono text-xs sm:text-base font-extrabold text-white truncate">H = C + R</div>
          <p className="text-[10px] sm:text-[11px] text-slate-400 truncate">करेंसी + बैंक रिज़र्व</p>
        </div>
      </div>
    </div>
  );
};
