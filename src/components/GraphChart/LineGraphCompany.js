import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import styles from "./LineGraph.module.css";
import { getdata } from "../../data/apiData";

const LineChartScreen = () => {
  const [lablesNameData, setLabelsNameData] = useState([]);
  const [confirmedData, setConfirmedData] = useState([]);
  const [subscriberData, setSubscriberData] = useState([]);
  const data = (canvas) => {
    const ctx = canvas.getContext("2d");
    const gradient1 = ctx.createLinearGradient(0, 0, 0, 450);
    // const gradient = ctx.createLinearGradient(0, 0, 0, 450);
    // gradient.addColorStop(0, "#ff9a9e");
    // gradient.addColorStop(0.5, "#fad0c4");
    // gradient.addColorStop(1, " #333");

    gradient1.addColorStop(0, "rgba(117, 59, 189, 1)");
    gradient1.addColorStop(0.5, "rgba(117, 59, 189, 0.14)");
    gradient1.addColorStop(1, "#753BBD00");

    return {
      labels: lablesNameData,

      datasets: [
        {
          barPercentage: 0.5,
          barThickness: 10,
          maxBarThickness: 100,
          minBarLength: 2,
          label: "Gross",
          data: confirmedData,
          backgroundColor: gradient1,
          borderWidth: 1,
        },
        {
          barPercentage: 0.5,
          barThickness: 10,
          maxBarThickness: 100,
          minBarLength: 2,
          label: "Subscriber",
          data: subscriberData,
          //    backgroundColor: gradient,
          borderWidth: 1,
        },
      ],
    };
  };
  const options = {
    responsive: true,
    tooltips: {
      mode: "index",
      intersect: false,
    },
    hover: {
      mode: "nearest",
      intersect: true,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
          gridLines: {
            display: false,
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
    },
    legend: {
      display: false,
      position: "top",
      labels: {
        fontColor: "#00000",
      },
    },
  };
  const getChartData = async () => {
    try {
      let nameArray = [];
      let confirmedArray = [];
      let subscribersArray = [];

      const data = await getdata();
      console.log(data);
      data.forEach((element) => {
        nameArray.push(element.name);
        confirmedArray.push(element.id);
        subscribersArray.push(element.subscriber);
      });
      setLabelsNameData(nameArray);
      setConfirmedData(confirmedArray);
      setSubscriberData(subscribersArray);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getChartData();
  }, []);
  return (
    <div className={styles.lineWrapper}>
      <p>Site trafic</p>
      <Line className={styles.line} data={data} options={options} />
    </div>
  );
};

export default LineChartScreen;
