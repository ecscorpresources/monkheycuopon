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
        <div className="toolbar_navigation_items">
          <ul className="links">
            {navlinks.map((link, index) => (
              <li key={index}>
                <Link className="top-link" to={link.path}>
                  {link.text}
                  {link.strongtext && <strong>{link.strongtext} </strong>}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="login_signup">
            <li>
              <Signin />
            </li>
            <li className="drop_down">
              <ul>
                <li>
                  <Link to="/dashboard-recruiter">Dashboard</Link>
                </li>
                <li>
                  <Link to="/recruiter-jobs">Jobs</Link>
                </li>
                <li>
                  <Link to="/candidates">Candidates</Link>
                </li>
                <li>
                  <Link to="/account">Manage Account</Link>
                </li>
                <li>
                  <Link>Logout</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Toolbar;
