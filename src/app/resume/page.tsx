import ResumeSectionTitle from '@/atoms/resume-section-title';
import { hygraph } from '@/lib/api';
import EducationItem from '@/molecules/education-item';
import ExperienceItem from '@/molecules/experience-item';
import { RichText } from '@graphcms/rich-text-react-renderer';
import { ResumeQuery } from 'src/graphql/queries/resume.query';
import { ResumeConn } from 'src/types';
import styles from './styles.module.scss';

async function getResume() {
  const data: ResumeConn = await hygraph.request(ResumeQuery);
  return data.resumesConnection.edges[0].node;
}

async function Page() {
  const resume = await getResume();

  return (
    <section className={styles['resume-page']}>
      <div className={styles['resume']}>
        <div className={styles['resume-content']}>
          <h1 className={styles['name']}>{resume.fullName}</h1>
          <div className={styles['divider']} />

          <div className={styles['contact']}>
            <RichText
              content={resume.contact.raw}
              renderers={{
                p: ({ children }) => <p className={styles.p}>{children}</p>,
                ul: ({ children }) => <ul className={styles.ul}>{children}</ul>,
                li: ({ children }) => <li className={styles.li}>{children}</li>,
                a: ({ children }) => <a className={styles.a}>{children}</a>,
              }}
            />
          </div>

          <ResumeSectionTitle title={resume.jobTitle} textCenter />
          <div className={styles['main-skills']}>
            <RichText
              content={resume.mainSkills.raw}
              renderers={{
                p: ({ children }) => <p className={styles.p}>{children}</p>,
                ul: ({ children }) => <ul className={styles.ul}>{children}</ul>,
                li: ({ children }) => <li className={styles.ms}>{children}</li>,
              }}
            />
          </div>
          <p className={styles.summary}>{resume.summary}</p>

          <ResumeSectionTitle title="Work Experience and Projects" />
          <ul className={styles['resume-experience-list']}>
            {resume.experiences.map((ex) => (
              <ExperienceItem key={ex.id} experience={ex} />
            ))}
          </ul>

          <ResumeSectionTitle title="Education" />
          <ul className={styles['resume-list']}>
            {resume.educations.map((ed) => (
              <EducationItem key={ed.id} education={ed} />
            ))}
          </ul>

          <ResumeSectionTitle title="Professional Skills" />
          <div className={styles['professional-skills']}>
            <RichText
              content={resume.professionalSkills.raw}
              renderers={{
                p: ({ children }) => <p className={styles.p}>{children}</p>,
                ul: ({ children }) => <ul className={styles.b}>{children}</ul>,
                li: ({ children }) => <li className={styles.bi}>{children}</li>,
              }}
            />
          </div>

          <ResumeSectionTitle title="Volunteer Experience" />
          <div className={styles['volunteer-skills']}>
            <ul className={styles['resume-list']}>
              {resume.volunteerExperiences.map((vd) => (
                <ExperienceItem key={vd.id} experience={vd} />
              ))}
            </ul>
          </div>

          <ResumeSectionTitle title="Languages" />
          <div className={styles['languages']}>
            <RichText
              content={resume.languages.raw}
              renderers={{
                p: ({ children }) => <p className={styles.p}>{children}</p>,
                ul: ({ children }) => <ul className={styles.b}>{children}</ul>,
                li: ({ children }) => <li className={styles.bi}>{children}</li>,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;
