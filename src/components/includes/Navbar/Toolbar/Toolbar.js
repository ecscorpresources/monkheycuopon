import React from "react";
import { Link } from "react-router-dom";
import "./Toolbar.scss";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import navlinks from "../../../../constants/navlinks";

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
          <ul className="categories">
            <li>Browse Categorires</li>
          </ul>

          <article>
            <ul>
              {navlinks.map((link) => (
                <li>
                  <Link to={link.path}>{link.text}</Link>
                </li>
              ))}
            </ul>
            <form>
              <input
                type="text"
                placeholder="Search for Templates, Pictures, Music and More"
              />
            </form>
          </article>

          <ul>
            <li>
              <Link>Login</Link>
            </li>
            <li>
              <Link>SignUp</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Toolbar;
