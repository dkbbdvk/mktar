import React, { useState } from 'react';
import { GlossaryTerm } from '../../types/glossary';
import { Search, BookMarked, Filter, Hash, Sparkles } from 'lucide-react';

interface GlossaryViewerProps {
  terms: GlossaryTerm[];
}

export const GlossaryViewer: React.FC<GlossaryViewerProps> = ({ terms }) => {
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
    <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
        <div>
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
            अर्थशास्त्र शब्दावली (Economics Bilingual Glossary)
          </span>
          <h3 className="font-heading font-bold text-xl md:text-2xl text-slate-900 mt-1">
            द्विभाषी पारिभाषिक शब्दावली (Searchable Glossary)
          </h3>
          <p className="text-xs md:text-sm text-slate-500 mt-0.5">
            सभी महत्वपूर्ण अंग्रेजी और हिंदी तकनीकी अर्थशास्त्र शब्दों की स्पष्ट परिभाषाएं
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <input
            type="text"
            placeholder="शब्द खोजें (Search terms in EN/HI)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs md:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
          />
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2">
        <Filter className="w-4 h-4 text-slate-400 shrink-0 ml-1 mr-1" />
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`text-xs px-3 py-1.5 rounded-xl font-medium transition ${
              selectedCategory === cat
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {cat === 'All' ? 'सभी श्रेणियां (All Terms)' : cat}
          </button>
        ))}
        <span className="text-xs text-slate-400 ml-auto font-medium">
          {filteredTerms.length} शब्द उपलब्ध
        </span>
      </div>

      {/* Glossary Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredTerms.length > 0 ? (
          filteredTerms.map((term) => (
            <div
              key={term.id}
              className="p-5 rounded-2xl border border-slate-200 bg-slate-50/40 hover:bg-white hover:border-blue-200 hover:shadow-md transition space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <h4 className="font-heading font-bold text-base text-slate-900">
                    {term.termHi}
                  </h4>
                  <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100 shrink-0">
                    {term.category}
                  </span>
                </div>
                <div className="text-xs font-semibold text-slate-500 italic">
                  {term.termEn}
                </div>

                <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-medium pt-1">
                  {term.definitionHi}
                </p>

                <p className="text-xs text-slate-500 leading-relaxed italic">
                  "{term.definitionEn}"
                </p>
              </div>

              {(term.exampleHi || term.relatedFormula) && (
                <div className="pt-2 border-t border-slate-200/60 flex flex-wrap items-center justify-between gap-2 text-[11px]">
                  {term.exampleHi && (
                    <span className="text-slate-600">
                      <strong>उदा:</strong> {term.exampleHi}
                    </span>
                  )}
                  {term.relatedFormula && (
                    <span className="font-mono text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100 font-bold ml-auto">
                      {term.relatedFormula}
                    </span>
                  )}
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="col-span-2 py-12 text-center text-slate-400 text-sm">
            कोई शब्द नहीं मिला। कृपया अन्य कीवर्ड से खोजें।
          </div>
        )}
      </div>
    </div>
  );
};
