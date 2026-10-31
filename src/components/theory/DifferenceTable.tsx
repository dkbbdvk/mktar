import React, { useState } from 'react';
import { DifferenceTableData } from '../../types/chapter';
import { ArrowLeftRight, Check, Search } from 'lucide-react';

interface DifferenceTableProps {
  tables: DifferenceTableData[];
}

export const DifferenceTable: React.FC<DifferenceTableProps> = ({ tables }) => {
  const [selectedTableId, setSelectedTableId] = useState<string>(tables[0]?.id || '');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const activeTable = tables.find((t) => t.id === selectedTableId) || tables[0];

  const filteredRows = activeTable?.rows.filter(
    (row) =>
      row.basis.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.val1.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.val2.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
      {/* Table Selector Pills */}
      <div>
        <div className="flex items-center justify-between gap-3 mb-3">
          <h3 className="font-heading font-bold text-xl text-slate-900 flex items-center gap-2">
            <ArrowLeftRight className="w-5 h-5 text-blue-600" />
            महत्वपूर्ण अंतर तुलनात्मक सारणियाँ (Important Differences)
          </h3>
          <span className="text-xs text-slate-500 hidden sm:inline">कुल 8 सारणियाँ</span>
        </div>

        <div className="flex flex-wrap gap-2 pb-2">
          {tables.map((t) => (
            <button
              key={t.id}
              onClick={() => {
                setSelectedTableId(t.id);
                setSearchTerm('');
              }}
              className={`text-xs px-3 py-1.5 rounded-xl font-medium transition ${
                selectedTableId === t.id
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {t.titleHi}
            </button>
          ))}
        </div>
      </div>

      {/* Active Table Presentation */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
          <div>
            <h4 className="font-heading font-bold text-lg text-slate-900">
              {activeTable.titleHi}
            </h4>
            <div className="text-xs text-slate-500">{activeTable.titleEn}</div>
          </div>

          {/* Search inside table */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="आधार या विवरण खोजें..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8 pr-3 py-1.5 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full sm:w-56"
            />
          </div>
        </div>

        {/* The Comparison Table */}
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
              <tr>
                <th className="py-3.5 px-4 w-1/4">तुलना का आधार (Basis)</th>
                <th className="py-3.5 px-4 w-3/8 text-blue-900 bg-blue-50/50">
                  {activeTable.subject1}
                </th>
                <th className="py-3.5 px-4 w-3/8 text-indigo-900 bg-indigo-50/50">
                  {activeTable.subject2}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredRows && filteredRows.length > 0 ? (
                filteredRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-slate-900 text-xs md:text-sm">
                      {row.basis}
                    </td>
                    <td className="py-3.5 px-4 text-slate-700 text-xs md:text-sm bg-blue-50/20 leading-relaxed">
                      {row.val1}
                    </td>
                    <td className="py-3.5 px-4 text-slate-700 text-xs md:text-sm bg-indigo-50/20 leading-relaxed">
                      {row.val2}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} className="py-8 text-center text-xs text-slate-400">
                    कोई मेल नहीं मिला।
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
