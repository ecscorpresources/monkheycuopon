import React from "react";
import styled from "styled-components";

const SearchNav = () => {
  return (
    <>
      <SearchWrapper>
        <article>
          <h1>Product Upload Form</h1>
        </article>
        <article>
          <form>
            <input type="text" placeholder="Search here" />
          </form>
        </article>
      </SearchWrapper>
    </>
  );
};

export default SearchNav;

const SearchWrapper = styled.section`
  background-color: #cfddf1;
  display: flex;
  justify-content: space-between;
  @media (max-width: 576px) {
    flex-direction: column;
  }
  padding: 2rem 4rem;
  article:nth-child(2) {
    flex-basis: 30%;

    @media (max-width: 992px) {
      flex-basis: 20%;
    }
    & form {
      padding: 0;
      input {
        border: 2px solid #1d9ed8;
        padding: 1rem 20rem 1rem 2rem;
        border-radius: 5rem;
        background-image: url("../assets/img/01.png");
        background-repeat: no-repeat;
        background-position: calc(100% - 10px) center;
        &::placeholder {
          font-size: 1.4rem;
        }
      }
    }
  }
`;
