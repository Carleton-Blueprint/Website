import React from 'react';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Providers from '@/lib/providers';
import Navbar from '@/app/_components/Navbar';
import Footer from '@/app/_components/Footer';
import { Toaster } from '@/components/ui/toaster';

import './globals.css';
import 'react-notion-x/src/styles.css';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: 'Carleton Blueprint',
  description: 'Tech for Social Good',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pages = [
    { name: 'Projects', href: '/projects' },
    { name: 'Events', href: '/events' },
    { name: 'Students', href: '/students' },
    { name: 'Contact', href: '/contact' },
  ];
  return (
    <html lang="en">
      <Providers>
        <body className={`${poppins.className}`}>
          <Navbar pages={pages} />
          {children}
          <Toaster />
          <Footer pages={pages} />
        </body>
      </Providers>
    </html>
  );
}
