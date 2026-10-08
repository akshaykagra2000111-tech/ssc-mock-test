import React, { useState } from 'react';
import {
  SSCMockTest,
  UserResponseState,
  TestResultScorecard,
  SSCQuestion
} from '../types/sscTest';
import {
  CheckCircle2,
  XCircle,
  HelpCircle,
  Award,
  TrendingUp,
  Clock,
  Sparkles,
  Bookmark,
  ChevronDown,
  ChevronUp,
  Filter,
  Lightbulb
} from 'lucide-react';

interface AnalysisViewProps {
  test: SSCMockTest;
  scorecard: TestResultScorecard;
  userResponses: UserResponseState;
  onRetakeTest: () => void;
  language: 'en' | 'hi' | 'both';
  setLanguage: (lang: 'en' | 'hi' | 'both') => void;
}

export const AnalysisView: React.FC<AnalysisViewProps> = ({
  test,
  scorecard,
  userResponses,
  onRetakeTest,
  language,
  setLanguage,
}) => {
  const [filter, setFilter] = useState<'all' | 'correct' | 'incorrect' | 'unattempted' | 'bookmarked'>('all');
  const [aiDoubtOpen, setAiDoubtOpen] = useState<{ [qId: number]: boolean }>({});
  const [aiDoubtLoading, setAiDoubtLoading] = useState<{ [qId: number]: boolean }>({});
  const [aiDoubtResponse, setAiDoubtResponse] = useState<{ [qId: number]: any }>({});

  const handleAskDoubt = async (q: SSCQuestion) => {
    setAiDoubtOpen((prev) => ({ ...prev, [q.question_id]: true }));
    if (aiDoubtResponse[q.question_id]) return;

    setAiDoubtLoading((prev) => ({ ...prev, [q.question_id]: true }));
    try {
      const res = await fetch('/api/explain-doubt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: q, userDoubt: 'Explain the fastest shortcut trick and elimination technique for this SSC question.' }),
      });
      const data = await res.json();
      setAiDoubtResponse((prev) => ({ ...prev, [q.question_id]: data }));
    } catch (err) {
      setAiDoubtResponse((prev) => ({
        ...prev,
        [q.question_id]: {
          trick_summary: "Elimination & Formula Recall",
          explanation_en: "Always cross-verify options using quick estimation or unit digits to save precious time in SSC Tier-1.",
          explanation_hi: "विकल्पों को त्वरित अनुमान या इकाई अंक विधि से जाँचकर समय की बचत करें।"
        }
      }));
    } finally {
      setAiDoubtLoading((prev) => ({ ...prev, [q.question_id]: false }));
    }
  };

  // Flatten all questions with their metadata
  const allQuestions = test.sections.flatMap((sec) =>
    sec.questions.map((q) => {
      const key = `${sec.section_id}_${q.question_id}`;
      const resp = userResponses[key];
      const selected = resp?.selectedOptionIndex ?? null;
      const isCorrect = selected !== null && selected === q.correct_option_index;
      const isIncorrect = selected !== null && selected !== q.correct_option_index;
      const isUnattempted = selected === null;
      const isBookmarked = !!resp?.bookmarked;

      return {
        ...q,
        sectionId: sec.section_id,
        sectionName: sec.section_name.en,
        selectedOption: selected,
        isCorrect,
        isIncorrect,
        isUnattempted,
        isBookmarked,
      };
    })
  );

  const filteredQuestions = allQuestions.filter((q) => {
    if (filter === 'correct') return q.isCorrect;
    if (filter === 'incorrect') return q.isIncorrect;
    if (filter === 'unattempted') return q.isUnattempted;
    if (filter === 'bookmarked') return q.isBookmarked;
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Banner: Scorecard Summary */}
      <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-2xl p-6 sm:p-8 text-white shadow-xl border border-indigo-800/40">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-indigo-800/60">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 font-semibold text-xs border border-emerald-500/30">
                Exam Completed
              </span>
              <span className="text-xs text-slate-300">
                Marking Scheme: +2.00 / -0.50
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Performance Scorecard
            </h2>
            <p className="text-sm text-indigo-200 mt-1">
              {scorecard.testTitle}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onRetakeTest}
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-colors shadow"
            >
              Retake Mock Test
            </button>
          </div>
        </div>

        {/* Primary Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
          <div className="bg-white/10 rounded-xl p-4 backdrop-blur-xs border border-white/10">
            <div className="text-xs text-indigo-200 font-medium">Marks Obtained</div>
            <div className="text-2xl sm:text-3xl font-black text-amber-400 mt-1">
              {scorecard.totalMarksObtained.toFixed(2)}
              <span className="text-xs font-normal text-slate-300 ml-1">
                / {scorecard.maximumMarks}
              </span>
            </div>
            <div className="text-[11px] text-slate-300 mt-1">
              {scorecard.percentage.toFixed(1)}% Score
            </div>
          </div>

          <div className="bg-white/10 rounded-xl p-4 backdrop-blur-xs border border-white/10">
            <div className="text-xs text-indigo-200 font-medium">Accuracy</div>
            <div className="text-2xl sm:text-3xl font-black text-emerald-400 mt-1">
              {scorecard.accuracy.toFixed(1)}%
            </div>
            <div className="text-[11px] text-slate-300 mt-1">
              {scorecard.correctCount} correct of {scorecard.attemptedCount} attempted
            </div>
          </div>

          <div className="bg-white/10 rounded-xl p-4 backdrop-blur-xs border border-white/10">
            <div className="text-xs text-indigo-200 font-medium">Attempt Rate</div>
            <div className="text-2xl sm:text-3xl font-black text-sky-400 mt-1">
              {((scorecard.attemptedCount / scorecard.totalQuestions) * 100).toFixed(0)}%
            </div>
            <div className="text-[11px] text-slate-300 mt-1">
              {scorecard.attemptedCount} / {scorecard.totalQuestions} questions
            </div>
          </div>

          <div className="bg-white/10 rounded-xl p-4 backdrop-blur-xs border border-white/10">
            <div className="text-xs text-indigo-200 font-medium">Estimated Cutoff</div>
            <div className="text-xl sm:text-2xl font-bold text-violet-300 mt-1">
              {scorecard.percentage >= 65 ? 'Qualified (Tier-1)' : 'Needs Practice'}
            </div>
            <div className="text-[11px] text-slate-300 mt-1">
              Target: UR &gt; 135+ marks
            </div>
          </div>
        </div>
      </div>

      {/* Section-Wise Performance Table */}
      <div className="bg-white rounded-2xl p-6 shadow-xs border border-slate-200">
        <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Award className="w-5 h-5 text-indigo-600" />
          <span>Section-Wise Performance Breakdown</span>
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="border-b border-slate-200 text-xs font-semibold text-slate-500 uppercase tracking-wider bg-slate-50">
                <th className="py-3 px-4">Section Name</th>
                <th className="py-3 px-4 text-center">Questions</th>
                <th className="py-3 px-4 text-center text-emerald-600">Correct (+2)</th>
                <th className="py-3 px-4 text-center text-rose-600">Incorrect (-0.5)</th>
                <th className="py-3 px-4 text-center text-slate-500">Unattempted</th>
                <th className="py-3 px-4 text-center">Accuracy</th>
                <th className="py-3 px-4 text-right font-bold">Marks</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {scorecard.sections.map((sec) => (
                <tr key={sec.sectionId} className="hover:bg-slate-50/80">
                  <td className="py-3.5 px-4 font-semibold text-slate-900">
                    {sec.sectionName}
                  </td>
                  <td className="py-3.5 px-4 text-center">{sec.totalQuestions}</td>
                  <td className="py-3.5 px-4 text-center text-emerald-600 font-bold">
                    {sec.correct}
                  </td>
                  <td className="py-3.5 px-4 text-center text-rose-600 font-bold">
                    {sec.incorrect}
                  </td>
                  <td className="py-3.5 px-4 text-center text-slate-500">
                    {sec.unattempted}
                  </td>
                  <td className="py-3.5 px-4 text-center font-medium">
                    {sec.accuracy.toFixed(1)}%
                  </td>
                  <td className="py-3.5 px-4 text-right font-bold text-indigo-700">
                    {sec.marksObtained.toFixed(2)} / {sec.maxMarks}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Solutions & Explanation Section */}
      <div className="bg-white rounded-2xl p-6 shadow-xs border border-slate-200 space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              Bilingual Answer Key &amp; Detailed Solutions
            </h3>
            <p className="text-sm text-slate-500">
              Review every solution step-by-step in Hindi and English.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                filter === 'all'
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All ({allQuestions.length})
            </button>
            <button
              onClick={() => setFilter('correct')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                filter === 'correct'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
              }`}
            >
              Correct ({allQuestions.filter((q) => q.isCorrect).length})
            </button>
            <button
              onClick={() => setFilter('incorrect')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                filter === 'incorrect'
                  ? 'bg-rose-600 text-white'
                  : 'bg-rose-50 text-rose-700 hover:bg-rose-100'
              }`}
            >
              Incorrect ({allQuestions.filter((q) => q.isIncorrect).length})
            </button>
            <button
              onClick={() => setFilter('unattempted')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                filter === 'unattempted'
                  ? 'bg-slate-700 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Unattempted ({allQuestions.filter((q) => q.isUnattempted).length})
            </button>
          </div>
        </div>

        {/* Questions List */}
        <div className="space-y-6">
          {filteredQuestions.map((q, idx) => {
            return (
              <div
                key={q.question_id}
                className={`rounded-xl border p-5 transition-all ${
                  q.isCorrect
                    ? 'border-emerald-200 bg-emerald-50/20'
                    : q.isIncorrect
                    ? 'border-rose-200 bg-rose-50/20'
                    : 'border-slate-200 bg-slate-50/40'
                }`}
              >
                {/* Header: Section, Question number, Status badge */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900 text-sm">
                      Q.{idx + 1}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded bg-slate-200 text-slate-700 font-medium">
                      {q.sectionName}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-medium">
                      {q.topic}
                    </span>
                  </div>

                  <div>
                    {q.isCorrect && (
                      <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Correct (+2.00)
                      </span>
                    )}
                    {q.isIncorrect && (
                      <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-rose-100 text-rose-800 font-bold">
                        <XCircle className="w-3.5 h-3.5" />
                        Incorrect (-0.50)
                      </span>
                    )}
                    {q.isUnattempted && (
                      <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-slate-200 text-slate-700 font-medium">
                        Unattempted (0.00)
                      </span>
                    )}
                  </div>
                </div>

                {/* Question Text */}
                <div className="space-y-2 mb-4">
                  {(language === 'en' || language === 'both') && (
                    <p className="text-sm sm:text-base font-semibold text-slate-900 leading-relaxed whitespace-pre-line">
                      {q.question_text.en}
                    </p>
                  )}
                  {(language === 'hi' || language === 'both') && (
                    <p className="text-sm sm:text-base font-semibold text-slate-800 leading-relaxed whitespace-pre-line font-hindi pt-1 border-t border-dashed border-slate-200">
                      {q.question_text.hi}
                    </p>
                  )}
                </div>

                {/* Options Review */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                  {q.options.en.map((enOpt, optIdx) => {
                    const isCandidateChoice = q.selectedOption === optIdx;
                    const isCorrectAnswer = q.correct_option_index === optIdx;

                    let optBg = 'bg-white border-slate-200 text-slate-800';
                    if (isCorrectAnswer) {
                      optBg = 'bg-emerald-50 border-emerald-400 text-emerald-950 font-semibold ring-1 ring-emerald-400';
                    } else if (isCandidateChoice && !isCorrectAnswer) {
                      optBg = 'bg-rose-50 border-rose-400 text-rose-950 font-semibold ring-1 ring-rose-400';
                    }

                    return (
                      <div
                        key={optIdx}
                        className={`p-3 rounded-lg border text-xs sm:text-sm flex items-start gap-2 ${optBg}`}
                      >
                        <span className="font-bold shrink-0">
                          ({String.fromCharCode(65 + optIdx)})
                        </span>
                        <div className="flex-1">
                          <div>{enOpt}</div>
                          {q.options.hi?.[optIdx] && (
                            <div className="text-xs text-slate-600 font-hindi mt-0.5">
                              {q.options.hi[optIdx]}
                            </div>
                          )}
                          <div className="flex gap-2 mt-1">
                            {isCorrectAnswer && (
                              <span className="text-[10px] text-emerald-700 font-bold uppercase">
                                ✓ Correct Answer
                              </span>
                            )}
                            {isCandidateChoice && !isCorrectAnswer && (
                              <span className="text-[10px] text-rose-700 font-bold uppercase">
                                ✗ Your Response
                              </span>
                            )}
                            {isCandidateChoice && isCorrectAnswer && (
                              <span className="text-[10px] text-emerald-700 font-bold uppercase">
                                ★ Your Correct Response
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Detailed Bilingual Solution */}
                <div className="bg-amber-50/50 border border-amber-200 rounded-xl p-4 text-xs sm:text-sm space-y-2">
                  <div className="flex items-center gap-2 font-bold text-amber-900">
                    <Lightbulb className="w-4 h-4 text-amber-600" />
                    <span>Detailed Step-by-Step Solution / विस्तृत समाधान:</span>
                  </div>

                  {(language === 'en' || language === 'both') && (
                    <div className="text-slate-800 leading-relaxed whitespace-pre-line pl-6">
                      <strong className="text-slate-900">English: </strong>
                      {q.explanation.en}
                    </div>
                  )}

                  {(language === 'hi' || language === 'both') && (
                    <div className="text-slate-800 leading-relaxed whitespace-pre-line pl-6 font-hindi pt-1 border-t border-dashed border-amber-200">
                      <strong className="text-slate-900 font-sans">हिन्दी: </strong>
                      {q.explanation.hi}
                    </div>
                  )}

                  {/* AI Mentor Shortcut Trick Resolver */}
                  <div className="pt-2 pl-6">
                    <button
                      onClick={() => handleAskDoubt(q)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-700 hover:text-purple-900 bg-purple-50 hover:bg-purple-100 px-3 py-1.5 rounded-lg border border-purple-200 transition-colors"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                      <span>Ask AI for Exam Shortcut &amp; Elimination Trick</span>
                    </button>

                    {aiDoubtOpen[q.question_id] && (
                      <div className="mt-3 p-3 bg-purple-50/70 border border-purple-200 rounded-lg text-xs space-y-2">
                        {aiDoubtLoading[q.question_id] ? (
                          <div className="flex items-center gap-2 text-purple-700">
                            <span className="animate-spin inline-block w-3.5 h-3.5 border-2 border-purple-600 border-t-transparent rounded-full" />
                            <span>AI Mentor is calculating shortcut trick...</span>
                          </div>
                        ) : aiDoubtResponse[q.question_id] ? (
                          <div className="space-y-1.5">
                            <div className="font-bold text-purple-900">
                              ⚡ {aiDoubtResponse[q.question_id].trick_summary}
                            </div>
                            <div className="text-slate-800">
                              {aiDoubtResponse[q.question_id].explanation_en}
                            </div>
                            <div className="text-slate-800 font-hindi border-t border-purple-200/60 pt-1">
                              {aiDoubtResponse[q.question_id].explanation_hi}
                            </div>
                          </div>
                        ) : null}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
