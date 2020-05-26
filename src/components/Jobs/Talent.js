import React from "react";
import styled from "styled-components";
import { SecondaryLink } from "../../globals/links-button";

const Talent = ({ img, rating, title, company, location, description }) => {
  return (
    <>
      <TalentWrapper>
        <div>
          <div>
            <img src={img} alt="company logo" />
          </div>
          <div>
            <h3>{title}</h3>
            <p>{company}</p>
            <p>{location}</p>
            <p>{description}</p>
          </div>
          <div>
            <img src={rating} alt="rating" />
          </div>
        </div>

        <JobLink to="/job" primary>
          View Job
        </JobLink>
      </TalentWrapper>
    </>
  );
};

const JobLink = styled(SecondaryLink)`
  padding: 7px 35px;
`;

const TalentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5em;
  border-radius: 4px;
  background-color: #f3f3f4;

  &:not(:last-child) {
    margin-bottom: 1.3rem;
  }

  & div:first-child {
    display: flex;
    align-items: flex-start;

    & div:first-child {
      margin-right: 20px;
    }

    & div:nth-child(2) {
      padding-bottom: 1.5rem;
    }

    & div:nth-child(3) {
      margin-left: auto;
    }

    h3 {
      color: #96989a;
      padding-bottom: 0.5rem;
      font-weight: 400;
    }

    p {
      font-size: 1.4rem;
      color: #96989a;
      padding-bottom: 0.3rem;
      font-weight: 400;
    }
  }

  & a {
    align-self: flex-end;
  }
`;

export default Talent;
