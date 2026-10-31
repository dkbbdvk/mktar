export interface RevisionRelationship {
  tool: string;
  toolHi: string;
  inflationAction: 'बढ़ाया जाता है (Hike)' | 'बिक्री (Sale)';
  deflationAction: 'घटाया जाता है (Cut)' | 'खरीद (Purchase)';
  impactOnMoneySupply: 'कम होती है (Contracts)' | 'बढ़ती है (Expands)';
  logicHi: string;
}

export const REVISION_RELATIONSHIPS: RevisionRelationship[] = [
  {
    tool: 'Repo Rate',
    toolHi: 'रेपो दर',
    inflationAction: 'बढ़ाया जाता है (Hike)',
    deflationAction: 'घटाया जाता है (Cut)',
    impactOnMoneySupply: 'कम होती है (Contracts)',
    logicHi: 'ऋण महंगा होगा -> उधारी घटेगी -> समग्र मांग गिरेगी -> महंगाई थमेगी।'
  },
  {
    tool: 'Reverse Repo Rate',
    toolHi: 'रिवर्स रेपो दर',
    inflationAction: 'बढ़ाया जाता है (Hike)',
    deflationAction: 'घटाया जाता है (Cut)',
    impactOnMoneySupply: 'कम होती है (Contracts)',
    logicHi: 'बैंक RBI के पास अधिक धन रखेंगे -> बाजार में ऋण देने के लिए कम धन बचेगा।'
  },
  {
    tool: 'Bank Rate',
    toolHi: 'बैंक दर',
    inflationAction: 'बढ़ाया जाता है (Hike)',
    deflationAction: 'घटाया जाता है (Cut)',
    impactOnMoneySupply: 'कम होती है (Contracts)',
    logicHi: 'दीर्घकालिक पूंजीगत लागत बढ़ेगी -> दीर्घकालिक निवेश उधारी संकुचित होगी।'
  },
  {
    tool: 'Cash Reserve Ratio (CRR)',
    toolHi: 'नकद आरक्षित अनुपात',
    inflationAction: 'बढ़ाया जाता है (Hike)',
    deflationAction: 'घटाया जाता है (Cut)',
    impactOnMoneySupply: 'कम होती है (Contracts)',
    logicHi: 'बैंकों को अधिक नकदी RBI में ब्लॉक करनी होगी -> अतिरिक्त ऋण योग्य रिज़र्व घटेंगे।'
  },
  {
    tool: 'Statutory Liquidity Ratio (SLR)',
    toolHi: 'वैधानिक तरलता अनुपात',
    inflationAction: 'बढ़ाया जाता है (Hike)',
    deflationAction: 'घटाया जाता है (Cut)',
    impactOnMoneySupply: 'कम होती है (Contracts)',
    logicHi: 'बैंकों को अधिक सरकारी प्रतिभूतियां/सोना रखना होगा -> व्यावसायिक ऋण हेतु कम धन बचेगा।'
  },
  {
    tool: 'Open Market Operations (OMO)',
    toolHi: 'खुले बाजार की क्रियाएं',
    inflationAction: 'बिक्री (Sale)',
    deflationAction: 'खरीद (Purchase)',
    impactOnMoneySupply: 'कम होती है (Contracts)',
    logicHi: 'RBI द्वारा बॉन्ड्स बेचने पर बैंकों की नकदी RBI के पास चली जाएगी (तरलता सोखना)।'
  },
  {
    tool: 'Margin Requirement',
    toolHi: 'सीमांत आवश्यकता',
    inflationAction: 'बढ़ाया जाता है (Hike)',
    deflationAction: 'घटाया जाता है (Cut)',
    impactOnMoneySupply: 'कम होती है (Contracts)',
    logicHi: 'उसी संपत्ति पर कम ऋण स्वीकृत होगा -> उधारकर्ता हतोत्साहित होंगे।'
  }
];

export const COMMON_EXAM_MISTAKES = [
  {
    id: 'mistake-1',
    misconception: 'मुद्रा आपूर्ति को प्रवाह (Flow) समझ लेना।',
    reality: 'मुद्रा आपूर्ति एक स्टॉक (Stock) अवधारणा है जिसे किसी निश्चित समय बिंदु (Point of time) पर मापा जाता है।',
    examTip: 'परीक्षा में यदि पूछा जाए कि "मुद्रा आपूर्ति स्टॉक है या प्रवाह?", तो हमेशा स्पष्ट रूप से "स्टॉक अवधारणा" लिखें और "निश्चित समय बिंदु" शब्द अवश्य रेखांकित करें।'
  },
  {
    id: 'mistake-2',
    misconception: 'CRR और SLR में भ्रम होना कि कौन कहाँ रखा जाता है।',
    reality: 'CRR अनिवार्य रूप से केवल नकद में RBI के पास रखा जाता है, जबकि SLR बैंक स्वयं अपने पास नकदी, सोना या सरकारी बॉन्ड्स के रूप में रखते हैं।',
    examTip: 'याद रखने की ट्रिक: CRR का R = Reserve with RBI; SLR का S = Self (स्वयं बैंक के पास)।'
  },
  {
    id: 'mistake-3',
    misconception: 'कुल जमा और शुद्ध साख निर्माण को एक ही मान लेना।',
    reality: 'कुल जमा सृजन = प्रारंभिक जमा × गुणक (₹1,000 × 10 = ₹10,000); परंतु शुद्ध साख निर्माण = कुल जमा - प्रारंभिक जमा (₹10,000 - ₹1,000 = ₹9,000)।',
    examTip: 'यदि प्रश्न में "Net Credit Created" पूछा हो, तो प्रारंभिक प्राथमिक नकद जमा को घटाना कभी न भूलें।'
  },
  {
    id: 'mistake-4',
    misconception: 'रेपो दर और बैंक दर में कोई अंतर न समझना।',
    reality: 'रेपो दर अल्पकालिक ऋणों के लिए प्रतिभूतियों के बदले होती है; बैंक दर बिना किसी प्रतिभूति के दीर्घकालिक ऋणों पर लगती है।',
    examTip: 'रेपो = अल्पकाल (Short-term) + प्रतिभूति; बैंक दर = दीर्घकाल (Long-term) + असुरक्षित।'
  },
  {
    id: 'mistake-5',
    misconception: 'यह मान लेना कि व्यावसायिक बैंक नए नोट छापते हैं।',
    reality: 'व्यावसायिक बैंक एक भी भौतिक नोट नहीं छाप सकते। वे केवल जमाओं के आधार पर "चेकेबल साख जमाएं" (Derivative Deposits) सृजित करते हैं।',
    examTip: 'नोट छापने का कानूनी एकाधिकार केवल केंद्रीय बैंक (RBI) के पास है।'
  }
];
