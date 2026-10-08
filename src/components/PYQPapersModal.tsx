import React, { useState } from 'react';
import { pyqPapersList, PYQPaperMeta } from '../data/pyqPapers';
import { SSCMockTest } from '../types/sscTest';
import {
  History,
  X,
  Play,
  Calendar,
  Clock,
  Award,
  CheckCircle2,
  FileCode,
  Flame,
  Search,
  Filter
} from 'lucide-react';

import { SSCExamCategory } from '../data/sscExams';

interface PYQPapersModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPaper: (paper: SSCMockTest) => void;
  onViewJson: (paper: SSCMockTest) => void;
  activeTestId: string;
  initialExamCategory?: SSCExamCategory;
}

export const PYQPapersModal: React.FC<PYQPapersModalProps> = ({
  isOpen,
  onClose,
  onSelectPaper,
  onViewJson,
  activeTestId,
  initialExamCategory,
}) => {
  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');
  const [selectedExam, setSelectedExam] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Sync selected exam category when modal is opened
  React.useEffect(() => {
    if (isOpen && initialExamCategory && initialExamCategory !== 'all') {
      setSelectedExam(initialExamCategory);
    }
  }, [isOpen, initialExamCategory]);

  if (!isOpen) return null;

  const filteredPapers = pyqPapersList.filter((paper) => {
    if (selectedYear !== 'all' && paper.year !== selectedYear) return false;
    if (selectedExam !== 'all' && paper.examCategory !== selectedExam) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        paper.exam.toLowerCase().includes(q) ||
        paper.shift.toLowerCase().includes(q) ||
        paper.examDate.toLowerCase().includes(q) ||
        paper.description.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-3 sm:p-5 backdrop-blur-xs overflow-y-auto animate-fade-in">
      <div className="bg-white rounded-2xl max-w-4xl w-full shadow-2xl border border-slate-200 overflow-hidden my-auto flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 p-5 sm:p-6 text-white flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-white/20 backdrop-blur-xs flex items-center justify-center text-white shadow-inner">
              <History className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-black/25 text-amber-100 uppercase tracking-wider">
                  Official SSC Archives
                </span>
                <span className="text-xs text-amber-100 hidden sm:inline">
                  25 Qs/Section • 15 Mins/Section
                </span>
              </div>
              <h2 className="text-lg sm:text-2xl font-black mt-0.5">
                Previous Year Papers (पिछले वर्षों के प्रश्न पत्र)
              </h2>
              <p className="text-xs sm:text-sm text-amber-100 mt-1">
                वास्तविक पिछले वर्षों के 100-प्रश्नों वाले ऑफिशियल पेपर देकर वास्तविक परीक्षा स्तर की तैयारी करें।
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filters Bar */}
        <div className="bg-slate-50 border-b border-slate-200 p-4 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
          {/* Year Filter */}
          <div className="flex items-center gap-1.5">
            <span className="text-slate-500 font-semibold text-xs hidden sm:inline">Year:</span>
            <div className="flex bg-slate-200 p-0.5 rounded-lg">
              {(['all', 2024, 2023, 2022] as const).map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-2.5 py-1 rounded-md text-xs font-bold transition-all ${
                    selectedYear === year
                      ? 'bg-white text-amber-800 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {year === 'all' ? 'All Years' : year}
                </button>
              ))}
            </div>
          </div>

          {/* Exam Type Filter */}
          <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-1 sm:pb-0">
            <span className="text-slate-500 font-semibold text-xs hidden sm:inline">Exam:</span>
            <div className="flex bg-slate-200 p-0.5 rounded-lg shrink-0">
              {[
                { id: 'all', label: 'All Exams (सभी)' },
                { id: 'cgl', label: 'SSC CGL' },
                { id: 'chsl', label: 'SSC CHSL' },
                { id: 'mts', label: 'SSC MTS' },
                { id: 'cpo', label: 'SSC CPO' },
                { id: 'gd', label: 'SSC GD' },
                { id: 'selection_post', label: 'Selection Post' },
              ].map((ex) => (
                <button
                  key={ex.id}
                  onClick={() => setSelectedExam(ex.id)}
                  className={`px-2.5 py-1 rounded-md text-xs font-bold transition-all whitespace-nowrap ${
                    selectedExam === ex.id
                      ? 'bg-white text-indigo-950 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {ex.label}
                </button>
              ))}
            </div>
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-48">
            <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search shift or topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-white border border-slate-300 rounded-lg focus:outline-hidden focus:ring-1 focus:ring-amber-500"
            />
          </div>
        </div>

        {/* Papers List */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 flex-1">
          {filteredPapers.length > 0 ? (
            filteredPapers.map((paper) => {
              const isActive = activeTestId === paper.testData.test_id;

              return (
                <div
                  key={paper.id}
                  className={`p-4 sm:p-5 rounded-xl border-2 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-4 ${
                    isActive
                      ? 'border-amber-500 bg-amber-50/40 shadow-xs'
                      : 'border-slate-200 hover:border-amber-300 bg-white shadow-xs'
                  }`}
                >
                  {/* Left Info */}
                  <div className="space-y-1.5 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded bg-amber-100 text-amber-900 text-xs font-bold border border-amber-200">
                        {paper.exam}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200">
                        {paper.shift}
                      </span>
                      <span className="text-xs text-slate-500 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {paper.examDate}
                      </span>
                      <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">
                        UR Cut-off: {paper.urCutoff}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      {paper.testData.test_title}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-2">
                      {paper.description}
                    </p>

                    {/* Structure Tags */}
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 pt-1">
                      <span className="flex items-center gap-1 font-semibold text-slate-700">
                        <Clock className="w-3.5 h-3.5 text-indigo-600" />
                        60 Mins (15 mins × 4 sections)
                      </span>
                      <span className="text-slate-300">•</span>
                      <span>100 Total Questions (25 per section)</span>
                      <span className="text-slate-300">•</span>
                      <span>Marking: +2.00 / -0.50</span>
                    </div>
                  </div>

                  {/* Right Actions */}
                  <div className="flex items-center gap-2 shrink-0 w-full md:w-auto justify-end pt-2 md:pt-0 border-t md:border-t-0 border-slate-100">
                    <button
                      onClick={() => {
                        onViewJson(paper.testData);
                        onClose();
                      }}
                      className="px-3 py-2 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors flex items-center gap-1.5"
                      title="Inspect Strict JSON"
                    >
                      <FileCode className="w-3.5 h-3.5" />
                      <span>JSON</span>
                    </button>

                    <button
                      onClick={() => {
                        onSelectPaper(paper.testData);
                        onClose();
                      }}
                      className="px-4 py-2 text-xs sm:text-sm font-bold rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white transition-all shadow flex items-center gap-1.5 cursor-pointer"
                    >
                      <Play className="w-3.5 h-3.5" />
                      <span>{isActive ? 'Resume Paper' : 'Start PYQ Paper'}</span>
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="p-8 text-center text-slate-500 text-sm">
              No previous year papers matching your search criteria.
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 border-t border-slate-200 px-6 py-3 flex items-center justify-between text-xs text-slate-500">
          <span>
            💡 PYQ Tip: Previous year papers provide the most accurate benchmark for SSC cut-offs and question trends.
          </span>
          <button
            onClick={onClose}
            className="px-3 py-1.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 font-semibold"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
