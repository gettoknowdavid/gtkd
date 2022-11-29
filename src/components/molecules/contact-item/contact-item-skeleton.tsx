import Skeleton from '@/atoms/skeletons';
import styles from './contact-item.module.scss';

export function ContactItemSkeleton() {
  return (
    <li className={styles['contact-item']}>
      <a>
        <h1>
          <Skeleton className={styles['skeleton-title']} />
        </h1>
      </a>
    </li>
  );
}
