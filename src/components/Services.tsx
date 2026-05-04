/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { SERVICES, Language } from '../types';

export default function Services({ lang }: { lang: Language }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {SERVICES.map((service, i) => (
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
          whileHover={{ backgroundColor: '#f97316', color: '#000000' }}
          className={`bento-card p-6 cursor-pointer group ${i === 2 ? 'bg-brand-orange text-black' : ''}`}
        >
          <div className="text-[10px] font-bold uppercase mb-2 opacity-60">0{i + 1}</div>
          <div className="text-xl font-bold leading-tight uppercase font-display italic">
            {service.title[lang].split(' ').map((word, idx) => (
              <span key={idx} className="block">{word}</span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
