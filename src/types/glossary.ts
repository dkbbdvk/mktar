export interface GlossaryTerm {
  id: string;
  termEn: string;
  termHi: string;
  category: 'Money' | 'Banking' | 'RBI & Policy' | 'General Macro';
  definitionHi: string;
  definitionEn: string;
  exampleHi?: string;
  relatedFormula?: string;
}
