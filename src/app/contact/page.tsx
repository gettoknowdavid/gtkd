import PageTitle from '@/atoms/page-title';
import type { NextPage } from 'next';

const Page: NextPage = () => {
  return (
    <section>
      <PageTitle title="Contacts" />
      <h1 style={{ fontSize: '2rem', paddingTop: '4rem' }}>Contacts Page</h1>
    </section>
  );
};

export default Page;
