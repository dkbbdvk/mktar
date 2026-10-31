import React from 'react';
import { Landmark, ShieldCheck, Heart, Sparkles, Terminal, Cpu } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white mt-16 border-t border-cyan-500/30 relative overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-600 to-indigo-600 flex items-center justify-center text-white font-bold border border-cyan-400/50 shadow-md shadow-cyan-500/20">
                <Landmark className="w-4 h-4 text-cyan-200" />
              </div>
              <span className="font-heading font-extrabold text-lg text-white">
                CBSE EconMaster <span className="text-cyan-400">12</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-mono">
              NCERT और CBSE Class 12 समष्टि अर्थशास्त्र के लिए समर्पित अत्याधुनिक इंटरएक्टिव न्यूरल लर्निंग प्लेटफॉर्म।
            </p>
            {/* Mukhtar Creator Callout */}
            <div className="p-3 rounded-xl bg-slate-900 border border-cyan-500/30 text-xs font-mono text-cyan-200 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-300 animate-spin" style={{ animationDuration: '6s' }} />
              <span>वेबसाइट निर्माता: <strong className="text-white font-extrabold text-amber-300">मुख्तार (Mukhtar)</strong></span>
            </div>
          </div>

          <div className="space-y-2 text-xs text-slate-400 font-mono">
            <h5 className="font-bold text-cyan-300 text-sm flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-cyan-400" />
              पाठ्यक्रम अनुरूपता (Syllabus Aligned)
            </h5>
            <p>• NCERT Class 12 Macroeconomics Unit 2: Money and Banking</p>
            <p>• RBI Monetary Policy 2024-25 Updates & Multiplier Tools</p>
            <p>• 1, 2, 3, 4, 6 Marks CBSE Model Answers & Case Studies</p>
          </div>

          <div className="space-y-2 text-xs text-slate-400 font-mono">
            <h5 className="font-bold text-cyan-300 text-sm flex items-center gap-1.5">
              <Terminal className="w-4 h-4 text-cyan-400" />
              न्यूरल फीचर्स (Neural Features)
            </h5>
            <p>• AI आवाज़ द्वारा वाचन (Web Speech API Neural TTS)</p>
            <p>• 3D फ्लिप फ्लैशकार्ड्स व याददाश्त प्रगति ट्रैकर</p>
            <p>• दौर-दर-दौर साख निर्माण प्रयोगशाला व इंटरएक्टिव कैलकुलेटर</p>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © 2026 CBSE EconMaster 12 • Architectural Design by <strong>मुख्तार (Mukhtar)</strong>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="text-slate-400">100% CBSE & NCERT Syllabus Verified</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
