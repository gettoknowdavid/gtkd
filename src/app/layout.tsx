/* eslint-disable @next/next/no-head-element */
import '../styles/dist.css';
import React from 'react';
import Header from '@/organisms/header';
import '../styles/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
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
