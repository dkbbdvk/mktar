import { useState, useEffect, useRef, useCallback } from 'react';

export interface SpeechState {
  isSpeaking: boolean;
  isPaused: boolean;
  currentTitle: string;
  rate: number;
  isSupported: boolean;
}

export function useSpeech() {
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [currentTitle, setCurrentTitle] = useState<string>('');
  const [rate, setRateState] = useState<number>(1);
  const [isSupported, setIsSupported] = useState<boolean>(true);
  const [activeSpeechId, setActiveSpeechId] = useState<string | null>(null);

  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const voicesRef = useRef<SpeechSynthesisVoice[]>([]);

  useEffect(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      setIsSupported(false);
      return;
    }

    const loadVoices = () => {
      voicesRef.current = window.speechSynthesis.getVoices();
    };

    loadVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }

    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  // Clean text for speech synthesis (strip markdown, format symbols)
  const cleanTextForSpeech = (rawText: string): string => {
    return rawText
      .replace(/[*#_`~]/g, '') // remove markdown symbols
      .replace(/₹\s*([0-9,]+)/g, '$1 रुपये') // replace ₹1,000 with "1000 रुपये"
      .replace(/%/g, ' प्रतिशत ')
      .replace(/\s+/g, ' ')
      .trim();
  };

  const stop = useCallback(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      setIsPaused(false);
      setCurrentTitle('');
      setActiveSpeechId(null);
    }
  }, []);

  const pause = useCallback(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.pause();
      setIsPaused(true);
    }
  }, []);

  const resume = useCallback(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.resume();
      setIsPaused(false);
    }
  }, []);

  const setRate = useCallback((newRate: number) => {
    setRateState(newRate);
    if (utteranceRef.current) {
      utteranceRef.current.rate = newRate;
    }
  }, []);

  const speak = useCallback((text: string, title: string = 'अध्याय वाचन', id?: string) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      alert('आपके ब्राउज़र में आवाज़ (Text-to-Speech) फीचर समर्थित नहीं है। कृपया Google Chrome या Edge का उपयोग करें।');
      return;
    }

    // If already speaking the same content, toggle pause/play
    if (isSpeaking && id && activeSpeechId === id) {
      if (isPaused) {
        resume();
      } else {
        pause();
      }
      return;
    }

    // Stop existing speech
    window.speechSynthesis.cancel();

    const cleaned = cleanTextForSpeech(text);
    if (!cleaned) return;

    const utterance = new SpeechSynthesisUtterance(cleaned);
    utteranceRef.current = utterance;
    utterance.rate = rate;
    utterance.pitch = 1.0;

    // Detect language: check for Hindi devanagari characters
    const hasHindi = /[\u0900-\u097F]/.test(cleaned);
    utterance.lang = hasHindi ? 'hi-IN' : 'en-US';

    // Try to pick a high quality voice
    const voices = voicesRef.current.length > 0 ? voicesRef.current : window.speechSynthesis.getVoices();
    if (voices.length > 0) {
      if (hasHindi) {
        const hindiVoice = voices.find(v => v.lang.includes('hi') || v.lang.includes('HI') || v.name.includes('Hindi') || v.name.includes('India'));
        if (hindiVoice) utterance.voice = hindiVoice;
      } else {
        const englishVoice = voices.find(v => (v.lang.includes('en') || v.lang.includes('EN')) && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha')));
        if (englishVoice) utterance.voice = englishVoice;
      }
    }

    utterance.onstart = () => {
      setIsSpeaking(true);
      setIsPaused(false);
      setCurrentTitle(title);
      if (id) setActiveSpeechId(id);
    };

    utterance.onend = () => {
      setIsSpeaking(false);
      setIsPaused(false);
      setCurrentTitle('');
      setActiveSpeechId(null);
    };

    utterance.onerror = (e) => {
      // 'interrupted' or 'canceled' are normal when user switches text
      if (e.error !== 'interrupted' && e.error !== 'canceled') {
        console.warn('SpeechSynthesis error:', e);
      }
      setIsSpeaking(false);
      setIsPaused(false);
      setCurrentTitle('');
      setActiveSpeechId(null);
    };

    window.speechSynthesis.speak(utterance);
  }, [isSpeaking, isPaused, rate, activeSpeechId, resume, pause]);

  return {
    speak,
    pause,
    resume,
    stop,
    setRate,
    isSpeaking,
    isPaused,
    currentTitle,
    rate,
    isSupported,
    activeSpeechId
  };
}
