import './globals.css';
import { Manrope, IBM_Plex_Mono } from 'next/font/google';
import { ReactNode } from 'react';
import { Header } from '@/components/Header';
import Footer from '@/components/Footer';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-plex-mono',
  weight: ['400', '500', '600'],
  display: 'swap',
});

export const metadata = {
  title: 'Cheetah — Contrôle de Coûts & Pilotage de Projets BTP',
  description:
    "SaaS B2B de contrôle de coûts, planification et gestion documentaire pour les PME/ETI en BTP, infrastructure et maîtrise d'ouvrage. Méthode FGF, 100% hébergé en France.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${manrope.variable} ${plexMono.variable} font-sans bg-cheetah-cream text-gray-900 antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
