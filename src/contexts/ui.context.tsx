'use client';

import React from 'react';
import { UIContextT } from 'src/types';

type Props = { children: React.ReactNode };

export const UIContext: React.Context<UIContextT> =
  React.createContext<UIContextT>({
    drawerOpen: false,
    toggleDrawer: () => {},
    closeDrawer: () => {},
  });

const UIContextProvider = (props: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = React.useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const value: UIContextT = React.useMemo<UIContextT>(
    () => ({
      drawerOpen: isOpen,
      toggleDrawer,
      closeDrawer: () => setIsOpen(false),
    }),
    [isOpen, toggleDrawer],
  );

  return (
    <UIContext.Provider value={value}>{props.children}</UIContext.Provider>
  );
};

export default UIContextProvider;
