import { hygraph } from '@/lib/api';
import ContactItem from '@/molecules/contact-item';
import { ContactsQuery } from 'src/graphql/queries';
import { ContactsConn } from 'src/types';
import styles from './styles.module.scss';

async function getContacts() {
  const data: ContactsConn = await hygraph.request(ContactsQuery);
  return data.contactsConnection.edges;
}

async function Page() {
  const contacts = await getContacts();

  return (
    <section className={styles['contact-page']}>
      <div className={styles.contact}>
        <ul className={styles['contacts-list']}>
          {contacts.map((contact) => (
            <ContactItem key={contact.node.id} contact={contact.node} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Page;
