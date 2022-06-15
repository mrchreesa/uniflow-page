import React, { useState } from "react";
import "../App.css";
import logo from "../images/logo.png";
import { Button } from "@mui/material";

export default function NavBar({ sidebarToggle, setSidebarToggle }) {
  const showSidebar = () => setSidebarToggle(!sidebarToggle);
  return (
    <div className="navBar-container">
      {/* <div className="logo-container"> */}
      <Button className="logo-btn" disableRipple>
        <img className="logo" src={logo} alt="logo" />
      </Button>
      {/* </div> */}
      <div className="empty"></div>
      <div
        onClick={showSidebar}
        className={sidebarToggle ? "burger" : "burger toggle"}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </div>
  );
}
