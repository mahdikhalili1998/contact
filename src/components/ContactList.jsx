import ContactItem from "./ContactItem";
function ContactList({ info, deleteHandler }) {
  // console.log(info);
  return (
    <div className="container">
      <h1>Contact List</h1>
      {info.length ? (
        <ContactItem data={info} deleteHandler={deleteHandler} />
      ) : (
        <p>No Contact</p>
      )}
    </div>
  );
}

export default ContactList;
