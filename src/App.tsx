/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { defaultSSCMockTest } from './data/defaultMockTest';
import {
  SSCMockTest,
  UserResponseState,
  QuestionStatus,
  TestResultScorecard,
  SectionScorecard
} from './types/sscTest';
import { Header } from './components/Header';
import { CBTExamPortal } from './components/CBTExamPortal';
import { AnalysisView } from './components/AnalysisView';
import { ContentEngineView } from './components/ContentEngineView';
import { JsonEngineView } from './components/JsonEngineView';
import { PYQPapersModal } from './components/PYQPapersModal';
import { UploadTestModal } from './components/UploadTestModal';
import { SSCExamCategory } from './data/sscExams';
import { examMockTests } from './data/mockTestPresets';

export default function App() {
  const [currentTest, setCurrentTest] = useState<SSCMockTest>(defaultSSCMockTest);
  const [userResponses, setUserResponses] = useState<UserResponseState>({});
  const [currentTab, setCurrentTab] = useState<'cbt' | 'generator' | 'json' | 'analysis'>('cbt');
  const [language, setLanguage] = useState<'en' | 'hi' | 'both'>('both');
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);
  const [timeRemainingSeconds, setTimeRemainingSeconds] = useState<number>(3600); // 60 minutes
  const [scorecard, setScorecard] = useState<TestResultScorecard | null>(null);
  const [isPYQModalOpen, setIsPYQModalOpen] = useState<boolean>(false);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState<boolean>(false);
  const [activeExamCategory, setActiveExamCategory] = useState<SSCExamCategory>('cgl');

  const handleSelectExamCategory = (category: SSCExamCategory) => {
    setActiveExamCategory(category);
    const targetMock = examMockTests[category] || defaultSSCMockTest;
    handleLoadTest(targetMock);
  };

  // Timer countdown
  useEffect(() => {
    if (hasSubmitted || timeRemainingSeconds <= 0) return;

    const interval = setInterval(() => {
      setTimeRemainingSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleSubmitTest();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [hasSubmitted, timeRemainingSeconds]);

  // Update response handler
  const handleUpdateResponse = (
    questionKey: string,
    optionIndex: number | null,
    status: QuestionStatus
  ) => {
    setUserResponses((prev) => ({
      ...prev,
      [questionKey]: {
        selectedOptionIndex: optionIndex,
        status,
        timeSpentSeconds: (prev[questionKey]?.timeSpentSeconds || 0) + 1,
        bookmarked: prev[questionKey]?.bookmarked || false,
      },
    }));
  };

  const handleToggleBookmark = (questionKey: string) => {
    setUserResponses((prev) => ({
      ...prev,
      [questionKey]: {
        selectedOptionIndex: prev[questionKey]?.selectedOptionIndex ?? null,
        status: prev[questionKey]?.status ?? 'not_visited',
        timeSpentSeconds: prev[questionKey]?.timeSpentSeconds || 0,
        bookmarked: !prev[questionKey]?.bookmarked,
      },
    }));
  };

  // Submit test and generate scorecard
  const handleSubmitTest = () => {
    let totalQuestions = 0;
    let attemptedCount = 0;
    let correctCount = 0;
    let incorrectCount = 0;
    let unattemptedCount = 0;
    let totalMarksObtained = 0;

    const sectionScorecards: SectionScorecard[] = currentTest.sections.map((section) => {
      let secAttempted = 0;
      let secCorrect = 0;
      let secIncorrect = 0;
      let secUnattempted = 0;
      let secMarks = 0;

      section.questions.forEach((q) => {
        totalQuestions++;
        const key = `${section.section_id}_${q.question_id}`;
        const resp = userResponses[key];
        const selected = resp?.selectedOptionIndex ?? null;

        if (selected !== null) {
          secAttempted++;
          attemptedCount++;
          if (selected === q.correct_option_index) {
            secCorrect++;
            correctCount++;
            secMarks += 2.0;
            totalMarksObtained += 2.0;
          } else {
            secIncorrect++;
            incorrectCount++;
            secMarks -= 0.5;
            totalMarksObtained -= 0.5;
          }
        } else {
          secUnattempted++;
          unattemptedCount++;
        }
      });

      const maxMarks = section.questions.length * 2.0;
      const accuracy = secAttempted > 0 ? (secCorrect / secAttempted) * 100 : 0;

      return {
        sectionId: section.section_id,
        sectionName: section.section_name.en,
        totalQuestions: section.questions.length,
        attempted: secAttempted,
        correct: secCorrect,
        incorrect: secIncorrect,
        unattempted: secUnattempted,
        marksObtained: Math.max(0, secMarks),
        maxMarks,
        accuracy,
        timeSpentSeconds: 0,
      };
    });

    const maximumMarks = totalQuestions * 2.0;
    const finalAccuracy = attemptedCount > 0 ? (correctCount / attemptedCount) * 100 : 0;
    const finalPercentage = maximumMarks > 0 ? (Math.max(0, totalMarksObtained) / maximumMarks) * 100 : 0;

    const result: TestResultScorecard = {
      testId: currentTest.test_id,
      testTitle: currentTest.test_title,
      totalQuestions,
      attemptedCount,
      correctCount,
      incorrectCount,
      unattemptedCount,
      totalMarksObtained: Math.max(0, totalMarksObtained),
      maximumMarks,
      percentage: finalPercentage,
      accuracy: finalAccuracy,
      totalTimeSpentSeconds: 3600 - timeRemainingSeconds,
      sections: sectionScorecards,
      submittedAt: new Date().toLocaleTimeString(),
    };

    setScorecard(result);
    setHasSubmitted(true);
    setCurrentTab('analysis');
  };

  const handleResetTest = () => {
    setUserResponses({});
    setTimeRemainingSeconds(3600);
    setHasSubmitted(false);
    setScorecard(null);
    setCurrentTab('cbt');
  };

  const handleLoadTest = (newTest: SSCMockTest) => {
    setCurrentTest(newTest);
    setUserResponses({});
    setTimeRemainingSeconds(3600);
    setHasSubmitted(false);
    setScorecard(null);
    setCurrentTab('cbt');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-100 text-slate-900 font-sans">
      <Header
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        language={language}
        setLanguage={setLanguage}
        testTitle={currentTest.test_title}
        hasSubmitted={hasSubmitted}
        onResetTest={handleResetTest}
        onOpenPYQModal={() => setIsPYQModalOpen(true)}
        onOpenUploadModal={() => setIsUploadModalOpen(true)}
        activeExamCategory={activeExamCategory}
        onSelectExamCategory={handleSelectExamCategory}
      />

      <main className="flex-1">
        {currentTab === 'cbt' && (
          <CBTExamPortal
            test={currentTest}
            userResponses={userResponses}
            onUpdateResponse={handleUpdateResponse}
            onToggleBookmark={handleToggleBookmark}
            onSubmitTest={handleSubmitTest}
            language={language}
            setLanguage={setLanguage}
            timeRemainingSeconds={timeRemainingSeconds}
          />
        )}

        {currentTab === 'analysis' && scorecard && (
          <AnalysisView
            test={currentTest}
            scorecard={scorecard}
            userResponses={userResponses}
            onRetakeTest={handleResetTest}
            language={language}
            setLanguage={setLanguage}
          />
        )}

        {currentTab === 'generator' && (
          <ContentEngineView
            onLoadTest={handleLoadTest}
            currentTestId={currentTest.test_id}
          />
        )}

        {currentTab === 'json' && (
          <JsonEngineView
            test={currentTest}
            onImportTest={handleLoadTest}
            onTakeExam={() => setCurrentTab('cbt')}
          />
        )}
      </main>

      {/* Previous Year Papers Modal */}
      <PYQPapersModal
        isOpen={isPYQModalOpen}
        onClose={() => setIsPYQModalOpen(false)}
        onSelectPaper={(paper) => handleLoadTest(paper)}
        onViewJson={(paper) => {
          setCurrentTest(paper);
          setCurrentTab('json');
        }}
        activeTestId={currentTest.test_id}
        initialExamCategory={activeExamCategory}
      />

      {/* YouTube Link or PDF Upload Test Modal */}
      <UploadTestModal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
        onTestCreated={(test) => handleLoadTest(test)}
        activeExamCategory={activeExamCategory}
      />
    </div>
  );
}
