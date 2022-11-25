'use client';

import { NAV_ITEMS } from '@/lib/nav_items';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './header.module.scss';

function Header() {
  const pathname = usePathname();

  return (
    <header className={styles['header']}>
      <Link href={'/'} className={styles['logo-div']}>
        <h1>David Michael II</h1>
        <p>Frontend Developer</p>
      </Link>

      <ul className={styles['nav-list']}>
        {NAV_ITEMS.map((item) => {
          const isActive = item.slug === pathname;

          return (
            <Link
              key={item.id}
              href={item.slug}
              className={styles[isActive ? 'active-list-item' : 'list-item']}
            >
              {item.title}
            </Link>
          );
        })}
      </ul>
    </header>
  );
}

export default Header;
