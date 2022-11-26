'use client';

import React from 'react';
import styles from './page-title.module.scss';

type Props = { title: string };

function PageTitle(props: Props) {
  return (
    <div className={styles['placeholder']}>
      <h1>{props.title}</h1>
    </div>
  );
}

export default PageTitle;
