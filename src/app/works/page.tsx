import { hygraph } from '@/lib/api';
import ProjectList from '@/organisms/project-list';
import { ProjectsQuery } from 'src/graphql/queries/projects.query';
import { ProjectConn } from 'src/types';
import styles from './styles.module.scss';

async function getProjects() {
  const data: ProjectConn = await hygraph.request(ProjectsQuery);
  return data.projectsConnection.edges;
}

async function Page() {
  const projects = await getProjects();

  return (
    <section className={styles['works-page']}>
      <div className={styles['works']}>
        <ProjectList projects={projects} />
      </div>
    </section>
  );
}

export default Page;
