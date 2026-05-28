'use client';

import { motion } from 'framer-motion';

export default function APropos() {
  return (
    <main className="bg-gradient-to-br from-gray-50 to-orange-100 dark:from-gray-950 dark:to-gray-900 text-gray-900 dark:text-white font-sans min-h-screen overflow-hidden">

      {/* ACTE I — Prologus Temporis */}
      <section className="text-center py-32 px-6 md:px-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold mb-4"
        >
          Historia Cheetah Soft
        </motion.h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
          Ex ingenio nascitur ordo. Ex ordine nascitur celeritas.
        </p>
      </section>

      {/* ACTE II — Origo et Fundatio */}
      <section className="py-20 px-6 md:px-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 max-w-5xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-6">Initium</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Anno MMXXIV, in lucem venit Cheetah Soft. In nocte plena errorum, instrumenta nostra ortum habuerunt. Ex desiderio: regere tempora, coordinare mentes, effugere chaos.
          </p>
        </motion.div>
      </section>

      {/* ACTE III — Axis Philosophicus */}
      <section className="py-20 px-6 md:px-32">
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {["Tempus Regere", "Complexum Simplicare", "Silentium Designare"].map((axis, i) => (
            <motion.div
              key={axis}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-xl"
            >
              <h3 className="text-xl font-bold mb-2 text-green-600 dark:text-green-300">{axis}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae lorem a odio dignissim.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ACTE IV — Voces Invisibiles */}
      <section className="py-28 px-6 md:px-32 text-center bg-gradient-to-br from-green-100 via-white to-orange-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="italic text-2xl max-w-3xl mx-auto text-gray-700 dark:text-gray-300"
        >
          &ldquo;Non software facimus, sed instrumenta libertatis temporalis.&rdquo;
        </motion.blockquote>
      </section>

      {/* ACTE V — Eversio Chaos */}
      <section className="py-24 px-6 md:px-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-extrabold mb-6"
        >
          Cheetah Soft est ordo contra chaos.
        </motion.h2>
        <p className="text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
          Una pagina, una intentio: dominium intelligentiae artis, tempore servato.
        </p>
      </section>

    </main>
  );
}
