export interface MCQOption {
  id: string;
  textEn: string;
  textHi: string;
}

export interface MCQQuestion {
  id: string;
  category: 'Money' | 'Banking' | 'Credit Creation' | 'Central Bank' | 'Monetary Policy';
  questionEn: string;
  questionHi: string;
  options: MCQOption[];
  correctAnswerId: string;
  explanationEn: string;
  explanationHi: string;
  ncertRef?: string;
}

export interface AssertionReasonQuestion {
  id: string;
  assertionEn: string;
  assertionHi: string;
  reasonEn: string;
  reasonHi: string;
  correctOption: 'A' | 'B' | 'C' | 'D';
  // A: Both true, R is correct explanation
  // B: Both true, R is NOT correct explanation
  // C: A is true, R is false
  // D: A is false, R is true
  explanation: string;
}

export interface CaseStudyQuestion {
  id: string;
  question: string;
  answer: string;
  marks: number;
}

export interface CaseStudy {
  id: string;
  title: string;
  sourceContext: string;
  caseText: string;
  questions: CaseStudyQuestion[];
}
