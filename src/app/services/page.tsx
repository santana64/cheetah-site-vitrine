'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const services = [
  {
    title: 'Budgetum Lucet',
    desc: 'Claritas in expensis et directione strategica.',
  },
  {
    title: 'Calendarium Regit Ritum',
    desc: 'Tempus ordinatum pro decisionibus efficacibus.',
  },
  {
    title: 'Designum Sine Frictione',
    desc: 'Processus creativi sine obstaculis, sine mora.',
  },
  {
    title: 'Verbum Ducit ad Actum',
    desc: 'Cogitationes fiunt realitas in conventibus nostris.',
  },
];

export default function Services() {
  const sphereRef = useRef(null);

  useEffect(() => {
    gsap.to(sphereRef.current, {
      rotation: 360,
      repeat: -1,
      ease: 'linear',
      duration: 90,
    });
  }, []);

  return (
    <main className="bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-gray-100 overflow-hidden">
      {/* ACTE I */}
      <section className="relative text-center py-32 px-6 md:px-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-black tracking-tight"
        >
          Initium Temporis
        </motion.h1>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Nosce Cheetah Soft — ars temporis, ratio et consilium.
        </p>
        <div ref={sphereRef} className="absolute top-10 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-gradient-to-br from-orange-400 to-green-500 rounded-full opacity-10 blur-3xl"></div>
      </section>

      {/* ACTE II */}
      <section className="py-28 px-8 md:px-20 bg-white dark:bg-black relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-lg dark:bg-white/5 border border-white/10 dark:border-white/10 p-8 rounded-2xl shadow-2xl hover:shadow-green-500/30 transition duration-300"
            >
              <h3 className="text-2xl font-bold text-green-600 dark:text-green-300 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ACTE III */}
      <section className="bg-gradient-to-br from-green-100 to-orange-100 dark:from-gray-900 dark:to-gray-800 py-32 text-center relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-extrabold max-w-2xl mx-auto leading-tight"
        >
          &ldquo;In sessione, sapientia floret. Verbum ducit ad actum.&rdquo;
        </motion.div>
      </section>

      {/* ACTE IV */}
      <section className="py-24 px-10 md:px-20 bg-white dark:bg-black">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {['Tempus Manager', 'Designus Ordo', 'Structura Nexus', 'Fluxum Praedictum'].map((title, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-white/10 dark:bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-lg text-center"
            >
              <div className="text-xl font-bold mb-2 text-orange-600 dark:text-orange-300">{title}</div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Modulorum visus integrata cum linea datae animata.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ACTE V */}
      <section className="bg-gradient-to-t from-green-500 to-orange-400 text-white py-32 text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-black mb-6"
        >
          Per nos, futurum regitur.
        </motion.h2>
        <Link
          href="/contact"
          className="inline-block bg-white text-orange-600 font-bold px-8 py-3 rounded-full shadow-xl hover:scale-105 transition"
        >
          Ad gradum proximum
        </Link>
      </section>
    </main>
  );
}
