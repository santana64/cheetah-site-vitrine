'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import Link from 'next/link';

const products = [
  {
    title: 'Cheetah Cost',
    description: 'Optimisation des coûts en temps réel.',
    icon: '📊',
    link: '/produits/cheetah-cost',
  },
  {
    title: 'Cheetah Doc',
    description: 'Gestion documentaire automatisée.',
    icon: '📝',
    link: '/produits/cheetah-doc',
  },
  {
    title: 'Cheetah AI',
    description: 'Intelligence prédictive au service de votre entreprise.',
    icon: '🤖',
    link: '/produits/cheetah-ai',
  },
  {
    title: 'Cheetah Sign',
    description: 'Signature électronique ultra fluide.',
    icon: '✍️',
    link: '/produits/cheetah-sign',
  },
];

export default function ProduitsPage() {
  const blobRef = useRef(null);

  useEffect(() => {
    gsap.to(blobRef.current, {
      duration: 10,
      rotate: 360,
      repeat: -1,
      ease: 'linear',
      transformOrigin: '50% 50%'
    });
  }, []);

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-[#fdfcfb] via-[#f8f8f8] to-[#f1f1f1] dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 text-gray-900 dark:text-white px-6 pt-32 pb-20 overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-extrabold text-center mb-10 z-10 relative"
      >
        🌈 Nos Produits Exceptionnels
      </motion.h1>

      <svg
        ref={blobRef}
        className="absolute top-[-150px] right-[-150px] w-[500px] h-[500px] opacity-30 z-0"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#f97316" />
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="40" fill="url(#grad)" />
      </svg>

      <section className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
        {products.map((product, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
          >
            <Link href={product.link} className="block">
              <div className="relative p-6 rounded-3xl backdrop-blur-md bg-white/30 dark:bg-white/10 border border-white/20 shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_60px_rgba(249,115,22,0.2)] transition-all duration-300 group overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-green-400 via-orange-400 to-yellow-400 rounded-full opacity-20 blur-3xl group-hover:scale-125 transition-transform"></div>
                <div className="text-5xl text-center drop-shadow-md mb-4 animate-pulse">
                  {product.icon}
                </div>
                <h3 className="text-xl font-bold text-center text-green-700 dark:text-green-400 mb-2">
                  {product.title}
                </h3>
                <p className="text-sm text-center text-gray-600 dark:text-gray-300">
                  {product.description}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </section>
    </main>
  );
}