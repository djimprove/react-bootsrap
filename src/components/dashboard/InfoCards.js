import React, { useState } from "react";
import InfoCard from "./InfoCard";

const InfoCards = () => {
  const [infos, setInfos] = useState([
    {
      icon: "bi-bar-chart-line",
      title: "Process",
      rate: "10%",
      rateType: "warning",
      value: 10000,
    },
    {
      icon: "bi-bar-chart-line",
      title: "Process",
      rate: "10%",
      rateType: "success",
      value: 10000,
    },
    {
      icon: "bi-bar-chart-line",
      title: "Process",
      rate: "10%",
      rateType: "danger",
      value: 10000,
    },
  ]);
  return (
    <div className='row'>
      {infos.map((info) => (
        <div className='col'>
          <InfoCard {...info} />
        </div>
      ))}
    </div>
  );
};

export default InfoCards;
