import React from "react";

export default function Menu({ sidebarToggle }) {
  return (
    <>
      <div className={`menu-content${sidebarToggle ? "" : " menu-toggle"}`}>
        <h1>HOME</h1>
        <h1>BLOG</h1>
        <h1>ABOUT US</h1>
        <h1>CONTACT US</h1>
      </div>

      <div className="footer">
        <p>
          Be the first to use Uniflow for free. <u> Sign up now</u>
        </p>
      </div>
    </>
  );
}
