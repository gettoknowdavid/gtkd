import { ProjectT } from 'src/types';
import { ProjectItemLinks } from './project-item-links';
import styles from './project-item.module.scss';

type Props = { project: ProjectT };

function ProjectItem(props: Props) {
  return (
    <li className={styles['project-item']}>
      <div>
        <div>
          <div className={styles['links-large']}>
            <ProjectItemLinks project={props.project} />
          </div>
          <h1>{props.project.title}</h1>
        </div>
        <div>
          <p>{props.project.description}</p>
        </div>
        <small className={styles['frameworks']}>
          {props.project.frameworks.replaceAll(',', ' ~ ')}
        </small>
        <div className={styles['links-small']}>
          <ProjectItemLinks project={props.project} />
        </div>
      </div>
    </li>
  );
}

export default ProjectItem;
