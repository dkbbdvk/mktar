import React, { useState } from 'react';
import { Landmark, Building2, Users, Shield, Award, CheckCircle2, ChevronDown, ChevronRight, Info } from 'lucide-react';

interface BankNodeInfo {
  id: string;
  nameEn: string;
  nameHi: string;
  category: string;
  descriptionHi: string;
  examples: string[];
  crrSlrStatus: string;
  roleInCredit: string;
  regulatoryAct: string;
}

const BANKING_NODES: Record<string, BankNodeInfo> = {
  rbi: {
    id: 'rbi',
    nameEn: 'Reserve Bank of India (RBI)',
    nameHi: 'भारतीय रिज़र्व बैंक (केंद्रीय बैंक)',
    category: 'Apex Authority (शीर्ष संस्थान)',
    descriptionHi: 'संपूर्ण मौद्रिक, मुद्रा और वित्तीय प्रणाली का सर्वोच्च नियामक संस्थान। यह लाभ के लिए नहीं, बल्कि राष्ट्रीय आर्थिक कल्याण और मौद्रिक स्थिरता के लिए कार्य करता है।',
    examples: ['मुख्यालय: मुंबई', 'स्थापना: 1 अप्रैल 1935', 'राष्ट्रीयकरण: 1949'],
    crrSlrStatus: 'CRR और SLR की दरें निर्धारित करता है तथा बैंकों की आरक्षित नकदी रखता है।',
    roleInCredit: 'साख का सर्वोच्च नियंत्रक (Controller of Credit)। यह रेपो रेट, बैंक रेट और CRR के जरिए पूरी साख क्षमता तय करता है।',
    regulatoryAct: 'Reserve Bank of India Act, 1934'
  },
  psb: {
    id: 'psb',
    nameEn: 'Public Sector Commercial Banks',
    nameHi: 'सार्वजनिक क्षेत्र के बैंक',
    category: 'Scheduled Commercial Banks (SCBs)',
    descriptionHi: 'वे व्यावसायिक बैंक जिनमें भारत सरकार की हिस्सेदारी 50% से अधिक होती है। ये देश में वित्तीय समावेशन और प्राथमिक क्षेत्र ऋण (Priority Sector Lending) में अग्रणी हैं।',
    examples: ['भारतीय स्टेट बैंक (SBI)', 'पंजाब नेशनल बैंक (PNB)', 'बैंक ऑफ बड़ौदा (BoB)', 'केनरा बैंक'],
    crrSlrStatus: 'RBI के निर्देशानुसार 100% CRR और SLR बनाए रखना अनिवार्य।',
    roleInCredit: 'देश में प्राथमिक जमाओं का सबसे बड़ा आधार और कुल साख का 60%+ भाग सृजित करते हैं।',
    regulatoryAct: 'Banking Companies (Acquisition and Transfer of Undertakings) Act, 1970/1980'
  },
  pvtb: {
    id: 'pvtb',
    nameEn: 'Private Sector Commercial Banks',
    nameHi: 'निजी क्षेत्र के बैंक',
    category: 'Scheduled Commercial Banks (SCBs)',
    descriptionHi: 'वे बैंक जिनमें अधिकांश शेयर पूंजी निजी निवेशकों या कॉर्पोरेट्स के पास होती है। ये आधुनिक डिजिटल तकनीक, ग्राहक सेवा और कुशल साख प्रबंधन के लिए जाने जाते हैं।',
    examples: ['HDFC Bank', 'ICICI Bank', 'Axis Bank', 'Kotak Mahindra Bank'],
    crrSlrStatus: 'समान रूप से CRR और SLR के नियमों के अधीन।',
    roleInCredit: 'तेज गति से खुदरा (Retail) और कॉर्पोरेट साख निर्माण में अग्रणी।',
    regulatoryAct: 'Banking Regulation Act, 1949'
  },
  rrb: {
    id: 'rrb',
    nameEn: 'Regional Rural Banks (RRBs)',
    nameHi: 'क्षेत्रीय ग्रामीण बैंक',
    category: 'Scheduled Commercial Banks (SCBs)',
    descriptionHi: 'ग्रामीण अर्थव्यवस्था में छोटे और सीमांत किसानों, खेतिहर मजदूरों और ग्रामीण कारीगरों को संस्थागत साख प्रदान करने के लिए स्थापित विशेष बैंक।',
    examples: ['आर्यावर्त बैंक', 'प्रथमा यूपी ग्रामीण बैंक', 'केरल ग्रामीण बैंक'],
    crrSlrStatus: 'RBI और NABARD के नियामक दिशा-निर्देशों का पालन।',
    roleInCredit: 'ग्रामीण साख और कृषि प्राथमिक जमाओं के आधार पर स्थानीय ऋण सृजन।',
    regulatoryAct: 'Regional Rural Banks Act, 1976'
  },
  fb: {
    id: 'fb',
    nameEn: 'Foreign Banks in India',
    nameHi: 'विदेशी बैंक',
    category: 'Scheduled Commercial Banks (SCBs)',
    descriptionHi: 'वे बैंक जो विदेशों में निगमित हैं परंतु भारत में अपनी शाखाओं या पूर्ण स्वामित्व वाली सहायक कंपनियों (WOS) के माध्यम से कार्य करते हैं।',
    examples: ['Citibank', 'Standard Chartered Bank', 'HSBC', 'Deutsche Bank'],
    crrSlrStatus: 'भारतीय परिचालन पर समान CRR और SLR लागू।',
    roleInCredit: 'अंतरराष्ट्रीय व्यापार वित्त (Trade Finance) और बहुराष्ट्रीय कंपनियों को साख देना।',
    regulatoryAct: 'Banking Regulation Act, 1949 & FEMA'
  },
  coop: {
    id: 'coop',
    nameEn: 'Cooperative Banking Structure',
    nameHi: 'सहकारी बैंकिंग संरचना',
    category: 'Cooperative Institutions (सहकारी बैंक)',
    descriptionHi: '"एक सबके लिए और सब एक के लिए" के सिद्धांत पर आधारित बैंक। यह शहरी सहकारी बैंक (UCBs) और त्रिस्तरीय ग्रामीण सहकारी साख (राज्य, जिला व प्राथमिक साख समितियां) में विभाजित है।',
    examples: ['शहरी सहकारी बैंक (UCBs)', 'जिला केंद्रीय सहकारी बैंक (DCCB)', 'PACS'],
    crrSlrStatus: 'RBI और राज्य सहकारिता पंजीयक द्वारा दोहरा विनियमन (Dual Regulation)।',
    roleInCredit: 'स्थानीय स्तर पर सहकारिता आधारित लघु साख निर्माण।',
    regulatoryAct: 'State Cooperative Societies Acts & Banking Regulation Act'
  }
};

export const BankingArchitecture: React.FC = () => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('rbi');
  const selectedNode = BANKING_NODES[selectedNodeId] || BANKING_NODES['rbi'];

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
        <div>
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
            संस्थागत रूपरेखा (Institutional Hierarchy)
          </span>
          <h3 className="font-heading font-bold text-2xl text-slate-900 mt-1">
            भारतीय बैंकिंग प्रणाली की दृश्य संरचना (Structure of Indian Banking System)
          </h3>
          <p className="text-xs md:text-sm text-slate-500 mt-1">
            शीर्ष नियामक RBI से लेकर व्यावसायिक और सहकारी बैंकों तक का पूर्ण पदानुक्रम
          </p>
        </div>
        <div className="text-xs px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 font-semibold border border-blue-200 self-start md:self-auto">
          क्लिक करके विवरण देखें
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Interactive Tree Map (Left 7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Level 1: Apex Central Bank */}
          <div className="flex justify-center">
            <button
              onClick={() => setSelectedNodeId('rbi')}
              className={`w-full max-w-md p-4 rounded-2xl text-center transition-all duration-200 shadow-md border-2 ${
                selectedNodeId === 'rbi'
                  ? 'bg-blue-900 text-white border-blue-600 scale-[1.02] shadow-blue-900/20'
                  : 'bg-slate-900 text-white border-slate-800 hover:border-blue-400'
              }`}
            >
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-500/30 text-blue-200 text-[11px] font-bold uppercase mb-1">
                <Landmark className="w-3.5 h-3.5" /> Apex Monetary Authority
              </div>
              <h4 className="font-heading font-extrabold text-lg">भारतीय रिज़र्व बैंक (RBI)</h4>
              <p className="text-xs text-blue-100 mt-1">देश का केंद्रीय बैंक • मुद्रा प्राधिकारी • साख का नियंत्रक</p>
            </button>
          </div>

          {/* Connection Lines */}
          <div className="flex justify-center -my-2">
            <div className="w-0.5 h-6 bg-slate-300" />
          </div>

          <div className="relative">
            <div className="absolute top-0 left-1/4 right-1/4 h-0.5 bg-slate-300" />
            <div className="grid grid-cols-2 gap-4 pt-4">
              {/* Branch 1: Commercial Banks */}
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-xl border border-blue-200 text-center">
                  <div className="text-xs font-bold text-blue-900 uppercase">
                    व्यावसायिक बैंक (Commercial Banks)
                  </div>
                  <div className="text-[11px] text-blue-700">लाभ के उद्देश्य से साख निर्माण</div>
                </div>

                <div className="space-y-2 pl-2 border-l-2 border-blue-200">
                  <button
                    onClick={() => setSelectedNodeId('psb')}
                    className={`w-full p-2.5 rounded-xl text-left text-xs transition border ${
                      selectedNodeId === 'psb'
                        ? 'bg-blue-600 text-white font-bold border-blue-600 shadow-sm'
                        : 'bg-white text-slate-800 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    1. सार्वजनिक क्षेत्र के बैंक (PSBs)
                    <div className={selectedNodeId === 'psb' ? 'text-blue-100 text-[10px]' : 'text-slate-500 text-[10px]'}>
                      उदा. SBI, PNB, BoB
                    </div>
                  </button>

                  <button
                    onClick={() => setSelectedNodeId('pvtb')}
                    className={`w-full p-2.5 rounded-xl text-left text-xs transition border ${
                      selectedNodeId === 'pvtb'
                        ? 'bg-blue-600 text-white font-bold border-blue-600 shadow-sm'
                        : 'bg-white text-slate-800 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    2. निजी क्षेत्र के बैंक (Private Banks)
                    <div className={selectedNodeId === 'pvtb' ? 'text-blue-100 text-[10px]' : 'text-slate-500 text-[10px]'}>
                      उदा. HDFC, ICICI, Axis
                    </div>
                  </button>

                  <button
                    onClick={() => setSelectedNodeId('rrb')}
                    className={`w-full p-2.5 rounded-xl text-left text-xs transition border ${
                      selectedNodeId === 'rrb'
                        ? 'bg-blue-600 text-white font-bold border-blue-600 shadow-sm'
                        : 'bg-white text-slate-800 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    3. क्षेत्रीय ग्रामीण बैंक (RRBs)
                    <div className={selectedNodeId === 'rrb' ? 'text-blue-100 text-[10px]' : 'text-slate-500 text-[10px]'}>
                      कृषि एवं ग्रामीण साख हेतु
                    </div>
                  </button>

                  <button
                    onClick={() => setSelectedNodeId('fb')}
                    className={`w-full p-2.5 rounded-xl text-left text-xs transition border ${
                      selectedNodeId === 'fb'
                        ? 'bg-blue-600 text-white font-bold border-blue-600 shadow-sm'
                        : 'bg-white text-slate-800 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    4. विदेशी बैंक (Foreign Banks)
                    <div className={selectedNodeId === 'fb' ? 'text-blue-100 text-[10px]' : 'text-slate-500 text-[10px]'}>
                      उदा. Citibank, HSBC
                    </div>
                  </button>
                </div>
              </div>

              {/* Branch 2: Cooperative Banks */}
              <div className="space-y-3">
                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-center">
                  <div className="text-xs font-bold text-emerald-900 uppercase">
                    सहकारी बैंक (Cooperative Banks)
                  </div>
                  <div className="text-[11px] text-emerald-700">पारस्परिक सहयोग के सिद्धांत पर</div>
                </div>

                <div className="space-y-2 pl-2 border-l-2 border-emerald-200">
                  <button
                    onClick={() => setSelectedNodeId('coop')}
                    className={`w-full p-3 rounded-xl text-left text-xs transition border ${
                      selectedNodeId === 'coop'
                        ? 'bg-emerald-700 text-white font-bold border-emerald-700 shadow-sm'
                        : 'bg-white text-slate-800 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    शहरी एवं ग्रामीण सहकारी बैंक
                    <div className={selectedNodeId === 'coop' ? 'text-emerald-100 text-[10px]' : 'text-slate-500 text-[10px]'}>
                      शहरी सहकारी (UCBs) व त्रिस्तरीय ग्रामीण साख
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Selected Node Inspector Details (Right 5 cols) */}
        <div className="lg:col-span-5 bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <div>
              <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider">
                {selectedNode.category}
              </span>
              <h4 className="font-heading font-extrabold text-xl text-slate-900">
                {selectedNode.nameHi}
              </h4>
              <div className="text-xs text-slate-500">{selectedNode.nameEn}</div>
            </div>
            <Award className="w-8 h-8 text-blue-600" />
          </div>

          <p className="text-sm text-slate-700 leading-relaxed">
            {selectedNode.descriptionHi}
          </p>

          <div className="space-y-3 pt-2 text-xs">
            <div className="p-3 bg-white rounded-xl border border-slate-200">
              <span className="font-bold text-slate-900 block mb-1">साख निर्माण में भूमिका (Role in Credit):</span>
              <span className="text-slate-600">{selectedNode.roleInCredit}</span>
            </div>

            <div className="p-3 bg-white rounded-xl border border-slate-200">
              <span className="font-bold text-slate-900 block mb-1">आरक्षित नकदी अनिवार्यता (CRR / SLR):</span>
              <span className="text-slate-600">{selectedNode.crrSlrStatus}</span>
            </div>

            <div className="p-3 bg-white rounded-xl border border-slate-200">
              <span className="font-bold text-slate-900 block mb-1">प्रमुख उदाहरण / तथ्य:</span>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {selectedNode.examples.map((ex, i) => (
                  <span key={i} className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-medium text-[11px]">
                    {ex}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-[11px] text-slate-400 italic">
              विनियमन कानून: {selectedNode.regulatoryAct}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
