import { hygraph } from '@/lib/api';
import { RichText } from '@graphcms/rich-text-react-renderer';
import { BiographiesQuery } from 'src/graphql/queries';
import { Bio } from 'src/types';
import styles from './styles.module.scss';

async function getBiography() {
  const data: Bio = await hygraph.request<Bio>(BiographiesQuery);
  return data.biographiesConnection?.edges[0].node;
}

export default async function Page() {
  const bio = await getBiography();

  return (
    <section>
      <div className={styles['bio']}>
        <div className={styles['bio-content']}>
          <h1>Gettoknowdavid</h1>
          <RichText content={bio.content.raw} />
        </div>
      </div>
    </section>
  );
}
