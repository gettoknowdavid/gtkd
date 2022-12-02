import { ProjectListSkeleton } from '@/organisms/project-list/project-list-skeleton';
import styles from './styles.module.scss';

function WorksLoading() {
  return (
    <section className={styles['works-page']}>
      <div className={styles['works']}>
        <div>
          <ProjectListSkeleton />
        </div>
      </div>
    </section>
  );
}

export default WorksLoading;
