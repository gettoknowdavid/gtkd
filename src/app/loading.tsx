'use client';

import Skeleton from '@/atoms/skeletons';
import styles from './styles.module.scss';

function Loading() {
  return (
    <section>
      <div className={styles['bio']}>
        <div className={styles['bio-content']}>
          <h1>
            <Skeleton className={styles['skeleton-name']} />
          </h1>
          <Skeleton className={styles['skeleton-bio']} />
        </div>
      </div>
    </section>
  );
}

export default Loading;
