import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import FadeIn from "react-fade-in";
import { offers } from "../Landing/Services";

const Landing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <FadeIn transitionDuration="600">
        <Helmet>
          <title>A100Coupon</title>
        </Helmet>

        <section className="landingFirstSection">
          <div>
            <article>
              <div>
                <Link to="/productlist">
                  <img src={require("../../assets/img/01.png")} alt="product" />
                </Link>
              </div>
              <h5>18% Off Groceries</h5>

              <img src={require("../../assets/img/04.png")} alt="vendor" />
            </article>

            <article>
              <div>
                <Link to="/productlist">
                  <img src={require("../../assets/img/02.png")} alt="product" />
                </Link>
              </div>
              <h5>23% Off Sport Shoes</h5>
              <img src={require("../../assets/img/05.png")} alt="vendor" />
            </article>

            <article>
              <div>
                <Link to="/productlist">
                  <img src={require("../../assets/img/03.png")} alt="product" />
                </Link>
              </div>
              <h5>10% Off per Night</h5>
              <img src={require("../../assets/img/34.png")} alt="vendor" />
            </article>
          </div>
        </section>
        <section className="landingSecondSection">
          <img src={require("../../assets/img/33.png")} alt="banner" />
        </section>

        <section className="landingThirdSection">
          <article>
            <div>
              <img src={require("../../assets/img/06.png")} alt="" />
              <p>
                Join the users who are constantly enjoying daily discounts on
                everyday items
              </p>
            </div>
            <div>
              <img src={require("../../assets/img/07.png")} alt="" />
              <p>
                Select the discount of your choice from numerous online and
                in-store shops
              </p>
            </div>
            <div>
              <img src={require("../../assets/img/08.png")} alt="" />
              <p>
                Enjoy your discounts when you purchase items or you can share
                them with friends
              </p>
            </div>
          </article>

          <article>
            <ul>
              {offers.map((offer, index) => (
                <li key={index}>
                  <Link to="/">
                    <img src={offer.img} alt="" />
                    <p>{offer.text}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </article>
        </section>
      </FadeIn>
    </>
  );
};

export default Landing;
