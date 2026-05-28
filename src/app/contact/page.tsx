'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <main className="bg-gradient-to-br from-green-50 to-orange-100 dark:from-gray-900 dark:to-gray-800 min-h-screen text-gray-900 dark:text-white overflow-hidden font-sans">
      {/* ACTE I — Invocationis Initium */}
      <section className="text-center py-32 px-6 md:px-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold mb-6"
        >
          Vocatio Cheetah Soft
        </motion.h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
          Per litteras vel verba, nexus incipit. Dic nobis quid velis ordinare.
        </p>
      </section>

      {/* ACTE II — Forma Sacra */}
      <section className="py-24 px-6 md:px-20 relative z-10">
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto bg-white dark:bg-gray-900/50 backdrop-blur-xl p-10 rounded-3xl border border-gray-200 dark:border-white/10 shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block mb-2 text-sm font-medium">Nomen</label>
              <input
                type="text"
                className="w-full px-5 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 border-none focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Tuus nomen..."
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full px-5 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 border-none focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="tu@email.com"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block mb-2 text-sm font-medium">Nuntius</label>
              <textarea
                rows={5}
                className="w-full px-5 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 border-none focus:outline-none focus:ring-2 focus:ring-orange-300"
                placeholder="Scribe hic tuum desiderium..."
              ></textarea>
            </div>
          </div>
          <div className="mt-10 text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-green-500 to-orange-400 text-white font-bold px-10 py-3 rounded-full shadow-xl hover:scale-105 transition"
            >
              Transmittere
            </button>
          </div>
        </motion.form>
      </section>

      {/* ACTE III — Desinitio Poetica */}
      <section className="py-20 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl italic text-gray-600 dark:text-gray-400"
        >
          &ldquo;In verbo initium. In actu transformatio.&rdquo;
        </motion.p>
      </section>
    </main>
  );
}
