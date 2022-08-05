import React from "react";

const InfoCard = ({ title, icon, value, rate, rateType }) => {
  const isUpArrow = rateType === "primary";
  return (
    <div class='card'>
      <div class='card-body'>
        <div className='d-flex justify-content-between'>
          <div className=' d-flex align-items-center'>
            <i
              className={`bi ${icon} bg-primary px-2 py-1`}
              style={{ fontSize: "20px", color: "white", borderRadius: "25%" }}
            />
            <div className='ms-3'>
              <h6 style={{ color: "gray", fontSize: "10px" }}>{title}</h6>
              <h4 style={{ fontSize: "20px" }}>{value}</h4>
            </div>
          </div>

          <div className='d-flex align-items-end text-end'>
            <span className={`d-flex align-items-center text-${rateType}`}>
              {rate}
              <i className={`bi bi-${isUpArrow ? "arrow-up" : "arrow-down"}`} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
