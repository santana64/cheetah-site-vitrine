'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-green-50 via-white to-orange-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 px-6 py-20">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-extrabold text-green-700 dark:text-green-300 mb-6"
        >
          📊 Dashboard Centralis
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
        >
          Visio clara consiliorum tuorum: tempus, budgetum, progressionem. Omnia in uno intuitu.
        </motion.p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {["Tempus Realis", "Indicatores Budgetarii", "Agenda Consiliorum"].map((title, i) => (
            <motion.div
              key={title}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.2 }}
              className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-xl font-semibold text-green-600 dark:text-green-300 mb-2">{title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut sapien elit.
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-gradient-to-r from-orange-400 to-green-500 text-white rounded-xl shadow hover:scale-105 transition font-bold"
          >
            ✉️ Contactum capere
          </Link>
        </div>
      </div>
    </main>
  );
}
