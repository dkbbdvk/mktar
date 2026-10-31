import React, { useState, useEffect } from 'react';
import { Sliders, ArrowRight, TrendingUp, TrendingDown, ShieldAlert, CheckCircle2, RotateCcw, Play, Pause, Radio, Zap } from 'lucide-react';
import { playCyberClick, playHologramFlip } from '../../utils/cyberAudio';

export const MonetaryPolicyTransmission: React.FC = () => {
  const [scenario, setScenario] = useState<'inflation' | 'deflation'>('inflation');
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(false);

  const stepsInflation = [
    {
      stage: 'चरण 1: केंद्रीय बैंक का कदम',
      title: 'RBI ने रेपो दर (Repo Rate) और CRR बढ़ाया',
      detail: 'RBI की मौद्रिक नीति समिति (MPC) ने बढ़ती महंगाई (CPI > 6%) को रोकने के लिए रेपो दर में वृद्धि की और खुले बाजार में प्रतिभूतियां बेचीं।',
      icon: TrendingUp,
    },
    {
      stage: 'चरण 2: व्यावसायिक बैंकों पर असर',
      title: 'बैंकों के लिए उधारी लागत और ब्याज दरों में वृद्धि',
      detail: 'व्यावसायिक बैंकों के लिए RBI से अल्पकालिक उधारी महंगी हो गई। बैंकों ने तुरंत अपनी खुदरा ऋण दरें (Lending Rates) बढ़ा दीं।',
      icon: Sliders,
    },
    {
      stage: 'चरण 3: जनता और व्यवसायों का व्यवहार',
      title: 'ऋण की मांग में गिरावट (Drop in Borrowing)',
      detail: 'होम लोन, कार लोन और व्यावसायिक ऋणों की EMI महंगी होने से आम जनता ने वाहन व मकान की खरीदारी घटाई और नए निवेश धीमे किए।',
      icon: TrendingDown,
    },
    {
      stage: 'चरण 4: समग्र मांग पर प्रभाव',
      title: 'अर्थव्यवस्था में समग्र मांग (AD) में संकुचन',
      detail: 'उपभोग व्यय (C) और निवेश व्यय (I) घटने से देश में कुल वस्तुओं और सेवाओं की खरीद (Aggregate Demand) में गिरावट आई।',
      icon: TrendingDown,
    },
    {
      stage: 'चरण 5: अंतिम परिणाम',
      title: 'अतिरेक मांग समाप्त, महंगाई पर नियंत्रण!',
      detail: 'बाजार में मांग सीमित होने से विक्रेताओं ने मनमाने दाम बढ़ाना बंद किया और मुद्रास्फीति घटकर लक्षित 4% बैंड में वापस आ गई।',
      icon: CheckCircle2,
    }
  ];

  const stepsDeflation = [
    {
      stage: 'चरण 1: केंद्रीय बैंक का कदम',
      title: 'RBI ने रेपो दर घटाई और CRR कम किया',
      detail: 'आर्थिक मंदी या सुस्ती से उबरने के लिए RBI ने रेपो दर काटी और खुले बाजार में बैंकों से प्रतिभूतियां खरीदकर नकदी पंप की।',
      icon: TrendingDown,
    },
    {
      stage: 'चरण 2: व्यावसायिक बैंकों पर असर',
      title: 'सस्ती उधारी और प्रचुर ऋण योग्य तरलता',
      detail: 'बैंकों को सस्ता कोष मिला और उनके पास ऋण देने के लिए लाखों करोड़ की अतिरिक्त नकदी आ गई। बैंकों ने ब्याज दरें घटाईं।',
      icon: Sliders,
    },
    {
      stage: 'चरण 3: जनता और व्यवसायों का व्यवहार',
      title: 'उधारी और निवेश में तीव्र वृद्धि',
      detail: 'सस्ते ऋणों का लाभ उठाने के लिए लोगों ने नए घर, गाड़ियां खरीदीं और उद्यमियों ने नई फैक्ट्रियां लगाने के लिए बैंक ऋण लिया।',
      icon: TrendingUp,
    },
    {
      stage: 'चरण 4: समग्र मांग पर प्रभाव',
      title: 'समग्र मांग (AD) में उछाल और उत्पादन वृद्धि',
      detail: 'उपभोग और निवेश में वृद्धि से कारखानों में उत्पादन बढ़ा, नए रोजगार सृजित हुए और अर्थव्यवस्था मंदी के चक्र से बाहर निकली।',
      icon: TrendingUp,
    },
    {
      stage: 'चरण 5: अंतिम परिणाम',
      title: 'मंदी समाप्त, पूर्ण रोजगार व आर्थिक संवृद्धि!',
      detail: 'आर्थिक चक्र पुनः गतिशील हो गया और राष्ट्रीय आय तथा GDP में स्वस्थ वृद्धि दर्ज की गई।',
      icon: CheckCircle2,
    }
  ];

  const currentSteps = scenario === 'inflation' ? stepsInflation : stepsDeflation;

  // Auto-play animation through stages
  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (isAutoPlaying) {
      timer = setInterval(() => {
        setActiveStep((prev) => {
          playCyberClick();
          if (prev < currentSteps.length - 1) {
            return prev + 1;
          } else {
            setIsAutoPlaying(false);
            return 0;
          }
        });
      }, 2000);
    }
    return () => clearInterval(timer);
  }, [isAutoPlaying, currentSteps.length]);

  return (
    <div className="bg-slate-900/90 backdrop-blur-2xl p-4 sm:p-8 rounded-3xl border border-cyan-500/30 shadow-2xl shadow-cyan-950/40 space-y-5 sm:space-y-6 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header with Scenario Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-cyan-500/20 pb-4 relative z-10">
        <div>
          <span className="text-[10px] sm:text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-1.5">
            <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            [ POLICY_TRANSMISSION_HUD ]
          </span>
          <h3 className="font-heading font-extrabold text-lg sm:text-2xl text-white mt-0.5">
            मौद्रिक नीति संचरण तंत्र (Policy Transmission)
          </h3>
          <p className="text-[11px] sm:text-sm text-cyan-200/70 mt-0.5 font-mono">
            देखें कि RBI के एक दर बदलाव का अर्थव्यवस्था के हर स्तर पर क्या प्रभाव पड़ता है
          </p>
        </div>

        {/* Toggle Pills & Auto-Play */}
        <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto">
          <div className="flex items-center gap-1 p-1 bg-slate-950 rounded-2xl border border-cyan-500/30">
            <button
              onClick={() => {
                playCyberClick();
                setScenario('inflation');
                setActiveStep(0);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition flex items-center gap-1.5 cursor-pointer ${
                scenario === 'inflation'
                  ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30 border border-rose-400'
                  : 'text-slate-400 hover:text-rose-300'
              }`}
            >
              <ShieldAlert className="w-3.5 h-3.5" /> महंगाई (Inflation)
            </button>
            <button
              onClick={() => {
                playCyberClick();
                setScenario('deflation');
                setActiveStep(0);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition flex items-center gap-1.5 cursor-pointer ${
                scenario === 'deflation'
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30 border border-emerald-400'
                  : 'text-slate-400 hover:text-emerald-300'
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5" /> मंदी (Deflation)
            </button>
          </div>

          {/* Auto-Play Beam Button */}
          <button
            onClick={() => {
              playCyberClick();
              setIsAutoPlaying(!isAutoPlaying);
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition flex items-center gap-1.5 cursor-pointer border ${
              isAutoPlaying
                ? 'bg-amber-500 text-black border-amber-300 animate-pulse'
                : 'bg-cyan-950 text-cyan-300 border-cyan-500/30 hover:bg-cyan-900'
            }`}
          >
            {isAutoPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
            <span>{isAutoPlaying ? 'वेव रोकें' : '⚡ ऑटो संचरण वेव'}</span>
          </button>
        </div>
      </div>

      {/* Stepper Navigation */}
      <div className="flex overflow-x-auto gap-2 scrollbar-none pb-1 touch-pan-x sm:grid sm:grid-cols-5 relative z-10">
        {currentSteps.map((s, index) => {
          const isDone = index <= activeStep;
          const isCurrent = index === activeStep;
          return (
            <button
              key={index}
              onClick={() => {
                playCyberClick();
                setActiveStep(index);
              }}
              className={`p-3 rounded-2xl text-left transition border shrink-0 min-w-[110px] sm:min-w-0 cursor-pointer ${
                isCurrent
                  ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 text-white border-cyan-400 shadow-xl shadow-cyan-600/30 ring-2 ring-cyan-400/50 scale-[1.02]'
                  : isDone
                  ? 'bg-slate-950 text-cyan-300 border-cyan-500/30'
                  : 'bg-slate-950/60 text-slate-500 border-slate-800 hover:border-cyan-500/30 hover:text-slate-300'
              }`}
            >
              <div className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-widest opacity-80">
                PHASE {index + 1}
              </div>
              <div className="text-xs font-bold truncate mt-0.5">
                {index === 0 ? 'RBI कदम' : index === 1 ? 'बैंक दरें' : index === 2 ? 'ऋण मांग' : index === 3 ? 'समग्र मांग' : 'अंतिम असर'}
              </div>
            </button>
          );
        })}
      </div>

      {/* Highlighted Step Card */}
      <div className="p-5 sm:p-7 rounded-2xl bg-slate-950/90 border border-cyan-500/40 shadow-xl space-y-4 relative z-10">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[10px] sm:text-xs font-mono font-bold text-cyan-300 uppercase tracking-widest bg-cyan-950 px-3 py-1 rounded-full border border-cyan-500/40">
            {currentSteps[activeStep].stage}
          </span>
          <div className="text-xs font-mono text-cyan-400">
            [ STAGE {activeStep + 1} OF 5 ]
          </div>
        </div>

        <h4 className="font-heading font-extrabold text-lg sm:text-2xl text-white leading-snug">
          {currentSteps[activeStep].title}
        </h4>

        <p className="text-xs sm:text-base text-slate-300 leading-relaxed font-normal">
          {currentSteps[activeStep].detail}
        </p>

        {/* Navigation Buttons inside card */}
        <div className="flex items-center justify-between pt-3 border-t border-cyan-500/20">
          <button
            onClick={() => {
              playCyberClick();
              setActiveStep((prev) => Math.max(0, prev - 1));
            }}
            disabled={activeStep === 0}
            className="px-3.5 py-2 rounded-xl text-xs font-mono font-medium bg-slate-900 text-slate-300 border border-slate-700 hover:border-cyan-500/40 disabled:opacity-30 transition cursor-pointer"
          >
            ⏮ पिछला चरण
          </button>

          <button
            onClick={() => {
              playCyberClick();
              setActiveStep((prev) => Math.min(currentSteps.length - 1, prev + 1));
            }}
            disabled={activeStep === currentSteps.length - 1}
            className="px-4 py-2 rounded-xl text-xs font-mono font-bold bg-gradient-to-r from-cyan-600 to-indigo-600 text-white hover:from-cyan-500 hover:to-indigo-500 disabled:opacity-30 shadow-md shadow-cyan-600/30 transition inline-flex items-center gap-1.5 cursor-pointer border border-cyan-400/40"
          >
            अगला चरण ⏭
          </button>
        </div>
      </div>
    </div>
  );
};
