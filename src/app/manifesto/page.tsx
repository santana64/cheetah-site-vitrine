'use client';

import * as React from 'react';
import { motion } from 'framer-motion';

export default function Manifesto() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-green-100 dark:from-zinc-900 dark:via-black dark:to-zinc-900 text-gray-900 dark:text-white font-serif px-6 py-28 md:py-40">
      <section className="max-w-5xl mx-auto text-center space-y-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-black tracking-tight leading-tight"
        >
          🧠 <span className="text-green-600">Manifestum</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-xl md:text-2xl max-w-3xl mx-auto opacity-80"
        >
          Ad gloriam <strong>projectus</strong>. Ad celeritatem <strong>mentis</strong>. Ad elegantiam <strong>artis</strong>.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 text-left">
          {[ 
            {
              title: '⏳ Tempus Regit',
              content: 'Nulla est res pretiosior quam tempus. Nostri instrumenta tempus tuum servant, non consumunt.'
            },
            {
              title: '📐 Designium Rationalis',
              content: 'Forma sequitur functionem. Sed apud nos, forma et functio choreographiam divinam faciunt.'
            },
            {
              title: '🗂 Structura in Omnibus',
              content: 'Chaos non habet locum. Ordo, structura et claritas sunt columnae nostræ.'
            },
            {
              title: '🧭 Projectum Clarum',
              content: 'Scire quid agatur, quare et quando. Translucidum, lucidum, liberum.'
            },
            {
              title: '🎯 Intentio in Omnia',
              content: 'Nullum click est fortuitum. Omnis interfacies, omnis actio: deliberata.'
            },
            {
              title: '🧬 Constantia Technologica',
              content: 'Tecnologia sine amore ad hominem est frigidum metallum. Cheetah Soft est calor digitalis.'
            }
          ].map((item, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-white/80 dark:bg-zinc-800/60 backdrop-blur-md rounded-3xl border border-gray-200 dark:border-zinc-700 p-6 shadow-xl hover:shadow-2xl transition"
            >
              <h3 className="text-2xl font-bold mb-2 text-green-700 dark:text-green-300">{item.title}</h3>
              <p className="opacity-80 leading-relaxed text-gray-700 dark:text-gray-300">{item.content}</p>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}
