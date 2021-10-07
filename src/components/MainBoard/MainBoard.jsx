import React from "react";

import HorizontalPagination from "../Pagination/HorizontalPagination/HorizontalPagination";
import VerticalPagination from "../Pagination/VerticalPagination/VerticalPagination";
import GenderSort from "../GenderSort/GenderSort";
import Meetings from "../Meetings/Meetings";
import DoughnutChart from "../DoughnutChart/DoughnutChart";
import LineGraphCompany from "../GraphChart/LineGraphCompany";
import LineGraphIndividual from "../GraphChart/LineGraphIndividual";


import funds from "../../assets/icons/funds.svg";
import Group from "../../assets/icons/group.png";
import SyncIcon from "../../assets/icons/SyncIcon.svg";
import history from "../../assets/icons/history.svg";
import verificationIcon from "../../assets/icons/verificationIcon.svg";
import lockedPadlock from "../../assets/icons/lockedPadlock.svg";

import styles from "./MainBoard.module.css";

const MainBoard = ({
  individualsData,
  companiesData,
  individuals,
  companies,
  doughnut,
  sort_displayed_gender,
  sort_displayed_type,
  sort_displayed_value,
  v_current,
  h_currentPage,
  v_onPageChange,
  h_onPageChange,
  sort_handleClickGender,
  sort_handleClickType,
}) => {
  const v_icons = [
    { id: 1, url: Group },
    { id: 2, url: funds },
    { id: 3, url: SyncIcon },
    { id: 4, url: history },
    { id: 5, url: verificationIcon },
    { id: 6, url: lockedPadlock },
  ];

  const h_pages = [
    { id: 1, name: "Status" },
    { id: 2, name: "Applications" },
    { id: 3, name: "Site Traffic" },
  ];

  const sort_select_gender = [
    { id: 1, name: "Male" },
    { id: 2, name: "Female" },
  ];
  const sort_select_type = [
    { id: 1, name: "Individuals" },
    { id: 2, name: "Companies" },
  ];

  const getDoughnutLenght = () => {
    let length = doughnut.data.reduce((a, b) => {
      return a + b;
    });

    return length;
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.mainBoard}>
        <div className={styles.verticalWrapper}>
          <VerticalPagination
            pages={v_icons}
            currentPage={v_current}
            onPageChange={(icon_id) => v_onPageChange(icon_id)}
          />
        </div>
        <div className={styles.board}>
          <HorizontalPagination
            pages={h_pages}
            currentPage={h_currentPage}
            onPageChange={(page) => h_onPageChange(page)}
          />
          <div className={styles.display}>
            <div className={styles.displayCharts}>
              <div className={styles.upperChart}>
                <LineGraphCompany />
                <br></br>
                <LineGraphIndividual />
              </div>
            
             
            </div>
            <div className={styles.displayInfo}>
              <div className={styles.donutWrapper}>
                <div className={styles.chartWrapper}>
                  <DoughnutChart labels={doughnut.labels} data={doughnut.data} />
                  <div className={styles.donutLength}>
                    <h2>{getDoughnutLenght()}</h2>
                  </div>
                </div>
                <div className={styles.chartInfoWrapper}>
                  <h2>Total Signups</h2>
                  <div className={styles.chartStats}>
                    <p className={styles.pCol}>
                      <span>{doughnut.labels[0]}</span>
                      <span className={styles.companies}>{doughnut.data[0]}</span>
                    </p>
                    <p className={styles.pCol}>
                      <span>{doughnut.labels[1]}</span>
                      <span className={styles.individuals}>{doughnut.data[1]}</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.sort}>
                <GenderSort
                  selectGender={sort_select_gender}
                  selectType={sort_select_type}
                  displayedGender={sort_displayed_gender}
                  displayedType={sort_displayed_type}
                  displayedValue={sort_displayed_value}
                  onClickGender={(displayedGender, displayedId) =>
                    sort_handleClickGender(displayedGender, displayedId)
                  }
                  onClickType={(displayedType, displayedId) =>
                    sort_handleClickType(displayedType, displayedId)
                  }
                />
              </div>

              <div className={styles.meetings}>
                <Meetings individuals={individualsData} companies={companiesData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBoard;
