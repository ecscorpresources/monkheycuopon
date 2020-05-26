import React, { useEffect } from "react";
import styled from "styled-components";
import "../../css/job.scss";
import { SecondaryLink } from "../../globals/links-button";
import Sidebar from "./Sidebar";
import Navbar from "../Jobs/Navbar";
import FadeIn from "react-fade-in";

const Job = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <FadeIn transitionDuration="500">
        <Navbar star />
        <section className="siglejobsectionsection">
          <article>
            <div>
              <p>
                Medison is an online health provision service with over 37
                onsite offices across the <br /> globe. With over 200,000
                doctors and 500,000+ medical personnel connected to our <br />{" "}
                database, we are able to provide quality health service within
                seconds to clients <br /> within 5000 locations across the world
                at a click
              </p>
            </div>
            <div>
              <h4>Position Description</h4>
              <p>
                The Data Architect is responsible for bridging the gap between
                the business team <br /> deployment of technical product and the
                technical team providing data that facilitate <br /> the
                development and deployments of application
              </p>
            </div>

            <div>
              <h4>Expected Duties and Responsibilities</h4>
              <ul className="responsibility">
                <li>Provide technical team leadership</li>
                <li>
                  Design and provide data solutions to large scale complex
                  problems
                </li>
                <li>
                  Be able to communicate designs and solutions effectively
                </li>
                <li>Ability to engage effectively and professionally</li>
              </ul>
            </div>

            <div>
              <h4>What You Can Expect From Us</h4>
              <ul className="responsibility">
                <li>
                  There is a basic salary increment of 20% based on job
                  performance every 3-6 months
                </li>
                <li>
                  Our employees are entitled to basic loan facilities to ease
                  function
                </li>
              </ul>
            </div>
          </article>

          <Sidebar>
            <article className="sidebar">
              <div>
                <em>12 April, 2020, 10:23am</em>
                <p>Madison Industries</p>
                <p>Toronto, Canada</p>
                <h5>
                  <p>Job type</p>
                  <p>Permanent</p>
                </h5>
                <h5>
                  <p>Salary</p> <p>N37,000</p>
                </h5>
                <h4>Benefits</h4>
                <ul>
                  <li>Pay Increase</li>
                  <li>Paid Vacation</li>
                  <li>Car Loan</li>
                  <li>Accomodation Loan</li>
                </ul>

                <h5>
                  <p>Jobs Posted</p>
                  <p>5 Jobs</p>
                </h5>

                <h5>
                  <p>Candidates</p>
                  <p>5 Recruits</p>
                </h5>
              </div>

              <div className="sidebar__button">
                <ApplyLink to="/application">Apply For Job</ApplyLink>
              </div>
            </article>
          </Sidebar>
        </section>
      </FadeIn>
    </>
  );
};

const ApplyLink = styled(SecondaryLink)`
  margin-top: 3rem;
  padding: 10px 30px;
`;

export default Job;
