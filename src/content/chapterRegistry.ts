import { ChapterManifest } from '../types/chapter';

export const ALL_CHAPTERS: ChapterManifest[] = [
  {
    id: 'money-and-banking',
    number: 3,
    titleEn: 'Money and Banking',
    titleHi: 'मुद्रा और बैंकिंग',
    descriptionEn: 'Explore the barter system, functions of money, money supply measures (M1-M4), commercial banking credit creation, and the Central Bank (RBI) monetary policy tools.',
    descriptionHi: 'वस्तु विनिमय प्रणाली, मुद्रा के कार्य, मुद्रा आपूर्ति के माप, व्यावसायिक बैंकों द्वारा साख निर्माण तथा केंद्रीय बैंक (RBI) के मौद्रिक नीति उपकरणों का गहन अध्ययन।',
    classGrade: 12,
    subject: 'Macroeconomics',
    board: 'CBSE',
    available: true,
    totalSections: 9,
    estimatedReadTimeMinutes: 45
  },
  {
    id: 'national-income',
    number: 1,
    titleEn: 'National Income Accounting',
    titleHi: 'राष्ट्रीय आय का लेखांकन',
    descriptionEn: 'Circular flow of income, GDP, GNP, NNP, methods of calculating national income (Value Added, Income, Expenditure methods).',
    descriptionHi: 'आय का चक्रीय प्रवाह, सकल घरेलू उत्पाद, राष्ट्रीय आय की गणना की विधियां।',
    classGrade: 12,
    subject: 'Macroeconomics',
    board: 'CBSE',
    available: false, // Phase 2 expansion
    totalSections: 8,
    estimatedReadTimeMinutes: 50
  },
  {
    id: 'income-and-employment',
    number: 4,
    titleEn: 'Determination of Income and Employment',
    titleHi: 'आय और रोजगार का निर्धारण',
    descriptionEn: 'Aggregate Demand, Aggregate Supply, Propensity to Consume & Save, Investment Multiplier, Excess and Deficient Demand.',
    descriptionHi: 'समग्र मांग, समग्र पूर्ति, उपभोग व बचत प्रवृत्ति, निवेश गुणक, अतिरेक व न्यून मांग।',
    classGrade: 12,
    subject: 'Macroeconomics',
    board: 'CBSE',
    available: false, // Phase 2 expansion
    totalSections: 7,
    estimatedReadTimeMinutes: 40
  },
  {
    id: 'government-budget',
    number: 5,
    titleEn: 'Government Budget and the Economy',
    titleHi: 'सरकारी बजट और अर्थव्यवस्था',
    descriptionEn: 'Objectives of budget, Revenue and Capital receipts/expenditures, Fiscal Deficit, Revenue Deficit, Primary Deficit.',
    descriptionHi: 'बजट के उद्देश्य, राजस्व एवं पूंजीगत प्राप्तियां/व्यय, राजकोषीय घाटा।',
    classGrade: 12,
    subject: 'Macroeconomics',
    board: 'CBSE',
    available: false, // Phase 2 expansion
    totalSections: 6,
    estimatedReadTimeMinutes: 35
  },
  {
    id: 'balance-of-payments',
    number: 6,
    titleEn: 'Open Economy: Balance of Payments & Foreign Exchange',
    titleHi: 'भुगतान संतुलन और विदेशी विनिमय दर',
    descriptionEn: 'Current Account, Capital Account, Autonomous vs Accommodating transactions, Fixed vs Flexible Foreign Exchange rates.',
    descriptionHi: 'चालू खाता, पूंजी खाता, स्वायत्त व समायोजक सौदे, विदेशी विनिमय दर प्रणाली।',
    classGrade: 12,
    subject: 'Macroeconomics',
    board: 'CBSE',
    available: false, // Phase 2 expansion
    totalSections: 6,
    estimatedReadTimeMinutes: 35
  }
];
