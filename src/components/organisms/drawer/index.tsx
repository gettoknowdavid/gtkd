'use client';

import { UIContext } from '@/contexts/ui.context';
import { NAV_ITEMS } from '@/lib/nav_items';
import { gsap } from 'gsap';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import styles from './drawer.module.scss';

function Drawer() {
  const pathname = usePathname();

  const { drawerOpen, toggleDrawer } = React.useContext(UIContext);

  let list = React.useRef<any>([]);

  React.useEffect(() => {
    gsap.fromTo(
      list.current,
      { alpha: 0, y: 20 },
      { alpha: 1, y: 0, stagger: 0.1 },
    );
  });

  return (
    <nav className={styles[drawerOpen ? 'drawer-open' : 'drawer-closed']}>
      <ul className={styles['list']}>
        {NAV_ITEMS.map((item, index) => {
          const isActive = item.slug === pathname;

          return (
            <Link
              id="link"
              key={item.id}
              href={item.slug}
              className={styles[isActive ? 'active-list-item' : 'list-item']}
              ref={(e) => (list.current[index] = e)}
              onClick={toggleDrawer}
            >
              {item.title}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
}

export default Drawer;
