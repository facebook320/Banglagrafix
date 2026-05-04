/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Globe, Menu } from 'lucide-react';
import { Language, ASSETS } from '../types';

export default function Navbar({ lang, setLang }: { lang: Language; setLang: (l: Language) => void }) {
  return (
    <nav className="fixed top-[31px] left-0 right-0 z-30 flex justify-between items-center px-4 md:px-10 py-3 md:py-4 glass">
      <div className="flex items-center space-x-3 md:space-x-4">
        <div className="w-10 h-10 md:w-12 md:h-12 bg-white flex items-center justify-center rounded-lg overflow-hidden border border-white/10 group cursor-pointer shadow-xl shadow-brand-orange/10">
          <img src={ASSETS.LOGO} alt="Logo" className="w-8 h-8 md:w-10 md:h-10 object-contain p-1 group-hover:scale-110 transition-transform" />
        </div>
        <div className="text-xs md:text-sm font-bold tracking-tighter uppercase sm:block hidden">Bangla Graphics</div>
      </div>
      
      <div className="flex items-center space-x-4 md:space-x-8 text-[10px] md:text-[11px] font-bold uppercase tracking-widest">
        <div className="hidden lg:flex space-x-8">
          <a href="#" className="text-brand-orange">Work</a>
          <a href="#" className="opacity-50 hover:opacity-100 transition-opacity">Services</a>
          <a href="#" className="opacity-50 hover:opacity-100 transition-opacity">Contact</a>
        </div>
        
        <div className="flex border border-white/20 rounded-full px-1 py-1 bg-white/5">
          <button 
            onClick={() => setLang('en')}
            className={`px-3 md:px-4 py-1 rounded-full transition-all text-[9px] md:text-[11px] ${lang === 'en' ? 'bg-white text-black' : 'opacity-50'}`}
          >
            EN
          </button>
          <button 
            onClick={() => setLang('bn')}
            className={`px-3 md:px-4 py-1 rounded-full transition-all text-[9px] md:text-[11px] ${lang === 'bn' ? 'bg-white text-black' : 'opacity-50'}`}
          >
            BN
          </button>
        </div>
      </div>
    </nav>
  );
}
