import { ContactT } from 'src/types';
import styles from './contact-item.module.scss';

function ContactItem({ contact }: { contact: ContactT }) {
  return (
    <li className={styles['contact-item']}>
      <a href={contact.link} target="_blank">
        <h1>{contact.title}</h1>
      </a>
    </li>
  );
}

export default ContactItem;
