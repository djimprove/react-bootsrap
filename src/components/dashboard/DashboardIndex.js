import React from "react";
import InfoCards from "./InfoCards";

const DashboardIndex = () => {
  return (
    <div className='row'>
      <div className='col-8'>
        <div className=''>
          <InfoCards />

          <div className='row mt-3'>
            <div className='col'>
              <div style={{ height: "40vh" }} className='card'>
                <div className='card-body'></div>
              </div>
            </div>
          </div>
          <div className='row mt-3'>
            <div className='col-12'>
              <div style={{ height: "40vh" }} className='card'>
                <div className='card-body'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='col'>
        <div style={{ height: "100%" }} className='card'>
          <div className='card-body'></div>
        </div>
      </div>
    </div>
  );
};

export default DashboardIndex;
