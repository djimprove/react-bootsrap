import React, { useState } from "react";
import NavLinks from "./NavLinks";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    {
      icon: "bi-alarm-fill",
      label: "Dashboard",
      href: "#",
      subLinks: [
        {
          icon: "bi-1-square",
          label: "Example",
          href: "#",
        },
      ],
    },
    {
      icon: "bi-alarm-fill",
      label: "About",
      href: "#",
      subLinks: [
        {
          icon: "bi-1-square",
          label: "Example",
          href: "#",
        },
      ],
    },
  ];
  return (
    <>
      <div className={`d-md-none ms-4 ${isOpen && "d-none"}`}>
        <i
          style={{ cursor: "pointer" }}
          onClick={() => setIsOpen(true)}
          className='bi bi-grid-3x3'
        ></i>
      </div>
      <div
        className={`sidebar ${isOpen && "open"}`}
        style={{ background: "black", minHeight: "100%" }}
      >
        <div
          style={{ width: "100%" }}
          className={`d-md-none d-flex flex-row-reverse ${!isOpen && "d-none"}`}
        >
          <i
            style={{ color: "white", cursor: "pointer" }}
            onClick={() => setIsOpen(false)}
            className='bi bi-x-square  me-2 mt-2'
          ></i>
        </div>
        {links.map((link) => (
          <NavLinks {...link} />
        ))}
      </div>
    </>
  );
};

export default SideBar;
