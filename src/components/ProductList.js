import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import FadeIn from "react-fade-in";
import "../styles/product.scss";
import Cuopon from "./Cuopon";
import Filter from "../Globals/Filter";
import { products } from "../data/products";

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

        <Filter />

        <section className="productlist">
          <article>
            {products.map((product, index) => (
              <figure key={index}>
                <article>
                  <img src={product.banner} alt="brand banner" />
                </article>
                <article>
                  <div>
                    <img src={product.brand} alt="brand logo" />
                    <div className="white-section">
                      <div>
                        <h4>{product.promo}</h4>
                        <p>{product.location}</p>
                      </div>
                      <Cuopon />
                    </div>
                  </div>

                  <div>
                    <div>
                      <p>{product.text}</p>
                      <span>This Coupon expires on {product.expiration}</span>
                    </div>
                    <div>
                      <div>
                        <img
                          src={require("../assets/img/46.png")}
                          alt="share"
                        />
                      </div>
                      <div>
                        <img
                          src={require("../assets/img/47.png")}
                          alt="likes"
                        />
                        <h5>{product.likes} likes</h5>
                      </div>
                      <div>
                        <img
                          src={require("../assets/img/48.png")}
                          alt="comments"
                        />
                        <h5>{product.comments} comments</h5>
                      </div>
                    </div>
                  </div>
                </article>
              </figure>
            ))}
          </article>
          <article></article>
        </section>
      </FadeIn>
    </>
  );
};

export default ProductList;
