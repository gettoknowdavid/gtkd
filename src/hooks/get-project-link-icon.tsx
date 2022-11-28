import { LinkT } from 'src/types';
import Image from 'next/image';
import live from '../../public/live.png';
import git from '../../public/git.png';
import pkg from '../../public/package.png';

export const getProjectLinkIcon = (link: LinkT) => {
  switch (link.title) {
    case 'Live':
      return <Image src={live} alt="Live icon" />;
    case 'Code':
      return <Image src={git} alt="Git icon" />;
    case 'Package':
      return <Image src={pkg} alt="Package icon" />;
    default:
      return null;
  }
};
