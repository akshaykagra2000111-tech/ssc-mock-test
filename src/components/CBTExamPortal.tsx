import React, { useState } from 'react';
import {
  SSCMockTest,
  UserResponseState,
  QuestionStatus,
  SSCQuestion
} from '../types/sscTest';
import {
  Clock,
  AlertCircle,
  HelpCircle,
  CheckCircle,
  ChevronRight,
  ChevronLeft,
  Bookmark,
  Send,
  User
} from 'lucide-react';

interface CBTExamPortalProps {
  test: SSCMockTest;
  userResponses: UserResponseState;
  onUpdateResponse: (questionKey: string, optionIndex: number | null, status: QuestionStatus) => void;
  onToggleBookmark: (questionKey: string) => void;
  onSubmitTest: () => void;
  language: 'en' | 'hi' | 'both';
  setLanguage: (lang: 'en' | 'hi' | 'both') => void;
  timeRemainingSeconds: number;
}

export const CBTExamPortal: React.FC<CBTExamPortalProps> = ({
  test,
  userResponses,
  onUpdateResponse,
  onToggleBookmark,
  onSubmitTest,
  language,
  setLanguage,
  timeRemainingSeconds,
}) => {
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [showSubmitModal, setShowSubmitModal] = useState(false);

  const currentSection = test.sections[activeSectionIndex] || test.sections[0];
  const currentQuestion: SSCQuestion | undefined = currentSection?.questions[activeQuestionIndex];

  // Helper key for tracking state per question
  const currentKey = currentQuestion ? `${currentSection.section_id}_${currentQuestion.question_id}` : '';
  const currentResponse = currentKey ? userResponses[currentKey] : undefined;
  const selectedOption = currentResponse ? currentResponse.selectedOptionIndex : null;

  // Format time remaining
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Compute status counts for legend across all sections or current section
  const getStatusCounts = () => {
    let answered = 0;
    let notAnswered = 0;
    let notVisited = 0;
    let marked = 0;
    let answeredMarked = 0;

    test.sections.forEach((sec) => {
      sec.questions.forEach((q) => {
        const key = `${sec.section_id}_${q.question_id}`;
        const resp = userResponses[key];
        const status = resp ? resp.status : 'not_visited';

        if (status === 'answered') answered++;
        else if (status === 'not_answered') notAnswered++;
        else if (status === 'marked_for_review') marked++;
        else if (status === 'answered_marked_for_review') answeredMarked++;
        else notVisited++;
      });
    });

    return { answered, notAnswered, notVisited, marked, answeredMarked };
  };

  const counts = getStatusCounts();

  // Navigation handlers
  const handleSelectOption = (idx: number) => {
    if (!currentQuestion) return;
    const currentStatus = currentResponse?.status;
    let nextStatus: QuestionStatus = 'answered';
    if (currentStatus === 'marked_for_review' || currentStatus === 'answered_marked_for_review') {
      nextStatus = 'answered_marked_for_review';
    }
    onUpdateResponse(currentKey, idx, nextStatus);
  };

  const handleClearResponse = () => {
    if (!currentQuestion) return;
    onUpdateResponse(currentKey, null, 'not_answered');
  };

  const moveToNextQuestion = () => {
    if (activeQuestionIndex < currentSection.questions.length - 1) {
      setActiveQuestionIndex(activeQuestionIndex + 1);
    } else if (activeSectionIndex < test.sections.length - 1) {
      setActiveSectionIndex(activeSectionIndex + 1);
      setActiveQuestionIndex(0);
    }
  };

  const moveToPrevQuestion = () => {
    if (activeQuestionIndex > 0) {
      setActiveQuestionIndex(activeQuestionIndex - 1);
    } else if (activeSectionIndex > 0) {
      const prevSec = test.sections[activeSectionIndex - 1];
      setActiveSectionIndex(activeSectionIndex - 1);
      setActiveQuestionIndex(prevSec.questions.length - 1);
    }
  };

  const handleSaveAndNext = () => {
    if (!currentQuestion) return;
    if (selectedOption !== null && selectedOption !== undefined) {
      onUpdateResponse(currentKey, selectedOption, 'answered');
    } else {
      if (!currentResponse || currentResponse.status === 'not_visited') {
        onUpdateResponse(currentKey, null, 'not_answered');
      }
    }
    moveToNextQuestion();
  };

  const handleSaveAndMarkForReview = () => {
    if (!currentQuestion) return;
    if (selectedOption !== null && selectedOption !== undefined) {
      onUpdateResponse(currentKey, selectedOption, 'answered_marked_for_review');
    } else {
      onUpdateResponse(currentKey, null, 'marked_for_review');
    }
    moveToNextQuestion();
  };

  const handleMarkForReviewAndNext = () => {
    if (!currentQuestion) return;
    if (selectedOption !== null && selectedOption !== undefined) {
      onUpdateResponse(currentKey, selectedOption, 'answered_marked_for_review');
    } else {
      onUpdateResponse(currentKey, null, 'marked_for_review');
    }
    moveToNextQuestion();
  };

  const jumpToQuestion = (secIdx: number, qIdx: number) => {
    setActiveSectionIndex(secIdx);
    setActiveQuestionIndex(qIdx);
  };

  // Status badge style helper
  const getPaletteBadgeStyle = (status: QuestionStatus) => {
    switch (status) {
      case 'answered':
        return 'bg-emerald-600 text-white border-emerald-700 font-bold';
      case 'not_answered':
        return 'bg-rose-600 text-white border-rose-700 font-bold';
      case 'marked_for_review':
        return 'bg-purple-600 text-white border-purple-700 rounded-full font-bold';
      case 'answered_marked_for_review':
        return 'bg-purple-700 text-white border-2 border-emerald-400 rounded-full font-bold relative';
      case 'not_visited':
      default:
        return 'bg-slate-200 text-slate-700 hover:bg-slate-300 border-slate-300';
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col bg-slate-100">
      {/* TCS iON Sub-Header: Candidate Info + Timer */}
      <div className="bg-white border-b border-slate-200 px-4 py-2 sm:px-6 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Candidate Info */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-xs">
              <User className="w-5 h-5 text-slate-300" />
            </div>
            <div>
              <div className="text-xs text-slate-500 font-medium">Candidate Name:</div>
              <div className="text-xs sm:text-sm font-bold text-slate-800">
                Aspirant (Roll No: 24050189)
              </div>
            </div>
          </div>

          {/* Test Timer */}
          <div className="flex items-center gap-4">
            <div
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border font-mono font-bold text-sm sm:text-base ${
                timeRemainingSeconds < 300
                  ? 'bg-rose-50 text-rose-600 border-rose-300 animate-pulse'
                  : 'bg-indigo-50 text-indigo-900 border-indigo-200'
              }`}
            >
              <Clock className="w-4 h-4 text-indigo-600" />
              <span>Time Left: {formatTime(timeRemainingSeconds)}</span>
            </div>

            {/* Quick Language Toggle */}
            <div className="flex items-center gap-1.5 text-xs text-slate-600 bg-slate-100 px-2 py-1 rounded border border-slate-200">
              <span className="font-medium hidden sm:inline">View in:</span>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as any)}
                className="bg-transparent font-semibold text-slate-800 focus:outline-hidden cursor-pointer"
              >
                <option value="en">English</option>
                <option value="hi">हिन्दी</option>
                <option value="both">Bilingual (Both)</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Sections Tab Bar (TCS iON Style) */}
      <div className="bg-slate-200 border-b border-slate-300 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex overflow-x-auto no-scrollbar gap-1 pt-2">
          {test.sections.map((section, idx) => {
            const isActive = idx === activeSectionIndex;
            return (
              <button
                key={section.section_id}
                onClick={() => {
                  setActiveSectionIndex(idx);
                  setActiveQuestionIndex(0);
                }}
                className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-t-lg transition-all shrink-0 border-t border-l border-r ${
                  isActive
                    ? 'bg-white text-indigo-950 border-slate-300 shadow-xs border-b-2 border-b-indigo-600'
                    : 'bg-slate-300 text-slate-700 hover:bg-slate-250 border-transparent'
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <span>{section.section_name.en.split('(')[0].trim()}</span>
                  <span className="px-1.5 py-0.5 text-[11px] rounded bg-slate-100 text-slate-600 border border-slate-200">
                    {section.questions.length} Qs
                  </span>
                  <span className="px-1.5 py-0.5 text-[10px] rounded bg-indigo-50 text-indigo-700 font-bold border border-indigo-200">
                    {section.time_limit_minutes || 15}m
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Workspace: Left Question Area + Right Question Palette */}
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col lg:flex-row p-3 sm:p-5 gap-4">
        {/* Left: Question Card */}
        <div className="flex-1 flex flex-col bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden">
          {/* Question Header */}
          <div className="bg-slate-50 border-b border-slate-200 px-4 sm:px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="font-bold text-slate-800 text-sm sm:text-base">
                Question No. {activeQuestionIndex + 1}
              </span>
              <span className="text-xs px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-medium border border-blue-200">
                {currentQuestion?.topic || 'SSC Tier-1'}
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs">
              <div className="flex items-center gap-2 text-slate-600">
                <span className="text-emerald-700 font-semibold">+2.00</span>
                <span>/</span>
                <span className="text-rose-700 font-semibold">-0.50</span>
              </div>
              <button
                onClick={() => currentKey && onToggleBookmark(currentKey)}
                className={`p-1.5 rounded transition-colors ${
                  currentResponse?.bookmarked
                    ? 'text-amber-500 bg-amber-50'
                    : 'text-slate-400 hover:text-amber-500'
                }`}
                title="Bookmark for Revision"
              >
                <Bookmark className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Question Body */}
          <div className="flex-1 p-4 sm:p-6 overflow-y-auto max-h-[550px]">
            {currentQuestion ? (
              <div className="space-y-6">
                {/* Question Text */}
                <div className="space-y-3">
                  {(language === 'en' || language === 'both') && (
                    <div className="text-sm sm:text-base font-medium text-slate-900 leading-relaxed whitespace-pre-line">
                      {currentQuestion.question_text.en}
                    </div>
                  )}

                  {(language === 'hi' || language === 'both') && (
                    <div className="text-sm sm:text-base font-medium text-slate-800 leading-relaxed whitespace-pre-line font-hindi pt-1 border-t border-dashed border-slate-200">
                      {currentQuestion.question_text.hi}
                    </div>
                  )}
                </div>

                {/* Options List */}
                <div className="space-y-2.5 pt-2">
                  {currentQuestion.options.en.map((enOpt, optIdx) => {
                    const hiOpt = currentQuestion.options.hi?.[optIdx] || enOpt;
                    const isChecked = selectedOption === optIdx;

                    return (
                      <label
                        key={optIdx}
                        onClick={() => handleSelectOption(optIdx)}
                        className={`flex items-start gap-3 p-3.5 rounded-lg border text-sm sm:text-base cursor-pointer transition-all ${
                          isChecked
                            ? 'bg-indigo-50 border-indigo-400 shadow-xs'
                            : 'bg-white border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name={`question_${currentQuestion.question_id}`}
                          checked={isChecked}
                          onChange={() => handleSelectOption(optIdx)}
                          className="mt-1 w-4 h-4 text-indigo-600 focus:ring-indigo-500 border-slate-300 cursor-pointer"
                        />
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 text-xs font-bold flex items-center justify-center border border-slate-200">
                              {String.fromCharCode(65 + optIdx)}
                            </span>
                            {(language === 'en' || language === 'both') && (
                              <span className="text-slate-800 font-medium">
                                {enOpt}
                              </span>
                            )}
                          </div>
                          {(language === 'hi' || language === 'both') && (
                            <div className="text-slate-700 font-hindi text-xs sm:text-sm pl-7">
                              {hiOpt}
                            </div>
                          )}
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="p-8 text-center text-slate-500">
                No question available in this section.
              </div>
            )}
          </div>

          {/* Action Footer (TCS iON Controls) */}
          <div className="bg-slate-50 border-t border-slate-200 p-3 sm:p-4 flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={handleMarkForReviewAndNext}
                className="px-3 py-2 text-xs sm:text-sm font-semibold rounded-lg bg-purple-50 text-purple-700 hover:bg-purple-100 border border-purple-200 transition-colors"
              >
                Mark for Review &amp; Next
              </button>
              <button
                onClick={handleClearResponse}
                className="px-3 py-2 text-xs sm:text-sm font-semibold rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-300 transition-colors"
              >
                Clear Response
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={moveToPrevQuestion}
                disabled={activeSectionIndex === 0 && activeQuestionIndex === 0}
                className="px-3 py-2 text-xs sm:text-sm font-medium rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex items-center gap-1"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Previous</span>
              </button>

              <button
                onClick={handleSaveAndMarkForReview}
                className="px-3 py-2 text-xs sm:text-sm font-semibold rounded-lg bg-amber-50 text-amber-800 hover:bg-amber-100 border border-amber-300 transition-colors hidden sm:block"
              >
                Save &amp; Mark Review
              </button>

              <button
                onClick={handleSaveAndNext}
                className="px-4 py-2 text-xs sm:text-sm font-bold rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 shadow-xs transition-colors flex items-center gap-1"
              >
                <span>Save &amp; Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Right: Question Palette & Submission Controls */}
        <div className="w-full lg:w-80 flex flex-col gap-4">
          <div className="bg-white rounded-xl shadow-xs border border-slate-200 p-4 flex flex-col">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              Question Palette
            </h3>

            {/* TCS Status Legend */}
            <div className="grid grid-cols-2 gap-2 text-xs mb-4 pb-4 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded flex items-center justify-center bg-emerald-600 text-white font-bold text-xs">
                  {counts.answered}
                </span>
                <span className="text-slate-700">Answered</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded flex items-center justify-center bg-rose-600 text-white font-bold text-xs">
                  {counts.notAnswered}
                </span>
                <span className="text-slate-700">Not Answered</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full flex items-center justify-center bg-purple-600 text-white font-bold text-xs">
                  {counts.marked}
                </span>
                <span className="text-slate-700">Marked for Review</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded flex items-center justify-center bg-slate-200 text-slate-700 font-bold text-xs border border-slate-300">
                  {counts.notVisited}
                </span>
                <span className="text-slate-700">Not Visited</span>
              </div>
              <div className="flex items-center gap-2 col-span-2">
                <span className="w-6 h-6 rounded-full flex items-center justify-center bg-purple-700 text-white font-bold text-xs border-2 border-emerald-400">
                  {counts.answeredMarked}
                </span>
                <span className="text-slate-700">Answered &amp; Marked for Review</span>
              </div>
            </div>

            {/* Section Indicator */}
            <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-2.5 mb-3 text-xs">
              <div className="flex items-center justify-between font-semibold text-indigo-950">
                <span>{currentSection.section_name.en}</span>
                <span className="bg-indigo-200/60 text-indigo-800 text-[11px] px-1.5 py-0.5 rounded font-bold">
                  {currentSection.time_limit_minutes || 15} Mins
                </span>
              </div>
              <div className="text-indigo-600 mt-0.5">
                Questions: 25 Qs ({currentSection.questions.length} Total) • Marks: 50.0
              </div>
            </div>

            {/* Question Buttons Grid (25 questions standard) */}
            <div className="flex-1 overflow-y-auto max-h-80 p-1">
              <div className="grid grid-cols-5 gap-2">
                {currentSection.questions.map((q, idx) => {
                  const key = `${currentSection.section_id}_${q.question_id}`;
                  const resp = userResponses[key];
                  const status = resp ? resp.status : 'not_visited';
                  const isCurrent = idx === activeQuestionIndex;

                  return (
                    <button
                      key={q.question_id}
                      onClick={() => jumpToQuestion(activeSectionIndex, idx)}
                      className={`h-9 rounded border text-xs transition-transform transform active:scale-95 flex items-center justify-center ${getPaletteBadgeStyle(
                        status
                      )} ${isCurrent ? 'ring-2 ring-indigo-500 ring-offset-1' : ''}`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Submit Test Button */}
            <div className="pt-4 mt-3 border-t border-slate-200">
              <button
                onClick={() => setShowSubmitModal(true)}
                className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold text-sm shadow transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Exam</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal Before Submit */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200">
            <div className="flex items-center gap-3 text-amber-600 mb-4">
              <AlertCircle className="w-8 h-8" />
              <h2 className="text-lg font-bold text-slate-900">
                Submit SSC Tier-1 Mock Test?
              </h2>
            </div>

            <p className="text-sm text-slate-600 mb-4">
              Are you sure you want to submit your exam? Once submitted, you cannot change your answers.
            </p>

            {/* Summary Table */}
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 mb-6 text-xs sm:text-sm">
              <div className="grid grid-cols-2 gap-3">
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-500">Total Questions:</span>
                  <span className="font-bold text-slate-800">
                    {test.sections.reduce((a, s) => a + s.questions.length, 0)}
                  </span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-500">Answered:</span>
                  <span className="font-bold text-emerald-600">
                    {counts.answered + counts.answeredMarked}
                  </span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-500">Not Answered:</span>
                  <span className="font-bold text-rose-600">
                    {counts.notAnswered}
                  </span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-500">Marked for Review:</span>
                  <span className="font-bold text-purple-600">
                    {counts.marked}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowSubmitModal(false)}
                className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 font-semibold hover:bg-slate-100 text-sm"
              >
                Resume Exam
              </button>
              <button
                onClick={() => {
                  setShowSubmitModal(false);
                  onSubmitTest();
                }}
                className="px-5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow transition-colors"
              >
                Yes, Submit Test
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
