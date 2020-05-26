import React from "react";
import styled from "styled-components";
import { SecondaryLink } from "../../../globals/links-button";

const ApplicationForm = () => {
  return (
    <>
      <FormWrapper>
        <form>
          <h5>Please answer these questions?</h5>
          <div>
            <p>Do you have a good knowledge of Applied Mathematics?</p>
            <select name="skill" id="skill">
              <option value="Yes" defaultValue>
                Yes
              </option>
              <option value="No">No</option>
            </select>
          </div>

          <div>
            <p>Have you led/managed a team before?</p>
            <select name="team" id="team">
              <option value="Yes" defaultValue>
                Yes
              </option>
              <option value="No">No</option>
            </select>
          </div>

          <div>
            <h5>Cover Letter</h5>
            <textarea
              name="cover letter"
              id="cover letter"
              cols="30"
              rows="7"
            ></textarea>
          </div>
          <div>
            <input type="checkbox" name="test" id="test" />
            <span>Attach Aptitude Test Result</span>
          </div>

          <div>
            <span>Your Resume will be sent along side your application</span>
            <div>
              <ResumeLink>Edit Resume</ResumeLink>
              <ResumeLink>Preview Resume</ResumeLink>
            </div>
          </div>
        </form>
      </FormWrapper>
    </>
  );
};

const FormWrapper = styled.section`
  form {
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;

    & div:not(:last-child) {
      margin-bottom: 20px;
    }

    & div:last-child {
      align-self: flex-start;
      background-color: #5e8799;
      color: #fff;
      padding: 10px 10px;
      border-radius: 3px;
      font-size: 0.9rem;
    }

    input[type="checkbox"] {
      margin-right: 1.5rem;
    }

    input[type="checkbox"] + span {
      font-size: 0.8rem;
      font-weight: 600;
      color: #7b93ad;
    }
  }

  & h5 {
    color: #5e8799;
    padding-bottom: 0.5rem;
    font-size: 1.5rem;
    font-weight: bold;
  }

  p {
    padding-bottom: 0.5rem;
    color: #96989a;
    font-size: 1.5rem;
  }
  select {
    border: 1px solid #5e8799;
    padding: 8px 70px 10px 10px;
    border-radius: 5px;
  }

  textarea {
    width: 100%;
    resize: none;
    border-radius: 4px;
    border: 1px solid #5e8799;
  }
`;

const ResumeLink = styled(SecondaryLink)`
  padding: 10px 30px;
  margin-right: 0.5rem;
  margin-bottom: 1rem;
  background-color: #606c86;
`;
export default ApplicationForm;
