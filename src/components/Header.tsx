import React, { useState, useRef, useEffect } from 'react';
import {
  BookOpen,
  Sparkles,
  Code,
  BarChart2,
  Languages,
  RotateCcw,
  History,
  Target,
  ChevronDown,
  Check,
  Youtube
} from 'lucide-react';
import { SSCExamCategory, sscExamsList } from '../data/sscExams';

interface HeaderProps {
  currentTab: 'cbt' | 'generator' | 'json' | 'analysis';
  setCurrentTab: (tab: 'cbt' | 'generator' | 'json' | 'analysis') => void;
  language: 'en' | 'hi' | 'both';
  setLanguage: (lang: 'en' | 'hi' | 'both') => void;
  testTitle: string;
  hasSubmitted: boolean;
  onResetTest: () => void;
  onOpenPYQModal: () => void;
  onOpenUploadModal: () => void;
  activeExamCategory: SSCExamCategory;
  onSelectExamCategory: (exam: SSCExamCategory) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  setCurrentTab,
  language,
  setLanguage,
  testTitle,
  hasSubmitted,
  onResetTest,
  onOpenPYQModal,
  onOpenUploadModal,
  activeExamCategory,
  onSelectExamCategory,
}) => {
  const [showExamDropdown, setShowExamDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowExamDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentExamMeta =
    sscExamsList.find((e) => e.id === activeExamCategory) || sscExamsList[0];

  return (
    <header className="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-30 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Exam Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-amber-500 to-indigo-600 flex items-center justify-center font-bold text-white shadow-md text-lg shrink-0">
              SSC
            </div>
            <div>
              <div className="flex items-center gap-2">
                {/* Interactive Exam Selector Pill */}
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setShowExamDropdown(!showExamDropdown)}
                    className="flex items-center gap-1.5 px-2 py-0.5 text-xs font-bold rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500/30 transition-colors cursor-pointer"
                    title="Click to Switch SSC Exam (CGL, CHSL, MTS, CPO, GD)"
                  >
                    <Target className="w-3 h-3 text-amber-400" />
                    <span>{currentExamMeta.code}</span>
                    <ChevronDown className="w-3 h-3 text-amber-300/80" />
                  </button>

                  {/* Dropdown Menu */}
                  {showExamDropdown && (
                    <div className="absolute left-0 mt-2 w-72 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl z-50 p-2 space-y-1">
                      <div className="text-[10px] uppercase font-bold text-slate-400 px-2 py-1 flex items-center justify-between border-b border-slate-800 pb-1.5">
                        <span>Select Target Exam (परीक्षा चुनें)</span>
                        <span className="text-amber-400">Mock &amp; PYQ</span>
                      </div>
                      <div className="max-h-64 overflow-y-auto space-y-1 py-1">
                        {sscExamsList.map((exam) => {
                          const isSelected = activeExamCategory === exam.id;
                          return (
                            <button
                              key={exam.id}
                              onClick={() => {
                                onSelectExamCategory(exam.id);
                                setShowExamDropdown(false);
                              }}
                              className={`w-full text-left px-2.5 py-2 rounded-lg text-xs transition-colors flex items-center justify-between cursor-pointer ${
                                isSelected
                                  ? 'bg-indigo-600 text-white font-bold'
                                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                              }`}
                            >
                              <div>
                                <div className="font-semibold flex items-center gap-1.5">
                                  <span>{exam.code}</span>
                                  <span className="text-[10px] font-normal opacity-80">
                                    • {exam.qualification}
                                  </span>
                                </div>
                                <div className="text-[10px] opacity-75 font-hindi line-clamp-1">
                                  {exam.name.hi}
                                </div>
                              </div>
                              {isSelected && <Check className="w-4 h-4 text-emerald-400 shrink-0" />}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                <span className="text-xs text-slate-400 hidden md:inline">
                  100 Qs • 15m/Section
                </span>
              </div>

              <h1 className="text-xs sm:text-sm font-bold text-slate-100 truncate max-w-xs sm:max-w-sm lg:max-w-md">
                {testTitle}
              </h1>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="flex items-center gap-1 sm:gap-2">
            {/* Dedicated User Requested Button: youtube link or pdf upload test */}
            <button
              onClick={onOpenUploadModal}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-bold rounded-lg bg-gradient-to-r from-rose-600 via-red-600 to-amber-600 hover:from-rose-700 hover:to-red-700 text-white shadow transition-all cursor-pointer border border-rose-400/40 shrink-0"
              title="Create Mock Test from YouTube Video Link or Upload PDF/Image"
            >
              <Youtube className="w-4 h-4 text-white shrink-0" />
              <span className="whitespace-nowrap">youtube link or pdf upload test</span>
            </button>

            {/* Dedicated Previous Year Papers (PYQ) Button */}
            <button
              onClick={onOpenPYQModal}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs sm:text-sm font-bold rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white shadow transition-all cursor-pointer border border-amber-400/40 shrink-0"
              title="Solve Previous Year Official Papers for CGL, CHSL, MTS, CPO, GD"
            >
              <History className="w-4 h-4 text-amber-100 shrink-0" />
              <span className="hidden lg:inline">PYQ Papers (पिछले वर्ष के पेपर)</span>
              <span className="lg:hidden">PYQ</span>
            </button>

            <button
              onClick={() => setCurrentTab('cbt')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-colors ${
                currentTab === 'cbt'
                  ? 'bg-indigo-600 text-white shadow'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span className="hidden sm:inline">Test CBT</span>
            </button>

            {hasSubmitted && (
              <button
                onClick={() => setCurrentTab('analysis')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-colors ${
                  currentTab === 'analysis'
                    ? 'bg-emerald-600 text-white shadow'
                    : 'text-emerald-400 hover:bg-emerald-950/40'
                }`}
              >
                <BarChart2 className="w-4 h-4" />
                <span>Result &amp; Solutions</span>
              </button>
            )}

            <button
              onClick={() => setCurrentTab('generator')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-colors ${
                currentTab === 'generator'
                  ? 'bg-purple-600 text-white shadow'
                  : 'text-purple-300 hover:bg-purple-950/40'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span className="hidden sm:inline">AI Test Engine</span>
              <span className="sm:hidden">Engine</span>
            </button>

            <button
              onClick={() => setCurrentTab('json')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-colors ${
                currentTab === 'json'
                  ? 'bg-amber-600 text-white shadow'
                  : 'text-amber-300 hover:bg-amber-950/40'
              }`}
              title="View Strict JSON Output"
            >
              <Code className="w-4 h-4" />
              <span>JSON Output</span>
            </button>
          </nav>

          {/* Right Tools: Language Selector & Reset */}
          <div className="flex items-center gap-2">
            <div className="flex items-center bg-slate-800 rounded-lg p-0.5 border border-slate-700 text-xs">
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 rounded transition-colors ${
                  language === 'en'
                    ? 'bg-indigo-600 text-white font-semibold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title="View in English"
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('hi')}
                className={`px-2 py-1 rounded transition-colors ${
                  language === 'hi'
                    ? 'bg-indigo-600 text-white font-semibold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title="हिन्दी में देखें"
              >
                हिन्दी
              </button>
              <button
                onClick={() => setLanguage('both')}
                className={`px-2 py-1 rounded transition-colors hidden md:block ${
                  language === 'both'
                    ? 'bg-indigo-600 text-white font-semibold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title="Bilingual / दोनों भाषाएँ"
              >
                Bilingual
              </button>
            </div>

            <button
              onClick={onResetTest}
              className="p-1.5 text-slate-400 hover:text-rose-400 hover:bg-slate-800 rounded-lg transition-colors"
              title="Restart / Reset Test"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
