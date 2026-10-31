import { BoardQuestion } from '../../../types/chapter';

export const MONEY_AND_BANKING_BOARD_QUESTIONS: BoardQuestion[] = [
  // 1 MARK QUESTIONS
  {
    id: 'bq-1m-1',
    marks: 1,
    year: 'CBSE 2023',
    questionEn: 'Define Legal Reserve Ratio (LRR).',
    questionHi: 'विधिक आरक्षित अनुपात (LRR) को परिभाषित कीजिए।',
    modelAnswer: 'Legal Reserve Ratio (LRR) is the legally mandated minimum percentage of total net demand and time deposits that commercial banks must maintain as liquid reserves with the central bank (Cash Reserve Ratio) and with themselves (Statutory Liquidity Ratio).',
    keyKeywords: ['minimum percentage of deposits', 'statutorily maintained', 'CRR and SLR']
  },
  {
    id: 'bq-1m-2',
    marks: 1,
    year: 'CBSE 2020',
    questionEn: 'What is meant by "Banker\'s Bank"?',
    questionHi: '"बैंकों का बैंक" से क्या अभिप्राय है?',
    modelAnswer: 'As the Banker\'s Bank, the Central Bank holds the statutory cash reserves of commercial banks, provides them financial accommodation/rediscounting facilities, and acts as their regulatory supervisor and custodian.',
    keyKeywords: ['holds cash reserves', 'financial accommodation', 'regulator and supervisor']
  },
  {
    id: 'bq-1m-3',
    marks: 1,
    year: 'CBSE 2021',
    questionEn: 'State the components of M1 measure of money supply.',
    questionHi: 'मुद्रा आपूर्ति के M1 माप के घटकों को बताइए।',
    modelAnswer: 'M1 = Currency held by public (C) + Net demand deposits with commercial banks (DD) + Other deposits with RBI (OD).',
    keyKeywords: ['C + DD + OD']
  },
  {
    id: 'bq-1m-4',
    marks: 1,
    year: 'CBSE 2019',
    questionEn: 'Why are post office savings deposits excluded from M1?',
    questionHi: 'डाकघर बचत जमाओं को M1 में क्यों शामिल नहीं किया जाता?',
    modelAnswer: 'Post office savings deposits do not have universal cheque-clearing facilities and therefore cannot be used as a direct, instant medium of exchange like commercial bank demand deposits.',
    keyKeywords: ['lack of chequeable facilities', 'not directly transferable']
  },
  {
    id: 'bq-1m-5',
    marks: 1,
    year: 'CBSE 2022',
    questionEn: 'What is meant by Repo Rate?',
    questionHi: 'रेपो दर का क्या अर्थ है?',
    modelAnswer: 'Repo Rate is the benchmark policy interest rate at which the Central Bank (RBI) lends short-term funds to commercial banks against the collateral of approved government securities.',
    keyKeywords: ['short-term lending rate', 'against government securities', 'Central Bank to commercial banks']
  },

  // 2 MARKS QUESTIONS
  {
    id: 'bq-2m-1',
    marks: 2,
    year: 'CBSE 2022',
    questionEn: 'Distinguish between Fiat Money and Fiduciary Money with one example each.',
    questionHi: 'आदेश मुद्रा और न्यास मुद्रा में एक-एक उदाहरण सहित अंतर स्पष्ट कीजिए।',
    modelAnswer: '1. Fiat Money: It is currency backed by government authority/order and accepted by law (e.g., all rupee currency notes and coins).\n2. Fiduciary Money: It is money accepted based on mutual trust and confidence between payer and payee, without statutory backing (e.g., bank cheques and drafts).',
    markingScheme: ['1 mark for definitions', '1 mark for correct examples']
  },
  {
    id: 'bq-2m-2',
    marks: 2,
    year: 'CBSE 2021',
    questionEn: 'Explain how the function "Unit of Account" solves the barter difficulty of common measure of value.',
    questionHi: 'समझाएं कि "लेखा की इकाई" कार्य वस्तु विनिमय के सामान्य मापक के अभाव को कैसे हल करता है।',
    modelAnswer: 'Under barter, measuring the exchange value of every good required knowing exchange ratios against all other commodities (e.g., 1 cow = 50 kg wheat = 10 shirts). Money acts as a common denominator/unit of account by expressing the value of every good in terms of price (e.g., in ₹), enabling easy comparison, accounting, and book-keeping.',
    markingScheme: ['1 mark for barter problem description', '1 mark for money resolution via price']
  },
  {
    id: 'bq-2m-3',
    marks: 2,
    year: 'CBSE 2023',
    questionEn: 'Explain the concept of "High-Powered Money" and its relationship with total money supply.',
    questionHi: '"उच्च-शक्ति मुद्रा" की अवधारणा और कुल मुद्रा आपूर्ति के साथ इसके संबंध को समझाइए।',
    modelAnswer: 'High-Powered Money (H = C + R) represents the monetary base created directly by the Central Bank and Government. Total money supply (M1 = C + DD) is a multiple of high-powered money, where M1 = H × Money Multiplier, because bank reserves (R) support multiple times their value in secondary demand deposits (DD).',
    markingScheme: ['1 mark for definition formula H = C + R', '1 mark for relationship with multiplier']
  },

  // 3 MARKS QUESTIONS
  {
    id: 'bq-3m-1',
    marks: 3,
    year: 'CBSE 2020',
    questionEn: 'Explain the "Lender of the Last Resort" function of the Central Bank with its macroeconomic significance.',
    questionHi: 'केंद्रीय बैंक के "अंतिम ऋणदाता" कार्य की उसके समष्टि आर्थिक महत्व सहित व्याख्या कीजिए।',
    modelAnswer: '1. Meaning: When commercial banks face acute liquidity shortages or financial distress and fail to secure funds from interbank markets or external sources, the Central Bank intervenes as lender of last resort.\n2. Mechanism: It extends emergency rediscount credit against eligible government securities and assets.\n3. Significance: This prevents panic withdrawals (bank runs), shields the banking architecture from systemic collapse, and safeguards public faith in the national financial ecosystem.',
    markingScheme: ['1 mark for meaning', '1 mark for mechanism', '1 mark for macroeconomic significance']
  },
  {
    id: 'bq-3m-2',
    marks: 3,
    year: 'CBSE 2019',
    questionEn: 'Explain how Open Market Operations (OMO) are deployed by the Central Bank to curb inflationary pressures.',
    questionHi: 'समझाएं कि केंद्रीय बैंक द्वारा मुद्रास्फीति के दबाव को रोकने के लिए खुले बाजार की क्रियाओं (OMO) का उपयोग कैसे किया जाता है।',
    modelAnswer: '1. Situation: During inflation, excess liquidity fuels high aggregate demand.\n2. Action: The Central Bank sells government securities (G-Secs) in the open market to commercial banks and institutional investors.\n3. Transmission: Buyers pay via bank cheques, causing liquid cash to flow out of commercial banks into the Central Bank.\n4. Outcome: Commercial banks\' loanable reserves shrink, leading to credit contraction, higher lending rates, reduced spending, and stabilization of price levels.',
    markingScheme: ['1 mark for action (sale)', '1 mark for reserve absorption mechanism', '1 mark for impact on credit and inflation']
  },
  {
    id: 'bq-3m-3',
    marks: 3,
    year: 'CBSE 2024',
    questionEn: 'Distinguish between Cash Reserve Ratio (CRR) and Statutory Liquidity Ratio (SLR).',
    questionHi: 'नकद आरक्षित अनुपात (CRR) और वैधानिक तरलता अनुपात (SLR) में अंतर स्पष्ट कीजिए।',
    modelAnswer: '1. Custody: CRR is held by commercial banks with the RBI; SLR is maintained by banks with themselves.\n2. Asset Form: CRR is strictly in pure cash; SLR can be kept in cash, gold, and unencumbered government securities.\n3. Earnings: RBI pays zero interest on CRR; banks earn interest yield on securities held under SLR.\n4. Primary Role: CRR controls credit expansion and liquidity; SLR ensures bank solvency and creates demand for government bonds.',
    markingScheme: ['1 mark each for any 3 distinct conceptual differences']
  },

  // 4 MARKS QUESTIONS
  {
    id: 'bq-4m-1',
    marks: 4,
    year: 'CBSE 2022',
    questionEn: 'Explain the mechanism of "Margin Requirement" as a qualitative credit control instrument. How is it adjusted to revive an economy during deflation?',
    questionHi: 'साख नियंत्रण के गुणात्मक उपकरण के रूप में "सीमांत आवश्यकता" की कार्यप्रणाली समझाइए। मंदी के समय अर्थव्यवस्था को उबारने हेतु इसे कैसे समायोजित किया जाता है?',
    modelAnswer: '1. Definition: Margin requirement refers to the difference between the current market value of security offered for a loan and the actual loan amount disbursed by the bank (Margin = Security Value - Loan Amount).\n2. Mechanism: For instance, if a collateral worth ₹1,00,000 gives an ₹80,000 loan, the margin is 20%. A higher margin discourages borrowing; a lower margin encourages it.\n3. Deflation (Deficient Demand) Adjustment: During deflation, economic activities are depressed due to weak purchasing power. The Central Bank lowers margin requirements (e.g., from 40% to 15%).\n4. Economic Impact: Borrowers now get larger loan amounts against the same collateral (₹85,000 instead of ₹60,000). Credit flow to productive sectors expands, driving capital investment, consumption, aggregate demand, and revival from recession.',
    markingScheme: ['1 mark for definition and formula', '1 mark for mechanism', '1 mark for deflation policy adjustment', '1 mark for impact on aggregate demand']
  },
  {
    id: 'bq-4m-2',
    marks: 4,
    year: 'CBSE 2023',
    questionEn: 'Explain the "Banker to the Government" function of the Central Bank covering its roles as Banker, Agent, and Financial Advisor.',
    questionHi: 'केंद्रीय बैंक के "सरकार के बैंकर" कार्य की बैंकर, एजेंट और वित्तीय सलाहकार के रूप में व्याख्या कीजिए।',
    modelAnswer: '1. As a Banker: Maintains banking accounts of Union and State governments, collects tax receipts, honors treasury cheques, and extends short-term advances (Ways and Means Advances - WMA).\n2. As an Agent: Manages the public debt, issues new government securities and treasury bills, and collects interest payments on behalf of the sovereign.\n3. As a Financial Advisor: Counsels the government on critical economic issues including fiscal deficit management, foreign exchange stability, inflation containment, and capital market policies.',
    markingScheme: ['1.5 marks for Banker role', '1.5 marks for Agent role', '1 mark for Financial Advisor role']
  },

  // 6 MARKS QUESTIONS
  {
    id: 'bq-6m-1',
    marks: 6,
    year: 'CBSE 2020, 2023 Repeated Pattern',
    questionEn: 'Explain the process of credit creation by commercial banks using a hypothetical numerical example. Show the tabular working, multiplier formula, and state the underlying assumptions.',
    questionHi: 'एक काल्पनिक संख्यात्मक उदाहरण की सहायता से व्यावसायिक बैंकों द्वारा साख निर्माण की प्रक्रिया को समझाइए। कार्यशील तालिका, गुणक सूत्र और अंतर्निहित मान्यताएं दर्शाइए।',
    modelAnswer: `1. Underlying Assumptions:
- The entire commercial banking system is treated as a unified single entity ("Banks").
- All transactions in the economy are routed through banks (all receipts/payments via cheques or digital transfers).

2. Credit Multiplier Formula:
Credit Multiplier (k) = 1 / LRR
Total Deposit Creation = Initial Primary Deposit × (1 / LRR)
Net Credit Created = Total Deposits - Initial Deposit

3. Numerical Illustration:
- Initial Primary Deposit = ₹1,000
- Legal Reserve Ratio (LRR) = 10% (0.10)
- Multiplier (k) = 1 / 0.10 = 10

4. Step-by-Step Working:
- Round 1: Bank receives ₹1,000 primary cash. Keeps 10% (₹100) as legal reserve. Remaining excess reserve ₹900 is lent out by crediting borrower's account.
- Round 2: Borrower spends ₹900 by cheque, which gets deposited into another bank account. Deposit rises by ₹900. Bank keeps 10% (₹90) in reserve and lends ₹810.
- Round 3: ₹810 is deposited. Bank keeps ₹81 (10%) and lends ₹729.
- This continuous chain continues until total reserves accumulated equal initial primary deposit (₹1,000).

5. Summary Results:
- Total Deposits Generated = ₹1,000 × 10 = ₹10,000
- Total Legal Reserves = ₹1,000
- Total Loans / Net Credit Created = ₹9,000

Conclusion: Through fractional reserve banking, a ₹1,000 primary deposit creates ₹10,000 worth of total deposits and ₹9,000 in credit.`,
    markingScheme: ['1 mark for assumptions', '1 mark for multiplier formula', '2 marks for round-by-round tabular explanation', '2 marks for final mathematical calculation and conclusion']
  },
  {
    id: 'bq-6m-2',
    marks: 6,
    year: 'CBSE 2024 Sample Paper',
    questionEn: 'How does the Central Bank use (a) Repo Rate, and (b) Legal Reserve Ratio (CRR and SLR) to control the situation of Excess Demand / Inflation in an economy? Explain the transmission process clearly.',
    questionHi: 'केंद्रीय बैंक किसी अर्थव्यवस्था में अतिरेक मांग / मुद्रास्फीति को नियंत्रित करने के लिए (क) रेपो दर और (ख) विधिक आरक्षित अनुपात (CRR और SLR) का उपयोग किस प्रकार करता है? संचरण प्रक्रिया को स्पष्ट रूप से समझाइए।',
    modelAnswer: `1. Repo Rate Transmission to Control Inflation:
- Policy Action: During excess demand / inflation, the Central Bank increases the Repo Rate.
- Transmission Chain:
  1. A higher repo rate makes short-term borrowing from the RBI more costly for commercial banks.
  2. Commercial banks pass this cost on to the public by raising their lending rates (interest on home, car, and business loans).
  3. Cost of credit rises, leading to a drop in the demand for consumer credit and investment loans.
  4. Aggregate demand contracts, neutralizing excess demand and stabilizing price levels.

2. Legal Reserve Ratio (CRR & SLR) Transmission:
- Policy Action: The Central Bank raises both CRR and SLR.
- Transmission Chain:
  1. Raising CRR obligates banks to keep a greater fraction of deposits locked with the RBI.
  2. Raising SLR mandates banks to park more funds in low-yield liquid government securities.
  3. Consequently, commercial banks' excess loanable reserves drop immediately.
  4. With smaller excess reserves, secondary deposit creation via the credit multiplier contracts sharply.
  5. The resulting squeeze in market liquidity curbs speculative spending and pulls inflation back within targets.`,
    markingScheme: ['3 marks for complete Repo Rate transmission mechanism', '3 marks for complete CRR/SLR reserve absorption mechanism']
  }
];
