'use client';

import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Aurora',
    price: '29€',
    features: ['Accessus basicus', 'Supportum per email', '1 projectum'],
    highlight: false,
  },
  {
    name: 'Titan',
    price: '69€',
    features: ['Totus accessus', 'Prioritas supporti', '5 projecta', 'Dashboard elegantia'],
    highlight: true,
  },
  {
    name: 'Eternum',
    price: '149€',
    features: ['Omnia infinita', 'Praesidium divinum', '∞ projecta', 'AI integration', 'Privata consultatio'],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-orange-100 dark:from-gray-900 dark:via-gray-950 dark:to-black text-gray-900 dark:text-white px-6 py-20">
      <section className="text-center mb-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold mb-4"
        >
          💎 Formulæ Cheetah
        </motion.h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          &ldquo;Solum tempus pretiosius est quam aurum. Noli perdere.&rdquo; — Cheetah Soft
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            className={`relative backdrop-blur-lg bg-white/80 dark:bg-gray-800/60 border ${
              plan.highlight
                ? 'border-orange-400 shadow-2xl scale-[1.03]'
                : 'border-gray-200 dark:border-gray-700 shadow-lg'
            } rounded-3xl p-8 transition-transform duration-300`}
          >
            {plan.highlight && (
              <div className="absolute -top-4 right-4 bg-orange-400 text-white text-xs px-3 py-1 rounded-full shadow">
                Populare
              </div>
            )}
            <h2 className="text-2xl font-bold text-green-700 dark:text-green-300 mb-2">{plan.name}</h2>
            <p className="text-3xl font-extrabold mb-4">{plan.price} / mensis</p>
            <ul className="text-sm space-y-2 text-gray-700 dark:text-gray-300 mb-6">
              {plan.features.map((feat, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> {feat}
                </li>
              ))}
            </ul>
            <button className="mt-auto w-full px-6 py-3 rounded-xl font-semibold bg-green-600 text-white hover:bg-green-700 transition shadow-lg">
              Incipere
            </button>
          </motion.div>
        ))}
      </section>

      <section className="text-center mt-32">
        <p className="italic text-sm text-gray-500 dark:text-gray-400">
          * Pretium non includit TVA. Contratus est tacitus renovabilis. Tempus est lux.
        </p>
      </section>
    </main>
  );
}
