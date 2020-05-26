import React, { useEffect } from "react";
import CandidateSearchForm from "./CandidateSearchForm";
import Talent from "../Jobs/Talent";
import Sidebar from "../Jobs/Sidebar";
import FadeIn from "react-fade-in";
import styled from "styled-components";

const Candidate = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <FadeIn transitionDuration="500">
        <CandidateSearchForm />
        <CandidateWrapper>
          <div>
            <Talent
              img={require("../../assets/img/19.png")}
              title="Henry Edger"
              company="Data Analyst"
              location="Scarborough, Canada"
              description="N3,000 - N10,000"
              rating={require("../../assets/img/23.png")}
            />

            <Talent
              img={require("../../assets/img/20.png")}
              title="Arnold Wayne"
              company="Web Developer"
              location="Portland, Oregon"
              description="N3,000 - N10,000"
              rating={require("../../assets/img/24.png")}
            />

            <Talent
              img={require("../../assets/img/21.png")}
              title="Timi Ondo"
              company="Digital Marketer"
              location="New-York USA"
              description="N10,000 - N25,000"
              rating={require("../../assets/img/23.png")}
            />

            <Talent
              img={require("../../assets/img/22.png")}
              title="Alex Cruz"
              company="Operations Analyst"
              location="Texas, Canada"
              description="N3,000 - N10,000"
              rating={require("../../assets/img/24.png")}
            />

            <Talent
              img={require("../../assets/img/22.png")}
              title="Elizabeth Bridge"
              company="Network Administrator"
              location="Odense, Denmark"
              description="N10,000 - N25,000"
              rating={require("../../assets/img/24.png")}
            />
          </div>
          <article>
            <Sidebar>
              <article className="talents">
                <h5>Sponsored Resume</h5>
                <div className="talents__resumes">
                  <article>
                    <div>
                      <img
                        src={require("../../assets/img/58.png")}
                        alt="resume 1"
                      />
                    </div>
                    <div>
                      <h4>Ruth Daniel</h4>
                      <p>Software Developer</p>
                      <p>Lagos, Nigeria</p>
                      <span>$10,000 - $25,000</span>
                    </div>
                  </article>

                  <article>
                    <div>
                      <img
                        src={require("../../assets/img/59.png")}
                        alt="resume 2"
                      />
                    </div>
                    <div>
                      <h4>David Adama</h4>
                      <p>IT Coordinator</p>
                      <p>Touba, Senegal</p>
                      <span>$3,000 - $10,000</span>
                    </div>
                  </article>

                  <article>
                    <div>
                      <img
                        src={require("../../assets/img/60.png")}
                        alt="resume 3"
                      />
                    </div>
                    <div>
                      <h4>Elizabeth Bridge</h4>
                      <p>Network Administrator</p>
                      <p>Odense, Denmark</p>
                      <span>$10,000 - $25,000</span>
                    </div>
                  </article>

                  <article>
                    <div>
                      <img
                        src={require("../../assets/img/61.png")}
                        alt="resume 1"
                      />
                    </div>
                    <div>
                      <h4>Joel Wont</h4>
                      <p>Help Desk Technician</p>
                      <p>Bath, England</p>
                      <span>$10,000 - $25,000</span>
                    </div>
                  </article>

                  <article>
                    <div>
                      <img
                        src={require("../../assets/img/62.png")}
                        alt="resume 1"
                      />
                    </div>
                    <div>
                      <h4>Elvis Brian</h4>
                      <p>System Analyst</p>
                      <p>Barcelona, Spain</p>
                      <span>$3,000 - $10,000</span>
                    </div>
                  </article>

                  <article>
                    <div>
                      <img
                        src={require("../../assets/img/62.png")}
                        alt="resume 1"
                      />
                    </div>
                    <div>
                      <h4>Elvis Brian</h4>
                      <p>System Analyst</p>
                      <p>Barcelona, Spain</p>
                      <span>$3,000 - $10,000</span>
                    </div>
                  </article>
                </div>
              </article>
            </Sidebar>
          </article>
        </CandidateWrapper>
      </FadeIn>
    </>
  );
};

const CandidateWrapper = styled.section`
  width: 75vw;
  margin: 4rem auto 0 auto;
  display: grid;
  grid-template-columns: 4fr 2fr;
  grid-gap: 1.3rem;
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    row-gap: 4rem;
  }

  & > article {
    section {
      margin-bottom: 2rem;
    }
  }

  .talents {
    h5 {
      font-size: 1.5rem;
      padding-bottom: 2rem;
      color: #5e8799;
    }
    padding: 4rem 4rem;
    &__resumes {
      display: flex;
      flex-direction: column;

      & article {
        display: flex;
        margin-bottom: 4rem;

        p {
          margin-bottom: 0.1rem;
          font-size: 1.3rem;
        }

        span {
          font-size: 1.3rem;
        }

        & div:first-child {
          margin-right: 2rem;
        }
      }
    }
  }
`;

export default Candidate;
