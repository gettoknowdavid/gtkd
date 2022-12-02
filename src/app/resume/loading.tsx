'use client';

import Skeleton from '@/atoms/skeletons';
import styles from './styles.module.scss';

function ResumeLoading() {
  return (
    <section className={styles['resume-page']}>
      <div className={styles['resume']}>
        <Skeleton className={styles['skeleton']} />
      </div>
    </section>
  );
}

export default ResumeLoading;
