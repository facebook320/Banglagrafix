/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Language } from '../types';

export default function Marquee({ lang }: { lang: Language }) {
  const text = lang === 'en' 
    ? "30% ADVANCE PAYMENT REQUIRED • "
    : "যেকোন প্রজেক্ট শুরু করার আগে ৩০% অগ্রিম পেমেন্ট প্রয়োজন • ";

  return (
    <div className="bg-brand-orange py-2 overflow-hidden whitespace-nowrap sticky top-0 z-40">
      <motion.div
        animate={{ x: [0, -500] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="flex space-x-12 font-bold text-black text-[11px] tracking-[0.2em] uppercase"
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i}>{text}</span>
        ))}
      </motion.div>
    </div>
  );
}
