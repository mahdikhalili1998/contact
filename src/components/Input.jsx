import { useState } from "react";
import inputs from "../constant info/input";
import ContactList from "./ContactList";
import styles from "./input.module.css";
import { v4 } from "uuid";

function Input() {
  const [alert, setAlert] = useState("");
  const [selected, setSelected] = useState({
    id: "",
    name: "",
    lastname: "",
    phone: "",
  });

  const [contact, setContact] = useState(
    JSON.parse(localStorage.getItem("data")) || []
  );

  // console.log(contact);
  const changeHandler = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setSelected((selected) => ({ ...selected, [name]: value }));
  };

  const deleteHandler = (id) => {
    const afterdelet = contact.filter((item) => item.id !== id);
    setContact(afterdelet);
    localStorage.setItem("data", JSON.stringify(afterdelet));
  };

  const saveToLocal = (contact) => {
    console.log(contact);
    localStorage.setItem("data", JSON.stringify(contact));
  };
  saveToLocal(contact);

  const saveHandler = () => {
    if (!selected.name || !selected.lastname || !selected.phone) {
      setAlert("Please enter valid data");
      return;
    }
    setAlert("");
    const idGenerator = { ...selected, id: v4() };
    setContact((contact) => [...contact, idGenerator]);
    setSelected({ name: "", lastname: "", phone: "" });
    // console.log(contact);
  };

  return (
    <div className={styles.container}>
      {inputs.map((item, index) => (
        <input
          className={styles.input}
          key={index}
          type={item.type}
          placeholder={item.placeholder}
          name={item.name}
          value={selected[item.name]}
          onChange={changeHandler}
        />
      ))}

      <button className={styles.button} onClick={saveHandler}>
        Save contact
      </button>

      <div className={styles.alert} >{alert && <p>{alert}</p>}</div>
      <ContactList info={contact} deleteHandler={deleteHandler} />
    </div>
  );
}

export default Input;
