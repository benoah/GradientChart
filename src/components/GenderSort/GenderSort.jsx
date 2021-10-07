import React from "react";
import DropdownGender from "../DropdownMenu/./Sort/GenderSort/Dropdown";
import DropdownType from "../DropdownMenu/./Sort/TypeSort/Dropdown";
import styles from "./GenderSort.module.css";

const GenderSort = ({
  selectGender,
  selectType,
  displayedGender,
  displayedType,
  displayedValue,
  onClickGender,
  onClickType,
}) => {
  const handleClickGender = (displayedGender, displayedId) => {
    onClickGender(displayedGender, displayedId);
  };

  const handleClickType = (displayedType, displayedId) => {
    onClickType(displayedType, displayedId);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.nameWrapper}>
        <h2 className={styles.name}>County</h2>
      </div>
      <div className={styles.dropdownWrapper}>
        <DropdownGender
          dropdownData={selectGender}
          displayed={displayedGender}
          className={styles.gederDropdown}
          onClickGender={(displayedGender, displayedId) =>
            handleClickGender(displayedGender, displayedId)
          }
        />
      </div>
      <div className={styles.dropdownWrapper}>
        <DropdownType
          dropdownData={selectType}
          displayed={displayedType}
          className={styles.typeDropdown}
          onClickType={(displayedType, displayedId) => handleClickType(displayedType, displayedId)}
        />
      </div>
      <div className={styles.valueWrapper}>
        <h2>{displayedValue}</h2>
      </div>
    </div>
  );
};

export default GenderSort;
