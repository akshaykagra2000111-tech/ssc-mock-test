import { SSCMockTest } from '../types/sscTest';
import { defaultSSCMockTest } from './defaultMockTest';
import { SSCExamCategory } from './sscExams';

const cloneWithTitle = (id: string, title: string): SSCMockTest => {
  const test: SSCMockTest = JSON.parse(JSON.stringify(defaultSSCMockTest));
  test.test_id = id;
  test.test_title = title;
  return test;
};

export const examMockTests: Record<SSCExamCategory, SSCMockTest> = {
  all: defaultSSCMockTest,
  cgl: cloneWithTitle(
    'MOCK-SSC-CGL-TIER1-2025',
    'SSC CGL 2025 Tier-1 Official Pattern Mock Test (100 Qs - 60 Mins)'
  ),
  chsl: cloneWithTitle(
    'MOCK-SSC-CHSL-10PLUS2-2025',
    'SSC CHSL (10+2) Tier-1 Official Pattern Mock Test (100 Qs - 60 Mins)'
  ),
  mts: cloneWithTitle(
    'MOCK-SSC-MTS-HAVALDAR-2025',
    'SSC MTS & Havaldar 2025 Full Length Mock Test (100 Qs - 60 Mins)'
  ),
  cpo: cloneWithTitle(
    'MOCK-SSC-CPO-SI-2025',
    'SSC CPO Sub-Inspector 2025 Paper-1 Mock Test (100 Qs - 60 Mins)'
  ),
  gd: cloneWithTitle(
    'MOCK-SSC-GD-CONSTABLE-2025',
    'SSC GD Constable 2025 Paramilitary Mock Test (100 Qs - 60 Mins)'
  ),
  steno: cloneWithTitle(
    'MOCK-SSC-STENO-GRADE-CD-2025',
    'SSC Stenographer Grade C & D 2025 Mock Test (100 Qs - 60 Mins)'
  ),
  selection_post: cloneWithTitle(
    'MOCK-SSC-SELECTION-POST-PHASE12',
    'SSC Selection Post Phase-XII/XIII Mock Test (100 Qs - 60 Mins)'
  ),
};

export const mockTestPresets: Record<string, SSCMockTest> = {
  'mock-cgl': examMockTests.cgl,
  'mock-chsl': examMockTests.chsl,
  'mock-mts': examMockTests.mts,
  'mock-cpo': examMockTests.cpo,
  'mock-gd': examMockTests.gd,
  'mock-steno': examMockTests.steno,
  'mock-selection': examMockTests.selection_post,
  'mock-1': defaultSSCMockTest,
};
