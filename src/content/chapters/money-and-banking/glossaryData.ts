import { GlossaryTerm } from '../../../types/glossary';

export const MONEY_AND_BANKING_GLOSSARY: GlossaryTerm[] = [
  {
    id: 'term-barter',
    termEn: 'Barter System (C-C Economy)',
    termHi: 'वस्तु विनिमय प्रणाली (C-C अर्थव्यवस्था)',
    category: 'Money',
    definitionEn: 'An economic system where goods and services are exchanged directly for other goods and services without the use of money.',
    definitionHi: 'वह प्रणाली जिसमें वस्तुओं और सेवाओं का विनिमय बिना किसी मुद्रा के सीधे अन्य वस्तुओं और सेवाओं से किया जाता है।',
    exampleHi: 'गेहूं के बदले कपड़ा प्राप्त करना।'
  },
  {
    id: 'term-double-coincidence',
    termEn: 'Double Coincidence of Wants',
    termHi: 'आवश्यकताओं का दोहरा संयोग',
    category: 'Money',
    definitionEn: 'A state where two individuals possess commodities that the other desires, making direct trade possible under barter.',
    definitionHi: 'वह स्थिति जहाँ दोनों पक्षों के पास ठीक वही वस्तु उपलब्ध हो जिसकी दूसरे पक्ष को आवश्यकता हो।',
    exampleHi: 'किसान को गाय चाहिए और पशुपालक को ठीक उसी समय चावल चाहिए।'
  },
  {
    id: 'term-fiat-money',
    termEn: 'Fiat Money',
    termHi: 'आदेश मुद्रा',
    category: 'Money',
    definitionEn: 'Money that is issued by government decree and has legal currency status, without being backed by a physical commodity like gold.',
    definitionHi: 'वह मुद्रा जो सरकार के वैधानिक आदेश या फरमान द्वारा जारी की जाती है।',
    exampleHi: 'भारत के सभी ₹10, ₹50, ₹100, ₹500 के करेंसी नोट।'
  },
  {
    id: 'term-fiduciary-money',
    termEn: 'Fiduciary Money',
    termHi: 'न्यास मुद्रा',
    category: 'Money',
    definitionEn: 'Money accepted based on the mutual trust between the payer and the payee rather than statutory government compulsion.',
    definitionHi: 'वह मुद्रा जो प्राप्तकर्ता और अदाकर्ता के आपसी विश्वास पर आधारित होती है, कानूनी बाध्यता पर नहीं।',
    exampleHi: 'बैंक चेक, ड्राफ्ट, विनिमय बिल।'
  },
  {
    id: 'term-legal-tender',
    termEn: 'Legal Tender',
    termHi: 'वैध मुद्रा',
    category: 'Money',
    definitionEn: 'Money that cannot be legally refused by any citizen for the settlement of any debt or transaction.',
    definitionHi: 'वह मुद्रा जिसे देश का कोई भी नागरिक किसी भी ऋण या लेन-देन के भुगतान के निपटारे के लिए अस्वीकार नहीं कर सकता।'
  },
  {
    id: 'term-money-supply',
    termEn: 'Money Supply',
    termHi: 'मुद्रा की पूर्ति',
    category: 'Money',
    definitionEn: 'The total stock of money in circulation held by the public at a specific point of time in an economy.',
    definitionHi: 'एक निश्चित समय बिंदु पर देश की जनता द्वारा संचलन में रखी गई मुद्रा का कुल स्टॉक।',
    relatedFormula: 'M1 = C + DD + OD'
  },
  {
    id: 'term-high-powered-money',
    termEn: 'High-Powered Money (Monetary Base)',
    termHi: 'उच्च-शक्ति मुद्रा (मौद्रिक आधार)',
    category: 'Money',
    definitionEn: 'The monetary base created directly by the Central Bank and Government, consisting of currency held by public and bank reserves.',
    definitionHi: 'देश के मौद्रिक प्राधिकरण (RBI + सरकार) द्वारा सीधे निर्मित आधार मुद्रा, जिसमें जनता की करेंसी और बैंक रिज़र्व शामिल होते हैं।',
    relatedFormula: 'H = C + R'
  },
  {
    id: 'term-demand-deposits',
    termEn: 'Demand Deposits',
    termHi: 'मांग जमाएं',
    category: 'Banking',
    definitionEn: 'Bank deposits that can be withdrawn or transferred on demand via cheques, debit cards, or online banking at any time.',
    definitionHi: 'व्यावसायिक बैंकों के पास वे जमाएं जिन्हें जमाकर्ता अपनी मांग पर कभी भी चेक या एटीएम से निकाल सकता है।'
  },
  {
    id: 'term-time-deposits',
    termEn: 'Time Deposits (Fixed Deposits)',
    termHi: 'सावधि जमाएं (सावधि निक्षेप)',
    category: 'Banking',
    definitionEn: 'Deposits with banks committed for a specified maturity period that earn higher interest and lack direct chequeable access.',
    definitionHi: 'एक निश्चित अवधि के लिए बैंकों में जमा की गई राशि जिस पर उच्च ब्याज मिलता है और जो गैर-चेकेबल होती है।'
  },
  {
    id: 'term-primary-deposits',
    termEn: 'Primary Deposits',
    termHi: 'प्राथमिक जमाएं',
    category: 'Banking',
    definitionEn: 'Cash deposited by customers directly into commercial bank accounts, forming the liquid foundation for credit expansion.',
    definitionHi: 'ग्राहकों द्वारा बैंक में वास्तविक भौतिक नकदी के रूप में जमा की गई धनराशि जो साख निर्माण का आधार बनती है।'
  },
  {
    id: 'term-derivative-deposits',
    termEn: 'Derivative / Secondary Deposits',
    termHi: 'व्युत्पन्न / गौण जमाएं',
    category: 'Banking',
    definitionEn: 'Deposits created by banks in borrowers’ accounts as a consequence of granting loans without giving out physical currency.',
    definitionHi: 'बैंकों द्वारा ऋण स्वीकृत करने पर उधारकर्ता के खाते में क्रेडिट की गई राशि, जो नई बैंक जमा को जन्म देती है।'
  },
  {
    id: 'term-lrr',
    termEn: 'Legal Reserve Ratio (LRR)',
    termHi: 'विधिक आरक्षित अनुपात',
    category: 'Banking',
    definitionEn: 'The minimum fraction of deposits that commercial banks are legally mandated to retain as cash/liquid reserves.',
    definitionHi: 'बैंक जमाओं का वह न्यूनतम कानूनी प्रतिशत जिसे बैंकों को आरक्षित रूप में रखना अनिवार्य होता है।',
    relatedFormula: 'LRR = CRR + SLR'
  },
  {
    id: 'term-credit-multiplier',
    termEn: 'Credit Multiplier / Money Multiplier',
    termHi: 'साख गुणक / मुद्रा गुणक',
    category: 'Banking',
    definitionEn: 'The ratio by which total bank deposits expand in the banking system from a given initial primary cash deposit.',
    definitionHi: 'वह गुणक जो यह तय करता है कि प्राथमिक नकदी जमा से पूरी बैंकिंग प्रणाली में कुल कितने गुना नई जमाएं बनेंगी।',
    relatedFormula: 'k = 1 / LRR'
  },
  {
    id: 'term-central-bank',
    termEn: 'Central Bank (RBI)',
    termHi: 'केंद्रीय बैंक (भारतीय रिज़र्व बैंक)',
    category: 'RBI & Policy',
    definitionEn: 'The apex financial institution of a nation that regulates monetary stability, supervises banks, and issues currency.',
    definitionHi: 'देश का सर्वोच्च मौद्रिक संस्थान जो बैंकिंग तंत्र का नियमन करता है, मुद्रा छापता है और मौद्रिक नीति बनाता है।'
  },
  {
    id: 'term-bank-of-issue',
    termEn: 'Bank of Issue (Currency Authority)',
    termHi: 'करेंसी जारी करने का एकाधिकार',
    category: 'RBI & Policy',
    definitionEn: 'The exclusive legal monopoly granted to the central bank to print and issue sovereign currency notes in an economy.',
    definitionHi: 'केंद्रीय बैंक को प्राप्त देश में वैध करेंसी नोट जारी करने का एकमात्र कानूनी एकाधिकार।'
  },
  {
    id: 'term-lender-of-last-resort',
    termEn: 'Lender of the Last Resort',
    termHi: 'अंतिम ऋणदाता',
    category: 'RBI & Policy',
    definitionEn: 'The central bank function of extending emergency liquidity assistance to solvent but distressed banks when market options fail.',
    definitionHi: 'गंभीर नकदी संकट के समय व्यावसायिक बैंकों को दिवालिया होने से बचाने के लिए केंद्रीय बैंक द्वारा आपात ऋण सहायता देना।'
  },
  {
    id: 'term-repo-rate',
    termEn: 'Repo Rate (Repurchase Rate)',
    termHi: 'रेपो दर',
    category: 'RBI & Policy',
    definitionEn: 'The policy interest rate at which the central bank lends short-term money to commercial banks against government securities.',
    definitionHi: 'वह अल्पकालिक ब्याज दर जिस पर केंद्रीय बैंक सरकारी प्रतिभूतियों के बदले व्यावसायिक बैंकों को ऋण देता है।'
  },
  {
    id: 'term-reverse-repo-rate',
    termEn: 'Reverse Repo Rate',
    termHi: 'रिवर्स रेपो दर',
    category: 'RBI & Policy',
    definitionEn: 'The interest rate at which commercial banks park their surplus funds with the central bank on a short-term basis.',
    definitionHi: 'वह ब्याज दर जिस पर व्यावसायिक बैंक अपनी अधिशेष नकदी को केंद्रीय बैंक (RBI) के पास जमा करके ब्याज अर्जित करते हैं।'
  },
  {
    id: 'term-bank-rate',
    termEn: 'Bank Rate (Discount Rate)',
    termHi: 'बैंक दर / पुनर्कटौती दर',
    category: 'RBI & Policy',
    definitionEn: 'The rate at which the central bank is prepared to rediscount bills or lend long-term funds to banks without collateral.',
    definitionHi: 'वह दीर्घकालिक ब्याज दर जिस पर केंद्रीय बैंक बिना किसी प्रतिभूति के व्यावसायिक बैंकों को ऋण देता है।'
  },
  {
    id: 'term-crr',
    termEn: 'Cash Reserve Ratio (CRR)',
    termHi: 'नकद आरक्षित अनुपात',
    category: 'RBI & Policy',
    definitionEn: 'The percentage of total net demand and time liabilities that commercial banks must maintain in cash with the central bank.',
    definitionHi: 'बैंकों की कुल देनदारियों का वह प्रतिशत जिसे अनिवार्य रूप से नकद में RBI के पास जमा रखना होता है।'
  },
  {
    id: 'term-slr',
    termEn: 'Statutory Liquidity Ratio (SLR)',
    termHi: 'वैधानिक तरलता अनुपात',
    category: 'RBI & Policy',
    definitionEn: 'The percentage of total liabilities that commercial banks must maintain in designated liquid assets (cash, gold, G-Secs) with themselves.',
    definitionHi: 'बैंक देनदारियों का वह प्रतिशत जिसे बैंकों को स्वयं अपने पास निर्दिष्ट तरल परिसंपत्तियों (नकदी, सोना, सरकारी बॉन्ड्स) के रूप में रखना होता है।'
  },
  {
    id: 'term-omo',
    termEn: 'Open Market Operations (OMO)',
    termHi: 'खुले बाजार की क्रियाएं',
    category: 'RBI & Policy',
    definitionEn: 'The outright sale and purchase of government securities by the central bank in the open financial market to adjust liquidity.',
    definitionHi: 'अर्थव्यवस्था में तरलता को नियंत्रित करने के लिए केंद्रीय बैंक द्वारा खुले बाजार में सरकारी प्रतिभूतियों की खरीद और बिक्री करना।'
  },
  {
    id: 'term-margin-requirement',
    termEn: 'Margin Requirement',
    termHi: 'सीमांत आवश्यकता',
    category: 'RBI & Policy',
    definitionEn: 'The difference between the market value of collateral security offered for a loan and the actual loan amount disbursed.',
    definitionHi: 'ऋण के लिए गिरवी रखी गई संपत्ति के बाजार मूल्य और स्वीकृत ऋण की राशि के बीच का अंतर।',
    relatedFormula: 'Margin = Collateral Value - Loan Amount'
  },
  {
    id: 'term-moral-suasion',
    termEn: 'Moral Suasion',
    termHi: 'नैतिक दबाव',
    category: 'RBI & Policy',
    definitionEn: 'Persuasive advice, guidelines, circulars, and informal discussions by the central bank to influence bank credit policies.',
    definitionHi: 'केंद्रीय बैंक द्वारा व्यावसायिक बैंकों को अपनी मौद्रिक नीतियों का पालन करने के लिए नैतिक रूप से राजी करना।'
  },
  {
    id: 'term-credit-rationing',
    termEn: 'Credit Rationing',
    termHi: 'साख की राशनिंग',
    category: 'RBI & Policy',
    definitionEn: 'Fixing maximum credit ceilings or quotas for specific economic sectors or speculative activities.',
    definitionHi: 'विशिष्ट आर्थिक क्षेत्रों या गतिविधियों के लिए ऋण की अधिकतम सीमा (कोटा) निर्धारित करना।'
  }
];
