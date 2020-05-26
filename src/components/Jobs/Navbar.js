import React from "react";
import styled from "styled-components";

const Navbar = (props) => {
  return (
    <>
      <NavWrapper>
        <article>
          <div>
            <img src={require("../../assets/img/21.png")} alt="company logo" />
          </div>
          <div>
            <img src={require("../../assets/img/16.png")} alt="twitter" />
            <img src={require("../../assets/img/27.png")} alt="facebook" />
            {props.star && (
              <img src={require("../../assets/img/24.png")} alt="rating" />
            )}
          </div>
        </article>
        <article>
          <h3>Data Architect</h3>
        </article>
      </NavWrapper>
    </>
  );
};

const NavWrapper = styled.nav`
  background-color: #5e8799;
  display: flex;
  align-items: flex-end;
  padding: 0 5rem 1rem 5rem;

  h3 {
    color: #fff;
    font-size: 2.5rem;
  }

  & article:first-child {
    flex: 0 0 66%;
    display: flex;
    align-items: flex-end;
    position: relative;
    top: 4rem;

    & div:first-child {
      img {
        margin-right: 2rem;
      }
    }

    & div:nth-child(2) {
      flex: 1;
      display: flex;
      align-items: center;

      img:first-child {
        margin-right: 2rem;
      }

      img:nth-child(3) {
        margin-left: auto;
      }
    }
  }
`;

export default Navbar;
