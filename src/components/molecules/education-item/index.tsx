'use client';

import { schoolDateFormat } from 'src/hooks/date-formatter';
import { EducationT } from 'src/types';
import styles from './education-item.module.scss';

function EducationItem({ education }: { education: EducationT }) {
  return (
    <li className={styles['education-item']}>
      <div>
        <span className={styles.school}>{education.school} </span>-
        <span className={styles.location}>
          {' '}
          {education.city}, {education.country}
        </span>
      </div>
      <div>
        <span>{education.degree} </span>–
        <span>
          {' '}
          {education.field}
          {', '}
          {schoolDateFormat(education.completionDate)}
        </span>
      </div>
    </li>
  );
}

export default EducationItem;
