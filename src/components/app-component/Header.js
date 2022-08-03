import React from "react";

const Header = ({ headerName = "Dashboard" }) => {
  return (
    <div className='d-flex flex-row justify-content-between'>
      <div className=''>{headerName}</div>
      <div className='d-flex flex-row align-items-center'>
        <i style={{ fontSize: 20 }} class='bi bi-bell me-2'></i>
        <i style={{ fontSize: 20 }} class='bi bi-facebook me-2'></i>
        <i style={{ fontSize: 20 }} class='bi bi-github me-2'></i>
        <i style={{ fontSize: 20 }} class='bi bi-gaer '></i>
        <img
          style={{ borderRadius: "100%" }}
          width={24}
          height={24}
          src='profile.jpg'
          alt=''
        />
      </div>
    </div>
  );
};

export default Header;
