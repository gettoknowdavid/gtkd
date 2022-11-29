'use client';

import { RichText } from '@graphcms/rich-text-react-renderer';
import { dateFormat } from 'src/hooks/date-formatter';
import { ExperienceT } from 'src/types';
import styles from './experience-item.module.scss';

function ExperienceItem({ experience }: { experience: ExperienceT }) {
  return (
    <li className={styles['experience-item']}>
      <div>
        <div>
          <span>{experience.title}</span> -{' '}
          <span className={styles.location}> {experience.location}</span>
        </div>
        <div className={styles.date}>
          <span className={styles.start}>
            {dateFormat(experience.startDate)}
          </span>
          -
          <span className={styles.end}>
            {dateFormat(experience.endDate) ?? 'Present'}
          </span>
        </div>
      </div>
      <p className={styles['job-title']}>{experience.jobTitle}</p>
      {experience.summary && (
        <p className={styles.summary}>{experience.summary}</p>
      )}
      <div className={styles['resume-bullets']}>
        <RichText
          content={experience.bullets.raw}
          renderers={{
            p: ({ children }) => <p className={styles.p}>{children}</p>,
            ul: ({ children }) => <ul className={styles.b}>{children}</ul>,
            li: ({ children }) => <li className={styles.bi}>{children}</li>,
          }}
        />
      </div>
    </li>
  );
}

export default ExperienceItem;
