import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal, ModalBody } from "reactstrap";
import { PrimaryLink } from "../globals/links-button";
import styled from "styled-components";

const SignUp = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const closeModal = () => setModal(!modal);
  return (
    <>
      <Link to="/" onClick={toggle}>
        Sell
      </Link>
      <Modal isOpen={modal} toggle={toggle} size="md">
        <ModalWrapper>
          <ModalBody>
            <div className="close">
              <img
                src={require("../assets/img/close.png")}
                alt=""
                onClick={closeModal}
              />
            </div>

            <form>
              <div>
                <h1>Promote Your Cuopon</h1>
                <img
                  src={require("../assets/img/54.png")}
                  alt="a 1000 cuopon logo"
                />
              </div>
              <div>
                <input type="text" placeholder="Company/Store Name" />
              </div>
              <div>
                <input type="text" placeholder="Email" />
              </div>
              <div>
                <input type="password" placeholder="Password" />
              </div>
              <div>
                <input type="password" placeholder="Comfirm Password" />
              </div>

              <div>
                <div>
                  <label htmlFor="agreement" className="container">
                    <input type="checkbox" id="agreement" />
                    <span className="checkmark"></span>
                  </label>
                </div>
                <p>
                  I have read and agreed to the Terms and Conditions on the use
                  of Monkhey and A1000Cuopons
                </p>
              </div>
              <div>
                {/* this is for testing purposes */}
                <SignupLink onClick={toggle} to="/">
                  SIGNUP
                </SignupLink>
                <span>
                  Signing Up on A1000Cuopons gets you signed up on all Monkhey
                  Services
                </span>
              </div>
            </form>
          </ModalBody>
        </ModalWrapper>
      </Modal>
    </>
  );
};

const SignupLink = styled(PrimaryLink)`
  display: block;
  background-color: #1d9ed8;
  color: #fff;
  border: none;

  &:hover {
    color: #fff;
  }
`;

const ModalWrapper = styled.section`
  .close {
    cursor: pointer;
  }
  form {
    padding-top: 40px;
    padding-bottom: 40px;

    > div:first-child {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 3rem;
    }

    & input {
      width: 100%;
      border: 1px solid #2e5c71;
      padding: 8px 0 8px 10px;
      border-radius: 4px;

      &::placeholder {
        font-size: 14px;
        color: #2e5c71;
      }
    }

    & h1 {
      color: #1d9ed8;
      font-size: 25px;
      font-family: "Open Sans", sans-serif;
      font-weight: bold;
      margin-bottom: 0;
    }

    & > div {
      width: 85%;
      margin: auto;

      &:not(:first-child) {
        margin-bottom: 1rem;
      }
    }

    p {
      color: #2e5c71;
      font-size: 13px;
    }

    & div:nth-child(6) {
      display: flex;
    }

    & div:last-child {
      span {
        color: #2e5c71;
        font-size: 13px;
        text-align: center;
        padding-top: 10px;
        display: inline-block;
      }
    }
  }
`;

export default SignUp;
