export type SSCExamCategory =
  | 'all'
  | 'cgl'
  | 'chsl'
  | 'mts'
  | 'cpo'
  | 'gd'
  | 'steno'
  | 'selection_post';

export interface SSCExamMeta {
  id: SSCExamCategory;
  code: string;
  name: {
    en: string;
    hi: string;
  };
  qualification: string;
  posts: string;
  tagline: string;
  sectionsCount: number;
  questionsPerSection: number;
  totalQuestions: number;
  timePerSectionMinutes: number;
  totalMinutes: number;
  marksPerQuestion: number;
  negativeMarks: number;
  badgeBg: string;
  badgeText: string;
}

export const sscExamsList: SSCExamMeta[] = [
  {
    id: 'cgl',
    code: 'SSC CGL',
    name: {
      en: 'SSC CGL (Combined Graduate Level)',
      hi: 'एसएससी सीजीएल (संयुक्त स्नातक स्तरीय परीक्षा)'
    },
    qualification: 'Graduation Degree',
    posts: 'Inspector (Income Tax/Excise), ASO (CSS/MEA), Sub-Inspector (CBI), Auditor',
    tagline: 'Premier Group B & C Officer Level Exam',
    sectionsCount: 4,
    questionsPerSection: 25,
    totalQuestions: 100,
    timePerSectionMinutes: 15,
    totalMinutes: 60,
    marksPerQuestion: 2.0,
    negativeMarks: 0.5,
    badgeBg: 'bg-indigo-100 border-indigo-300',
    badgeText: 'text-indigo-800'
  },
  {
    id: 'chsl',
    code: 'SSC CHSL',
    name: {
      en: 'SSC CHSL (Combined Higher Secondary Level 10+2)',
      hi: 'एसएससी सीएचएसएल (संयुक्त उच्चतर माध्यमिक स्तर 10+2)'
    },
    qualification: '12th Pass (Higher Secondary)',
    posts: 'Lower Division Clerk (LDC), Junior Secretariat Assistant (JSA), Data Entry Operator (DEO)',
    tagline: 'High Competition 10+2 Level Central Govt Posts',
    sectionsCount: 4,
    questionsPerSection: 25,
    totalQuestions: 100,
    timePerSectionMinutes: 15,
    totalMinutes: 60,
    marksPerQuestion: 2.0,
    negativeMarks: 0.5,
    badgeBg: 'bg-sky-100 border-sky-300',
    badgeText: 'text-sky-800'
  },
  {
    id: 'mts',
    code: 'SSC MTS',
    name: {
      en: 'SSC MTS & Havaldar (Multi Tasking Staff)',
      hi: 'एसएससी एमटीएस एवं हवलदार (मल्टी टास्किंग स्टाफ)'
    },
    qualification: '10th Pass (Matriculation)',
    posts: 'Multi Tasking Staff (Peon, Daftary, Jamadar) & Havaldar (CBIC/CBN)',
    tagline: 'Matriculation Level High-Volume Recruitment',
    sectionsCount: 4,
    questionsPerSection: 25,
    totalQuestions: 100,
    timePerSectionMinutes: 15,
    totalMinutes: 60,
    marksPerQuestion: 2.0,
    negativeMarks: 0.5,
    badgeBg: 'bg-emerald-100 border-emerald-300',
    badgeText: 'text-emerald-800'
  },
  {
    id: 'cpo',
    code: 'SSC CPO',
    name: {
      en: 'SSC CPO (Central Police Organization)',
      hi: 'एसएससी सीपीओ (केंद्रीय पुलिस संगठन - सब-इंस्पेक्टर)'
    },
    qualification: 'Graduation Degree',
    posts: 'Sub-Inspector in Delhi Police & CAPFs (BSF, CISF, CRPF, ITBP, SSB)',
    tagline: 'Uniformed Officer Level Police Recruitment',
    sectionsCount: 4,
    questionsPerSection: 25,
    totalQuestions: 100,
    timePerSectionMinutes: 15,
    totalMinutes: 60,
    marksPerQuestion: 2.0,
    negativeMarks: 0.5,
    badgeBg: 'bg-amber-100 border-amber-300',
    badgeText: 'text-amber-800'
  },
  {
    id: 'gd',
    code: 'SSC GD',
    name: {
      en: 'SSC GD Constable (General Duty)',
      hi: 'एसएससी जीडी कांस्टेबल (जनरल ड्यूटी)'
    },
    qualification: '10th Pass (Matriculation)',
    posts: 'Constable GD in BSF, CISF, CRPF, ITBP, SSB, SSF & Rifleman in Assam Rifles',
    tagline: 'Massive Paramilitary Forces Recruitment',
    sectionsCount: 4,
    questionsPerSection: 25,
    totalQuestions: 100,
    timePerSectionMinutes: 15,
    totalMinutes: 60,
    marksPerQuestion: 2.0,
    negativeMarks: 0.5,
    badgeBg: 'bg-rose-100 border-rose-300',
    badgeText: 'text-rose-800'
  },
  {
    id: 'steno',
    code: 'SSC Steno',
    name: {
      en: 'SSC Stenographer (Grade C & D)',
      hi: 'एसएससी स्टेनोग्राफर (ग्रेड सी एवं डी)'
    },
    qualification: '12th Pass + Shorthand Skill',
    posts: 'Stenographer in Central Ministries, Attached & Subordinate Offices',
    tagline: 'Language & Shorthand Focused Government Service',
    sectionsCount: 4,
    questionsPerSection: 25,
    totalQuestions: 100,
    timePerSectionMinutes: 15,
    totalMinutes: 60,
    marksPerQuestion: 2.0,
    negativeMarks: 0.5,
    badgeBg: 'bg-purple-100 border-purple-300',
    badgeText: 'text-purple-800'
  },
  {
    id: 'selection_post',
    code: 'SSC Phase',
    name: {
      en: 'SSC Selection Post (Phase XII / XIII)',
      hi: 'एसएससी सिलेक्शन पोस्ट (फेज परीक्षा)'
    },
    qualification: '10th / 12th / Graduation (Post-wise)',
    posts: 'Technical Assistant, Research Associate, Junior Clerk, Store Keeper',
    tagline: 'Specialized Departmental Selection Exams',
    sectionsCount: 4,
    questionsPerSection: 25,
    totalQuestions: 100,
    timePerSectionMinutes: 15,
    totalMinutes: 60,
    marksPerQuestion: 2.0,
    negativeMarks: 0.5,
    badgeBg: 'bg-teal-100 border-teal-300',
    badgeText: 'text-teal-800'
  }
];
