import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import MainBoard from "../../components/MainBoard/MainBoard";


import styles from "./Homepage.module.css";

const Homepage = () => {
   // state = how to write a variabel in React, thats was happening here, why it is missing 
   // setState iam not sure yet 
  const [individualsData] = useState([]);
  const [companiesData] = useState([]);
  const [currentUser] = useState("Are");


  // The variabel is getting populated 
  const [individuals] = useState({
    labels: ["", "Jun'19", "Jul'19", "Aug'19", "Sep'19", "Oct'19", "Nov'19", "Dec'19", ""],
    label: "Signups",
    data: [0, 9, 3, 6, 4, 4, 3, 9, 8],
  });

  // The variabel is getting populated 

  const [companies] = useState({
    labels: ["", "Jun'19", "Jul'19", "Aug'19", "Sep'19", "Oct'19", "Nov'19", "Dec'19", ""],
    label: "Signups",
    data: [0, 6, 4, 9, 7, 4, 5, 8, 5],
  });
  // The variabel is getting populated 
  const [doughnut] = useState({
    data: [364, 284],
    labels: ["Elektrisk", "Bensin"],
  });

   // The variabel is getting populated 
  const [h_currentPage, setH_currentPage] = useState(1);
  const [v_current, setV_current] = useState(1);
  const [header_info] = useState({
    totalSignups: 648,
    lastWeek: 12,
    totalInvestments: 102,
    currency: "NOK",
    value: "345,565",
    totalExits: 23,
  });
   // The variabel is getting populated 
  const [header_select] = useState([
    { id: 1, name: "Overview1" },
    { id: 2, name: "Overview2" },
    { id: 3, name: "Overview3" },
  ]);

  
  const [header_displayed] = useState("Overview");
  const [sort_displayed_gender, setSort_displayed_gender] = useState("Gender");
  const [sort_displayed_type, setSort_displayed_type] = useState("Type");
  const [sort_displayed_value, setSort_displayed_value] = useState("102");
  const [anti_loop, setAnti_loop] = useState(false);

  useEffect(() => {
    sort_handleDisplayedValue();
  }, []);

  const h_handlePageChange = (page) => {
    setH_currentPage(page);
  };

  const v_handlePageChange = (icon_id) => {
    setV_current(icon_id);
  };

  const handleDoughnutLenght = () => {
    let length = doughnut.data.reduce((a, b) => {
      return a + b;
    });

    return length;
  };

  const sort_handleDisplayedValue = () => {
    let displayedGender = sort_displayed_gender;
    let displayedType = sort_displayed_type;
    let antiLoop = anti_loop;
    const companies = [...companiesData];
    const individuals = [...individualsData];

    if (displayedGender && displayedType && antiLoop) {
      setAnti_loop(false);
      if (displayedType === "Companies") {
        let filtered = companies.filter(
          (c) => c.gender.toUpperCase() === displayedGender.toUpperCase()
        );
        let output = filtered.length;

        setSort_displayed_value(output);
      } else if (displayedType === "Individuals") {
        let filtered = individuals.filter(
          (c) => c.gender.toUpperCase() === displayedGender.toUpperCase()
        );
        let output = filtered.length;

        setSort_displayed_value(output);
      }
    }
  };

  const sort_handleClickGender = (displayedGender, displayedId) => {
    setSort_displayed_gender(displayedGender);
    setAnti_loop(true);
  };

  const sort_handleClickType = (displayedType, displayedId) => {
    setSort_displayed_type(displayedType);
    setAnti_loop(true);
  };



  return (
    <>
    <div className={styles.wrapper}>
      <Navbar user={currentUser} />
      <Header headerInfo={header_info} dropdownData={header_select} displayed={header_displayed} />
      {/* the data that populating the mainboard */}
      <MainBoard
        individualsData={individualsData}
        companiesData={companiesData}
        individuals={individuals}
        companies={companies}
        doughnut={doughnut}
        sort_displayed_gender={sort_displayed_gender}
        sort_displayed_type={sort_displayed_type}
        sort_displayed_value={sort_displayed_value}
        v_current={v_current}
        v_onPageChange={v_handlePageChange}
        h_currentPage={h_currentPage}
        h_onPageChange={h_handlePageChange}
        onDoughnutLenght={handleDoughnutLenght}
        sort_handleClickGender={sort_handleClickGender}
        sort_handleClickType={sort_handleClickType}
      />
    </div>
    </>
  );
};

export default Homepage;
