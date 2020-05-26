import React, { useEffect } from "react";
import styled from "styled-components";
import FadeIn from "react-fade-in";

const Resume = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <FadeIn transitionDuration="500">
        <ResumeWrapper>
          <article>
            <section>
              <div>
                <img
                  src={require("../../assets/img/42.png")}
                  alt="profile"
                  className="profile"
                />
              </div>
              <h4>ARNOLD</h4>
              <h4>
                <strong>WAYNE</strong>
              </h4>
              <h6>WEB DEVELOPER</h6>
              <div>
                <img src={require("../../assets/img/43.png")} alt="facebook" />
                <img src={require("../../assets/img/44.png")} alt="twitter" />
                <img src={require("../../assets/img/45.png")} alt="instagram" />
              </div>
            </section>

            <section>
              <h1>Profile</h1>
              <p>
                Professional Web Developer with 10 years of experience designing
                and developing interactive websites and web apps. Innovative use
                of technology and SEO to drive traffic and engage users. Able to
                complete projects effectively and satisfy customers with
                interactive user friendly web sites
              </p>
            </section>

            <section>
              <h1>Contact</h1>
              <ul>
                <li>
                  <img
                    src={require("../../assets/img/47.png")}
                    alt="instagram"
                  />
                  <span>385 Holsen Drive Portland, OR 97214</span>
                </li>

                <li>
                  <img
                    src={require("../../assets/img/48.png")}
                    alt="instagram"
                  />
                  <span>548 434 5463</span>
                </li>

                <li>
                  <img
                    src={require("../../assets/img/49.png")}
                    alt="instagram"
                  />
                  <span>awaynesynergy@gmail.com</span>
                </li>
              </ul>
            </section>

            <section>
              <h1>Technical SKills</h1>
              <ul>
                <li>JAVA</li>
                <li>HTML</li>
                <li>Wordpress</li>
                <li>PHP</li>
                <li>React</li>
              </ul>
            </section>

            <section>
              <h1>Language</h1>
              <ul>
                <li>English</li>
                <li>Spanish</li>
                <li>Portugese</li>
              </ul>
            </section>
          </article>

          <article>
            <section>
              <h5>Experience</h5>
              <div>
                <p>July 2019 - Date</p>
                <div>
                  <ul>
                    <li>STAMPARD Media</li>
                    <li>Senior Web developer</li>
                    <li>Managed Web projects with 2 - 4 Developers</li>
                    <li>
                      Develop Concepts, control project flow and ensure
                      deliverable milestones <br /> are met
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <p>Feb 2017 - Jun 2019</p>
                <div>
                  <ul>
                    <li>Rosewood Inc</li>
                    <li>Web developer</li>
                    <li>
                      Created webiste designs and developments for clients in
                      diverse fields <br /> such as eductaion and medicine
                    </li>
                    <li>
                      Worked closely with senior developers and learned advanced
                      project <br /> management skills
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <p>Aug 2015 - Mar 2019</p>
                <div>
                  <ul>
                    <li>Self Employed</li>
                    <li>Web developer</li>
                    <li>Designed Websites for clients on a contact basis</li>
                    <li>Developed project scope and created concepts</li>
                    <li>
                      Maintained schedules and assured on time delivery of
                      content
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h5>Education</h5>
              <div>
                <p>Graduated 2016</p>
                <div>
                  <ul>
                    <li>University Of Plymouth</li>
                    <li>Diploma in Computer Science</li>
                    <li>Certificate attached</li>
                    <li>
                      Develop Concepts, control project flow and ensure
                      deliverable milestones <br /> are met
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h5>Skills</h5>
              <div>
                <ul>
                  <li>Web Content Management</li>
                  <li>Strong Collaborative skills</li>
                  <li>Project Management</li>
                  <li>Excellent problem solving skills</li>
                </ul>
              </div>
            </section>

            <section>
              <h5>Hobbies</h5>
              <div>
                <ul>
                  <li>Cycling</li>
                  <li>Reading</li>
                  <li>Playing Chess</li>
                  <li>Watching movies</li>
                </ul>
              </div>
            </section>

            <section>
              <h5>Projects</h5>
              <div>
                <div>
                  <img
                    src={require("../../assets/img/52.png")}
                    alt="project 1"
                  />
                </div>
                <div>
                  <img
                    src={require("../../assets/img/53.png")}
                    alt="project 2"
                  />
                </div>
                <div>
                  <img
                    src={require("../../assets/img/54.png")}
                    alt="project 3"
                  />
                </div>
              </div>
            </section>

            <section>
              <h5>References</h5>
              <div>
                <div>
                  <h3>JONHSON ADAMS</h3>
                  <ul>
                    <li>Senior Manager at Dattam Homes</li>
                    <li>584 453 9945</li>
                    <li>jadams@dottamhomes.com</li>
                  </ul>
                </div>

                <div>
                  <h3>FELA THOMPSON</h3>
                  <ul>
                    <li>Senior Web Developer at Google Inc.</li>
                    <li>584 657 3323</li>
                    <li>felathompson@gmail.com</li>
                  </ul>
                </div>
              </div>
            </section>
          </article>
        </ResumeWrapper>
      </FadeIn>
    </>
  );
};

const ResumeWrapper = styled.main`
  display: flex;
  flex-wrap: wrap;
  width: 80vw;
  margin: 0 auto;
  color: #fff;

  @media (max-width: 992px) {
    /* flex-direction: column; */
  }

  h1 {
    font-size: 1rem;
    font-weight: 600;
    border-bottom: 1px solid #499aa6;
    padding-bottom: 0.5rem;
    color: #499aa6;
  }

  & article:first-child {
    flex: 0 0 30%;
    background-color: #606c86;
    display: flex;
    flex-direction: column;
    padding: 2rem 2rem;

    @media (max-width: 992px) {
      flex: 1;
    }

    img.profile {
      width: 100%;
      height: auto;
    }

    ul {
      padding-top: 1rem;
    }

    ul li {
      font-size: 0.9rem;

      &:not(:last-child) {
        margin-bottom: 1rem;
      }

      span {
        margin-left: 1rem;
      }
    }

    & section:not(:first-child) {
      margin-bottom: 2rem;
    }

    & section:first-child {
      align-self: center;
      color: #fff;
      padding-bottom: 6rem;

      img {
        margin-right: 0.5rem;
      }

      h6 {
        color: #ffcc29;
        padding-bottom: 0.5rem;
      }

      h4 {
        font-size: 2rem;
      }

      & div:first-child {
        padding-bottom: 2rem;
      }
    }

    h1 {
      font-size: 1rem;
      font-weight: 600;
    }

    p {
      font-size: 0.9rem;
      padding-top: 1rem;
    }
  }

  & article:nth-child(2) {
    flex: 1;
    background-color: #499aa6;
    padding: 3rem 3rem;

    & section:first-child {
      & > div {
        display: grid;
        grid-template-columns: 1fr 3fr;
        font-size: 0.9rem;
        padding-top: 1rem;
        padding-bottom: 1rem;
      }
    }

    & section:nth-child(2) {
      & > div {
        display: grid;
        grid-template-columns: 1fr 3fr;
        font-size: 0.9rem;
        padding-top: 1rem;
        padding-bottom: 1rem;
      }
    }

    & section:nth-child(3) {
      & > div {
        font-size: 0.9rem;
        padding-top: 1rem;
        padding-bottom: 1rem;
      }
    }

    & section:nth-child(4) {
      & > div {
        font-size: 0.9rem;
        padding-top: 1rem;
        padding-bottom: 1rem;
      }
    }

    & section:nth-child(5) {
      & > div {
        width: 37vw;
        margin: 0 auto;
        padding: 3rem 0;
        display: grid;
        font-size: 0.9rem;
        grid-template-columns: 1fr 1fr 1fr;
        justify-items: center;
        align-items: center;

        > div {
          margin-bottom: 2rem;
        }

        @media (max-width: 992px) {
          grid-template-columns: 1fr;
        }
      }
    }

    & section:nth-child(6) {
      & > div {
        display: flex;
        justify-content: space-between;
        font-size: 0.9rem;
        padding-top: 1rem;
        padding-bottom: 1rem;

        h3 {
          font-size: 1rem;
        }
      }
    }
    h5 {
      color: #ffcc29;
      font-size: 1.1rem;
      font-weight: 600;
      border-bottom: 2px solid #fff;
      padding-bottom: 0.5rem;
    }
  }
`;
export default Resume;
