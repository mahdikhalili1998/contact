import ContactItem from "./ContactItem";
import styles from "./list.module.css";
function ContactList({ info, deleteHandler }) {
  // console.log(info);
  return (
    <div className={styles.list}>
      {info.length ? (
        <ContactItem data={info} deleteHandler={deleteHandler} />
      ) : (
        <p className={styles.nocontact}>No Contact Yet !</p>
      )}
    </div>
  );
}

export default ContactList;
