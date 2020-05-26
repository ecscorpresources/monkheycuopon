import React from "react";
import { Link } from "react-router-dom";
import { PrimaryLink } from "../../../globals/links-button";
import FadeIn from "react-fade-in";
import styled from "styled-components";

const SingleCandidate = () => {
  return (
    <>
      <FadeIn transitionDuration="500">
        <Wrapper>
          <article className="with_border">
            <Link to="/dashboard-recruiter">Overview</Link>
            <Link to="/recruiter-jobs">Jobs</Link>
            <Link to="/candidates">Candidate</Link>
          </article>

          <article className="main-content">
            <aside>
              <div>
                <p>3 Candidates</p>
                <h4>Data Analyst - Toronto Canada</h4>
              </div>

              <div>
                <article>
                  <img
                    src={require("../../../assets/img/98.png")}
                    alt="candidate"
                  />
                  <div>
                    <h2>Henry Edger</h2>
                    <h3>Data Manager</h3>
                    <h3>Scarborough, Canada</h3>
                  </div>
                  <span>Match</span>
                </article>
              </div>

              <div>
                <article>
                  <img
                    src={require("../../../assets/img/99.png")}
                    alt="candidate"
                  />
                  <div>
                    <h2>Timi Ondo</h2>
                    <h3>Digital Marketer</h3>
                    <h3>Toronto, Canada</h3>
                  </div>
                  <span>Match</span>
                </article>
              </div>

              <div>
                <article>
                  <img
                    src={require("../../../assets/img/100.png")}
                    alt="candidate"
                  />
                  <div>
                    <h2>Alex Cruz</h2>
                    <h3>Operations Analyst</h3>
                    <h3>Toronto, Canada</h3>
                  </div>
                </article>
              </div>
            </aside>
            <div className="candidate_section">
              <div className="candidate_name_talent">
                <h1>Henry Edger</h1>
                <p>Data Manager</p>
              </div>
              <div>
                <h4>Candidates Evaluation Questions (2/2)</h4>
                <h5>Do you have a Bachelor's Degree?</h5>
                <span>Yes</span>
                <h5>Do you have any experience as a Data Analyst?</h5>
                <span>Yes</span>
              </div>

              <div>
                <h4>Cover Letter</h4>
                <h5>To Whom it may concern</h5>
                <h6>
                  I am greatly thrilled to see your job posting for the position
                  of Data Analyst in your company. I am genuinely positive that
                  I will be of great value to this establishment especially
                  regarding the upcoming challenge currently in view of the
                  company. I have been able to successfully upgrade the flow of
                  quality information that finds its way into the production
                  department of my current employ and we have been able to use
                  that information to build a more stable customer base with a
                  turnover growth of 11%.
                </h6>
                <h6>
                  I am aware of the new direction in which Medison Industries is
                  driving into and I am glad to say this project is a perfect
                  match for my personal and professional interests
                </h6>
              </div>
              <div>
                <h4>Resume</h4>
                <ResumeWrapper>
                  <article>
                    <section>
                      <div>
                        <img
                          src={require("../../../assets/img/101.png")}
                          alt="profile"
                          className="profile"
                        />
                      </div>
                      <h4>HENRY</h4>
                      <h4>
                        <strong>EDGER</strong>
                      </h4>
                      <h6>DATA ANALYST</h6>
                      <div>
                        <img
                          src={require("../../../assets/img/43.png")}
                          alt="facebook"
                        />
                        <img
                          src={require("../../../assets/img/44.png")}
                          alt="twitter"
                        />
                        <img
                          src={require("../../../assets/img/45.png")}
                          alt="instagram"
                        />
                      </div>
                    </section>

                    <section>
                      <h1>Profile</h1>
                      <p>
                        Professional Web Developer with 10 years of experience
                        designing and developing interactive websites and web
                        apps. Innovative use of technology and SEO to drive
                        traffic and engage users. Able to complete projects
                        effectively and satisfy customers with interactive user
                        friendly web sites
                      </p>
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
                              Created webiste designs and developments for
                              clients in diverse fields <br /> such as eductaion
                              and medicine
                            </li>
                            <li>
                              Worked closely with senior developers and learned
                              advanced project <br /> management skills
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
                            <li>
                              Designed Websites for clients on a contact basis
                            </li>
                            <li>
                              Developed project scope and created concepts
                            </li>
                            <li>
                              Maintained schedules and assured on time delivery
                              of content
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
                  </article>
                </ResumeWrapper>
              </div>
              <div>
                <MessageLink>Send Message</MessageLink>
                <MessageLink>Schedule Interview</MessageLink>
                <MessageLink>Reject Candidate</MessageLink>
              </div>
            </div>
          </article>
        </Wrapper>
      </FadeIn>
    </>
  );
};

const ResumeWrapper = styled.main`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  color: #fff;

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
    padding: 2rem 2rem 0 2rem;

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
        color: #fff;
      }

      & div:first-child {
        padding-bottom: 2rem;
      }
    }

    h1 {
      font-size: 1.5rem;
      font-weight: 600;
    }

    p {
      font-size: 1.3rem;
      padding-top: 1rem;
    }
  }

  & article:nth-child(2) {
    ul li {
      font-size: 1.2rem;
    }

    p {
      font-size: 1.2rem;
    }

    flex: 1;
    background-color: #499aa6;
    padding: 3rem 3rem 0 3rem;

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

    h5 {
      color: #ffcc29 !important;
      font-size: 1.1rem;
      font-weight: 600;
      border-bottom: 2px solid #fff;
      padding-bottom: 0.5rem;
    }
  }
`;

const Wrapper = styled.section`
  width: 90vw;
  margin: 0 auto;
  padding-top: 5rem;
  display: flex;
  flex-direction: column;

  article.with_border {
    border-bottom: 1px solid #606c86;

    a {
      color: #fff;
      border: 1px solid #606c86;
      color: #606c86;
      padding: 0.5rem 4rem;
      display: inline-block;
      text-decoration: none;
      font-size: 1.5rem;
      border-radius: 22px 22px 0 0;
      border-bottom: 0;

      &:not(:last-of-type) {
        margin-right: 1.5rem;
      }
    }
  }

  .main-content {
    display: grid;
    grid-template-columns: 1fr 3fr;
    column-gap: 3rem;
    padding-top: 5rem;

    @media (max-width: 992px) {
      grid-template-columns: 1fr;
      row-gap: 2rem;
    }
  }

  aside {
    div:first-child {
      background: #606c86;
      border-radius: 14px 14px 0 0;
      padding: 1rem;
      margin-bottom: 2rem;
      color: #fff;
      padding-top: 4px;
      padding-bottom: 9px;
      padding-left: 3rem;

      p {
        font-size: 1.5rem;
      }

      h4 {
        font-size: 1.5rem;
        font-weight: 600;
      }
    }
    h2 {
      font-size: 1.5rem;
      font-weight: 600;
    }

    h3 {
      font-size: 1.5rem;
    }

    article {
      display: flex;
      align-items: center;
      color: #606c86;
      margin-bottom: 2rem;

      img {
        margin-right: 2rem;
      }
      span {
        margin-left: auto;
        font-size: 1.3rem;
        font-weight: 600;
        color: green;
      }
    }
  }

  .candidate_section {
    > div:last-child {
      padding-top: 4rem;
    }
    > div:not(:last-child) {
      border-bottom: 1px solid #606c86;

      h6 {
        font-size: 1.5rem;
        padding-bottom: 1rem;
        color: #606c86;
        line-height: 1.6;
      }

      span {
        font-size: 1.8rem;
        color: green;
        padding-bottom: 2rem;
        display: inline-block;
      }

      h5 {
        font-size: 1.5rem;
        padding-bottom: 1rem;
        color: #606c86;
      }

      h4 {
        font-size: 1.5rem;
        color: #606c86;
        font-weight: 600;
      }
      &:not(:first-child) {
        padding-top: 1rem;
        padding-bottom: 3rem;
      }
    }

    .candidate_name_talent {
      background: #606c86;
      color: #fff;
      padding-bottom: 1rem;
      border-radius: 14px 14px 0 0;
      padding-top: 4px;
      padding-bottom: 4px;
      padding-left: 3rem;

      h1 {
        font-size: 2rem;
        font-weight: 600;
      }
    }
  }
`;

const MessageLink = styled(PrimaryLink)`
  border: 1px solid #606c86;
  color: #606c86;

  &:not(:last-child) {
    margin-right: 1rem;
  }
`;

export default SingleCandidate;
