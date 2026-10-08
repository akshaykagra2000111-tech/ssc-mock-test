import React, { useState } from 'react';
import { SSCMockTest } from '../types/sscTest';
import {
  Sparkles,
  BookOpen,
  CheckCircle2,
  Zap,
  Sliders,
  Layers,
  Flame,
  RotateCw
} from 'lucide-react';
import { mockTestPresets } from '../data/mockTestPresets';

interface ContentEngineViewProps {
  onLoadTest: (test: SSCMockTest) => void;
  currentTestId: string;
}

export const ContentEngineView: React.FC<ContentEngineViewProps> = ({
  onLoadTest,
  currentTestId,
}) => {
  const [examType, setExamType] = useState('SSC CGL Tier-1');
  const [difficulty, setDifficulty] = useState('Moderate (SSC CGL Actual Standard)');
  const [questionsPerSection, setQuestionsPerSection] = useState(25);
  const [focusArea, setFocusArea] = useState('Comprehensive All 4 Sections');
  const [customPrompt, setCustomPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleGenerate = async () => {
    setIsGenerating(true);
    setStatusMessage('Connecting to Gemini AI Engine and drafting bilingual SSC Tier-1 questions...');

    try {
      const res = await fetch('/api/generate-test', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          examType,
          difficulty,
          questionsPerSection,
          customPrompt: `${customPrompt}. Focus: ${focusArea}`,
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to generate mock test');
      }

      const newTest: SSCMockTest = await res.json();
      setStatusMessage('Test generated successfully! Loading test portal...');
      setTimeout(() => {
        onLoadTest(newTest);
        setIsGenerating(false);
        setStatusMessage(null);
      }, 700);
    } catch (err: any) {
      console.error(err);
      setStatusMessage('Network or API issue. Loading verified high-yield offline mock test preset instead.');
      setTimeout(() => {
        const fallback = mockTestPresets['mock-2'] || mockTestPresets['mock-1'];
        onLoadTest(fallback);
        setIsGenerating(false);
        setStatusMessage(null);
      }, 1000);
    }
  };

  const handleLoadPreset = (presetKey: string) => {
    const preset = mockTestPresets[presetKey];
    if (preset) {
      onLoadTest(preset);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-bold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Dynamic AI Quiz Architect</span>
        </div>
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          SSC Exam Content Engine
        </h2>
        <p className="text-slate-600 text-sm">
          Generate fresh, non-repetitive, updated SSC Tier-1 mock tests adhering strictly to the official bilingual examination pattern.
        </p>
      </div>

      {/* Preset Quick Starters */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
          <Zap className="w-4 h-4 text-amber-500" />
          <span>Instant Verified Mock Test Presets</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {[
            {
              key: 'mock-cgl',
              badge: 'SSC CGL',
              title: 'SSC CGL 2025 Tier-1 Mock Test',
              desc: 'Graduate level officer exam pattern with high-yield geometry, modern history, and reasoning.',
              tagColor: 'bg-indigo-100 text-indigo-800'
            },
            {
              key: 'mock-chsl',
              badge: 'SSC CHSL',
              title: 'SSC CHSL 2025 Tier-1 Mock Test',
              desc: '10+2 higher secondary level speed maths, language comprehension, and general awareness.',
              tagColor: 'bg-sky-100 text-sky-800'
            },
            {
              key: 'mock-mts',
              badge: 'SSC MTS',
              title: 'SSC MTS & Havaldar Mock Test',
              desc: 'Matriculation level high-scoring mock with arithmetic, current affairs, and basic grammar.',
              tagColor: 'bg-emerald-100 text-emerald-800'
            },
            {
              key: 'mock-cpo',
              badge: 'SSC CPO',
              title: 'SSC CPO SI 2025 Paper-1 Mock',
              desc: 'Sub-Inspector in Delhi Police & CAPFs pattern with quantitative aptitude and verbal reasoning.',
              tagColor: 'bg-amber-100 text-amber-800'
            },
            {
              key: 'mock-gd',
              badge: 'SSC GD',
              title: 'SSC GD Constable 2025 Mock',
              desc: 'Paramilitary forces constable exam with elementary maths, reasoning, and bilingual test.',
              tagColor: 'bg-rose-100 text-rose-800'
            },
            {
              key: 'mock-selection',
              badge: 'SSC Phase',
              title: 'SSC Selection Post Phase XII Mock',
              desc: 'Specialized departmental selection pattern covering multi-tier objective questions.',
              tagColor: 'bg-teal-100 text-teal-800'
            },
          ].map((item) => {
            const isCurrent = currentTestId === mockTestPresets[item.key]?.test_id;
            return (
              <div
                key={item.key}
                onClick={() => handleLoadPreset(item.key)}
                className={`p-3.5 rounded-xl border-2 cursor-pointer transition-all flex flex-col justify-between ${
                  isCurrent
                    ? 'border-indigo-600 bg-indigo-50/50 shadow-xs'
                    : 'border-slate-200 hover:border-indigo-300 bg-white hover:shadow-xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded ${item.tagColor}`}>
                      {item.badge}
                    </span>
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                      100 Qs • 15m/Sec
                    </span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-2 mt-2 border-t border-slate-100 text-right">
                  <span className="text-xs font-semibold text-indigo-600 hover:text-indigo-800">
                    {isCurrent ? '● Active Test' : 'Start Mock Test →'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* AI Dynamic Generator Panel */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center justify-between border-b pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center font-bold shadow">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Custom Dynamic Mock Test Generator
              </h3>
              <p className="text-xs text-slate-500">
                Configure exam parameters to synthesize completely fresh, non-repetitive questions.
              </p>
            </div>
          </div>
        </div>

        {/* Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Target Exam */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Target SSC Examination
            </label>
            <select
              value={examType}
              onChange={(e) => setExamType(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-sm font-medium text-slate-800 focus:ring-2 focus:ring-purple-500 focus:outline-hidden"
            >
              <option value="SSC CGL Tier-1">SSC CGL Tier-1 (Combined Graduate Level)</option>
              <option value="SSC CHSL Tier-1">SSC CHSL Tier-1 (Combined Higher Secondary Level 10+2)</option>
              <option value="SSC MTS &amp; Havaldar">SSC MTS &amp; Havaldar (Multi Tasking Staff - 10th Level)</option>
              <option value="SSC CPO Sub-Inspector">SSC CPO Paper-1 (Sub-Inspector in Delhi Police &amp; CAPFs)</option>
              <option value="SSC GD Constable">SSC GD Constable (BSF, CISF, CRPF, SSB, ITBP, AR)</option>
              <option value="SSC Stenographer">SSC Stenographer (Grade C &amp; D)</option>
              <option value="SSC Selection Post">SSC Selection Post (Phase XII / XIII)</option>
            </select>
          </div>

          {/* Difficulty Level */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Difficulty Calibration
            </label>
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-sm font-medium text-slate-800 focus:ring-2 focus:ring-purple-500 focus:outline-hidden"
            >
              <option value="SSC Actual Standard">Moderate (Official SSC Tier-1 Actual Level)</option>
              <option value="Easy Foundation">Easy / Foundational (Speed Building)</option>
              <option value="Hard Advanced">Hard / Challenging (Tough Arithmetic &amp; Tricky Reasoning)</option>
            </select>
          </div>

          {/* Questions Per Section */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Questions Density (per section)
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { count: 25, label: 'Official 25 Qs (100 Total)' },
                { count: 10, label: 'Practice 10 Qs (40 Total)' },
                { count: 5, label: 'Sprint 5 Qs (20 Total)' },
              ].map((opt) => (
                <button
                  key={opt.count}
                  type="button"
                  onClick={() => setQuestionsPerSection(opt.count)}
                  className={`py-2 px-2 text-xs font-bold rounded-lg border transition-all text-center ${
                    questionsPerSection === opt.count
                      ? 'bg-purple-600 text-white border-purple-600 shadow-xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Focus High-Yield Topics */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Priority Focus Area
            </label>
            <select
              value={focusArea}
              onChange={(e) => setFocusArea(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-sm font-medium text-slate-800 focus:ring-2 focus:ring-purple-500 focus:outline-hidden"
            >
              <option value="Comprehensive All 4 Sections">Balanced (All 4 Sections Equal Weight)</option>
              <option value="Latest Current Affairs & Polity Focus">General Awareness Heavy (Current Affairs + Polity)</option>
              <option value="Advanced Maths & Geometry Focus">Quantitative Aptitude Heavy (Geometry + Algebra)</option>
              <option value="Grammar & Vocabulary Focus">English Comprehension Heavy (Vocab + Grammar)</option>
              <option value="Logical & Non-Verbal Focus">Reasoning Heavy (Syllogism + Series + Analogy)</option>
            </select>
          </div>
        </div>

        {/* Custom Instructions */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
            Custom Guidance / Aspirant Notes (Optional)
          </label>
          <input
            type="text"
            value={customPrompt}
            onChange={(e) => setCustomPrompt(e.target.value)}
            placeholder="e.g. Include questions on Chandrayaan-3, Compound Interest installments, and Cloze Test"
            className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-sm text-slate-800 focus:ring-2 focus:ring-purple-500 focus:outline-hidden"
          />
        </div>

        {/* Generate Button */}
        <div className="pt-2">
          <button
            onClick={handleGenerate}
            disabled={isGenerating}
            className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold text-base shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer"
          >
            {isGenerating ? (
              <>
                <RotateCw className="w-5 h-5 animate-spin" />
                <span>Generating Fresh Bilingual SSC Test...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                <span>Generate Fresh SSC-Pattern Mock Test</span>
              </>
            )}
          </button>

          {statusMessage && (
            <p className="text-xs text-center text-purple-700 font-medium mt-3 animate-fade-in">
              {statusMessage}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
