'use client';   

import { ProjectSkeleton } from '@/molecules/project-item/project-skeleton';
import styles from './project-list.module.scss';

let skeletons = Array(8).fill(0);

export function ProjectListSkeleton() {
  return (
    <ul className={styles['project-list']}>
      {skeletons.map((_, index) => (
        <ProjectSkeleton key={index} />
      ))}
    </ul>
  );
}
