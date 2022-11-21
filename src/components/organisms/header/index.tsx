'use client';

import Hamburger from '@/atoms/hamburger';
import { NAV_ITEMS } from '@/lib/nav_items';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './header.module.scss';

function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <Link href={'/'} className={styles['logo-div']}>
        <h1>gtkd</h1>
      </Link>

      <Hamburger />

      <ul className={styles.navList}>
        {NAV_ITEMS.map((item) => {
          const isActive = item.slug === pathname;

          return (
            <Link
              key={item.id}
              href={item.slug}
              className={styles[isActive ? 'active-list-item' : 'list-item']}
            >
              {item.id === 0 ? '' : item.title}
            </Link>
          );
        })}
      </ul>
    </header>
  );
}

export default Header;
