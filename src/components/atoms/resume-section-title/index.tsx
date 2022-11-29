import styles from './resume-section-title.module.scss';

type ResumeSectionTitleProps = { title: string; textCenter?: boolean };

export default function ResumeSectionTitle(props: ResumeSectionTitleProps) {
  return (
    <div
      className={
        styles[props.textCenter ? 'section-title-center' : 'section-title-left']
      }
    >
      <h2>{props.title}</h2>
      <div className={styles['divider']} />
    </div>
  );
}
