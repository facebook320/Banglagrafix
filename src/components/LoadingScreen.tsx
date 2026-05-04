/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ASSETS } from '../types';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 2.5 }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-brand-black"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-8"
      >
        <img src={ASSETS.LOGO} alt="Logo" className="w-48 h-auto" />
      </motion.div>
      
      <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="h-full bg-brand-orangeShadow"
          style={{ backgroundColor: '#f97316' }}
        />
      </div>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-4 text-xs tracking-[0.3em] uppercase text-white/40 font-display"
      >
        Crafting Visual Excellence
      </motion.p>
    </motion.div>
  );
}
