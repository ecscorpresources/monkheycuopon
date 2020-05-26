import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal, ModalBody } from "reactstrap";
import { TextArea, GRID } from "../../components/Jobs/Forms/FormContol";
import { PrimaryLink, PrimaryButton } from "../../globals/links-button";
import styled from "styled-components";

const CandidateMessage = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const closeModal = () => setModal(!modal);
  return (
    <>
      <PrimaryLink primary to="/" onClick={toggle}>
        MESSAGE
      </PrimaryLink>
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

            <div>
              <h3>
                From: Ken Liam <span>(kliam@clirecruit.com)</span>
              </h3>
              <h3>To: Me</h3>
              <h4>Subject: Interview Invite</h4>
            </div>

            <div>
              <p>Mode: Live Meet</p>

              <ul>
                <li>Schedule</li>
                <li>Date: 21/06/2020</li>
                <li>Time: 10am</li>
                <li>
                  Location: Clime Recruit Office, 8, Holly Street, SC, Canada
                </li>
              </ul>

              <ul>
                <li>Interviewers:</li>
                <li>James Urbrey: jurbrey@climerecruit.com</li>
                <li>Cynthia Adam - caclime@climerecruit.com</li>
              </ul>
            </div>

            <div>
              <h5>Hi, Wayne</h5>
              <h5>
                My name is Ken from Clime Recruits. We would like to have a meet
                with you. Please <br /> make it to above location on the
                scheduled date and time.
              </h5>

              <h5>Thanks</h5>
              <PrimaryButton>REPLY</PrimaryButton>
            </div>
            <form>
              <div>
                <h3>From: Me</h3>
                <h3>
                  To: Ken Liam <span>kliam@climerecruit.com</span>
                </h3>
                <GRID>
                  <TextArea />
                  <PrimaryButton>SEND</PrimaryButton>
                  <Link>Cancel</Link>
                </GRID>
              </div>
            </form>
          </ModalBody>
        </ModalWrapper>
      </Modal>
    </>
  );
};

const ModalWrapper = styled.section`
  form {
    padding-top: 40px;
    padding-bottom: 40px;
    & h1 {
      color: #2e5c71;
      font-size: 25px;
      font-family: "Open Sans", sans-serif;
      font-weight: bold;
      padding-bottom: 1rem;
    }

    & span {
      color: #2e5c71;
      font-size: 1rem;
      display: inline-block;
      margin-right: 0.5rem;
    }

    & > div {
      width: 85%;
      margin: auto;

      &:not(:last-child) {
        margin-bottom: 1rem;
      }
    }

    & div:first-child {
      a {
        color: #f58634;
        font-size: 0.9rem;
        text-decoration: underline;
      }
    }

    & div:nth-child(4) {
      text-align: right;

      a {
        text-decoration: underline;
        color: #2e5c71;
        font-size: 0.9rem;
      }
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
  }
`;

export default CandidateMessage;
