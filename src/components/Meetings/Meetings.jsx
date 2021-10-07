import React, {useEffect,useState} from "react";
import styles from "./Meetings.module.css";
import { getTime } from "../../utils/getTime";
import { getDate } from "../../utils/getDate";

import { getdata } from "../../data/apiData";


export default function Meetings({ individuals, companies }) {
  const [NameData, setNameData] = useState([]);

  const getDataMeeting = async () => {
    try {
      const data = await getdata();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDataMeeting();
  }, []);



  const handleData = () => {

    const updatedIndividuals = [...individuals];
    const updatedCompanies = [...companies];

    const allData = updatedIndividuals.concat(updatedCompanies);
    const currentData = allData.filter((c) => c.meetingDate > new Date());
    const sortedData = currentData.sort((a, b) => a.meetingDate - b.meetingDate);

    const shownData = sortedData.slice(0, 3);
    return shownData;
  };

  const shownData = handleData();


  return (
    <div className={styles.wrapper}>
    <div className={styles.header}>
      <h2>Latest Signups</h2>
      <div className={styles.headerMenu}>
        <div className={styles.innerWrapper}>
          <p className={styles.nameMenu}>Name</p>
        </div>
        <div className={styles.innerWrapper}>
          <p>Scheduled Meeting</p>
        </div>
      </div>
    </div>
    <div className={styles.table}>
      {shownData.map((element, index) => {
        return (
          <div className={styles.TablesAreWeird} key={index}>
            <div className={styles.innerWrapper}>
              <p
                className={styles.name}
                style={
                  element.surname
                    ? {
                        borderColor: "#FDE332",
                      }
                    : {
                        borderColor: "#E03E52",
                      }
                }
              >
                {element.surname ? element.name + "" + element.surname : element.name}
              </p>
            </div>

            <div className={styles.innerWrapper}>
              <p>
                {getDate(element.meetingDate).day +
                  "" +
                  getDate(element.meetingDate).month +
                  "-" +
                  getDate(element.meetingDate).year +
                  " "}
                {" - "}

                {getTime(element.meetingDate).hours +
                  ":" +
                  getTime(element.meetingDate).minutes +
                  getTime(element.meetingDate).format}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  </div>
  )
}




