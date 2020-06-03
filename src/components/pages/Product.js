import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import FadeIn from "react-fade-in";
import SearchNav from "../SearchNav";
import "../../css/product.scss";

const Product = () => {
  return (
    <>
      <FadeIn transitionDuration="600">
        <Helmet>
          <title>Product</title>
        </Helmet>
        <SearchNav />
        <section className="productFirstSection">
          <span>$5</span>
          <h5>Adobe Digital Design</h5>
          <p>by DashAuthur</p>
        </section>
        <section className="productSecondSection">
          <article>
            <img
              className="img-fluid"
              src={require("../../assets/img/71.png")}
              alt="product"
            />
          </article>
          <article>
            <div>
              <span>Graphics & Vectors > Icons </span>
              <p>
                <i>
                  <img src={require("../../assets/img/72.png")} alt="rating" />
                </i>
                <i>
                  <img src={require("../../assets/img/72.png")} alt="rating" />
                </i>
                <i>
                  <img src={require("../../assets/img/72.png")} alt="rating" />
                </i>
                <i>
                  <img src={require("../../assets/img/72.png")} alt="rating" />
                </i>
                <i>
                  <img src={require("../../assets/img/73.png")} alt="rating" />
                </i>
              </p>
            </div>

            <div>
              <h6>
                This is the full description of Graphic Image one, its details{" "}
                <br /> and attribute. It is an image you can use for so so so
                and <br /> so designs. It functions as bla, bla
              </h6>

              <span>
                <strong>Format Supported: </strong>
                JPG, PNG
              </span>

              <Link to="/product">Add To Cart</Link>
            </div>
          </article>
        </section>
        <section className="productThirdSection">
          <article>
            <div>
              <img src={require("../../assets/img/76.png")} alt="reviewer" />
            </div>
            <div>
              <form>
                <h3>Leave Review (13 Reviews)</h3>
                <textarea name="" id="" cols="10" rows="4"></textarea>
                <p>
                  <i>
                    <img
                      src={require("../../assets/img/72.png")}
                      alt="rating"
                    />
                  </i>
                  <i>
                    <img
                      src={require("../../assets/img/72.png")}
                      alt="rating"
                    />
                  </i>
                  <i>
                    <img
                      src={require("../../assets/img/72.png")}
                      alt="rating"
                    />
                  </i>
                  <i>
                    <img
                      src={require("../../assets/img/72.png")}
                      alt="rating"
                    />
                  </i>
                  <i>
                    <img
                      src={require("../../assets/img/73.png")}
                      alt="rating"
                    />
                  </i>
                </p>
                <button type="submit">Post Review</button>
              </form>
            </div>
          </article>
          <article>
            <figure>
              <div>
                <div>
                  <img
                    src={require("../../assets/img/77.png")}
                    alt="reviewer"
                  />
                </div>
                <div>
                  <h5>Timi Ondo</h5>
                  <p>
                    <i>
                      <img
                        src={require("../../assets/img/72.png")}
                        alt="rating"
                      />
                    </i>
                    <i>
                      <img
                        src={require("../../assets/img/72.png")}
                        alt="rating"
                      />
                    </i>
                    <i>
                      <img
                        src={require("../../assets/img/72.png")}
                        alt="rating"
                      />
                    </i>
                    <i>
                      <img
                        src={require("../../assets/img/72.png")}
                        alt="rating"
                      />
                    </i>
                    <i>
                      <img
                        src={require("../../assets/img/73.png")}
                        alt="rating"
                      />
                    </i>
                  </p>
                </div>
              </div>
              <h6>
                This is where user one's text for this product and buyer review
              </h6>
            </figure>

            <figure>
              <div>
                <div>
                  <img
                    src={require("../../assets/img/78.png")}
                    alt="reviewer"
                  />
                </div>
                <div>
                  <h5>Alex Cruz</h5>
                  <p>
                    <i>
                      <img
                        src={require("../../assets/img/72.png")}
                        alt="rating"
                      />
                    </i>
                    <i>
                      <img
                        src={require("../../assets/img/72.png")}
                        alt="rating"
                      />
                    </i>
                    <i>
                      <img
                        src={require("../../assets/img/72.png")}
                        alt="rating"
                      />
                    </i>
                    <i>
                      <img
                        src={require("../../assets/img/72.png")}
                        alt="rating"
                      />
                    </i>
                    <i>
                      <img
                        src={require("../../assets/img/73.png")}
                        alt="rating"
                      />
                    </i>
                  </p>
                </div>
              </div>
              <h6>
                This is where user one's text for this product and buyer review
              </h6>
            </figure>

            <figure>
              <div>
                <div>
                  <img
                    src={require("../../assets/img/79.png")}
                    alt="reviewer"
                  />
                </div>
                <div>
                  <h5>Lizzy Thompson</h5>
                  <p>
                    <i>
                      <img
                        src={require("../../assets/img/72.png")}
                        alt="rating"
                      />
                    </i>
                    <i>
                      <img
                        src={require("../../assets/img/72.png")}
                        alt="rating"
                      />
                    </i>
                    <i>
                      <img
                        src={require("../../assets/img/72.png")}
                        alt="rating"
                      />
                    </i>
                    <i>
                      <img
                        src={require("../../assets/img/72.png")}
                        alt="rating"
                      />
                    </i>
                    <i>
                      <img
                        src={require("../../assets/img/73.png")}
                        alt="rating"
                      />
                    </i>
                  </p>
                </div>
              </div>
              <h6>
                This is where user one's text for this product and buyer review
              </h6>
            </figure>
          </article>

          <Link to="/product">View More Reviews</Link>
        </section>
        <section className="productFourthSection">
          <h1>More From DashAuthor</h1>
          <article>
            <figure>
              <Link to="/list">
                <img src={require("../../assets/img/41.png")} alt="" />
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
                <img src={require("../../assets/img/17.png")} alt="" />
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
                <img src={require("../../assets/img/42.png")} alt="" />
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
                <img src={require("../../assets/img/17.png")} alt="" />
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
                <img src={require("../../assets/img/41.png")} alt="" />
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
                <img src={require("../../assets/img/17.png")} alt="" />
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
                <img src={require("../../assets/img/42.png")} alt="" />
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
                <img src={require("../../assets/img/17.png")} alt="" />
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
          </article>
        </section>
      </FadeIn>
    </>
  );
};

export default Product;
