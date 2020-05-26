import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import FadeIn from "react-fade-in";
import JobpostForm from "./Forms/JobpostForm";

const Jobpost = () => {
  return (
    <>
      <FadeIn transitionDuration="500">
        <JobpostWrapper className="jobpostFirstSection">
          <section className="jobpostformcolumn">
            <article>
              <JobpostForm />
            </article>
          </section>
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
              </div>
            </article>
          </Sidebar>
        </JobpostWrapper>
      </FadeIn>
    </>
  );
};

const JobpostWrapper = styled.main`
  padding-top: 5rem;
  padding-bottom: 5rem;
  width: 80vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 8rem;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    row-gap: 3.5rem;
  }

  @media (max-width: 768px) {
    width: 90vw;
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

export default Jobpost;
