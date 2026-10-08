import { SSCMockTest } from '../types/sscTest';
import { defaultSSCMockTest } from './defaultMockTest';
import { SSCExamCategory } from './sscExams';

export interface PYQPaperMeta {
  id: string;
  examCategory: SSCExamCategory;
  exam: string;
  year: number;
  shift: string;
  examDate: string;
  totalQuestions: number;
  timePerSectionMinutes: number;
  totalTimeMinutes: number;
  difficulty: 'Moderate' | 'Easy-Moderate' | 'Moderate-Hard' | 'Easy';
  urCutoff: string;
  description: string;
  testData: SSCMockTest;
}

// Helper to instantiate paper with 25 questions per section
const createPYQPaper = (
  id: string,
  title: string,
  examDate: string,
  shift: string
): SSCMockTest => {
  const paper: SSCMockTest = JSON.parse(JSON.stringify(defaultSSCMockTest));
  paper.test_id = id;
  paper.test_title = `${title} (${examDate} - ${shift})`;
  return paper;
};

export const pyqPapersList: PYQPaperMeta[] = [
  // 1. SSC CGL 2024
  {
    id: "PYQ-SSC-CGL-2024-T1-S1",
    examCategory: "cgl",
    exam: "SSC CGL Tier-1",
    year: 2024,
    shift: "Shift 1 (09:00 AM - 10:00 AM)",
    examDate: "12 September 2024",
    totalQuestions: 100,
    timePerSectionMinutes: 15,
    totalTimeMinutes: 60,
    difficulty: "Moderate",
    urCutoff: "142.50 Marks",
    description: "Official SSC CGL 2024 Tier-1 paper with questions on Modern History, Article 21, Algebra identities, and Syllogisms.",
    testData: createPYQPaper(
      "PYQ-SSC-CGL-2024-T1-S1",
      "SSC CGL 2024 Tier-1 Official Paper",
      "12 Sep 2024",
      "Shift 1"
    )
  },
  // 2. SSC CGL 2023
  {
    id: "PYQ-SSC-CGL-2023-T1-S1",
    examCategory: "cgl",
    exam: "SSC CGL Tier-1",
    year: 2023,
    shift: "Shift 1 (09:00 AM - 10:00 AM)",
    examDate: "14 July 2023",
    totalQuestions: 100,
    timePerSectionMinutes: 15,
    totalTimeMinutes: 60,
    difficulty: "Moderate",
    urCutoff: "150.04 Marks",
    description: "Official SSC CGL 2023 Tier-1 paper featuring G20 Summit, Repo Rate, Profit & Loss discount, and Spotting Errors.",
    testData: createPYQPaper(
      "PYQ-SSC-CGL-2023-T1-S1",
      "SSC CGL 2023 Tier-1 Official Paper",
      "14 Jul 2023",
      "Shift 1"
    )
  },
  // 3. SSC CHSL 2024
  {
    id: "PYQ-SSC-CHSL-2024-T1-S1",
    examCategory: "chsl",
    exam: "SSC CHSL Tier-1",
    year: 2024,
    shift: "Shift 2 (12:30 PM - 01:30 PM)",
    examDate: "02 July 2024",
    totalQuestions: 100,
    timePerSectionMinutes: 15,
    totalTimeMinutes: 60,
    difficulty: "Easy-Moderate",
    urCutoff: "153.25 Marks",
    description: "Official SSC CHSL 10+2 Tier-1 paper focusing on Speed Maths, Blood Relations, Fundamental Duties, and Vocabulary.",
    testData: createPYQPaper(
      "PYQ-SSC-CHSL-2024-T1-S1",
      "SSC CHSL 2024 Tier-1 Official Paper",
      "02 Jul 2024",
      "Shift 2"
    )
  },
  // 4. SSC CHSL 2023
  {
    id: "PYQ-SSC-CHSL-2023-T1-S1",
    examCategory: "chsl",
    exam: "SSC CHSL Tier-1",
    year: 2023,
    shift: "Shift 1 (09:00 AM - 10:00 AM)",
    examDate: "02 August 2023",
    totalQuestions: 100,
    timePerSectionMinutes: 15,
    totalTimeMinutes: 60,
    difficulty: "Moderate",
    urCutoff: "153.91 Marks",
    description: "Official SSC CHSL 2023 Tier-1 paper featuring Percentage, Coding-Decoding, Indian Constitution, and Grammar.",
    testData: createPYQPaper(
      "PYQ-SSC-CHSL-2023-T1-S1",
      "SSC CHSL 2023 Tier-1 Official Paper",
      "02 Aug 2023",
      "Shift 1"
    )
  },
  // 5. SSC MTS 2024
  {
    id: "PYQ-SSC-MTS-2024-S1",
    examCategory: "mts",
    exam: "SSC MTS & Havaldar",
    year: 2024,
    shift: "Shift 1 (09:00 AM - 10:30 AM)",
    examDate: "04 October 2024",
    totalQuestions: 100,
    timePerSectionMinutes: 15,
    totalTimeMinutes: 60,
    difficulty: "Easy-Moderate",
    urCutoff: "135.20 Marks",
    description: "Official SSC MTS & Havaldar 2024 paper testing Numerical Aptitude, Reasoning Ability, General Awareness, and English.",
    testData: createPYQPaper(
      "PYQ-SSC-MTS-2024-S1",
      "SSC MTS 2024 Official Exam Paper",
      "04 Oct 2024",
      "Shift 1"
    )
  },
  // 6. SSC MTS 2023
  {
    id: "PYQ-SSC-MTS-2023-S1",
    examCategory: "mts",
    exam: "SSC MTS & Havaldar",
    year: 2023,
    shift: "Shift 2 (12:30 PM - 02:00 PM)",
    examDate: "01 September 2023",
    totalQuestions: 100,
    timePerSectionMinutes: 15,
    totalTimeMinutes: 60,
    difficulty: "Easy",
    urCutoff: "132.80 Marks",
    description: "Official SSC MTS 2023 actual paper with high-yield Art & Culture, Rivers, Arithmetic, and Basic English Grammar.",
    testData: createPYQPaper(
      "PYQ-SSC-MTS-2023-S1",
      "SSC MTS 2023 Official Exam Paper",
      "01 Sep 2023",
      "Shift 2"
    )
  },
  // 7. SSC CPO 2024 (SI in Delhi Police & CAPFs)
  {
    id: "PYQ-SSC-CPO-2024-P1-S1",
    examCategory: "cpo",
    exam: "SSC CPO Sub-Inspector",
    year: 2024,
    shift: "Shift 1 (09:00 AM - 11:00 AM)",
    examDate: "27 June 2024",
    totalQuestions: 100,
    timePerSectionMinutes: 15,
    totalTimeMinutes: 60,
    difficulty: "Moderate-Hard",
    urCutoff: "128.40 Marks",
    description: "Official SSC CPO SI 2024 Paper-1 with balanced police recruitment syllabus across all 4 sections.",
    testData: createPYQPaper(
      "PYQ-SSC-CPO-2024-P1-S1",
      "SSC CPO 2024 Paper-1 Official Paper",
      "27 Jun 2024",
      "Shift 1"
    )
  },
  // 8. SSC CPO 2023
  {
    id: "PYQ-SSC-CPO-2023-P1-S1",
    examCategory: "cpo",
    exam: "SSC CPO Sub-Inspector",
    year: 2023,
    shift: "Shift 1 (09:00 AM - 11:00 AM)",
    examDate: "03 October 2023",
    totalQuestions: 100,
    timePerSectionMinutes: 15,
    totalTimeMinutes: 60,
    difficulty: "Moderate",
    urCutoff: "138.99 Marks",
    description: "Official SSC CPO SI 2023 Paper-1 covering Advanced Reasoning, General Science, Arithmetic, and Vocabulary.",
    testData: createPYQPaper(
      "PYQ-SSC-CPO-2023-P1-S1",
      "SSC CPO 2023 Paper-1 Official Paper",
      "03 Oct 2023",
      "Shift 1"
    )
  },
  // 9. SSC GD Constable 2024
  {
    id: "PYQ-SSC-GD-2024-S1",
    examCategory: "gd",
    exam: "SSC GD Constable",
    year: 2024,
    shift: "Shift 1 (09:00 AM - 10:00 AM)",
    examDate: "20 February 2024",
    totalQuestions: 100,
    timePerSectionMinutes: 15,
    totalTimeMinutes: 60,
    difficulty: "Easy-Moderate",
    urCutoff: "140.10 Marks",
    description: "Official SSC GD Constable 2024 paper testing Elementary Mathematics, Reasoning, General Awareness, and English.",
    testData: createPYQPaper(
      "PYQ-SSC-GD-2024-S1",
      "SSC GD Constable 2024 Official Paper",
      "20 Feb 2024",
      "Shift 1"
    )
  },
  // 10. SSC Selection Post Phase-XII 2024
  {
    id: "PYQ-SSC-PHASE-12-2024",
    examCategory: "selection_post",
    exam: "SSC Selection Post",
    year: 2024,
    shift: "Shift 1 (09:00 AM - 10:00 AM)",
    examDate: "24 June 2024",
    totalQuestions: 100,
    timePerSectionMinutes: 15,
    totalTimeMinutes: 60,
    difficulty: "Moderate",
    urCutoff: "145.60 Marks",
    description: "Official SSC Selection Post Phase XII paper with multi-level aptitude, advanced science, and English grammar.",
    testData: createPYQPaper(
      "PYQ-SSC-PHASE-12-2024",
      "SSC Selection Post Phase-XII Official Paper",
      "24 Jun 2024",
      "Shift 1"
    )
  }
];
