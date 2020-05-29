import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Toolbar.scss";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import navlinks from "../../../../constants/navlinks";

const Toolbar = (props) => {
  const location = props.location.pathname;

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
            {location === "/" && (
              <form>
                <input
                  type="text"
                  placeholder="Search for Templates, Pictures, Music and More"
                />
              </form>
            )}
          </article>

          <ul className="login_signup">
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

export default withRouter(Toolbar);
