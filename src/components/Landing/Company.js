import React, { useEffect } from "react";
import "../../css/job.scss";
import Sidebar from "../Jobs/Sidebar";
import Navbar from "../Jobs/Navbar";
import FadeIn from "react-fade-in";
import styled from "styled-components";

const Company = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <FadeIn transitionDuration="500">
        <Navbar />
        <CompanyWrapper>
          <article className="work">
            <div>
              <h4>Why work with Us</h4>
              <p>
                Medison is set to create a world class community of
                inter-connected health practitioners that provide <br /> a
                global solutions to global needs
              </p>
              <p>
                Our leading research facility gives us the cutting edge to be
                spontaneously adaptive to the quickly <br /> changing demands of
                medicine
              </p>

              <p>
                We have an online health provision service with over 37 onsite
                offices across the globe. with over <br /> 200,000 doctors and
                500,000+ medical personnel connected to our database, we are
                able to provide <br /> quality health service within seconds to
                clients within 5000 localities across the world at a click.
              </p>
              <p>
                We strive to become a global solution, always being there even
                to the least person in the most remote <br /> locations.
              </p>
              <p>
                The beating heart of the billions in the world is our source at
                Medison. We survive as a company <br /> because you survive.
              </p>
            </div>

            <div>
              <ul className="address_phone">
                <li>
                  <img
                    src={require("../../assets/img/47.png")}
                    alt="location"
                  />
                  <span>33 Blythwood Rd, Toronto, Canada</span>
                </li>

                <li>
                  <img src={require("../../assets/img/48.png")} alt="phone" />
                  <span>416 554 7625</span>
                </li>
              </ul>
            </div>
          </article>

          <Sidebar>
            <article className="sidebar">
              <div>
                <ul>
                  <li>Social Media Administrator</li>
                  <li>Toronto, Canada</li>
                  <li>Salary - $12,000 Annually</li>
                  <li>Posted May 02, 2020</li>
                </ul>

                <ul>
                  <li>Data Architect</li>
                  <li>Toronto, Canada</li>
                  <li>Salary - $24,000 Annually</li>
                  <li>Posted May 05, 2020</li>
                </ul>

                <ul>
                  <li>Data Analyst</li>
                  <li>Toronto, Canada</li>
                  <li>Salary - $20,000 Annually</li>
                  <li>Posted May 05, 2020</li>
                </ul>
              </div>
            </article>
          </Sidebar>
        </CompanyWrapper>
      </FadeIn>
    </>
  );
};

const CompanyWrapper = styled.section`
  padding-top: 5rem;
  padding-bottom: 5rem;
  width: 83vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 13rem;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }

  & article.work {
    h4 {
      padding-bottom: 0.7rem;
      font-size: 1.6rem;
      font-weight: bold;
      color: #5e8799;
    }
    p {
      font-size: 1.5rem;
      padding-bottom: 1.5rem;
    }

    div:first-child {
      border-bottom: 2px solid #568799;
    }

    div:nth-child(2) {
      margin-top: 2rem;
    }
  }

  ul.address_phone {
    display: flex;

    li {
      font-size: 1.5rem;
      display: flex;
      align-items: center;
      color: #568799;

      img {
        margin-right: 1rem;
      }
    }

    & li:first-child {
      margin-right: 4rem;
    }
  }

  .sidebar {
    padding: 1rem 2rem 3.5rem 2rem;

    ul {
      padding: 1.5rem 3.5rem;
      color: #5e8799;
    }

    ul:not(:last-child) {
      color: #5e8799;
      border-bottom: 1px solid #5e8799;
    }
    ul li:first-child {
      font-size: 1.8rem;
    }

    ul li:not(:first-child) {
      font-size: 1.5rem;
    }
  }
`;

export default Company;
