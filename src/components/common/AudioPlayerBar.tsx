import React from 'react';
import { Volume2, VolumeX, Pause, Play, Square, FastForward } from 'lucide-react';

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
    <div className="fixed bottom-4 left-3 right-3 sm:left-auto sm:right-6 sm:w-96 z-50 animate-in slide-in-from-bottom-5 duration-300">
      <div className="bg-slate-950/90 backdrop-blur-xl border border-indigo-500/40 rounded-2xl p-3.5 shadow-2xl shadow-indigo-950/50 text-white flex items-center justify-between gap-3">
        {/* Animated Soundwave & Title */}
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="flex items-center gap-0.5 h-4 shrink-0">
            <span className={`w-1 bg-indigo-400 rounded-full ${isPaused ? 'h-1.5' : 'animate-bounce h-4'}`} style={{ animationDuration: '0.6s' }} />
            <span className={`w-1 bg-blue-400 rounded-full ${isPaused ? 'h-3' : 'animate-bounce h-3'}`} style={{ animationDuration: '0.4s', animationDelay: '0.1s' }} />
            <span className={`w-1 bg-cyan-400 rounded-full ${isPaused ? 'h-2' : 'animate-bounce h-5'}`} style={{ animationDuration: '0.5s', animationDelay: '0.2s' }} />
            <span className={`w-1 bg-emerald-400 rounded-full ${isPaused ? 'h-1.5' : 'animate-bounce h-3'}`} style={{ animationDuration: '0.7s', animationDelay: '0.15s' }} />
          </div>

          <div className="min-w-0 space-y-0.5">
            <div className="text-[10px] font-bold uppercase tracking-wider text-indigo-300 flex items-center gap-1">
              <span>{isPaused ? 'ऑडियो रुका हुआ' : 'AI आवाज़ द्वारा वाचन चालू'}</span>
            </div>
            <div className="text-xs font-semibold text-white truncate max-w-[150px] sm:max-w-[180px]">
              {currentTitle || 'अध्याय वाचन'}
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-1.5 shrink-0">
          {/* Rate Selector */}
          <button
            onClick={() => onSetRate(rate === 1 ? 1.2 : rate === 1.2 ? 0.8 : 1)}
            className="text-[10px] font-bold px-2 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-indigo-200 transition"
            title="बोलने की गति बदलें"
          >
            {rate}x
          </button>

          {/* Pause / Resume */}
          <button
            onClick={isPaused ? onResume : onPause}
            className="w-8 h-8 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white flex items-center justify-center transition shadow-md shadow-indigo-600/30"
            title={isPaused ? 'चलाएं' : 'रोकें'}
          >
            {isPaused ? <Play className="w-3.5 h-3.5 fill-white ml-0.5" /> : <Pause className="w-3.5 h-3.5 fill-white" />}
          </button>

          {/* Stop */}
          <button
            onClick={onStop}
            className="w-8 h-8 rounded-xl bg-white/10 hover:bg-rose-500/80 text-white flex items-center justify-center transition"
            title="बंद करें"
          >
            <Square className="w-3.5 h-3.5 fill-white" />
          </button>
        </div>
      </div>
    </div>
  );
};
