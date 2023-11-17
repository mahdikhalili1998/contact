import { useState } from "react";
import styles from "./item.module.css";
function ContactItem({ data, deleteHandler }) {
  return (
    <>
      <ul className={styles.ul}>
        {data.map((item) => (
          <li key={item.id} className={styles.li}>
            <p className="">{`${item.name}    ${item.lastname} `}</p>

            <p>{item.phone}</p>

            <button
              className={styles.button}
              onClick={() => deleteHandler(item.id)}
            >
              deleted
              <span className={styles.icon}>
                <ion-icon name="trash"></ion-icon>
              </span>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ContactItem;
