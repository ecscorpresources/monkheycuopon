import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import { link1, link2, link3, link4 } from "../../../constants/footerlinks";
import footericons from "../../../constants/footericons";

const Footer = () => {
  return (
    <>
      <footer>
        <section>
          <article>
            <div>
              <ul className="links">
                {link1.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path}>{link.text}</Link>
                  </li>
                ))}
              </ul>

              <ul className="links">
                {link2.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path}>{link.text}</Link>
                  </li>
                ))}
              </ul>

              <ul className="links">
                {link4.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path}>{link.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <article>
            <h5>Get in touch with us</h5>
            <ul className="socials">
              {footericons.map((icon, index) => (
                <li key={index}>
                  <Link to={icon.url}>
                    <img src={icon.img} alt="social network" />
                  </Link>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <article>
          <ul className="links-2">
            {link3.map((link, index) => (
              <li key={index}>
                <Link to={link.path}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </article>
        <p>&copy; 2020 A,1000 Cuopons. All Rights Reserved</p>
      </footer>
    </>
  );
};

export default Footer;
