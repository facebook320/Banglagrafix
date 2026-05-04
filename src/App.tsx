/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language, ASSETS } from './types';
import LoadingScreen from './components/LoadingScreen';
import Marquee from './components/Marquee';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PortfolioGrid from './components/PortfolioGrid';
import Services from './components/Services';
import Contact from './components/Contact';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [lang, setLang] = useState<Language>('en');
  const [isAudioStarted, setIsAudioStarted] = useState(false);
  
  const bgAudioRef = useRef<HTMLAudioElement | null>(null);
  const clickAudioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Background audio setup
    bgAudioRef.current = new Audio(ASSETS.WELCOME_AUDIO);
    bgAudioRef.current.loop = true;
    bgAudioRef.current.volume = 0.4;

    // Click audio setup
    clickAudioRef.current = new Audio(ASSETS.CLICK_AUDIO);
    clickAudioRef.current.volume = 0.3;

    return () => {
      bgAudioRef.current?.pause();
      bgAudioRef.current = null;
      clickAudioRef.current = null;
    };
  }, []);

  const handleFirstInteraction = () => {
    if (!isAudioStarted) {
      bgAudioRef.current?.play().catch(e => console.log('Audio blocked', e));
      setIsAudioStarted(true);
    }
    // Play click sound
    if (clickAudioRef.current) {
      clickAudioRef.current.currentTime = 0;
      clickAudioRef.current.play().catch(() => {});
    }
  };

  return (
    <div 
      className="bg-brand-black min-h-screen text-brand-white selection:bg-brand-orange selection:text-white relative overflow-hidden"
      onClick={handleFirstInteraction}
    >
      {/* Visual background Motion Graphics */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 left-10 w-96 h-96 bg-brand-orange/20 blur-[120px] rounded-full"
        />
        <motion.div 
          animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
          transition={{ duration: 15, repeat: Infinity, delay: 2 }}
          className="absolute bottom-20 right-10 w-80 h-80 bg-[#ec4899]/10 blur-[100px] rounded-full"
        />
      </div>

      <AnimatePresence mode="wait">
        {loading && (
          <LoadingScreen onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {!loading && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Marquee lang={lang} />
          <Navbar lang={lang} setLang={setLang} />
          <Hero lang={lang} />
          <PortfolioGrid lang={lang} />
          
          {/* Bottom Bento Section */}
          <section className="px-10 pb-20 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              <div className="lg:col-span-7">
                <Services lang={lang} />
              </div>
              <div className="lg:col-span-5">
                <Contact lang={lang} />
              </div>
            </div>
          </section>

          <footer className="px-10 pb-10 max-w-7xl mx-auto border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-white flex items-center justify-center rounded-sm font-black text-black text-sm font-display">BG</div>
              <div className="text-[10px] font-bold uppercase tracking-widest opacity-50">© {new Date().getFullYear()} Bangla Graphics Studio</div>
            </div>
            <div className="flex space-x-8 text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">
              <a href="#" className="hover:text-brand-orange transition-colors">Privacy</a>
              <a href="#" className="hover:text-brand-orange transition-colors">Terms</a>
              <a href="#" className="hover:text-brand-orange transition-colors">Cookies</a>
            </div>
          </footer>
        </motion.main>
      )}

      {/* Language Indicator Floating UI */}
      {!loading && (
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="fixed bottom-8 left-8 z-40 hidden md:block"
        >
          <div className="flex items-center gap-4 bg-white/5 backdrop-blur-xl border border-white/10 p-2 rounded-full px-6">
            <span className={`text-[10px] font-bold tracking-widest uppercase transition-opacity ${lang === 'en' ? 'opacity-100 text-brand-orange' : 'opacity-40'}`}>English</span>
            <div className="w-1 h-1 bg-white/20 rounded-full" />
            <span className={`text-[10px] font-bold tracking-widest uppercase transition-opacity ${lang === 'bn' ? 'opacity-100 text-brand-orange' : 'opacity-40'}`}>বাংলা</span>
          </div>
        </motion.div>
      )}
    </div>
  );
}
