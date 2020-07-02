import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal, ModalBody } from "reactstrap";
import styled from "styled-components";

const SignUp = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const closeModal = () => setModal(!modal);
  return (
    <>
      <Link to="/productlist" onClick={toggle}>
        Join For Free
      </Link>
      <Modal isOpen={modal} toggle={toggle} size="sm">
        <ModalWrapper>
          <ModalBody>
            <div className="close">
              <img
                src={require("../assets/img/close.png")}
                alt=""
                onClick={closeModal}
              />
            </div>

            <section>
              <p>Posted on May 5, 2020</p>
              <img src={require("../assets/img/04.png")} alt="vendor" />
              <h1>18% Off</h1>

              <article className="cuopon">
                <img src={require("../assets/img/55.png")} alt="" />
              </article>

              <article>
                <h5>
                  Get an Extra 18% off your total <br /> purchase. Limit to one
                  cuopon <br /> per customer
                </h5>
                <div>
                  <h5>Online & In-store</h5>
                  <a href="www.shoprite.com">www.shoprite.com</a>
                  <h2>Valid at Shoprite Lekki Only</h2>

                  <h6>Exclusion</h6>
                  <p>No Exclusion</p>

                  <h6>Expiration date</h6>
                  <span>23:59am 05/06/2020</span>
                </div>
              </article>

              <article>
                <h3>T & C Applys</h3>
                <p>
                  Rules for Coupon Codes and Discount Codes Coupons and discount
                  codes apply to in-stock merchandise only. Coupons and discount
                  codes do not apply to gift card purchases, shipping charges or
                  other fees. Only one coupon or discount code may be applied
                  per order. Coupons and discount codes may not be combined with
                  other discount offers or applied to prior orders. Coupons and
                  discount codes may or may not apply to sale items. For
                  example, "20% off a Full Price item" offers do not apply to
                  sale items or monthly Inside Edge special items in addition to
                  the exclusions stated below.
                </p>
              </article>
              <article>
                <Link>
                  <img src={require("../assets/img/49.png")} alt="" />
                </Link>

                <Link>
                  <img src={require("../assets/img/50.png")} alt="" />
                </Link>

                <Link>
                  <img src={require("../assets/img/51.png")} alt="" />
                </Link>
              </article>
            </section>
          </ModalBody>
        </ModalWrapper>
      </Modal>
    </>
  );
};

const ModalWrapper = styled.section`
  .close {
    cursor: pointer;
  }

  & section {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem;

    p {
      padding-bottom: 1rem;
    }

    h1 {
      padding-top: 3rem;
      padding-bottom: 1rem;
      font-weight: bold;
      font-size: 3rem;
    }

    h2 {
      font-size: 1.4rem;
    }

    h5 {
      padding-top: 2rem;
    }

    h3 {
      font-size: 1.4rem;
      font-weight: bold;
    }

    h6 {
      font-size: 1.4rem;
      font-weight: bold;
      font-size: 1.4rem;
      margin-bottom: 0;
      padding-top: 2rem;
    }

    span {
      padding-bottom: 3rem;
      display: inline-block;
      font-size: 1.4rem;
    }

    & article:nth-child(5) {
      a {
        color: #ccc;
        font-size: 1.5rem;
        text-decoration: none;
      }

      p {
        font-size: 1.4rem;
      }
    }
    & article:last-child {
      a {
        color: #000;
        text-decoration: none;

        &:not(:last-child) {
          margin-right: 2rem;
        }
      }
    }
  }

  & .cuopon {
    img {
      width: 200px;
    }
  }
`;

export default SignUp;
