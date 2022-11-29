'use client';

import Skeleton from '@/atoms/skeletons';
import styles from './styles.module.scss';

function Loading() {
  return (
    <section className={styles['resume-page']}>
      <div className={styles['resume']}>
        <Skeleton className={styles['skeleton']} />
      </div>
    </section>
  );
}

export default Loading;
