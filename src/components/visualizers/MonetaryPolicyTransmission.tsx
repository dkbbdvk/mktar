import React, { useState } from 'react';
import { Sliders, ArrowRight, TrendingUp, TrendingDown, ShieldAlert, CheckCircle2, RotateCcw } from 'lucide-react';

export const MonetaryPolicyTransmission: React.FC = () => {
  const [scenario, setScenario] = useState<'inflation' | 'deflation'>('inflation');
  const [activeStep, setActiveStep] = useState<number>(0);

  const stepsInflation = [
    {
      stage: 'चरण 1: केंद्रीय बैंक का नीतिगत कदम (Policy Action)',
      title: 'RBI ने रेपो दर (Repo Rate) और CRR बढ़ाया',
      detail: 'RBI की मौद्रिक नीति समिति (MPC) ने बढ़ती महंगाई (जैसे CPI > 6%) को रोकने के लिए रेपो दर में वृद्धि की और खुले बाजार में सरकारी प्रतिभूतियां बेचीं।',
      icon: TrendingUp,
      statusColor: 'text-amber-600 bg-amber-50 border-amber-200'
    },
    {
      stage: 'चरण 2: व्यावसायिक बैंकों पर प्रभाव (Commercial Banks)',
      title: 'बैंकों के लिए उधारी लागत और ब्याज दरों में वृद्धि',
      detail: 'व्यावसायिक बैंकों के लिए RBI से अल्पकालिक उधारी महंगी हो गई। बैंकों ने अपनी निधियों की लागत बचाने के लिए तुरंत अपनी खुदरा ऋण दरें (MCLR/EBLR) बढ़ा दीं।',
      icon: Sliders,
      statusColor: 'text-blue-600 bg-blue-50 border-blue-200'
    },
    {
      stage: 'चरण 3: जनता और व्यवसायों का व्यवहार (Public & Firms)',
      title: 'ऋण की मांग में गिरावट (Drop in Borrowing)',
      detail: 'होम लोन, कार लोन और औद्योगिक ऋणों की EMI महंगी होने से आम जनता ने वाहन व मकान की खरीदारी स्थगित की और कॉर्पोरेट्स ने नए संयंत्र लगाना धीमा किया।',
      icon: TrendingDown,
      statusColor: 'text-indigo-600 bg-indigo-50 border-indigo-200'
    },
    {
      stage: 'चरण 4: समष्टि आर्थिक स्तर पर प्रभाव (Macro Aggregate Demand)',
      title: 'अर्थव्यवस्था में समग्र मांग (AD) में संकुचन',
      detail: 'उपभोग व्यय (C) और निवेश व्यय (I) घटने से देश में कुल वस्तुओं और सेवाओं की खरीद (Aggregate Demand) में गिरावट आई।',
      icon: TrendingDown,
      statusColor: 'text-purple-600 bg-purple-50 border-purple-200'
    },
    {
      stage: 'चरण 5: अंतिम परिणाम (Final Price Stability Outcome)',
      title: 'अतिरेक मांग समाप्त, महंगाई पर नियंत्रण!',
      detail: 'बाजार में खरीदारों की संख्या सीमित होने से विक्रेताओं ने मनमाने दाम बढ़ाना बंद किया। मुद्रास्फीति घटकर RBI के लक्षित 4% बैंड में वापस आ गई।',
      icon: CheckCircle2,
      statusColor: 'text-emerald-600 bg-emerald-50 border-emerald-200'
    }
  ];

  const stepsDeflation = [
    {
      stage: 'चरण 1: केंद्रीय बैंक का नीतिगत कदम (Policy Action)',
      title: 'RBI ने रेपो दर (Repo Rate) घटाई और CRR कम किया',
      detail: 'आर्थिक मंदी या सुस्ती से उबरने के लिए RBI ने रेपो दर काटी और खुले बाजार में बैंकों से प्रतिभूतियां खरीदकर तरलता पंप की।',
      icon: TrendingDown,
      statusColor: 'text-blue-600 bg-blue-50 border-blue-200'
    },
    {
      stage: 'चरण 2: व्यावसायिक बैंकों पर प्रभाव (Commercial Banks)',
      title: 'सस्ती उधारी और प्रचुर ऋण योग्य तरलता',
      detail: 'बैंकों को सस्ता कोष मिला और उनके पास ऋण देने के लिए लाखों करोड़ की अतिरिक्त नकदी उपलब्ध हो गई। बैंकों ने होम लोन और बिजनेस लोन की ब्याज दरें घटाईं।',
      icon: Sliders,
      statusColor: 'text-cyan-600 bg-cyan-50 border-cyan-200'
    },
    {
      stage: 'चरण 3: जनता और व्यवसायों का व्यवहार (Public & Firms)',
      title: 'उधारी और निवेश में तीव्र वृद्धि',
      detail: 'सस्ते ऋणों का लाभ उठाने के लिए लोगों ने नए घर, गाड़ियां खरीदीं और उद्यमियों ने नई फैक्ट्रियां लगाने के लिए बैंक साख का उपभोग किया।',
      icon: TrendingUp,
      statusColor: 'text-emerald-600 bg-emerald-50 border-emerald-200'
    },
    {
      stage: 'चरण 4: समष्टि आर्थिक स्तर पर प्रभाव (Macro Aggregate Demand)',
      title: 'समग्र मांग (AD) में उछाल और उत्पादन वृद्धि',
      detail: 'उपभोग और निवेश में वृद्धि से कारखानों में उत्पादन बढ़ा, नए रोजगार सृजित हुए और अर्थव्यवस्था मंदी के चक्र से बाहर निकल आई।',
      icon: TrendingUp,
      statusColor: 'text-indigo-600 bg-indigo-50 border-indigo-200'
    },
    {
      stage: 'चरण 5: अंतिम परिणाम (Final Economic Revival)',
      title: 'मंदी समाप्त, पूर्ण रोजगार व आर्थिक संवृद्धि!',
      detail: 'आर्थिक चक्र पुनः गतिशील हो गया और राष्ट्रीय आय तथा GDP में स्वस्थ वृद्धि दर्ज की गई।',
      icon: CheckCircle2,
      statusColor: 'text-emerald-600 bg-emerald-50 border-emerald-200'
    }
  ];

  const currentSteps = scenario === 'inflation' ? stepsInflation : stepsDeflation;

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
      {/* Header with Scenario Switcher */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
        <div>
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
            नीतिगत संचरण प्रणाली (Policy Transmission Simulator)
          </span>
          <h3 className="font-heading font-bold text-2xl text-slate-900 mt-1">
            मौद्रिक नीति संचरण तंत्र (Monetary Policy Transmission Mechanism)
          </h3>
          <p className="text-xs md:text-sm text-slate-500 mt-1">
            देखें कि RBI के एक दर बदलाव का अर्थव्यवस्था के हर स्तर पर चरणबद्ध क्या प्रभाव पड़ता है
          </p>
        </div>

        {/* Toggle Pills */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl self-start md:self-auto border border-slate-200">
          <button
            onClick={() => {
              setScenario('inflation');
              setActiveStep(0);
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
              scenario === 'inflation'
                ? 'bg-rose-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <ShieldAlert className="w-3.5 h-3.5" /> मुद्रास्फीति / महंगाई (Inflation)
          </button>
          <button
            onClick={() => {
              setScenario('deflation');
              setActiveStep(0);
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
              scenario === 'deflation'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" /> मंदी / न्यून मांग (Deflation)
          </button>
        </div>
      </div>

      {/* Stepper Navigation */}
      <div className="grid grid-cols-5 gap-2 pt-2">
        {currentSteps.map((s, index) => {
          const isDone = index <= activeStep;
          const isCurrent = index === activeStep;
          return (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`p-2.5 rounded-xl text-left transition border ${
                isCurrent
                  ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                  : isDone
                  ? 'bg-blue-50 text-blue-900 border-blue-200'
                  : 'bg-slate-50 text-slate-500 border-slate-200 hover:bg-slate-100'
              }`}
            >
              <div className="text-[10px] font-bold uppercase tracking-wider opacity-80">
                चरण {index + 1}
              </div>
              <div className="text-xs font-bold truncate mt-0.5">
                {index === 0 ? 'RBI कदम' : index === 1 ? 'बैंक दरें' : index === 2 ? 'ऋण मांग' : index === 3 ? 'समग्र मांग' : 'अंतिम असर'}
              </div>
            </button>
          );
        })}
      </div>

      {/* Highlighted Step Card */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50/50 border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-bold text-blue-700 uppercase tracking-wider bg-blue-100 px-3 py-1 rounded-full">
            {currentSteps[activeStep].stage}
          </span>
          <div className="text-xs text-slate-500">
            चरण {activeStep + 1} / 5
          </div>
        </div>

        <h4 className="font-heading font-extrabold text-xl text-slate-900">
          {currentSteps[activeStep].title}
        </h4>

        <p className="text-sm md:text-base text-slate-700 leading-relaxed">
          {currentSteps[activeStep].detail}
        </p>

        {/* Navigation Buttons inside card */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-200/60">
          <button
            onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
            disabled={activeStep === 0}
            className="px-3.5 py-1.5 rounded-xl text-xs font-medium bg-white text-slate-700 border border-slate-200 hover:bg-slate-100 disabled:opacity-40 transition"
          >
            ⏮ पिछला चरण
          </button>

          <button
            onClick={() => setActiveStep((prev) => Math.min(currentSteps.length - 1, prev + 1))}
            disabled={activeStep === currentSteps.length - 1}
            className="px-4 py-1.5 rounded-xl text-xs font-bold bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-40 shadow-sm transition inline-flex items-center gap-1.5"
          >
            अगला चरण ⏭
          </button>
        </div>
      </div>
    </div>
  );
};
