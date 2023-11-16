import React, { useState } from "react";
import inputs from "../constant info/input";

function Input() {
  const [alert, setAlert] = useState("");

  const [selected, setSelected] = useState({
    name: "",
    lastname: "",
    phone: "",
    email: "",
  });

  const [contact, setContact] = useState([]);

  const changeHandler = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setSelected((selected) => ({ ...selected, [name]: value }));
  };

  const saveHandler = () => {
    if (
      !selected.name ||
      !selected.lastname ||
      !selected.email ||
      !selected.phone
    ) {
      setAlert("please enter valid data");
      return;
    }
    setAlert("");
    setContact((contact) => [...contact, selected]);
    console.log(contact);
    setSelected({ name: "", lastname: "", phone: "", email: "" });
  };

  return (
    <>
      <div>
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
        <button onClick={saveHandler}>Save contact</button>
      </div>
      <div>{alert && <p>{alert}</p>}</div>
    </>
  );
}

export default Input;
