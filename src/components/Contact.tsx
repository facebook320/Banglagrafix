/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { MessageCircle, Facebook, CreditCard, ArrowUpRight } from 'lucide-react';
import { Language } from '../types';

export default function Contact({ lang }: { lang: Language }) {
  return (
    <div className="grid grid-cols-1 gap-4">
      {/* Social Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* WhatsApp */}
        <motion.a
          href="https://wa.me/8801717927508"
          target="_blank"
          rel="no-referrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-zinc-900 border border-white/10 rounded-xl p-6 flex flex-col justify-between group h-32 md:h-40"
        >
          <div className="flex justify-between items-start">
            <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-green-500">WhatsApp</span>
            <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]"></span>
          </div>
          <div className="text-lg md:text-xl font-bold group-hover:text-brand-orange transition-colors">01717-927508</div>
        </motion.a>

        {/* Facebook */}
        <motion.a
          href="#"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-zinc-900 border border-white/10 rounded-xl p-6 flex flex-col justify-between group h-32 md:h-40"
        >
          <div className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-blue-400">Facebook</div>
          <div className="text-lg md:text-xl font-bold group-hover:text-brand-orange transition-colors">BanglaGraphics.pro</div>
        </motion.a>
      </div>

      {/* bKash Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.02 }}
        className="bg-gradient-to-br from-brand-orange to-[#ec4899] rounded-xl p-6 md:p-8 flex flex-col justify-between text-black shadow-xl h-44 md:h-52"
      >
        <div className="flex justify-between items-center">
          <span className="font-black text-xl md:text-2xl italic uppercase tracking-tighter text-black/80">bKash Merchant</span>
          <div className="w-10 h-10 md:w-12 md:h-12 bg-white/30 backdrop-blur-xl rounded-full flex items-center justify-center font-bold text-[10px] md:text-xs">PAY</div>
        </div>
        <div className="mt-4">
             <span className="text-[10px] font-bold uppercase tracking-tighter opacity-70">Official Transaction Line</span>
             <div className="text-2xl md:text-3xl font-black">01717-9727508</div>
        </div>
      </motion.div>
    </div>
  );
}
