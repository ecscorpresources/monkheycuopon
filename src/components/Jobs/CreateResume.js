import React, { useEffect } from "react";
import ResumeForm from "./Forms/ResumeForm";
import FadeIn from "react-fade-in";
import "../../css/resume.scss";
import Sidebar from "./Sidebar";
import styled from "styled-components";

const CreateResume = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <FadeIn transitionDuration="500">
        <section className="resumeFirstsection">
          <article>
            <ResumeForm />
          </article>
          <Sidebar>
            <JobWrapper>
              <h5>Sponsored Jobs</h5>
              <div className="sidebar__jobs">
                <article>
                  <h4>Medison Industries</h4>
                  <ul>
                    <li>Socialal Media Administrator</li>
                    <li>Toronto, Canada</li>
                    <li>Salary-$12,000 Annually</li>
                    <li>liosted May 02, 2020</li>
                  </ul>
                </article>

                <article>
                  <h4>Medison Industries</h4>
                  <ul>
                    <li>Data Architect</li>
                    <li>Toronto, Canada</li>
                    <li>Salary-$12,000 Annually</li>
                    <li>liosted May 05, 2020</li>
                  </ul>
                </article>

                <article>
                  <h4>UBISOFT</h4>
                  <ul>
                    <li>Data Analyst</li>
                    <li>New York, USA</li>
                    <li>Salary-$20,000 Annually</li>
                    <li>liosted May 05, 2020</li>
                  </ul>
                </article>

                <article>
                  <h4>ECSCORP</h4>
                  <ul>
                    <li>Backend Develolier</li>
                    <li>Lagos, Nigeria</li>
                    <li>Salary-$24,000 Annually</li>
                    <li>liosted May 05, 2020</li>
                  </ul>
                </article>
              </div>
            </JobWrapper>
          </Sidebar>
        </section>
      </FadeIn>
    </>
  );
};

const JobWrapper = styled.div`
  h5 {
    font-size: 1.5rem;
    padding-bottom: 2rem;
    color: #5e8799;
  }
  padding: 3rem;
`;

export default CreateResume;
