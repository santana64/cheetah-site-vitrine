'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '#modules', label: 'Modules' },
  { href: '#methode', label: 'Méthode FGF' },
  { href: '#securite', label: 'Sécurité' },
  { href: '#tarifs', label: 'Tarifs' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cheetah-green-dark/95 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-cheetah-green/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          {/* Logo image — circular */}
          <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-cheetah-green/30 group-hover:ring-cheetah-green/60 transition-all duration-300 bg-white">
            <Image
              src="/logo-cheetahsoft.jpg"
              alt="CheetahSoft logo"
              width={40}
              height={40}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          {/* Wordmark */}
          <div className="flex flex-col leading-none">
            <span className="text-white font-black text-lg tracking-tight group-hover:text-[#7ddf83] transition-colors duration-300">
              CheetahSoft
            </span>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="w-8 h-px bg-gradient-to-r from-cheetah-green to-cheetah-orange opacity-70" />
              <span className="text-cheetah-orange text-[9px] font-bold tracking-[0.28em] uppercase opacity-90">
                COST · TIME · DOC
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/70 hover:text-white text-sm font-medium transition-all duration-200 hover:text-cheetah-green relative group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-cheetah-green group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="relative bg-cheetah-green hover:bg-cheetah-green-mid text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-all duration-200 hover:scale-105 glow-green overflow-hidden group"
          >
            <span className="relative z-10">Demander une démo</span>
            <span className="absolute inset-0 bg-gradient-to-r from-cheetah-green to-cheetah-green-mid opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-2 hover:text-cheetah-green transition-colors"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-cheetah-green-dark border-t border-cheetah-green/20 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-white/80 hover:text-white hover:bg-cheetah-green/10 px-4 py-3 rounded-lg transition-colors text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-3 bg-cheetah-green text-white text-center font-bold px-5 py-3 rounded-lg"
              >
                Demander une démo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
