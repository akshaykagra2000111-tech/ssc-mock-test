export interface BilingualText {
  en: string;
  hi: string;
}

export interface SSCQuestion {
  question_id: number;
  topic: string;
  question_text: {
    en: string;
    hi: string;
  };
  options: {
    en: string[];
    hi: string[];
  };
  correct_option_index: number;
  explanation: {
    en: string;
    hi: string;
  };
}

export interface SSCSection {
  section_id: string;
  section_name: {
    en: string;
    hi: string;
  };
  time_limit_minutes: number;
  questions: SSCQuestion[];
}

export interface SSCMockTest {
  test_id: string;
  test_title: string;
  sections: SSCSection[];
}

export type QuestionStatus =
  | 'not_visited'
  | 'not_answered'
  | 'answered'
  | 'marked_for_review'
  | 'answered_marked_for_review';

export interface UserResponseState {
  [questionKey: string]: {
    selectedOptionIndex: number | null;
    status: QuestionStatus;
    timeSpentSeconds: number;
    bookmarked?: boolean;
  };
}

export interface SectionScorecard {
  sectionId: string;
  sectionName: string;
  totalQuestions: number;
  attempted: number;
  correct: number;
  incorrect: number;
  unattempted: number;
  marksObtained: number;
  maxMarks: number;
  accuracy: number;
  timeSpentSeconds: number;
}

export interface TestResultScorecard {
  testId: string;
  testTitle: string;
  totalQuestions: number;
  attemptedCount: number;
  correctCount: number;
  incorrectCount: number;
  unattemptedCount: number;
  totalMarksObtained: number;
  maximumMarks: number;
  percentage: number;
  accuracy: number;
  totalTimeSpentSeconds: number;
  sections: SectionScorecard[];
  submittedAt: string;
}
