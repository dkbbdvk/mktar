import { FormulaData } from '../../../types/chapter';

export const MONEY_AND_BANKING_FORMULAS: FormulaData[] = [
  {
    id: 'credit-multiplier',
    nameEn: 'Credit Multiplier / Money Multiplier',
    nameHi: 'साख गुणक / मुद्रा गुणक',
    formula: 'k = 1 / LRR',
    symbols: [
      { symbol: 'k', meaning: 'साख गुणक (Credit Multiplier)' },
      { symbol: 'LRR', meaning: 'विधिक आरक्षित अनुपात (Legal Reserve Ratio = CRR + SLR)' }
    ],
    logic: 'साख गुणक यह दर्शाता है कि प्राथमिक नकदी जमा का कितने गुना कुल बैंक जमा सृजित की जा सकती है। LRR जितना कम होगा, साख गुणक उतना ही बड़ा होगा (विलोमानुपाती संबंध)।',
    solvedNumericals: [
      {
        id: 'num-1',
        title: 'प्राथमिक जमा ₹1,000 और LRR 10% पर साख निर्माण',
        question: 'यदि प्राथमिक नकद जमा ₹1,000 है और विधिक आरक्षित अनुपात (LRR) 10% है, तो साख गुणक और कुल जमा सृजन की गणना कीजिए।',
        given: {
          'Initial Deposit': '₹1,000',
          'LRR': '10% (0.10)'
        },
        toFind: ['साख गुणक (k)', 'कुल जमा सृजन (Total Deposits)', 'शुद्ध साख निर्माण (Net Credit)'],
        formulaUsed: 'k = 1 / LRR, Total Deposits = Initial Deposit × k',
        steps: [
          {
            step: 1,
            label: 'साख गुणक की गणना',
            expression: 'k = 1 / 0.10 = 10',
            explanation: 'साख गुणक का मान 10 प्राप्त हुआ।'
          },
          {
            step: 2,
            label: 'कुल जमा सृजन की गणना',
            expression: 'Total Deposits = ₹1,000 × 10 = ₹10,000',
            explanation: 'बैंकिंग प्रणाली में कुल ₹10,000 की नई जमाएं उत्पन्न होंगी।'
          },
          {
            step: 3,
            label: 'शुद्ध साख (ऋण) निर्माण की गणना',
            expression: 'Net Credit = ₹10,000 - ₹1,000 = ₹9,000',
            explanation: 'प्रणाली द्वारा कुल ₹9,000 का शुद्ध ऋण दिया गया।'
          }
        ],
        finalAnswer: 'साख गुणक = 10; कुल जमा = ₹10,000; शुद्ध साख निर्माण = ₹9,000'
      },
      {
        id: 'num-2',
        title: 'LRR का मान ज्ञात करना',
        question: 'एक अर्थव्यवस्था में प्राथमिक नकद जमा ₹2,500 करोड़ है और पूरी बैंकिंग प्रणाली ने ₹25,000 करोड़ का कुल जमा सृजन किया है। LRR का मान ज्ञात कीजिए।',
        given: {
          'Initial Deposit': '₹2,500 करोड़',
          'Total Deposits': '₹25,000 करोड़'
        },
        toFind: ['विधिक आरक्षित अनुपात (LRR)'],
        formulaUsed: 'Total Deposits = Initial Deposit × (1 / LRR)',
        steps: [
          {
            step: 1,
            label: 'सूत्र में मान रखना',
            expression: '25,000 = 2,500 × (1 / LRR)',
            explanation: 'कुल जमा और प्राथमिक जमा के मान प्रतिस्थापित किए।'
          },
          {
            step: 2,
            label: 'साख गुणक ज्ञात करना',
            expression: '1 / LRR = 25,000 / 2,500 = 10',
            explanation: 'साख गुणक (k) = 10।'
          },
          {
            step: 3,
            label: 'LRR की गणना',
            expression: 'LRR = 1 / 10 = 0.10 = 10%',
            explanation: 'विधिक आरक्षित अनुपात 10% है।'
          }
        ],
        finalAnswer: 'LRR = 10%'
      }
    ]
  },
  {
    id: 'money-supply-m1',
    nameEn: 'Money Supply Measure (M1)',
    nameHi: 'मुद्रा आपूर्ति का संकीर्ण माप (M1)',
    formula: 'M1 = C + DD + OD',
    symbols: [
      { symbol: 'C', meaning: 'Currency held by public (जनता के पास करेंसी)' },
      { symbol: 'DD', meaning: 'Net Demand Deposits with Commercial Banks (शुद्ध मांग जमाएं)' },
      { symbol: 'OD', meaning: 'Other Deposits with RBI (रिज़र्व बैंक के पास अन्य जमाएं)' }
    ],
    logic: 'M1 अर्थव्यवस्था में संचलन में मौजूद सबसे तरल मुद्रा का माप है जिसे तत्काल बिना किसी समय या लागत के लेन-देन में खर्च किया जा सकता है।',
    solvedNumericals: [
      {
        id: 'num-m1',
        title: 'M1 और M3 की गणना',
        question: 'निम्नलिखित आंकड़ों से M1 और M3 की गणना कीजिए:\n- जनता के पास करेंसी = ₹80,000 करोड़\n- व्यावसायिक बैंकों के पास मांग जमाएं = ₹1,20,000 करोड़\n- RBI के पास अन्य जमाएं = ₹4,000 करोड़\n- बैंकों के पास सावधि जमाएं (Time Deposits) = ₹3,00,000 करोड़\n- डाकघर बचत जमाएं = ₹10,000 करोड़',
        given: {
          'C': '₹80,000 करोड़',
          'DD': '₹1,20,000 करोड़',
          'OD': '₹4,000 करोड़',
          'Time Deposits': '₹3,00,000 करोड़'
        },
        toFind: ['M1', 'M3'],
        formulaUsed: 'M1 = C + DD + OD, M3 = M1 + Net Time Deposits',
        steps: [
          {
            step: 1,
            label: 'M1 की गणना',
            expression: 'M1 = 80,000 + 1,20,000 + 4,000 = ₹2,04,000 करोड़',
            explanation: 'करेंसी, मांग जमाएं और RBI की अन्य जमाओं का योग किया।'
          },
          {
            step: 2,
            label: 'M3 की गणना',
            expression: 'M3 = 2,04,000 + 3,00,000 = ₹5,04,000 करोड़',
            explanation: 'M1 में बैंकों की सावधि (Fixed) जमाओं को जोड़ा।'
          }
        ],
        finalAnswer: 'M1 = ₹2,04,000 करोड़; M3 = ₹5,04,000 करोड़ (डाकघर बचत जमाओं को M1/M3 में नहीं लिया जाता)',
        note: 'याद रखें कि डाकघर की जमाएं M2 और M4 का हिस्सा होती हैं, M1 या M3 का नहीं।'
      }
    ]
  },
  {
    id: 'high-powered-money',
    nameEn: 'High-Powered Money (Monetary Base)',
    nameHi: 'उच्च-शक्ति मुद्रा / मौद्रिक आधार (H)',
    formula: 'H = C + R',
    symbols: [
      { symbol: 'H', meaning: 'उच्च-शक्ति मुद्रा (Reserve Money / High-Powered Money)' },
      { symbol: 'C', meaning: 'जनता के पास करेंसी (Currency with Public)' },
      { symbol: 'R', meaning: 'बैंकों की कुल आरक्षित नकदी (Cash Reserves of Banks = Vault cash + CRR)' }
    ],
    logic: 'यह देश के मौद्रिक प्राधिकरण (RBI + भारत सरकार) द्वारा सीधे निर्मित कुल आधार मुद्रा है। साख गुणक के कारण कुल मुद्रा आपूर्ति (M1) हमेशा उच्च-शक्ति मुद्रा (H) से कई गुना अधिक होती है।',
    solvedNumericals: [
      {
        id: 'num-h',
        title: 'उच्च-शक्ति मुद्रा की गणना',
        question: 'यदि जनता के पास करेंसी ₹50,000 करोड़ है, व्यावसायिक बैंकों की अपनी तिजोरी में नकदी (Vault Cash) ₹8,000 करोड़ है और RBI के पास जमा CRR नकदी ₹12,000 करोड़ है, तो उच्च-शक्ति मुद्रा (H) का मान ज्ञात कीजिए।',
        given: {
          'C': '₹50,000 करोड़',
          'Vault Cash': '₹8,000 करोड़',
          'CRR with RBI': '₹12,000 करोड़'
        },
        toFind: ['उच्च-शक्ति मुद्रा (H)'],
        formulaUsed: 'H = C + R = C + (Vault Cash + Deposits with RBI)',
        steps: [
          {
            step: 1,
            label: 'कुल बैंक रिज़र्व (R) की गणना',
            expression: 'R = 8,000 + 12,000 = ₹20,000 करोड़',
            explanation: 'बैंकों की अपनी तिजोरी की नकदी और RBI के पास जमा नकदी का योग।'
          },
          {
            step: 2,
            label: 'H का मान ज्ञात करना',
            expression: 'H = 50,000 + 20,000 = ₹70,000 करोड़',
            explanation: 'करेंसी और कुल आरक्षित नकदी का योग।'
          }
        ],
        finalAnswer: 'उच्च-शक्ति मुद्रा (H) = ₹70,000 करोड़'
      }
    ]
  }
];
