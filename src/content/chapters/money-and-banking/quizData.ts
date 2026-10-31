import { MCQQuestion, AssertionReasonQuestion, CaseStudy } from '../../../types/quiz';

export const MONEY_AND_BANKING_MCQS: MCQQuestion[] = [
  {
    id: 'mcq-1',
    category: 'Money',
    questionEn: 'Which of the following is the most liquid measure of money supply according to RBI?',
    questionHi: 'RBI के अनुसार निम्नलिखित में से कौन-सा मुद्रा आपूर्ति का सर्वाधिक तरल माप है?',
    options: [
      { id: 'a', textEn: 'M4', textHi: 'M4' },
      { id: 'b', textEn: 'M3', textHi: 'M3' },
      { id: 'c', textEn: 'M2', textHi: 'M2' },
      { id: 'd', textEn: 'M1', textHi: 'M1' }
    ],
    correctAnswerId: 'd',
    explanationEn: 'M1 includes currency held by the public and net demand deposits with banks, which can be directly and immediately used for transactions without any conversion lag.',
    explanationHi: 'M1 में जनता के पास करेंसी और बैंकों की मांग जमाएं शामिल होती हैं, जिनका बिना किसी समय की हानि या मूल्य ह्रास के सीधे और तत्काल लेन-देन में उपयोग किया जा सकता है।'
  },
  {
    id: 'mcq-2',
    category: 'Credit Creation',
    questionEn: 'If the Legal Reserve Ratio (LRR) is 20%, the value of the credit multiplier will be:',
    questionHi: 'यदि विधिक आरक्षित अनुपात (LRR) 20% है, तो साख गुणक का मान होगा:',
    options: [
      { id: 'a', textEn: '2', textHi: '2' },
      { id: 'b', textEn: '4', textHi: '4' },
      { id: 'c', textEn: '5', textHi: '5' },
      { id: 'd', textEn: '20', textHi: '20' }
    ],
    correctAnswerId: 'c',
    explanationEn: 'Credit Multiplier k = 1 / LRR = 1 / 0.20 = 5.',
    explanationHi: 'साख गुणक k = 1 / LRR = 1 / 0.20 = 5 होता है।'
  },
  {
    id: 'mcq-3',
    category: 'Money',
    questionEn: 'In India, one-rupee notes and all coins are issued by:',
    questionHi: 'भारत में एक रुपये का नोट और सभी सिक्के किसके द्वारा जारी किए जाते हैं?',
    options: [
      { id: 'a', textEn: 'Reserve Bank of India', textHi: 'भारतीय रिज़र्व बैंक' },
      { id: 'b', textEn: 'Ministry of Finance, Govt of India', textHi: 'वित्त मंत्रालय, भारत सरकार' },
      { id: 'c', textEn: 'State Bank of India', textHi: 'भारतीय स्टेट बैंक' },
      { id: 'd', textEn: 'NITI Aayog', textHi: 'नीति आयोग' }
    ],
    correctAnswerId: 'b',
    explanationEn: 'Under the Indian Coinage Act and RBI Act, ₹1 notes and all denomination coins are issued by the Ministry of Finance, Government of India, bearing the signature of the Finance Secretary.',
    explanationHi: 'सिक्का अधिनियम तथा RBI अधिनियम के तहत ₹1 का नोट और सभी सिक्के भारत सरकार के वित्त मंत्रालय द्वारा जारी किए जाते हैं, जिन पर वित्त सचिव के हस्ताक्षर होते हैं।'
  },
  {
    id: 'mcq-4',
    category: 'Money',
    questionEn: 'The indispensable condition for a barter transaction to take place is:',
    questionHi: 'वस्तु विनिमय प्रणाली में विनिमय संपन्न होने की अनिवार्य शर्त क्या है?',
    options: [
      { id: 'a', textEn: 'High-power money', textHi: 'उच्च-शक्ति मुद्रा' },
      { id: 'b', textEn: 'Double coincidence of wants', textHi: 'आवश्यकताओं का दोहरा संयोग' },
      { id: 'c', textEn: 'Presence of a central clearing house', textHi: 'केंद्रीय समाशोधन गृह की उपस्थिति' },
      { id: 'd', textEn: 'A high legal reserve ratio', textHi: 'उच्च विधिक आरक्षित अनुपात' }
    ],
    correctAnswerId: 'b',
    explanationEn: 'A barter transaction requires that both exchanging parties have a mutual desire for each other\'s commodity (double coincidence of wants).',
    explanationHi: 'वस्तु विनिमय तभी संभव है जब दोनों पक्षों के पास वह वस्तु हो जिसकी दूसरे पक्ष को ठीक उसी समय आवश्यकता हो।'
  },
  {
    id: 'mcq-5',
    category: 'Monetary Policy',
    questionEn: 'To combat severe inflation in the economy, the Central Bank should:',
    questionHi: 'अर्थव्यवस्था में तीव्र मुद्रास्फीति (महंगाई) को नियंत्रित करने के लिए केंद्रीय बैंक को क्या करना चाहिए?',
    options: [
      { id: 'a', textEn: 'Decrease the Repo Rate', textHi: 'रेपो दर में कटौती करनी चाहिए' },
      { id: 'b', textEn: 'Purchase securities in the open market', textHi: 'खुले बाजार में सरकारी प्रतिभूतियां खरीदनी चाहिए' },
      { id: 'c', textEn: 'Increase the Cash Reserve Ratio (CRR)', textHi: 'नकद आरक्षित अनुपात (CRR) बढ़ाना चाहिए' },
      { id: 'd', textEn: 'Lower the margin requirements on loans', textHi: 'ऋणों पर सीमांत आवश्यकता घटानी चाहिए' }
    ],
    correctAnswerId: 'c',
    explanationEn: 'Increasing CRR forces commercial banks to park more liquid cash with RBI, shrinking their loanable funds and contracting money supply.',
    explanationHi: 'CRR बढ़ाने से बैंकों को अधिक नकदी RBI के पास अनिवार्य रूप से रखनी पड़ती है, जिससे उनकी ऋण देने की क्षमता घटती है और मुद्रास्फीति नियंत्रित होती है।'
  },
  {
    id: 'mcq-6',
    category: 'Banking',
    questionEn: 'Demand deposits held with commercial banks are characterized as:',
    questionHi: 'व्यावसायिक बैंकों के पास रखी मांग जमाओं (Demand Deposits) की क्या विशेषता है?',
    options: [
      { id: 'a', textEn: 'Non-chequeable and withdrawable only upon maturity', textHi: 'गैर-चेकेबल और केवल परिपक्वता पर आहरणीय' },
      { id: 'b', textEn: 'Chequeable deposits withdrawable on demand', textHi: 'चेकेबल जमाएं जिन्हें मांग पर कभी भी निकाला जा सकता है' },
      { id: 'c', textEn: 'Deposits that earn the highest rate of interest', textHi: 'वे जमाएं जिन पर सर्वाधिक ब्याज दर मिलती है' },
      { id: 'd', textEn: 'Part of M4 but strictly excluded from M1', textHi: 'जो M4 का हिस्सा हैं परंतु M1 से बाहर हैं' }
    ],
    correctAnswerId: 'b',
    explanationEn: 'Demand deposits (Current and Savings accounts) can be withdrawn or transferred via cheques and ATM at any time upon depositor demand.',
    explanationHi: 'मांग जमाओं को जमाकर्ता द्वारा मांग पर कभी भी चेक या एटीएम द्वारा निकाला या हस्तांतरित किया जा सकता है।'
  },
  {
    id: 'mcq-7',
    category: 'Monetary Policy',
    questionEn: 'An increase in the Reverse Repo Rate induces commercial banks to:',
    questionHi: 'रिवर्स रेपो दर में वृद्धि व्यावसायिक बैंकों को किस बात के लिए प्रेरित करती है?',
    options: [
      { id: 'a', textEn: 'Lend more aggressively to high-risk borrowers', textHi: 'जोखिम भरे ग्राहकों को अधिक ऋण देने के लिए' },
      { id: 'b', textEn: 'Park their surplus funds with the Central Bank (RBI)', textHi: 'अपनी अधिशेष निधियों को केंद्रीय बैंक (RBI) के पास सुरक्षित रखने के लिए' },
      { id: 'c', textEn: 'Lower their fixed deposit interest rates to zero', textHi: 'अपनी सावधि जमा ब्याज दरों को शून्य करने के लिए' },
      { id: 'd', textEn: 'Issue physical currency notes to the public', textHi: 'जनता को भौतिक करेंसी नोट जारी करने के लिए' }
    ],
    correctAnswerId: 'b',
    explanationEn: 'A higher Reverse Repo Rate provides a risk-free attractive return for banks to park surplus funds with the RBI, reducing market credit availability.',
    explanationHi: 'उच्च रिवर्स रेपो दर मिलने पर बैंक अपनी अतिरिक्त नकदी जनता को जोखिम में ऋण देने के बजाय सुरक्षित ब्याज हेतु RBI के पास जमा करना पसंद करते हैं।'
  },
  {
    id: 'mcq-8',
    category: 'Money',
    questionEn: 'High-Powered Money (Monetary Base) consists of:',
    questionHi: 'उच्च-शक्ति मुद्रा (मौद्रिक आधार - H) में क्या शामिल होता है?',
    options: [
      { id: 'a', textEn: 'Currency with public + Demand deposits (C + DD)', textHi: 'जनता के पास करेंसी + मांग जमाएं (C + DD)' },
      { id: 'b', textEn: 'Currency with public + Total Bank Cash Reserves (C + R)', textHi: 'जनता के पास करेंसी + बैंकों के कुल आरक्षित कोष (C + R)' },
      { id: 'c', textEn: 'Demand deposits + Time deposits', textHi: 'मांग जमाएं + सावधि जमाएं' },
      { id: 'd', textEn: 'Only the foreign exchange reserves held by RBI', textHi: 'केवल RBI के पास विदेशी मुद्रा भंडार' }
    ],
    correctAnswerId: 'b',
    explanationEn: 'High-powered money H = C + R, where C is currency held by public and R is vault cash and statutory reserves held by banks.',
    explanationHi: 'उच्च-शक्ति मुद्रा H = C + R होती है, जहाँ C जनता के पास करेंसी तथा R बैंकों के कुल आरक्षित नकदी कोष हैं।'
  },
  {
    id: 'mcq-9',
    category: 'Monetary Policy',
    questionEn: 'Which among the following is a Qualitative (Selective) Credit Control tool?',
    questionHi: 'निम्नलिखित में से कौन-सा साख नियंत्रण का गुणात्मक (चयनात्मक) उपकरण है?',
    options: [
      { id: 'a', textEn: 'Bank Rate', textHi: 'बैंक दर' },
      { id: 'b', textEn: 'Open Market Operations (OMO)', textHi: 'खुले बाजार की क्रियाएं' },
      { id: 'c', textEn: 'Margin Requirement', textHi: 'सीमांत आवश्यकता' },
      { id: 'd', textEn: 'Statutory Liquidity Ratio (SLR)', textHi: 'वैधानिक तरलता अनुपात' }
    ],
    correctAnswerId: 'c',
    explanationEn: 'Margin Requirement is a qualitative tool because it directs or restricts the flow of credit to specific sectors without affecting the entire economy.',
    explanationHi: 'सीमांत आवश्यकता गुणात्मक उपकरण है क्योंकि यह पूरी अर्थव्यवस्था को प्रभावित किए बिना चयनित विशिष्ट क्षेत्रों में ऋण प्रवाह को नियंत्रित करता है।'
  },
  {
    id: 'mcq-10',
    category: 'Banking',
    questionEn: 'When a commercial bank grants a loan to a borrower, it typically:',
    questionHi: 'जब कोई व्यावसायिक बैंक किसी उधारकर्ता को ऋण स्वीकृत करता है, तो वह सामान्यतः क्या करता है?',
    options: [
      { id: 'a', textEn: 'Hands over physical bundles of currency notes', textHi: 'भौतिक रूप से नकद नोटों की गड्डियां सौंपता है' },
      { id: 'b', textEn: 'Opens a demand deposit account in borrower’s name and credits the amount', textHi: 'उधारकर्ता के नाम से मांग जमा खाता खोलकर उसमें राशि क्रेडिट करता है' },
      { id: 'c', textEn: 'Requests the Finance Ministry to print fresh notes', textHi: 'वित्त मंत्रालय से नए नोट छापने का अनुरोध करता है' },
      { id: 'd', textEn: 'Liquidates its government securities portfolio', textHi: 'अपने सरकारी बॉन्ड्स को बेच देता है' }
    ],
    correctAnswerId: 'b',
    explanationEn: 'Banks do not hand over cash for loans; they credit a newly created deposit account, which becomes a derivative deposit expanding money supply.',
    explanationHi: 'बैंक ऋण की राशि नकद नहीं सौंपते, बल्कि उधारकर्ता के नाम से जमा खाता खोलकर उसमें राशि क्रेडिट करते हैं, जिससे व्युत्पन्न जमा बनती है।'
  },
  {
    id: 'mcq-11',
    category: 'Money',
    questionEn: 'Fiat Money refers to money that:',
    questionHi: 'आदेश मुद्रा (Fiat Money) से अभिप्राय उस मुद्रा से है जो:',
    options: [
      { id: 'a', textEn: 'Is backed 100% by gold bullion reserves', textHi: '100% स्वर्ण भंडार द्वारा समर्थित होती है' },
      { id: 'b', textEn: 'Circulates under government authority and legal order', textHi: 'सरकारी प्राधिकार और कानूनी आदेश द्वारा संचलन में होती है' },
      { id: 'c', textEn: 'Is accepted solely on the mutual trust between transacting parties', textHi: 'केवल पक्षों के आपसी विश्वास पर आधारित होती है' },
      { id: 'd', textEn: 'Is issued exclusively by international agencies like the IMF', textHi: 'केवल IMF जैसी अंतरराष्ट्रीय संस्थाओं द्वारा जारी होती है' }
    ],
    correctAnswerId: 'b',
    explanationEn: 'Fiat money has no intrinsic value but derives its value from the sovereign decree and backing of the government.',
    explanationHi: 'आदेश मुद्रा का अपना कोई आंतरिक मूल्य नहीं होता, बल्कि यह सरकार के संप्रभु आदेश और कानूनी समर्थन से मान्य होती है।'
  },
  {
    id: 'mcq-12',
    category: 'Credit Creation',
    questionEn: 'If initial primary cash deposits are ₹5,000 and total deposits generated are ₹25,000, the LRR was:',
    questionHi: 'यदि प्राथमिक नकद जमा ₹5,000 है और कुल जमा ₹25,000 बनी है, तो LRR का मान क्या था?',
    options: [
      { id: 'a', textEn: '10%', textHi: '10%' },
      { id: 'b', textEn: '20%', textHi: '20%' },
      { id: 'c', textEn: '25%', textHi: '25%' },
      { id: 'd', textEn: '50%', textHi: '50%' }
    ],
    correctAnswerId: 'b',
    explanationEn: 'Multiplier = Total / Initial = 25,000 / 5,000 = 5. LRR = 1 / Multiplier = 1 / 5 = 20%.',
    explanationHi: 'साख गुणक = कुल जमा / प्राथमिक जमा = 25,000 / 5,000 = 5। अतः LRR = 1 / 5 = 0.20 = 20%।'
  },
  {
    id: 'mcq-13',
    category: 'Central Bank',
    questionEn: 'The Central Bank acts as the "Lender of the Last Resort" because:',
    questionHi: 'केंद्रीय बैंक को "अंतिम ऋणदाता" क्यों कहा जाता है?',
    options: [
      { id: 'a', textEn: 'It was the last bank established in the financial timeline', textHi: 'क्योंकि यह बैंकिंग इतिहास में सबसे अंत में स्थापित हुआ था' },
      { id: 'b', textEn: 'It provides liquidity to commercial banks facing solvency crises when all other avenues fail', textHi: 'क्योंकि अन्य सभी रास्ते बंद होने पर यह संकटग्रस्त बैंकों को तरलता सहायता देकर बचाता है' },
      { id: 'c', textEn: 'It lends only to bankrupt individuals', textHi: 'क्योंकि यह केवल दिवालिया व्यक्तियों को ऋण देता है' },
      { id: 'd', textEn: 'It cannot refuse any personal loan application', textHi: 'क्योंकि यह किसी भी व्यक्तिगत ऋण को अस्वीकार नहीं कर सकता' }
    ],
    correctAnswerId: 'b',
    explanationEn: 'When commercial banks fail to obtain liquidity from the market, RBI steps in as lender of last resort against eligible securities to prevent bank runs.',
    explanationHi: 'जब किसी व्यावसायिक बैंक को बाजार से तरलता नहीं मिल पाती, तो RBI प्रणालीगत संकट रोकने हेतु अंतिम उपाय के रूप में आपात ऋण देता है।'
  },
  {
    id: 'mcq-14',
    category: 'Money',
    questionEn: 'Which measure of money supply is popularly referred to as "Broad Money"?',
    questionHi: 'भारत में मुद्रा आपूर्ति के किस माप को "व्यापक मुद्रा" (Broad Money) कहा जाता है?',
    options: [
      { id: 'a', textEn: 'M1', textHi: 'M1' },
      { id: 'b', textEn: 'M2', textHi: 'M2' },
      { id: 'c', textEn: 'M3', textHi: 'M3' },
      { id: 'd', textEn: 'M4', textHi: 'M4' }
    ],
    correctAnswerId: 'c',
    explanationEn: 'M3 is termed Broad Money because it accounts for both liquid cash/demand deposits and large term (time) deposits with banks.',
    explanationHi: 'M3 को व्यापक मुद्रा कहा जाता है क्योंकि इसमें तरल नकदी और मांग जमाओं के साथ-साथ व्यावसायिक बैंकों की सावधि (Fixed) जमाएं भी शामिल होती हैं।'
  },
  {
    id: 'mcq-15',
    category: 'Central Bank',
    questionEn: 'The Reserve Bank of India was officially established in which year?',
    questionHi: 'भारतीय रिज़र्व बैंक (RBI) की आधिकारिक स्थापना किस वर्ष हुई थी?',
    options: [
      { id: 'a', textEn: '1947', textHi: '1947' },
      { id: 'b', textEn: '1950', textHi: '1950' },
      { id: 'c', textEn: '1935', textHi: '1935' },
      { id: 'd', textEn: '1949', textHi: '1949' }
    ],
    correctAnswerId: 'c',
    explanationEn: 'RBI was established on April 1, 1935, under the Reserve Bank of India Act, 1934, and was nationalized on January 1, 1949.',
    explanationHi: 'RBI की स्थापना 1 अप्रैल 1935 को RBI अधिनियम 1934 के तहत हुई थी, तथा 1 जनवरी 1949 को इसका राष्ट्रीयकरण हुआ।'
  },
  {
    id: 'mcq-16',
    category: 'Money',
    questionEn: 'Which primary function of money directly resolved the fundamental friction of "Double Coincidence of Wants"?',
    questionHi: 'मुद्रा के किस प्राथमिक कार्य ने "आवश्यकताओं के दोहरे संयोग" की मूल समस्या का सीधा समाधान किया?',
    options: [
      { id: 'a', textEn: 'Medium of Exchange', textHi: 'विनिमय का माध्यम' },
      { id: 'b', textEn: 'Store of Value', textHi: 'मूल्य का संचय' },
      { id: 'c', textEn: 'Standard of Deferred Payment', textHi: 'स्थगित भुगतानों का मान' },
      { id: 'd', textEn: 'Distribution of National Income', textHi: 'राष्ट्रीय आय का वितरण' }
    ],
    correctAnswerId: 'a',
    explanationEn: 'By serving as a common Medium of Exchange, money separated the act of sale from purchase, eliminating the need for coincidental wants.',
    explanationHi: 'विनिमय का माध्यम बनकर मुद्रा ने क्रय और विक्रय को दो अलग चरणों में बांट दिया, जिससे दोहरे संयोग की अनिवार्यता समाप्त हो गई।'
  },
  {
    id: 'mcq-17',
    category: 'Monetary Policy',
    questionEn: 'During an economic slowdown (Deflation / Deficient Demand), RBI will:',
    questionHi: 'आर्थिक मंदी या न्यून मांग (Deflation) के समय RBI क्या करेगा?',
    options: [
      { id: 'a', textEn: 'Increase the Repo Rate and SLR', textHi: 'रेपो दर और SLR को बढ़ाएगा' },
      { id: 'b', textEn: 'Sell government securities in OMO', textHi: 'खुले बाजार में सरकारी प्रतिभूतियां बेचेगा' },
      { id: 'c', textEn: 'Reduce the Repo Rate and CRR', textHi: 'रेपो दर और CRR में कटौती करेगा' },
      { id: 'd', textEn: 'Increase the Margin Requirement on bank loans', textHi: 'बैंक ऋणों पर सीमांत आवश्यकता बढ़ाएगा' }
    ],
    correctAnswerId: 'c',
    explanationEn: 'Slashing policy rates (Repo) and reserve requirements injects liquidity into the banking system, lowering borrowing costs to stimulate aggregate demand.',
    explanationHi: 'रेपो दर और CRR में कटौती करने से ऋण सस्ते होते हैं, बैंकों के पास अधिक नकदी आती है और अर्थव्यवस्था में मांग बढ़ती है।'
  },
  {
    id: 'mcq-18',
    category: 'Banking',
    questionEn: 'What happens to the credit creation capacity of commercial banks if people start holding more cash at home instead of depositing in banks?',
    questionHi: 'यदि लोग बैंकों में जमा करने के बजाय घरों में अधिक नकदी रखने लगें, तो व्यावसायिक बैंकों की साख निर्माण क्षमता पर क्या प्रभाव पड़ेगा?',
    options: [
      { id: 'a', textEn: 'It increases significantly', textHi: 'यह काफी बढ़ जाएगी' },
      { id: 'b', textEn: 'It decreases because primary cash deposits shrink', textHi: 'यह घट जाएगी क्योंकि प्राथमिक नकद जमाएं घट जाएंगी' },
      { id: 'c', textEn: 'It remains unaffected', textHi: 'इस पर कोई प्रभाव नहीं पड़ेगा' },
      { id: 'd', textEn: 'Credit multiplier doubles', textHi: 'साख गुणक दोगुना हो जाएगा' }
    ],
    correctAnswerId: 'b',
    explanationEn: 'Primary deposits form the seed/base for credit multiplier expansion. If currency drainage occurs, primary reserves decline, curtailing secondary credit creation.',
    explanationHi: 'प्राथमिक जमाएं ही साख निर्माण का आधार हैं। यदि जनता नकदी अपने पास रखेगी, तो बैंकों की प्राथमिक जमाएं घटेंगी जिससे कुल साख निर्माण घट जाएगा।'
  },
  {
    id: 'mcq-19',
    category: 'Monetary Policy',
    questionEn: 'The difference between Repo Rate and Bank Rate is that Repo Rate is charged on:',
    questionHi: 'रेपो दर और बैंक दर के बीच मुख्य अंतर यह है कि रेपो दर किस पर ली जाती है?',
    options: [
      { id: 'a', textEn: 'Long-term unsecured loans', textHi: 'दीर्घकालिक असुरक्षित ऋणों पर' },
      { id: 'b', textEn: 'Short-term lending against collateral of government securities', textHi: 'सरकारी प्रतिभूतियों के बंधक पर अल्पकालिक ऋणों पर' },
      { id: 'c', textEn: 'Loans given exclusively to foreign nations', textHi: 'केवल विदेशी राष्ट्रों को दिए जाने वाले ऋणों पर' },
      { id: 'd', textEn: 'Commercial bank deposits kept with the public', textHi: 'जनता के पास रखी बैंक जमाओं पर' }
    ],
    correctAnswerId: 'b',
    explanationEn: 'Repo is a short-term collateralized lending rate, whereas Bank Rate is a long-term rate without collateral securities.',
    explanationHi: 'रेपो दर अल्पकालिक ऋणों के लिए प्रतिभूतियों के बदले होती है, जबकि बैंक दर बिना प्रतिभूति के दीर्घकालिक ऋणों पर लगती है।'
  },
  {
    id: 'mcq-20',
    category: 'Central Bank',
    questionEn: 'Which function enables RBI to settle interbank claims using simple book accounting entries without physical cash transfers?',
    questionHi: 'कौन-सा कार्य RBI को बिना किसी भौतिक नकदी हस्तांतरण के बैंकों के आपसी दावों को साधारण बही प्रविष्टियों द्वारा निपटाने में सक्षम बनाता है?',
    options: [
      { id: 'a', textEn: 'Bank of Issue', textHi: 'करेंसी प्राधिकरण' },
      { id: 'b', textEn: 'Clearing House Function', textHi: 'समाशोधन गृह कार्य' },
      { id: 'c', textEn: 'Custodian of Foreign Exchange', textHi: 'विदेशी मुद्रा का संरक्षक' },
      { id: 'd', textEn: 'Credit Rationing', textHi: 'साख की राशनिंग' }
    ],
    correctAnswerId: 'b',
    explanationEn: 'As the clearing house, RBI holds the accounts of all commercial banks and offsets debit/credit claims between them internally via book entries.',
    explanationHi: 'समाशोधन गृह के रूप में सभी बैंकों के खाते RBI के पास होते हैं, जिससे वह बैंकों के आपसी चेकों का निपटारा केवल खातों में नाम/जमा करके कर देता है।'
  }
];

export const MONEY_AND_BANKING_ASSERTION_REASON: AssertionReasonQuestion[] = [
  {
    id: 'ar-1',
    assertionEn: 'Commercial banks cannot print and issue legal tender currency notes.',
    assertionHi: 'व्यावसायिक बैंक देश में कानूनी कागजी नोट छापकर जारी नहीं कर सकते।',
    reasonEn: 'The sole monopoly and legal authority to issue currency notes rests exclusively with the Central Bank of the country.',
    reasonHi: 'नोट जारी करने का एकमात्र कानूनी एकाधिकार देश के केंद्रीय बैंक (RBI) के पास होता है।',
    correctOption: 'A',
    explanation: 'Both statements are factually correct, and Reason R provides the exact statutory rationale for Assertion A.'
  },
  {
    id: 'ar-2',
    assertionEn: 'An increase in the Legal Reserve Ratio (LRR) contracts the credit creation capability of commercial banks.',
    assertionHi: 'विधिक आरक्षित अनुपात (LRR) में वृद्धि व्यावसायिक बैंकों की साख निर्माण क्षमता को संकुचित कर देती है।',
    reasonEn: 'There exists a direct and positive mathematical relationship between the credit multiplier and the Legal Reserve Ratio.',
    reasonHi: 'साख गुणक और विधिक आरक्षित अनुपात के बीच सीधा और धनात्मक संबंध होता है।',
    correctOption: 'C',
    explanation: 'Assertion A is correct, but Reason R is false because the credit multiplier is inversely related to LRR (k = 1 / LRR).'
  },
  {
    id: 'ar-3',
    assertionEn: 'Cash held by the Government and Commercial Banks is excluded from the measurement of Money Supply.',
    assertionHi: 'सरकार और व्यावसायिक बैंकों के पास रखी नकदी को मुद्रा की पूर्ति के माप में शामिल नहीं किया जाता।',
    reasonEn: 'The Government and the Banking System are the creators and suppliers of money, not the consuming public.',
    reasonHi: 'सरकार और बैंकिंग तंत्र मुद्रा के निर्माता व आपूर्तिकर्ता हैं, उपभोक्ता जनता नहीं।',
    correctOption: 'A',
    explanation: 'Producers’ inventory of cash is never counted in supply available to the economy; only money held by the spending public is counted.'
  },
  {
    id: 'ar-4',
    assertionEn: 'During demand-pull inflation, the Central Bank aggressively purchases government securities in the open market.',
    assertionHi: 'मुद्रास्फीति (महंगाई) के समय केंद्रीय बैंक खुले बाजार में तेजी से सरकारी प्रतिभूतियां खरीदता है।',
    reasonEn: 'Purchasing government securities injects additional liquidity and purchasing power into the commercial banking system.',
    reasonHi: 'सरकारी प्रतिभूतियां खरीदने से बैंकिंग तंत्र में अतिरिक्त तरलता और क्रय शक्ति का संचार होता है।',
    correctOption: 'D',
    explanation: 'Assertion A is false because during inflation, RBI SELLS securities to absorb liquidity. Reason R is true as a standalone statement.'
  },
  {
    id: 'ar-5',
    assertionEn: 'Cheques and demand drafts drawn on bank accounts are classified as unlimited legal tender in India.',
    assertionHi: 'बैंक खातों पर काटे गए चेक और डिमांड ड्राफ्ट भारत में असीमित वैध मुद्रा के रूप में वर्गीकृत हैं।',
    reasonEn: 'Any creditor is legally bound by statute to accept a bank cheque for settlement of contractual debt obligations.',
    reasonHi: 'कोई भी लेनदार संविदात्मक ऋणों के भुगतान हेतु बैंक चेक स्वीकार करने के लिए कानूनन बाध्य है।',
    correctOption: 'D',
    explanation: 'Both Assertion and Reason are false. Cheques are Fiduciary Money, not Legal Tender. A payee can legally refuse a cheque and insist on cash.'
  }
];

export const MONEY_AND_BANKING_CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-1',
    title: 'RBI Monetary Policy Committee (MPC) Rate Hike Cycle',
    sourceContext: 'Source: RBI Monetary Policy Statements & Economic Survey 2022-23',
    caseText: 'In May 2022, following geopolitical conflicts, global crude oil shocks, and supply chain disruptions, India\'s Consumer Price Index (CPI) inflation breached the RBI\'s upper tolerance threshold of 6% to hit 7.79%. In an extraordinary unscheduled off-cycle meeting, the Monetary Policy Committee (MPC) unanimously hiked the benchmark policy Repo Rate by 40 basis points to 4.40%, followed by subsequent hikes taking it to 6.50%. Simultaneously, the Cash Reserve Ratio (CRR) was increased by 50 basis points from 4.0% to 4.50%, mopping up approximately ₹87,000 crore of surplus liquidity from the commercial banking system.',
    questions: [
      {
        id: 'q1',
        question: 'Identify the primary macroeconomic objective behind RBI\'s decision to hike the Repo Rate and CRR simultaneously.',
        answer: 'The primary objective was to control mounting retail inflation (CPI inflation) by curbing excess liquidity and raising the cost of borrowing for commercial banks, thereby moderating aggregate demand in the economy.',
        marks: 2
      },
      {
        id: 'q2',
        question: 'Explain the transmission mechanism through which a 50 bps hike in CRR impacts the credit creation capacity of commercial banks.',
        answer: 'A hike in CRR mandates commercial banks to lock away a larger fraction of their Net Demand and Time Liabilities (NDTL) as idle cash with the RBI. This reduces their excess loanable reserves (in this case by ₹87,000 crore), leading to a multiple contraction in secondary deposit/credit creation via the credit multiplier (k = 1/LRR).',
        marks: 2
      },
      {
        id: 'q3',
        question: 'If the economy were in a recessionary slump with deflation, what policy stance would the MPC have adopted regarding Repo Rate and CRR?',
        answer: 'During a recession, the MPC would adopt an accommodative/dovish stance by cutting the Repo Rate and reducing CRR to inject liquidity, cheapen consumer loans, and stimulate investment and consumption expenditure.',
        marks: 2
      }
    ]
  },
  {
    id: 'case-2',
    title: 'Digital Transactions and the Credit Multiplier in the UPI Era',
    sourceContext: 'Source: National Payments Corporation of India (NPCI) & RBI Bulletins',
    caseText: 'With the exponential adoption of the Unified Payments Interface (UPI) and mobile banking in India, physical cash withdrawals from bank accounts have substantially decreased relative to total transaction volumes. People and merchants now keep a higher fraction of their financial assets in digital bank accounts rather than holding cash in physical wallets. Financial analysts observe that this reduction in the currency-deposit ratio (cash leakages) has significant implications for commercial bank credit expansion.',
    questions: [
      {
        id: 'c2-q1',
        question: 'State the foundational assumption of the bank credit creation model that is strengthened by widespread digital payments.',
        answer: 'The assumption that "all financial transactions in the economy are routed through the banking system (all payments made via cheque/digital transfers)" is greatly strengthened by digital payments and UPI.',
        marks: 2
      },
      {
        id: 'c2-q2',
        question: 'Explain why a decrease in physical cash leakage (lower currency drain) enhances the effective credit creation capacity of the banking system.',
        answer: 'When individuals retain funds in bank deposits rather than withdrawing physical currency, money lent out returns immediately into the banking system as new secondary deposits in each round without leakage. This maximizes the deposit multiplication process up to the theoretical limit (1/LRR).',
        marks: 2
      }
    ]
  }
];
