import ProjectItem from '@/molecules/project-item';
import { LinkT } from 'src/types';
import styles from './project-list.module.scss';

type Props = {
  projects: {
    node: {
      id: string;
      title: string;
      description: string;
      frameworks: string;
      links: LinkT[];
    };
  }[];
};

function ProjectList(props: Props) {
  return (
    <div>
      <ul className={styles['project-list']}>
        {props.projects.map((project) => (
          <ProjectItem key={project.node.id} project={project.node} />
        ))}
      </ul>
    </div>
  );
}

export default ProjectList;
