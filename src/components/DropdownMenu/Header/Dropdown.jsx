import React from "react";
import styles from "./Dropdown.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

const Dropdown = ({ dropdownData, displayed }) => {
  return (
    <div className={styles.dropdown}>
      <button className={styles.dropdownBtn}>
        {displayed}
        <FontAwesomeIcon icon={faSortDown} className={styles.icon} />
      </button>
      <div className={styles.dropdownContent}>
        {dropdownData.map((element) => {
          return <p key={element.id}>{element.name}</p>;
        })}
      </div>
    </div>
  );
};

export default Dropdown;
