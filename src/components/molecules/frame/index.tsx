'use client';

import React from 'react';
import styles from './frame.module.scss';

function Frame() {
  return (
    <div className={styles['frame']}>
      <div className={styles['frame-line-top']} />
      <div className={styles['frame-line-right']} />
      <div className={styles['frame-line-bottom']} />
      <div className={styles['frame-line-left']} />
    </div>
  );
}

export default Frame;
