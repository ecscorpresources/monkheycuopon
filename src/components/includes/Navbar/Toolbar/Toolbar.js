import React from "react";
import { Link } from "react-router-dom";
import "./Toolbar.scss";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import navlinks from "../../../../constants/navlinks";
import Signin from "../../../auth/Signin";

const Toolbar = (props) => {
  return (
    <header>
      <nav
        className="toolbar_navigation"
        style={{ backgroundColor: "transparent" }}
      >
        <div className="toolbar_toggle_button">
          <DrawerToggleButton
            handleDrawerToggleClick={props.handleDrawerToggleClick}
          />
        </div>
        <div className="toolbar_logo">
          <Link to="/">
            <img
              src={require("../../../../assets/img/Tamalan.png")}
              alt="logo"
            />
          </Link>
        </div>
        <div className="toolbar_navigation"></div>
      </nav>
    </header>
  );
};

export default Toolbar;
