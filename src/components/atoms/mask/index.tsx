import React from 'react';
import styles from './mask.module.scss';

function Mask() {
  return (
    <div className={styles['mask']}>
      <div className={styles['top']}></div>
      <div className={styles['bottom']}></div>
    </div>
  );
}

export default Mask;
