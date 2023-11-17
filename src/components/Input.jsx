import { useState } from "react";
import inputs from "../constant info/input";
import ContactList from "./ContactList";
import styles from "./input.module.css";
import { v4 } from "uuid";

function Input() {
  // const people = JSON.parse(localStorage.getItem("data")) || contact;

  const [alert, setAlert] = useState("");

  const [selected, setSelected] = useState({
    id: "",
    name: "",
    lastname: "",
    phone: "",
  });

  const [contact, setContact] = useState([]);

  const changeHandler = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setSelected((selected) => ({ ...selected, [name]: value }));
  };

  const deleteHandler = (id) => {
    const afterdelet = contact.filter((item) => item.id !== id);
    setContact(afterdelet);
    saveToLocal();
  };

  const showDisplay = () => {
    const toArry = [];
    toArry.push(selected);
    console.log(toArry);
    // const mapselected = toArry.map((item) => {
    //   console.log(item);
    //   const newData = {
    //     name: item.name,
    //     lastname: item.lastname,
    //     phone: item.phone,
    //     id: v4(),
    //   };
    //   return;
    // });
  };
  const saveHandler = () => {
    if (!selected.name || !selected.lastname || !selected.phone) {
      setAlert("please enter valid data");
      return;
    }
    setAlert("");
    const idGenerator = { ...selected, id: v4() };
    showDisplay();
    setContact((contact) => [...contact, idGenerator]);
    setSelected({ name: "", lastname: "", phone: "" });
  };

  return (
    <div className={styles.container}>
      {inputs.map((item, index) => (
        <input
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

      <div>{alert && <p>{alert}</p>}</div>
      <ContactList info={contact} deleteHandler={deleteHandler} />
    </div>
  );
}

export default Input;
