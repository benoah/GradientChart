import React, { useState, useEffect } from "react";
import { getCurrentTime } from "../../utils/getTime";
import { getCurrentDate } from "../../utils/getDate";
import Avatar from "../../assets/images/profileImage.png";
import Logo from "../../assets/icons/INLogo.png";
import styles from "./Navbar.module.css";

const Navbar = ({ user }) => {
  const [date, setDate] = useState();
  const [time, setTime] = useState();

  useEffect(() => {
    setInterval(() => {
      let { year, month, day } = getCurrentDate();
      setDate(`${day}-${month}-${year}`);
    }, 1000);

    setInterval(() => {
      let { hours, minutes, format } = getCurrentTime();
      setTime(`${hours}:${minutes} ${format}`);
    }, 1000);
  }, []);

  return (
    <nav>
      <div className={styles.logoWrapper}>
        <img src={Logo} className={styles.mainLogo} alt={"logo"} />
      </div>
      <div className={styles.linksWrapper}>
        <div className={styles.links}>
          <h1>Account</h1>
          <h1>Charts</h1>
          <h1>Help</h1>
        </div>
        <div className={styles.profile}>
          <img src={Avatar} className={styles.profileImg} alt={"avatar"} />
          <h1 className={styles.name}>{user}</h1>
          <div className={styles.date}>
            <p>{date}</p>
            <h1>{time}</h1>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
