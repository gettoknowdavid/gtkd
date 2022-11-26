import type { NextPage } from 'next';
import styles from './styles.module.scss';

const Page: NextPage = () => {
  return (
    <section className={styles['home-section']}>
      <div className={styles['column']} />
      <div className={styles['column']}>
        <h1 className={styles['name']}>
          About
          <br />
          me
        </h1>
      </div>
    </section>
  );
};

export default Page;
