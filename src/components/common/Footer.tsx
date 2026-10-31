import React from 'react';
import { Landmark, ShieldCheck, Heart, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white mt-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">
                <Landmark className="w-4 h-4" />
              </div>
              <span className="font-heading font-extrabold text-lg text-white">
                CBSE EconMaster 12
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              NCERT और CBSE Class 12 समष्टि अर्थशास्त्र (Introductory Macroeconomics) के लिए समर्पित अत्याधुनिक इंटरएक्टिव लर्निंग प्लेटफॉर्म।
            </p>
          </div>

          <div className="space-y-2 text-xs text-slate-400">
            <h5 className="font-bold text-slate-200 text-sm">पाठ्यक्रम अनुरूपता (Syllabus Aligned)</h5>
            <p>• NCERT Class 12 Macroeconomics Unit 2: Money and Banking</p>
            <p>• RBI Monetary Policy 2024-25 Updates & Formula Standards</p>
            <p>• 1, 2, 3, 4, 6 Marks CBSE Board Exam Standard Model Answers</p>
          </div>

          <div className="space-y-2 text-xs text-slate-400">
            <h5 className="font-bold text-slate-200 text-sm">स्केलेबल आर्किटेक्चर (Scalable Architecture)</h5>
            <p>
              फेज 1 में केवल "Money and Banking" अध्याय को परिपूर्ण रूप से निर्मित किया गया है। भविष्य के अध्यायों (National Income, Government Budget, BoP) के लिए रीयूजेबल कंपोनेंट आर्किटेक्चर पूरी तरह तैयार है।
            </p>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 CBSE EconMaster 12 • Made with precision for Class 12 Board Aspirants
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>100% CBSE & NCERT Syllabus Verified</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
