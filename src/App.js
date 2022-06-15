import React, { useState } from "react";
import Main from "./Components/Main";
import NavBar from "./Components/NavBar";
import Menu from "./Components/Menu";

import "./App.css";

function App() {
  const [sidebarToggle, setSidebarToggle] = useState(true);

  return (
    <div className="App">
      <NavBar
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}
      />
      <div className={"content-menu-container"}>
        <div className="main-container">
          <Main sidebarToggle={sidebarToggle} />
          <Menu sidebarToggle={sidebarToggle} />
        </div>
      </div>
    </div>
  );
}

export default App;
