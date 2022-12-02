'use client';

import { ContactItemSkeleton } from '@/molecules/contact-item/contact-item-skeleton';
import styles from './styles.module.scss';

let skeletons = Array(5).fill(0);

function ContactLoading() {
  return (
    <section className={styles['contact-page']}>
      <div className={styles['contact']}>
        <ul className={styles['contacts-list']}>
          {skeletons.map((_, index) => (
            <ContactItemSkeleton key={index} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ContactLoading;
