import React, { useState } from "react";

const NavLinks = ({ label, icon, subLinks }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenToggle = (e) => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav key={label} className='navbar'>
      <div
        onClick={subLinks?.length ? handleOpenToggle : () => {}}
        className='container-fluid'
      >
        <a className='navbar-brand' href='#' style={{ color: "white" }}>
          <i
            className={`bi ${icon}`}
            style={{ fontSize: 20, marginRight: "10px" }}
          ></i>
          {label}
        </a>

        {subLinks?.length && (
          <i
            style={{ color: "white" }}
            className={`bi  ${
              isOpen ? "bi-chevron-compact-up" : "bi-chevron-compact-down"
            }`}
          ></i>
        )}
      </div>
      {isOpen && (
        <div style={{ marginLeft: "30px" }}>
          {subLinks?.map((link) => (
            <NavLinks {...link} />
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavLinks;
