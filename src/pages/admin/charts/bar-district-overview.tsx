import React from "react";
import { Bar } from "react-chartjs-2";

const BarDistrictOverview = () => {
  const labels = [
    "District 1",
    "District 2",
    "District 3",
    "District 4",
    "District 5",
    "District 6"
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Farms",
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)"
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)"
        ],
        borderWidth: 1
      }
    ]
  };
  return <Bar data={data} />;
};

export default BarDistrictOverview;
