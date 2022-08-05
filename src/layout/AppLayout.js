import React from "react";
import Footer from "../components/app-component/Footer";
import Header from "../components/app-component/Header";
import SideBar from "../components/app-component/sidebar/SideBar";

function AppLayout({ children }) {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <div className='row'>
        <div className='col-3'>
          <SideBar />
        </div>
        <div className='col'>
          <div className='row '>
            <Header />
          </div>
          <div className='row mt-3'>{children}</div>

          <div className='row'>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
