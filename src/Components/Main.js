import React from "react";
import { Button } from "@mui/material";
import phones from "../images/phones.png";

export default function Main({ sidebarToggle }) {
  return (
    <div className={`main-content${sidebarToggle ? "" : " menu-toggle"}`}>
      <div className="main-left">
        <div className="text">
          <h2> Money Ecosystem for everyone </h2>
          <p> Take Control of your life with Uniflow</p>
          <ul>
            <li>
              Pay off your debt quicker
              <li> Save money on financial products </li>
            </li>
            <li> Use our automated financial advisor </li>
            <li>Learn how to manage your money </li>
            <li> Create a decentralised identity </li>
            <li> Become your own bank</li>
          </ul>
        </div>
        <Button
          className="register-btn"
          style={{
            fontFamily: "Helvetica Neue",
            fontWeight: "bold",
            fontSize: "1em",
            letterSpacing: 1,
            maxWidth: 320,
            textTransform: "none",
            marginLeft: 40,
            border: "1px solid white",
            borderRadius: "25px",
            width: "80%",
            color: "black",
            backgroundColor: "#feb722",
            padding: 10,
          }}
        >
          It's All Free. Sign Up Now
        </Button>
      </div>
      <div className="main-right">
        <img src={phones} alt="phones" />
      </div>

      {/* <div className="footer">
        <p>
          Be the first to use Uniflow for free. <u> Sign up now</u>
        </p>
      </div> */}
    </div>
  );
}
