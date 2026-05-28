'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-cheetah-green-dark text-white relative overflow-hidden">
      {/* Speed lines decoration */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          background: 'repeating-linear-gradient(-62deg, transparent, transparent 18px, rgba(86,164,91,1) 18px, rgba(86,164,91,1) 20px)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-5">
            {/* Real logo */}
            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-cheetah-green/25 bg-white">
              <Image
                src="/logo-cheetahsoft.jpg"
                alt="CheetahSoft logo"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="text-white font-black text-lg tracking-tight">CheetahSoft</div>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="w-8 h-px bg-gradient-to-r from-cheetah-green to-cheetah-orange opacity-70" />
                <span className="text-cheetah-orange text-[9px] font-bold tracking-[0.28em] uppercase">COST · TIME · DOC</span>
              </div>
            </div>
          </div>
          <p className="text-white/50 text-sm leading-relaxed mb-5">
            SaaS de contrôle de coûts et pilotage de projets pour PME/ETI en BTP, infrastructure et maîtrise d&apos;ouvrage.
          </p>
          <div className="inline-flex items-center gap-2 bg-cheetah-green/10 border border-cheetah-green/20 rounded-lg px-3 py-2">
            <span className="text-lg">🇫🇷</span>
            <span className="text-white/60 text-xs font-medium">Hébergé en France · RGPD</span>
          </div>
        </div>

        {/* Modules */}
        <div>
          <div className="label-tag mb-4" style={{ color: '#56a45b' }}>Modules</div>
          <ul className="space-y-2.5">
            {['Cheetah Cost', 'Cheetah Time', 'Cheetah Doc'].map((m) => (
              <li key={m}>
                <a href="#modules" className="text-white/50 hover:text-cheetah-green text-sm transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-cheetah-green/40 group-hover:bg-cheetah-green transition-colors" />
                  {m}
                </a>
              </li>
            ))}
            <li>
              <a href="#methode" className="text-white/50 hover:text-cheetah-green text-sm transition-colors flex items-center gap-2 group">
                <span className="w-1 h-1 rounded-full bg-cheetah-green/40 group-hover:bg-cheetah-green transition-colors" />
                Méthode FGF
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <div className="label-tag mb-4" style={{ color: '#56a45b' }}>Entreprise</div>
          <ul className="space-y-2.5">
            {[
              { href: '#securite', label: 'Sécurité' },
              { href: '#tarifs', label: 'Tarifs & SLA' },
              { href: '#contact', label: 'Contact' },
              { href: '/a-propos', label: 'À propos', link: true },
            ].map((item) => (
              <li key={item.label}>
                {item.link ? (
                  <Link href={item.href} className="text-white/50 hover:text-cheetah-green text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-cheetah-green/40 group-hover:bg-cheetah-green transition-colors" />
                    {item.label}
                  </Link>
                ) : (
                  <a href={item.href} className="text-white/50 hover:text-cheetah-green text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-cheetah-green/40 group-hover:bg-cheetah-green transition-colors" />
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Legal + Certifs */}
        <div>
          <div className="label-tag mb-4" style={{ color: '#56a45b' }}>Légal</div>
          <ul className="space-y-2.5 mb-6">
            {[
              { href: '/legal', label: 'Mentions légales' },
              { href: '/confidentialite', label: 'Confidentialité' },
              { href: '/cgu', label: 'CGU / CGV' },
            ].map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="text-white/50 hover:text-cheetah-green text-sm transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-cheetah-green/40 group-hover:bg-cheetah-green transition-colors" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="p-3 rounded-lg bg-cheetah-green/8 border border-cheetah-green/15">
            <p className="text-white/35 text-xs leading-relaxed">
              Données hébergées sur serveurs certifiés HDS, exclusivement en France.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-cheetah-green/10 py-5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full overflow-hidden bg-white ring-1 ring-cheetah-green/20">
              <Image src="/logo-cheetahsoft.jpg" alt="" width={24} height={24} className="w-full h-full object-cover" />
            </div>
            <p className="text-white/25 text-xs">© 2026 CheetahSoft. Tous droits réservés.</p>
          </div>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            {['TLS 1.3', 'AES-256', 'RGPD/CNIL', 'HDS France', 'ISO 27001'].map((tag, i) => (
              <span key={tag} className="text-white/20 text-xs">
                {i > 0 && <span className="mr-4">·</span>}{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
