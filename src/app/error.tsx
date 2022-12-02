'use client';

import React from 'react';
import styles from './styles.module.scss';

type Props = { error: Error; reset: () => void };

export default function Error(props: Props) {
 

  return (
    <section>
      <div className={styles['error-page']}>
        <div className={styles['error']}>
          <h1>
            Oops. Something
            <br />
            doesn't feel right
          </h1>
          <p>
            Looks like an error in loading the page or something else. Please
            try again.
          </p>
        </div>
      </div>
    </section>
  );
}
