import React, { useState } from "react";

function Input() {
  const [selected, setSelected] = useState({
    name: "",
    lastname: "",
    phone: "",
    email: "",
  });
  const changeHandler = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    console.log({ name, value });
    setSelected(selected=>)
  };
  return (
    <div>
      <input
        placeholder="name"
        type="text"
        onChange={changeHandler}
        name="name"
        value={selected.name}
      />
      <input
        placeholder="last name"
        type="text"
        onChange={changeHandler}
        name="lastname"
        value={selected.lastname}
      />
      <input
        placeholder="email"
        type="email"
        onChange={changeHandler}
        name="email"
        value={selected.email}
      />
      <input
        placeholder="phone number"
        type="number"
        onChange={changeHandler}
        name="phone"
        value={selected.phone}
      />
    </div>
  );
}

export default Input;
