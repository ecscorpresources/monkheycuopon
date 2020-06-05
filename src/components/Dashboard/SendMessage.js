import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal, ModalBody } from "reactstrap";
import icon from "../../assets/img/99.png";

import { GRID, EQUALGRID } from "../FormControl";
import styled from "styled-components";

const SendMessage = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const closeModal = () => setModal(!modal);
  return (
    <>
      <Link onClick={toggle}>Send Message</Link>
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
                <h1>Send a private message</h1>
                <p></p>
              </div>
              <EQUALGRID>
                <input type="text" placeholder="To:" />
                <select name="templates" id="templates">
                  <option value="insert Templates">Insert Templates</option>
                </select>
              </EQUALGRID>
              <GRID>
                <input type="text" placeholder="Last Name" />
              </GRID>
              <GRID>
                <input type="text" placeholder="Subject" />
              </GRID>
              <GRID>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="6"
                ></textarea>
              </GRID>

              <article className="save-template">
                <div>
                  <input type="checkbox" name="save" id="save" />
                  <label htmlFor="save">Save Template</label>
                </div>
                <div>
                  <input type="text" placeholder="Title Template" />
                </div>
              </article>

              <button type="submit" to="/messages">
                Send
              </button>
              <p>
                By clicking "SEND" you consent to your message being processed
                and analysed by Tamalan with accordance with our{" "}
                <Link>Terms of Service</Link> and <Link>Privacy Policy</Link>
              </p>
            </form>
          </ModalBody>
        </ModalWrapper>
      </Modal>
    </>
  );
};

const ModalWrapper = styled.section`
  padding: 2rem 2rem;
  .close {
    cursor: pointer;
  }
  form {
    & button {
      background-color: #094a6a;
      color: #fff;
      border: none;
      font-size: 1.8rem;
      padding: 0.3rem 4rem;
      border-radius: 4px;
      margin-top: 1rem;
    }

    .save-template {
      display: flex;
      align-items: baseline;

      input[type="checkbox"] {
        position: relative;
        top: 2px;
      }

      div:nth-child(2) {
        flex-basis: 45%;
      }

      label {
        font-size: 1.2rem;
        font-weight: bold;
        display: inline-block;
        margin: 0 1rem;
        color: grey;
      }
    }

    & input[type="text"] {
      width: 100%;
      border: 1px solid #ddd;
      padding: 8px 0 8px 10px;
      border-radius: 4px;
      margin-bottom: 1rem;

      &::placeholder {
        font-size: 14px;
        color: #2e5c71;
      }
    }

    select {
      background: url(${icon});
      background-repeat: no-repeat;
      background-position: 95% center;
      border: none;
      border-radius: 4px;
      font-size: 1.4rem;
      padding-left: 1rem;
      padding-top: 0.7rem;
      padding-bottom: 0.7rem;
      margin-bottom: 1rem;
      font-weight: 600;
      color: grey;
      background-color: #ecf2fa !important;
    }

    textarea {
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 1.4rem;
      padding-left: 1rem;
      padding-top: 1rem;
      padding-bottom: 1rem;
      margin-bottom: 1rem;
      width: 100%;
      resize: none;
    }

    p {
      color: #2e5c71;
      padding-top: 3rem;

      a {
        color: #2e5c71;
        text-decoration: underline;
      }
    }

    & h1 {
      color: #2e5c71;
      font-size: 1.5rem;
      font-family: "Open Sans", sans-serif;
      padding-bottom: 5px;
    }

    & > div {
      &:not(:last-child) {
        margin-bottom: 1rem;
      }
    }

    p {
      color: #2e5c71;
      font-size: 13px;
    }
  }
`;

export default SendMessage;
