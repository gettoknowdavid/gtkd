'use client';

import Skeleton from '@/atoms/skeletons';
import styles from './project-item.module.scss';

export function ProjectSkeleton() {
  return (
    <li className={styles['project-item']}>
      <div>
        <div>
          <div className={styles['links-large']}>
            <Skeleton className={styles['skeleton-link']} />
          </div>
          <h1>
            <Skeleton className={styles['skeleton-title']} />
          </h1>
        </div>
        <div>
          <p>
            <Skeleton className={styles['skeleton-desc']} />
          </p>
        </div>
        <small className={styles['frameworks']}>
          <p>
            <Skeleton className={styles['skeleton-frameworks']} />
          </p>
        </small>
        <div className={styles['links-small']}>
          <Skeleton className={styles['skeleton-link-small']} />
        </div>
      </div>
    </li>
  );
}
