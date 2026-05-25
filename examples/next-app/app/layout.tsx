import type { Metadata } from 'next';

import { Inter } from 'next/font/google';

import { NextThemeProvider } from '@paalstack/react-ui';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Paalstack React UI — Next.js Example',
  description: 'Built with Paalstack React UI',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <NextThemeProvider>{children}</NextThemeProvider>
      </body>
    </html>
  );
}
