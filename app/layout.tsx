import type { Metadata } from 'next';
import { Chakra_Petch, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const display = Chakra_Petch({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const body = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ARCH//2099 — Your next-gen Linux experience',
  description:
    'ARCH//2099 is a fast, modular, rolling-release Linux distribution built for the next generation of machines. Open, customizable, developer-first.',
  metadataBase: new URL('https://arch2099.onrender.com'),
  openGraph: {
    title: 'ARCH//2099 — Your next-gen Linux experience',
    description: 'Fast by default. Built for builders. Open, modular, customizable.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
