import React, { useEffect } from "react";
import styled from "styled-components";
import "../../css/application.scss";
import { SecondaryLink } from "../../globals/links-button";
import Sidebar from "./Sidebar";
import ApplicationForm from "./Forms/ApplicationForm";
import FadeIn from "react-fade-in";
import Navbar from "../Jobs/Navbar";

const Application = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <FadeIn transitionDuration="500">
        <Navbar />
        <section className="applicationFirstsection">
          <article>
            <ApplicationForm />
          </article>
          <Sidebar>
            <article className="sidebar">
              <div>
                <em>12 April, 2020, 10:23am</em>
                <p>Madison Industries</p>
                <p>Toronto, Canada</p>
                <h5>
                  <span>Job type</span>
                  <span>Permanent</span>
                </h5>
                <h5>
                  <span>Salary</span> <span>N37,000</span>
                </h5>
                <h4>Benefits</h4>
                <ul>
                  <li>Pay Increase</li>
                  <li>Paid Vacation</li>
                  <li>Car Loan</li>
                  <li>Accomodation Loan</li>
                </ul>

                <h5>
                  <span>Jobs Posted</span>
                  <span>5 Jobs</span>
                </h5>

                <h5>
                  <span>Candidates</span>
                  <span>5 Recruits</span>
                </h5>
              </div>

              <div className="sidebar__button">
                <ApplicationLink to="/application">
                  Submit Application
                </ApplicationLink>
              </div>
            </article>
          </Sidebar>
        </section>
      </FadeIn>
    </>
  );
};

const ApplicationLink = styled(SecondaryLink)`
  font-size: 1.5rem;
  padding: 12px 28px;
  margin-top: 4rem;
`;
export default Application;
