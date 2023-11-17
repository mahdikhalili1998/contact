import React from "react";
import styles from "./header.module.css";
function Header() {
  return (
    <div className={styles.container}>
      <h1>Contact List</h1>
      <p>
        <a href="https://www.instagram.com/mahdi_lhj/">Mahdi Khalili</a>| Owner
        : Mahdi Khalili
      </p>
    </div>
  );
}

export default Header;
