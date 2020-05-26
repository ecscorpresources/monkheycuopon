import React, { useState } from "react";
import { Modal, ModalBody } from "reactstrap";
import { TextInput, EQUALGRID } from "../../components/Jobs/Forms/FormContol";
import { PrimaryLink, PrimaryButton } from "../../globals/links-button";
import styled from "styled-components";

const JobAlert = (props) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const closeModal = () => setModal(!modal);
  return (
    <>
      <PrimaryLink primary to="/" onClick={toggle}>
        JOBALERT
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
              <h3>Set Up Job Alert</h3>
              <p>
                Get Jobs straight into your inbox and be ahead of the
                competition by being <br /> the first to apply for a posiiton.
                It is a quick set up and you can create <br /> multiple alerts
                to receive what you want
              </p>
            </div>

            <form>
              <EQUALGRID>
                <TextInput type="text" placeholder="Keywords/Job Title" />
                <TextInput type="text" placeholder="Location" />
              </EQUALGRID>
              <EQUALGRID>
                <TextInput type="text" placeholder="Sector (Optional)" />
                <TextInput type="password" placeholder="Email" />
              </EQUALGRID>
              <div>
                <PrimaryButton primary to="/" onClick={toggle}>
                  JOBALERT
                </PrimaryButton>
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

export default JobAlert;
