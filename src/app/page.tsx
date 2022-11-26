import PageTitle from '@/atoms/page-title';
import { hygraph } from '@/lib/api';
import { RichText } from '@graphcms/rich-text-react-renderer';
import { Bio } from 'src/types';
import styles from './styles.module.scss';

async function getBio() {
  const data = await hygraph.request<Bio>(
    `
      query Biographies {
        biographiesConnection {
          edges {
            node {
              content {
                raw
              }
            }
          }
        }
      } 
    `,
  );

  return data?.biographiesConnection?.edges[0].node;
}

export default async function Page() {
  const bio = await getBio();

  return (
    <section>
      <PageTitle title="Home" />
      <div className={styles['bio']}>
        <div className={styles['bio-content']}>
          <h1>Gettoknowdavid</h1>
          <RichText
            content={bio.content.raw}
            renderers={{
              p: ({ children }) => <p>{children}</p>,
            }}
          />
        </div>
      </div>
    </section>
  );
}
