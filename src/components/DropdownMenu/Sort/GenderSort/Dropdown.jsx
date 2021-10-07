import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./Dropdown.module.css";

const DropdownGender = ({ dropdownData, displayed, onClickGender }) => {
  const handleClick = (element) => {
    let el = { ...element };
    let elName = el.name;
    let elId = el.id;
    onClickGender(elName, elId);
  };
  return (
    <div className={styles.dropdown}>
      <button className={styles.dropdownBtn}>
        {displayed}
        <FontAwesomeIcon icon={faSortDown} className={styles.icon} />
      </button>
      <div className={styles.dropdownContent}>
        {dropdownData.map((element) => {
          return (
            <p key={element.id} onClick={() => handleClick(element)}>
              {element.name}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default DropdownGender;
