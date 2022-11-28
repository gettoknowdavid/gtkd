'use client';

import React from 'react';
import styles from './styles.module.scss';

type Props = { error: Error; reset: () => void };

export default function Error(props: Props) {
  React.useEffect(() => {
    // Log the error to an error reporting service
    console.error(props.error);
  }, [props.error]);

  return (
    <div className={styles['error']}>
      <div>
        <h1>Something went wrong loading the projects!</h1>
        {/* <button onClick={() => props.reset()}>Reset error boundary</button> */}
      </div>
    </div>
  );
}
