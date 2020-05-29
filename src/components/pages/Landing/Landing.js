import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { values } from "../../../components/Landing/Values";
import FadeIn from "react-fade-in";

const Landing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <FadeIn transitionDuration="600">
        <section className="landingFirstSection">
          <article>
            <h2>
              Get Exactly What You Need <br /> For All Your Creative Projects
            </h2>
            <p>
              Have your creative Ideas come alive by exploring our <br /> huge
              collection of digital products and resources
            </p>
          </article>
        </section>

        <section className="landingSecondSection">
          {values.map((value, index) => (
            <article key={index}>
              <div>
                <img src={value.img} alt="" />
              </div>

              <div>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </div>
            </article>
          ))}
        </section>

        <section className="landingThirdSection">
          <article>
            <div>
              <Link to="/">
                <div>
                  <img
                    src={require("../../../assets/img/06.png")}
                    alt="what is new"
                  />
                </div>
              </Link>
            </div>
            <div>
              <Link to="/">
                <div>
                  <img
                    src={require("../../../assets/img/07.png")}
                    alt="best sellers"
                  />
                </div>
                <p>Best Seller</p>
              </Link>
            </div>
            <div>
              <Link to="/">
                <div>
                  <img
                    src={require("../../../assets/img/08.png")}
                    alt="top rated"
                  />
                </div>
                <p>Top Rated</p>
              </Link>
            </div>

            <div>
              <Link to="/">
                <div>
                  <img
                    src={require("../../../assets/img/09.png")}
                    alt="trending"
                  />
                </div>
                <p>Trending</p>
              </Link>
            </div>
            <div>
              <Link to="/">
                <div>
                  <img
                    src={require("../../../assets/img/10.png")}
                    alt="on sale"
                  />
                </div>
                <p>On Sale</p>
              </Link>
            </div>
          </article>

          <article>
            <div>
              <img src={require("../../../assets/img/11.png")} alt="" />
            </div>
            <div>
              <p>
                Explore over 26,458 premium creatives <br /> that perfectly fit
                your business need
              </p>
            </div>
          </article>
        </section>

        <section className="landingFourthSection">
          <h5>Shop for Creatives</h5>
        </section>
        <section className="landingFifthSection">
          <article>
            <figure>
              <Link to="/list">
                <img src={require("../../../assets/img/16.png")} alt="" />
              </Link>
              <div className="item-description">
                <div>
                  <h6>City - Vector Design</h6>
                  <p>by DryBrush </p>
                </div>
                <span>$17</span>
              </div>
              <h3>Graphics & Vectors</h3>
            </figure>

            <figure>
              <Link to="/list">
                <img src={require("../../../assets/img/17.png")} alt="" />
              </Link>
              <div className="item-description">
                <div>
                  <h6>Callista Ollander</h6>
                  <p>by Agniardi </p>
                </div>
                <span>$25</span>
              </div>
              <h3>Fonts</h3>
            </figure>

            <figure>
              <Link to="/list">
                <img src={require("../../../assets/img/18.png")} alt="" />
              </Link>
              <div className="item-description">
                <div>
                  <h6>Malone Post</h6>
                  <p>by Lime Graphics </p>
                </div>
                <span>$19</span>
              </div>
              <h3>Motions & Animations</h3>
            </figure>

            <figure>
              <Link to="/list">
                <img src={require("../../../assets/img/19.png")} alt="" />
              </Link>
              <div className="item-description">
                <div>
                  <h6>3D Robot Model</h6>
                  <p>by DashAuthor </p>
                </div>
                <span>$17</span>
              </div>
              <h3>3D Models & Textures</h3>
            </figure>

            <figure>
              <Link to="/list">
                <img src={require("../../../assets/img/20.png")} alt="" />
              </Link>
              <div className="item-description">
                <div>
                  <h6>Nevrada Font</h6>
                  <p>by Chic & Luxe </p>
                </div>
                <span>$25</span>
              </div>
              <h3>Fonts</h3>
            </figure>

            <figure>
              <Link to="/list">
                <img src={require("../../../assets/img/21.png")} alt="" />
              </Link>
              <div className="item-description">
                <div>
                  <h6>Colorful Butterfly</h6>
                  <p>by Eddy Stuat </p>
                </div>
                <span>$19</span>
              </div>
              <h3>Photos & Images</h3>
            </figure>

            <figure>
              <Link to="/list">
                <img src={require("../../../assets/img/22.png")} alt="" />
              </Link>
              <div className="item-description">
                <div>
                  <h6>Opening Mortage Intros</h6>
                  <p>by Lady May </p>
                </div>
                <span>$17</span>
              </div>
              <h3>Music & Sound</h3>
            </figure>

            <figure>
              <Link to="/list">
                <img src={require("../../../assets/img/23.png")} alt="" />
              </Link>
              <div className="item-description">
                <div>
                  <h6>Outdoor - Extreme</h6>
                  <p>by Lord Green </p>
                </div>
                <span>$25</span>
              </div>
              <h3>Photos & Images</h3>
            </figure>

            <figure>
              <Link to="/list">
                <img src={require("../../../assets/img/24.png")} alt="" />
              </Link>
              <div className="item-description">
                <div>
                  <h6>5 Serif Fonts</h6>
                  <p>by UI_Fonts </p>
                </div>
                <span>$19</span>
              </div>
              <h3>Fonts</h3>
            </figure>
          </article>
          <article>
            <figure>
              <div>
                <div>
                  <img src={require("../../../assets/img/25.png")} alt="" />
                </div>
                <div>
                  <div>
                    <img src={require("../../../assets/img/26.png")} alt="" />
                  </div>

                  <div>
                    <img src={require("../../../assets/img/27.png")} alt="" />
                  </div>

                  <div>
                    <img src={require("../../../assets/img/28.png")} alt="" />
                  </div>

                  <div>
                    <img src={require("../../../assets/img/29.png")} alt="" />
                  </div>
                </div>
              </div>

              <h2>Sponsored Theme & Templates</h2>
            </figure>

            <figure>
              <div>
                <div>
                  <img src={require("../../../assets/img/33.png")} alt="" />
                </div>
                <div>
                  <div>
                    <img src={require("../../../assets/img/34.png")} alt="" />
                  </div>

                  <div>
                    <img src={require("../../../assets/img/35.png")} alt="" />
                  </div>

                  <div>
                    <img src={require("../../../assets/img/36.png")} alt="" />
                  </div>

                  <div>
                    <img src={require("../../../assets/img/37.png")} alt="" />
                  </div>
                </div>
              </div>
              <h2>Sponsored Categories</h2>
            </figure>
          </article>
        </section>
      </FadeIn>
    </>
  );
};

export default Landing;
