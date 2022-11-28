'use client';

import { getProjectLinkIcon } from 'src/hooks/get-project-link-icon';
import { ProjectT } from 'src/types';

type Props = { project: ProjectT };

export function ProjectItemLinks(props: Props) {
  return (
    <ul>
      {props.project.links.map((link) => (
        <li key={link.id}>
          <a href={link.url} target="_blank" rel="noreferer">
            {getProjectLinkIcon(link)}
            {link.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
