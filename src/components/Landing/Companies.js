import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FadeIn from "react-fade-in";
import CompaniesSearch from "./CompaniesSearch";

const Companies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <FadeIn transitionDuration="500">
        <CompanyWrapper>
          <article>
            <CompaniesSearch />
          </article>
          <article>
            <div>
              <Link to="/company">
                <div>
                  <img src={require("../../assets/img/4.png")} alt="" />
                </div>
                <p>Jobs at Sullivan</p>
              </Link>
            </div>
            <div>
              <Link to="/company">
                <div>
                  <img src={require("../../assets/img/5.png")} alt="" />
                </div>
                <p>Jobs at MTN</p>
              </Link>
            </div>
            <div>
              <Link to="/company">
                <div>
                  <img src={require("../../assets/img/6.png")} alt="" />
                </div>
                <p>Jobs at Access</p>
              </Link>
            </div>

            <div>
              <Link to="/company">
                <div>
                  <img src={require("../../assets/img/7.png")} alt="" />
                </div>
                <p>Jobs at Google</p>
              </Link>
            </div>
            <div>
              <Link to="/company">
                <div>
                  <img src={require("../../assets/img/8.png")} alt="" />
                </div>
                <p>Jobs at ECSCORP</p>
              </Link>
            </div>
            <div>
              <Link to="/company">
                <div>
                  <img src={require("../../assets/img/9.png")} alt="" />
                </div>
                <p>Jobs at Dangote</p>
              </Link>
            </div>

            <div>
              <Link to="/company">
                <div>
                  <img src={require("../../assets/img/4.png")} alt="" />
                </div>
                <p>Jobs at Sullivan</p>
              </Link>
            </div>
            <div>
              <Link to="/company">
                <div>
                  <img src={require("../../assets/img/5.png")} alt="" />
                </div>
                <p>Jobs at MTN</p>
              </Link>
            </div>
            <div>
              <Link to="/company">
                <div>
                  <img src={require("../../assets/img/6.png")} alt="" />
                </div>
                <p>Jobs at Access</p>
              </Link>
            </div>
          </article>
        </CompanyWrapper>
      </FadeIn>
    </>
  );
};

const CompanyWrapper = styled.section`
  background-color: #fafafa;
  padding: 4rem 0;

  & a {
    text-decoration: none;
    color: #000;
  }

  & article:nth-child(2) {
    width: 80vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    align-items: center;
    justify-items: center;
    column-gap: 2rem;
    row-gap: 2rem;

    > div {
      background-color: #fff;
      text-align: center;
      border-radius: 4px;
      border: 1px solid #f5f5f5;

      img {
        width: 100%;
        height: auto;
      }

      p {
        padding-top: 15px;
        padding-bottom: 15px;
        font-family: "Open Sans", sans-serif;
        font-size: 14px;
      }
    }
  }
`;

export default Companies;
