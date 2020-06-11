import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import FadeIn from "react-fade-in";
import "../css/product.scss";
import Cuopon from "./Cuopon";

const ProductList = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <FadeIn transitionDuration="600">
        <Helmet>
          <title>ProductList</title>
        </Helmet>

        <section className="filter">
          <select name="illustrations" id="illustrations">
            <option value="allcategories">View All Categories</option>
          </select>
        </section>

        <section className="productlist">
          <article>
            <figure>
              <article>
                <img
                  src={require("../assets/img/39.png")}
                  alt="vendor banner"
                />
              </article>
              <article>
                <div>
                  <img src={require("../assets/img/04.png")} alt="vendor" />
                  <div className="white-section">
                    <div>
                      <h4>18% Off Groceries</h4>
                      <p>Lagos, Nigeria</p>
                    </div>
                    <Cuopon />
                  </div>
                </div>

                <div>
                  <div>
                    <p>
                      Get an Extra 18% off your total purchase. Limit to one
                      coupon <br /> per customer.
                    </p>
                    <span>This Coupon expires on 24, June 2020</span>
                  </div>
                  <div>
                    <div>
                      <img src={require("../assets/img/46.png")} alt="share" />
                    </div>
                    <div>
                      <img src={require("../assets/img/47.png")} alt="likes" />
                      <h5>2 Likes</h5>
                    </div>
                    <div>
                      <img
                        src={require("../assets/img/48.png")}
                        alt="comments"
                      />
                      <h5>5 Comments</h5>
                    </div>
                  </div>
                </div>
              </article>
            </figure>

            <figure>
              <article>
                <img
                  src={require("../assets/img/40.png")}
                  alt="vendor banner"
                />
              </article>
              <article>
                <div>
                  <img src={require("../assets/img/45.png")} alt="vendor" />
                  <div className="white-section">
                    <div>
                      <h4>18% Off old Stocks</h4>
                      <p>Johannesburg, South Africa</p>
                    </div>
                    <Cuopon />
                  </div>
                </div>

                <div>
                  <div>
                    <p>
                      Up to 30% discount on cars hired. All terms and conditions
                      apply
                    </p>
                    <span>This Coupon expires on 24, June 2020</span>
                  </div>
                  <div>
                    <div>
                      <img src={require("../assets/img/46.png")} alt="share" />
                    </div>
                    <div>
                      <img src={require("../assets/img/47.png")} alt="likes" />
                      <h5>2 Likes</h5>
                    </div>
                    <div>
                      <img
                        src={require("../assets/img/48.png")}
                        alt="comments"
                      />
                      <h5>5 Comments</h5>
                    </div>
                  </div>
                </div>
              </article>
            </figure>

            <figure>
              <article>
                <img
                  src={require("../assets/img/41.png")}
                  alt="vendor banner"
                />
              </article>
              <article>
                <div>
                  <img src={require("../assets/img/04.png")} alt="vendor" />
                  <div className="white-section">
                    <div>
                      <h4>50% Off Groceries</h4>
                      <p>Lagos, Nigeria</p>
                    </div>
                    <Cuopon />
                  </div>
                </div>

                <div>
                  <div>
                    <p>
                      Get an Extra 18% off your total purchase. Limit to one
                      coupon <br /> per customer.
                    </p>
                    <span>This Coupon expires on 24, June 2020</span>
                  </div>
                  <div>
                    <div>
                      <img src={require("../assets/img/46.png")} alt="share" />
                    </div>
                    <div>
                      <img src={require("../assets/img/47.png")} alt="likes" />
                      <h5>2 Likes</h5>
                    </div>
                    <div>
                      <img
                        src={require("../assets/img/48.png")}
                        alt="comments"
                      />
                      <h5>5 Comments</h5>
                    </div>
                  </div>
                </div>
              </article>
            </figure>

            <figure>
              <article>
                <img
                  src={require("../assets/img/42.png")}
                  alt="vendor banner"
                />
              </article>
              <article>
                <div>
                  <img src={require("../assets/img/34.png")} alt="vendor" />
                  <div className="white-section">
                    <div>
                      <h4>10% Off per room</h4>
                      <p>Lagos, Nigeria</p>
                    </div>
                    <Cuopon />
                  </div>
                </div>

                <div>
                  <div>
                    <p>
                      Get a $10 rebate on every night spent at the Sheraton
                      Hotel Lagos
                    </p>
                    <span>This Coupon expires on 24, June 2020</span>
                  </div>
                  <div>
                    <div>
                      <img src={require("../assets/img/46.png")} alt="share" />
                    </div>
                    <div>
                      <img src={require("../assets/img/47.png")} alt="likes" />
                      <h5>2 Likes</h5>
                    </div>
                    <div>
                      <img
                        src={require("../assets/img/48.png")}
                        alt="comments"
                      />
                      <h5>5 Comments</h5>
                    </div>
                  </div>
                </div>
              </article>
            </figure>

            <figure>
              <article>
                <img
                  src={require("../assets/img/43.png")}
                  alt="vendor banner"
                />
              </article>
              <article>
                <div>
                  <img src={require("../assets/img/44.png")} alt="vendor" />
                  <div className="white-section">
                    <div>
                      <h4>33% on school supplies</h4>
                      <p>Lagos, Nigeria</p>
                    </div>
                    <Cuopon />
                  </div>
                </div>

                <div>
                  <div>
                    <p>
                      33% on all school supplies in the anticipated post COVID
                      period. <br /> Take action fast. Offer while stock lasts
                    </p>
                    <span>This Coupon expires on 24, June 2020</span>
                  </div>
                  <div>
                    <div>
                      <img src={require("../assets/img/46.png")} alt="share" />
                    </div>
                    <div>
                      <img src={require("../assets/img/47.png")} alt="likes" />
                      <h5>2 Likes</h5>
                    </div>
                    <div>
                      <img
                        src={require("../assets/img/48.png")}
                        alt="comments"
                      />
                      <h5>5 Comments</h5>
                    </div>
                  </div>
                </div>
              </article>
            </figure>
          </article>
          <article></article>
        </section>
      </FadeIn>
    </>
  );
};

export default ProductList;
