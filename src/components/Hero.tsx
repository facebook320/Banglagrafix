/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Star, Zap } from 'lucide-react';
import { Language, ASSETS } from '../types';

export default function Hero({ lang }: { lang: Language }) {
  return (
    <section className="relative min-h-[70vh] md:min-h-[85vh] flex flex-col justify-center px-6 md:px-10 pt-24 md:pt-32 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
           className="mb-4"
        >
          <span className="text-brand-orange font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs">
            {lang === 'en' ? 'Premium Visual Studio' : 'প্রিমিয়াম ভিজ্যুয়াল স্টুডিও'}
          </span>
        </motion.div>

        <h1 className="text-massive m-0 select-none">
          {lang === 'en' ? (
            <>BANGLA<br/><span className="text-brand-orange">GRAPHICS</span></>
          ) : (
            <>বাংলা<br/><span className="text-brand-orange">গ্রাফিক্স</span></>
          )}
        </h1>

        {/* Floating Card */}
        <motion.div
          initial={{ rotate: 3, y: 40, opacity: 0 }}
          animate={{ rotate: [3, -3, 3], y: 0, opacity: 1 }}
          transition={{ 
            rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 1, delay: 0.5 }
          }}
          className="absolute -top-10 md:top-0 right-0 mt-8 mr-2 md:mr-12 w-32 h-32 md:w-64 md:h-64 bg-zinc-900 border border-white/10 rounded-2xl p-3 md:p-6 shadow-2xl flex flex-col items-center justify-center transform hover:rotate-0 transition-transform duration-500 group z-20"
        >
          <img 
            src={ASSETS.LOGO} 
            alt="Logo" 
            className="w-16 h-16 md:w-32 md:h-32 object-contain filter drop-shadow-[0_0_15px_rgba(249,115,22,0.3)] transition-transform group-hover:scale-110" 
          />
          <div className="mt-2 md:mt-4 text-[6px] md:text-[10px] uppercase tracking-[0.3em] font-bold text-brand-orange text-center">Verified Merchant</div>
        </motion.div>
      </div>

      {/* Decorative Background Glows */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-[10%] left-[50%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-brand-orange rounded-full filter blur-[100px] md:blur-[180px] pointer-events-none" 
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: Math.random() * 800, x: Math.random() * 1200, opacity: 0 }}
            animate={{ 
              y: [null, Math.random() * -200], 
              opacity: [0, 1, 0],
              scale: [0.5, 1.5, 0.5]
            }}
            transition={{ 
              duration: 10 + Math.random() * 10, 
              repeat: Infinity,
              delay: Math.random() * 5
            }}
            className="absolute w-1 h-1 bg-brand-orange rounded-full"
          />
        ))}
      </div>
      
      {/* Absolute Decorative Icon */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.3, 0.1], rotate: [0, 45, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 md:bottom-20 right-10 md:right-20 opacity-20 pointer-events-none"
      >
        <svg width="60" height="60" md:width="120" md:height="120" viewBox="0 0 100 100" fill="white">
          <path d="M50 0L60 40L100 50L60 60L50 100L40 60L0 50L40 40L50 0Z" />
        </svg>
      </motion.div>
    </section>
  );
}
