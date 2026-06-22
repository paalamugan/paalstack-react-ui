import type { Metadata } from 'next';

import { Inter } from 'next/font/google';

import { NextThemeProvider } from '@paalstack/react-ui';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Paalstack React UI — Component Showcase',
  description: 'Production-ready Next.js app powered by @paalstack/react-ui',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <NextThemeProvider>
          {children}
        </NextThemeProvider>
      </body>
    </html>
  );
}
