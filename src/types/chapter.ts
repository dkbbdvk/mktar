export interface SubSection {
  id: string;
  titleEn: string;
  titleHi: string;
  content: {
    definitionEn?: string;
    definitionHi?: string;
    explanationHi: string;
    logicHi?: string;
    examples?: Array<{
      title: string;
      desc: string;
    }>;
    keyFacts?: string[];
    examImportance?: string;
    bulletPoints?: string[];
  };
}

export interface Section {
  id: string;
  number: number;
  titleEn: string;
  titleHi: string;
  summaryHi: string;
  iconName: string;
  subSections: SubSection[];
}

export interface DifferenceColumn {
  key: string;
  label: string;
}

export interface DifferenceRow {
  basis: string;
  val1: string;
  val2: string;
}

export interface DifferenceTableData {
  id: string;
  titleEn: string;
  titleHi: string;
  subject1: string;
  subject2: string;
  rows: DifferenceRow[];
}

export interface FormulaStep {
  step: number;
  label: string;
  expression: string;
  explanation: string;
}

export interface SolvedNumerical {
  id: string;
  title: string;
  question: string;
  given: Record<string, string | number>;
  toFind: string[];
  formulaUsed: string;
  steps: FormulaStep[];
  finalAnswer: string;
  note?: string;
}

export interface FormulaData {
  id: string;
  nameEn: string;
  nameHi: string;
  formula: string;
  symbols: Array<{ symbol: string; meaning: string }>;
  logic: string;
  solvedNumericals: SolvedNumerical[];
}

export interface BoardQuestion {
  id: string;
  marks: 1 | 2 | 3 | 4 | 6;
  year?: string;
  questionEn: string;
  questionHi: string;
  modelAnswer: string;
  markingScheme?: string[];
  keyKeywords?: string[];
}

export interface ChapterManifest {
  id: string;
  number: number;
  titleEn: string;
  titleHi: string;
  descriptionEn: string;
  descriptionHi: string;
  classGrade: 12;
  subject: 'Macroeconomics';
  board: 'CBSE';
  available: boolean;
  totalSections: number;
  estimatedReadTimeMinutes: number;
}
