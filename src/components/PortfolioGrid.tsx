/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { PORTFOLIO, Language } from '../types';

export default function PortfolioGrid({ lang }: { lang: Language }) {
  return (
    <section className="py-12 md:py-24 px-6 md:px-10 max-w-7xl mx-auto">
      <div className="mb-8 md:mb-12 flex flex-col md:flex-row md:justify-between md:items-end gap-4">
        <h2 className="text-3xl md:text-5xl font-display italic uppercase tracking-tighter">Feature <span className="text-brand-orange">Works</span></h2>
        <div className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] opacity-40">Click to Explore Details</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {PORTFOLIO.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.1 }}
            className="group relative aspect-[4/3] md:aspect-video overflow-hidden border border-white/5 bg-zinc-900 rounded-2xl"
          >
            <img 
              src={item.image} 
              alt={item.title[lang]} 
              className="w-full h-full object-cover transition-all duration-1000 ease-out scale-105 group-hover:scale-110 opacity-60 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent opacity-80" />
            <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
              <span className="text-brand-orange text-[9px] md:text-[10px] font-bold tracking-[0.3em] uppercase mb-1 block">
                {item.category[lang]}
              </span>
              <h3 className="text-xl md:text-2xl font-display italic uppercase leading-none">
                {item.title[lang]}
              </h3>
            </div>
            <div className="absolute top-4 right-4 md:top-6 md:right-6 w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-sm">
               <span className="text-[8px] md:text-[10px] uppercase font-bold">View</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
