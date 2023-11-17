import { useState } from "react";

function ContactItem({ data, deleteHandler,  }) {
  return (
    <>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <p>{item.name}</p>
            <p>{item.lastname}</p>
            <p>{item.phone}</p>
            <p>{item.id}</p>
            <button onClick={() => deleteHandler(item.id)}>deleted</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ContactItem;
