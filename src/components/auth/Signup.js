import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal, ModalBody } from "reactstrap";
import { PrimaryLink } from "../../Globals/links-button";
import styled from "styled-components";

const SignUp = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const closeModal = () => setModal(!modal);
  return (
    <>
      <JoinLink to="/" onClick={toggle}>
        Join For Free
      </JoinLink>
      <Modal isOpen={modal} toggle={toggle} size="md">
        <ModalWrapper>
          <ModalBody>
            <div className="close">
              <img
                src={require("../../assets/img/close.png")}
                alt=""
                onClick={closeModal}
              />
            </div>

            <form>
              <div>
                <h1>Register</h1>
                <img
                  src={require("../../assets/img/54.png")}
                  alt="a 1000 cuopon logo"
                />
              </div>
              <div>
                <input type="text" placeholder="First Name" />
              </div>
              <div>
                <input type="text" placeholder="Last Name" />
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
                  of Monkhey and Tamalan
                </p>
              </div>
              <div>
                {/* this is for testing purposes */}
                <SignupLink onClick={toggle} to="/">
                  SIGNUP
                </SignupLink>
                <span>
                  Signing Up on Tamalan gets you signed up on all Monkhey
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

const JoinLink = styled(Link)`
  border: 2px solid #1d9ed8;
  color: #1d9ed8;
  background-color: #fff;
  text-decoration: none;
  display: inline-block;
  font-weight: 400;
  font-size: 1.4rem !important;
  text-align: center;
  border-radius: 50px;
  padding: 3px 20px;
  margin-bottom: 1rem;
  font-family: "Open Sans", sans-serif;

  &:hover {
    text-decoration: none;
  }
`;

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
      color: #2e5c71;
      font-size: 25px;
      font-family: "Open Sans", sans-serif;
      font-weight: bold;
      margin-bottom: 0;
    }

    & > div {
      width: 85%;
      margin: auto;

      &:not(:last-child) {
        margin-bottom: 1rem;
      }
    }

    p {
      color: #2e5c71;
      font-size: 13px;
    }

    & div:nth-child(7) {
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
