import React from "react";
import styles from "./VerticalPagination.module.css";

const VerticalPagination = ({ pages, currentPage, onPageChange }) => {
  return (
    <div className={styles.wrapper}>
      {pages.map((icon) => {
        return (
          <div
            key={icon.id}
            onClick={() => onPageChange(icon.id)}
            className={currentPage === icon.id ? styles.active : null}
          >
            <img src={icon.url} alt={"icon"} />

            <br />
          </div>
        );
      })}
    </div>
  );
};

export default VerticalPagination;
