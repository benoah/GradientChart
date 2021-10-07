import React from "react";
import styles from "./Header.module.css";
import Dropdown from "../DropdownMenu/Header/Dropdown";

const Header = ({ dropdownData, displayed, headerInfo }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.list}>
        <div className={styles.block}>
          <Dropdown
            dropdownData={dropdownData}
            displayed={displayed}
            handleOptionChange={(option) => this.props.handleOptionChange(option)}
          />
        </div>
        <div className={styles.block}>
          <h2>Total signups</h2>
          <p className={styles.green}>{headerInfo.totalSignups}</p>
        </div>
        <div className={styles.block}>
          <h2>Last Week</h2>
          <p className={styles.purple}>{headerInfo.lastWeek}</p>
        </div>
        <div className={styles.block}>
          <h2>Total investments</h2>
          <p className={styles.blue}>{headerInfo.totalInvestments}</p>
        </div>
        <div className={styles.block}>
          <h2>Average investment</h2>
          <p>
            <span className={styles.currency}>{headerInfo.currency}&nbsp;</span>
            <span className={styles.investmentValue}>{headerInfo.value}</span>
          </p>
        </div>
        <div className={styles.block}>
          <h2>Total exits</h2>
          <p className={styles.greenish}>23</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
