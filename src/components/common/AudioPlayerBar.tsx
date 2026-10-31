import React from 'react';
import { Volume2, VolumeX, Pause, Play, Square, Radio, Cpu, Activity } from 'lucide-react';
import { playCyberClick } from '../../utils/cyberAudio';

interface AudioPlayerBarProps {
  isSpeaking: boolean;
  isPaused: boolean;
  currentTitle: string;
  rate: number;
  onPause: () => void;
  onResume: () => void;
  onStop: () => void;
  onSetRate: (rate: number) => void;
}

export const AudioPlayerBar: React.FC<AudioPlayerBarProps> = ({
  isSpeaking,
  isPaused,
  currentTitle,
  rate,
  onPause,
  onResume,
  onStop,
  onSetRate
}) => {
  if (!isSpeaking && !isPaused) return null;

  return (
    <div className="fixed bottom-4 left-3 right-3 sm:left-auto sm:right-6 sm:w-[410px] z-50 animate-in slide-in-from-bottom-5 duration-300">
      {/* Outer Hologram Container */}
      <div className="relative rounded-2xl p-[1px] bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 shadow-2xl shadow-cyan-950/80">
        {/* Corner HUD accents */}
        <span className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-cyan-400 z-10" />
        <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-purple-400 z-10" />

        <div className="bg-slate-950/95 backdrop-blur-2xl rounded-2xl p-3.5 text-white flex items-center justify-between gap-3 relative overflow-hidden">
          {/* Subtle Cyber Scanline */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent h-4 animate-scanline pointer-events-none" />

          {/* Animated Cyber Soundwave & Title */}
          <div className="flex items-center gap-3 min-w-0 z-10">
            {/* Equalizer Spectrum Bars */}
            <div className="flex items-end gap-1 h-5 px-1.5 py-1 rounded-lg bg-cyan-950/60 border border-cyan-500/30 shrink-0">
              <span className={`w-1 bg-cyan-400 rounded-full ${isPaused ? 'h-1.5' : 'animate-equalizer-1'}`} />
              <span className={`w-1 bg-indigo-400 rounded-full ${isPaused ? 'h-3' : 'animate-equalizer-2'}`} />
              <span className={`w-1 bg-purple-400 rounded-full ${isPaused ? 'h-2' : 'animate-equalizer-3'}`} />
              <span className={`w-1 bg-pink-400 rounded-full ${isPaused ? 'h-1.5' : 'animate-equalizer-4'}`} />
            </div>

            <div className="min-w-0 space-y-0.5">
              <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                <Activity className="w-3 h-3 text-cyan-400 animate-pulse" />
                <span>{isPaused ? '[ AUDIO_STANDBY ]' : '[ NEURAL_SYNTHESIS_ACTIVE ]'}</span>
              </div>
              <div className="text-xs font-semibold text-white truncate max-w-[150px] sm:max-w-[190px]">
                {currentTitle || 'अध्याय वाचन'}
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-1.5 shrink-0 z-10">
            {/* Rate Selector */}
            <button
              onClick={() => {
                playCyberClick();
                onSetRate(rate === 1 ? 1.2 : rate === 1.2 ? 0.8 : 1);
              }}
              className="text-[10px] font-mono font-bold px-2 py-1 rounded-lg bg-slate-900 border border-cyan-500/30 hover:border-cyan-400 text-cyan-300 hover:text-white transition cursor-pointer"
              title="वाचन गति बदलें (Speed Rate)"
            >
              {rate}x
            </button>

            {/* Pause / Resume */}
            <button
              onClick={() => {
                playCyberClick();
                if (isPaused) onResume();
                else onPause();
              }}
              className="w-8 h-8 rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white flex items-center justify-center transition shadow-lg shadow-cyan-600/30 border border-cyan-400/40 cursor-pointer"
              title={isPaused ? 'चलाएं (Resume)' : 'रोकें (Pause)'}
            >
              {isPaused ? <Play className="w-3.5 h-3.5 fill-white ml-0.5" /> : <Pause className="w-3.5 h-3.5 fill-white" />}
            </button>

            {/* Stop */}
            <button
              onClick={() => {
                playCyberClick();
                onStop();
              }}
              className="w-8 h-8 rounded-xl bg-slate-900 hover:bg-rose-500/80 border border-slate-700 hover:border-rose-400 text-slate-300 hover:text-white flex items-center justify-center transition cursor-pointer"
              title="ऑडियो बंद करें (Stop)"
            >
              <Square className="w-3 h-3 fill-current" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
