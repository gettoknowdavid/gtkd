/* eslint-disable @next/next/no-head-element */
import Drawer from '@/organisms/drawer';
import Header from '@/organisms/header';
import { Poppins } from '@next/font/google';
import React from 'react';
import AppContextProvider from '../contexts';
import '../styles/dist.css';

type Props = { children: React.ReactNode };

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '900'],
  variable: '--font-poppins',
  subsets: ['latin'],
});

export default function RootLayout(props: Props) {
  return (
    <html lang="en" className={`${poppins.variable} font-sans`}>
      {/* <head></head> */}
      <body>
        <AppContextProvider>
          <main>
            <Header />
            <Drawer />
            {props.children}
          </main>
        </AppContextProvider>
      </body>
    </html>
  );
}
