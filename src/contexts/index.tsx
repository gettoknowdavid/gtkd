'use client';

import React from 'react';
import UIContextProvider from './ui.context';

type Props = { children: React.ReactNode };

export default function AppContextProvider(props: Props) {
  return <UIContextProvider>{props.children}</UIContextProvider>;
}
