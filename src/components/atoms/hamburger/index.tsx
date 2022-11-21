'use client';

import { UIContext } from '@/contexts/ui.context';
import { gsap } from 'gsap';
import { Divide as Icon } from 'hamburger-react';
import React from 'react';
import styles from './hamburger.module.scss';

function Hamburger() {
  const { toggleDrawer, drawerOpen } = React.useContext(UIContext);

  const ctx = gsap.context(() => {});

  let line = React.useRef<any>(null);
  let text = React.useRef<any>(null);

  React.useLayoutEffect(() => {
    return () => ctx.revert();
  }, []);

  React.useLayoutEffect(() => {
    ctx.add(() => {
      gsap.to(line.current, { width: drawerOpen ? '100%' : 0 });
      gsap.to(text.current, { color: drawerOpen ? 'black' : 'white' });
    });
  }, [drawerOpen]);

  return (
    <div className={styles['hamburger-div']} onClick={toggleDrawer}>
      <h1 ref={text}>{drawerOpen ? 'Close' : 'Menu'}</h1>
      <div className={styles['drawer-toggle']}>
        <Icon
          toggled={drawerOpen}
          toggle={toggleDrawer}
          size={18}
          color={drawerOpen ? 'black' : 'white'}
          hideOutline
        />
      </div>
      <div ref={line} className={styles['div-animate']} />
    </div>
  );
}

export default Hamburger;
