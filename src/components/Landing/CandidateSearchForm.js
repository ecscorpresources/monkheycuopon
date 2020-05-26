import React from "react";
import styled from "styled-components";

const CandidateSearchForm = () => {
  return (
    <>
      <SearchWrapper>
        <form>
          <article>
            <input type="text" placeholder="Type in keyword, skill, role" />
            <input type="text" placeholder="Type in choice location" />
            <button type="submit">Search</button>
          </article>
          <article>
            <select name="salary" id="salary" defaultValue>
              <option value="Any Salary">Salary Preference</option>
            </select>
            <select name="job" id="job">
              <option value="Any Company" defaultValue>
                Any Job Type
              </option>
            </select>
          </article>
        </form>
      </SearchWrapper>
    </>
  );
};

const SearchWrapper = styled.section`
  padding-top: 4rem;

  & form {
    & article:nth-child(2) {
      width: 40vw;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
      font-size: 1.5rem;

      @media (max-width: 992px) {
        width: 70vw;
        grid-template-columns: 1fr;
        row-gap: 1rem;
      }
    }
    & article:first-child {
      width: 70vw;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 2fr 2fr 1fr;
      align-items: center;
      column-gap: 1rem;
      font-size: 1.5rem;
      margin-bottom: 20px;
      @media (max-width: 992px) {
        grid-template-columns: 1fr;
        row-gap: 1rem;
      }
    }

    & input {
      padding: 1.2rem 0 1.2rem 2rem;
      border-radius: 20px;
      border: none;
      background-color: #ddd;
      margin-right: 8px;
      @media (max-width: 992px) {
        border-radius: 0;
      }
    }

    & button {
      color: #fff;
      background-color: #40759d;
      border: none;
      text-decoration: none;
      text-align: center;
      display: inline-block;
      font-size: 17px;
      border-radius: 50px;
      padding: 0.6rem 0;
      margin-right: 8px;
      font-family: "Open Sans", sans-serif;
      @media (max-width: 992px) {
        border-radius: 0;
      }
    }

    & select {
      padding: 0.9rem 0 0.9rem 5px;
      border-radius: 50px;
      border: 1px solid #ddd;
      margin-right: 8px;
      @media (max-width: 992px) {
        border-radius: 0;
      }
    }
  }
`;

export default CandidateSearchForm;
