import React from "react";
import styled from "styled-components";

const CompaniesSearch = () => {
  return (
    <>
      <SearchWrapper>
        <form>
          <article>
            <input type="text" placeholder="Company" />
            <select type="text">
              <option value="Sector" defaultValue>
                Sector
              </option>
              <option value="Computer Science">Computer Science</option>
              <option value="Design">Design</option>
            </select>
            <button type="submit">Search</button>
          </article>
        </form>
      </SearchWrapper>
    </>
  );
};

const SearchWrapper = styled.section`
  padding-top: 4rem;

  & form {
    & article:first-child {
      width: 60vw;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      align-items: center;
      column-gap: 2rem;
      font-size: 1.5rem;
      margin-bottom: 8rem;
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
      @media (max-width: 992px) {
        border-radius: 0;
      }
    }

    & select {
      padding: 1.2rem 0 1.2rem 2rem;
      border-radius: 20px;
      border: none;
      background-color: #ddd !important;
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
      padding: 0.9rem 0;
      font-family: "Open Sans", sans-serif;
      @media (max-width: 992px) {
        border-radius: 0;
      }
    }
  }
`;

export default CompaniesSearch;
