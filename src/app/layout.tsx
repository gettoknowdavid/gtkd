/* eslint-disable @next/next/no-head-element */
import '../styles/dist.css';
import React from 'react';
import Header from '@/organisms/header';
import { Poppins } from '@next/font/google';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} font-sans`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <main>
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
