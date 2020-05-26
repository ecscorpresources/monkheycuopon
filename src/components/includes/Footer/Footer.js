import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import { link1, link2, link3, link4 } from "../../../constants/footerlinks";
// import footericons from "../../../constants/footericons";

const Footer = () => {
  return (
    <>
      <footer className="container-fluid">
        <div className="row first_row">
          <div className="col-md-2 my-2">
            <div>
              <ul>
                {link1.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path}>{link.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-md-2 my-2">
            <div>
              <ul>
                {link2.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path}>{link.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-md-2 my-2">
            <div>
              <ul>
                {link3.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path}>{link.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-md-2 my-2">
            <div>
              <ul>
                {link4.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path}>{link.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="row social">
          <div className="col-md-12">
            <ul className="socials">
              {footericons.map((icon, index) => (
                <li key={index}>
                  <Link to={icon.url}>
                    <img src={icon.img} alt="social network" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div> */}
        <p>&copy; 2020 Techengage. All Rights Reserved</p>
      </footer>
    </>
  );
};

export default Footer;
