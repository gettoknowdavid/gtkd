/* eslint-disable @next/next/no-head-element */
import Header from '@/organisms/header';
import { Poppins } from '@next/font/google';
import React from 'react';
import '../styles/dist.css';
import styles from './styles.module.scss';

type Props = { children: React.ReactNode };

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '900'],
  variable: '--font-poppins',
  subsets: ['latin'],
});

export default function RootLayout(props: Props) {
  return (
    <html lang="en" className={`${poppins.variable} font-sans`}>
      <body>
        <div className={styles['layout']}>
          <Header />
          {/* <Frame /> */}
          <main className={styles['main-content']}>
            <div className={styles['inner-content']}>{props.children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
