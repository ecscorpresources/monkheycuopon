import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import FadeIn from "react-fade-in";
import "../../../css/list.scss";

const List = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <FadeIn transitionDuration="600">
        <section className="listsearchSection">
          <article>
            <h1>Graphics & Vectors</h1>
          </article>
          <article>
            <form>
              <input type="text" placeholder="Search here" />
            </form>
          </article>
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
            <h3>Graphics & Vectors</h3>
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
            <h3>Graphics & Vectors</h3>
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
            <h3>Graphics & Vectors</h3>
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
            <h3>Graphics & Vectors</h3>
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
            <h3>Graphics & Vectors</h3>
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
            <h3>Graphics & Vectors</h3>
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
            <h3>Graphics & Vectors</h3>
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
            <h3>Graphics & Vectors</h3>
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
            <h3>Graphics & Vectors</h3>
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
            <h3>Graphics & Vectors</h3>
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
            <h3>Graphics & Vectors</h3>
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
            <h3>Graphics & Vectors</h3>
          </figure>
        </section>
      </FadeIn>
    </>
  );
};

export default List;
