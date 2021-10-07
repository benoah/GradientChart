import React from "react";

import styles from "./HorizontalPagination.module.css";

const HorizontalPagination = ({ pages, currentPage, onPageChange }) => {
  return (
    <div className={styles.wrapper}>
      {pages.map((page) => {
        return (
          <h3
            key={page.id}
            onClick={() => onPageChange(page.id)}
            className={currentPage === page.id ? styles.active : null}
          >
            {page.name}
          </h3>
        );
      })}
    </div>
  );
};

export default HorizontalPagination;
