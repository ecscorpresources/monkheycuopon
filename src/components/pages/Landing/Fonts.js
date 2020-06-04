import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import FadeIn from "react-fade-in";
import SearchNav from "../../SearchNav";
import "../../../css/list.scss";

const Fonts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <FadeIn transitionDuration="600">
        <Helmet>
          <title>Fonts</title>
        </Helmet>
        <SearchNav title="Fonts" />
        <section className="filter">
          <select name="illustrations" id="illustrations">
            <option value="illustrations">Illustrators</option>
          </select>

          <select name="otherfilter" id="otherfilter">
            <option value="otherfilter">Other Filter</option>
          </select>
        </section>
        <section className="listSecondSection">
          <figure>
            <Link to="/list">
              <img src={require("../../../assets/img/41.png")} alt="" />
            </Link>
            <div className="item-description">
              <div>
                <h6>Hulk - Vector Pattern</h6>
                <p>by DashAuthor </p>
              </div>
              <span>$17</span>
            </div>
            <h3>Fonts & Vectors</h3>
          </figure>

          <figure>
            <Link to="/list">
              <img src={require("../../../assets/img/16.png")} alt="" />
            </Link>
            <div className="item-description">
              <div>
                <h6>City - Vector Design</h6>
                <p>by DryBush </p>
              </div>
              <span>$17</span>
            </div>
            <h3>Fonts & Vectors</h3>
          </figure>

          <figure>
            <Link to="/list">
              <img src={require("../../../assets/img/42.png")} alt="" />
            </Link>
            <div className="item-description">
              <div>
                <h6>Astronaunt Neon glow</h6>
                <p>by TINKa </p>
              </div>
              <span>$19</span>
            </div>
            <h3>Fonts & Vectors</h3>
          </figure>

          <figure>
            <Link to="/list">
              <img src={require("../../../assets/img/43.png")} alt="" />
            </Link>
            <div className="item-description">
              <div>
                <h6>Flat Vector designs</h6>
                <p>by Kevin </p>
              </div>
              <span>$25</span>
            </div>
            <h3>Fonts & Vectors</h3>
          </figure>

          <figure>
            <Link to="/list">
              <img src={require("../../../assets/img/16.png")} alt="" />
            </Link>
            <div className="item-description">
              <div>
                <h6>City - Vector Design</h6>
                <p>by Chic & Luxe </p>
              </div>
              <span>$17</span>
            </div>
            <h3>Fonts & Vectors</h3>
          </figure>

          <figure>
            <Link to="/list">
              <img src={require("../../../assets/img/44.png")} alt="" />
            </Link>
            <div className="item-description">
              <div>
                <h6>Adobe Illustrator design</h6>
                <p>by Nsink </p>
              </div>
              <span>$17</span>
            </div>
            <h3>Fonts & Vectors</h3>
          </figure>

          <figure>
            <Link to="/list">
              <img src={require("../../../assets/img/43.png")} alt="" />
            </Link>
            <div className="item-description">
              <div>
                <h6>Flat Vector Design</h6>
                <p>by Kevin </p>
              </div>
              <span>$25</span>
            </div>
            <h3>Fonts & Vectors</h3>
          </figure>

          <figure>
            <Link to="/list">
              <img src={require("../../../assets/img/41.png")} alt="" />
            </Link>
            <div className="item-description">
              <div>
                <h6>Hulk vector pattern</h6>
                <p>by DashAuthor </p>
              </div>
              <span>$17</span>
            </div>
            <h3>Fonts & Vectors</h3>
          </figure>

          <figure>
            <Link to="/list">
              <img src={require("../../../assets/img/41.png")} alt="" />
            </Link>
            <div className="item-description">
              <div>
                <h6>Hulk vector pattern</h6>
                <p>by DashAuthor </p>
              </div>
              <span>$17</span>
            </div>
            <h3>Fonts & Vectors</h3>
          </figure>

          <figure>
            <Link to="/list">
              <img src={require("../../../assets/img/42.png")} alt="" />
            </Link>
            <div className="item-description">
              <div>
                <h6>Astronaunt Neon glow</h6>
                <p>by TINKa </p>
              </div>
              <span>$19</span>
            </div>
            <h3>Fonts & Vectors</h3>
          </figure>

          <figure>
            <Link to="/list">
              <img src={require("../../../assets/img/16.png")} alt="" />
            </Link>
            <div className="item-description">
              <div>
                <h6>City - Vector Design</h6>
                <p>by DryBush </p>
              </div>
              <span>$17</span>
            </div>
            <h3>Fonts & Vectors</h3>
          </figure>

          <figure>
            <Link to="/list">
              <img src={require("../../../assets/img/44.png")} alt="" />
            </Link>
            <div className="item-description">
              <div>
                <h6>Adobe Illustrator design</h6>
                <p>by Nsink </p>
              </div>
              <span>$17</span>
            </div>
            <h3>Fonts & Vectors</h3>
          </figure>
        </section>
      </FadeIn>
    </>
  );
};

export default Fonts;
