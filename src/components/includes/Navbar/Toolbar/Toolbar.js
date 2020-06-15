import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Toolbar.scss";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import { MdArrowDropDown } from "react-icons/md";
import Signup from "../../../auth/Signup";
import SignIn from "../../../auth/Signin";
import PromoteCuopon from "../../../PromoteCuopon";

const Toolbar = (props) => {
  const location = props.location.pathname;

  return (
    <header>
      <nav className="toolbar_navigation">
        <div className="toolbar_toggle_button">
          <DrawerToggleButton
            handleDrawerToggleClick={props.handleDrawerToggleClick}
          />
        </div>
        <div className="toolbar_logo">
          <Link to="/">
            <img
              src={require("../../../../assets/img/a1000coupons_logo.png")}
              alt="logo"
            />
          </Link>
        </div>
        <div className="toolbar_navigation_items">
          <ul className="categories">
            <li>
              Browse Categorires
              <MdArrowDropDown className="categories_dropdown-icon" />
              <ul className="categories__dropdown">
                <li>
                  <Link to="graphics">Graphics & Vectors</Link>
                </li>
                <li>
                  <Link to="/fonts">Fonts</Link>
                </li>
                <li>
                  <Link to="animations">Motions & Animations</Link>
                </li>
                <li>
                  <Link to="modelstextures">3D Models & Textures</Link>
                </li>
                <li>
                  <Link to="photosimages">Photos & Images</Link>
                </li>
                <li>
                  <Link to="musicsound">Music & Sound</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/">Stores</Link>
            </li>
            <li>
              <Link to="/">Hot Deals</Link>
            </li>
            <li>
              <PromoteCuopon />
            </li>
          </ul>

          <article>
            {location === "/" && (
              <form>
                <input
                  type="text"
                  placeholder="Search for Templates, Pictures, Music and More"
                />
              </form>
            )}

            <ul className="login_signup">
              {location === "/" || location === "/productlist" ? (
                <li>
                  <div className="signup">
                    <Signup />
                  </div>
                  <div className="login">
                    <SignIn />
                  </div>
                </li>
              ) : (
                <li className="dashbaord-dropdown">
                  <div>
                    <img
                      src={require("../../../../assets/img/76.png")}
                      alt="user"
                    />
                    <h5>Johnstine</h5>
                  </div>

                  <ul>
                    <li>
                      <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                      <Link to="/uploadcuopon">UploadCuopon</Link>
                    </li>

                    <li>
                      <Link to="/profile">ProfileSettings</Link>
                    </li>
                    <li>
                      <Link to="/dashboard">Logout</Link>
                    </li>
                  </ul>
                </li>
              )}
            </ul>
          </article>
        </div>
      </nav>
    </header>
  );
};

export default withRouter(Toolbar);
