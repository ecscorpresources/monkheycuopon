import React from "react";
import FadeIn from "react-fade-in";
import Search from "../../components/Jobs/Search";
import "../../css/jobs.scss";
import Talent from "../../components/Jobs/Talent";
import styled from "styled-components";

const jobs = () => {
  return (
    <>
      <FadeIn transitionDuration="500">
        <Search />
        <section className="jobSecondSection">
          <div>
            <Talent
              img={require("../../assets/img/19.png")}
              title="Project Manager"
              company="Access Bank"
              location="Lagos Nigeria"
              description="Access Bank looking to expand to newer shores is seeking to
                  upgrade its IT staff on an on going software project that will
                  revolutionalize the mode of operations in the banking ..."
              rating={require("../../assets/img/23.png")}
            />

            <Talent
              img={require("../../assets/img/20.png")}
              title="Backend Web Developer"
              company="ECSCORP Resources"
              location="Lagos, Nigeria"
              description="
              The services of a forward thinking Backend Web Developer with a good attitude and minimum supervision. For the project we expect a logical person with high level php experience ....
              "
              rating={require("../../assets/img/24.png")}
            />

            <Talent
              img={require("../../assets/img/21.png")}
              title="Data Achitect"
              company="Medison Industries"
              location="Toronto Canada"
              description="The Data Architect is responsible for bridging the gap between the business team deployment of technical product and the technical team providing data that facilitate the development ..."
              rating={require("../../assets/img/23.png")}
            />

            <Talent
              img={require("../../assets/img/22.png")}
              title="Visual Designer"
              company="Sullivan & Worchester"
              location="Accra, Ghana"
              description="Here at Sullivan, our success stems from the value we place on our numerous, competent partner-staff from all over and this has driven our business from the shores of our locality to the ..."
              rating={require("../../assets/img/24.png")}
            />
          </div>
          <Sidebar>
            <div>
              <h6>Not Available</h6>
            </div>
            <div>
              <p>
                <span>Salary</span>
                <span>N35,000</span>
              </p>
              <div>
                <h4>Benefits</h4>
                <h6>Pay Increase</h6>
                <h6>Paid Vacation</h6>
                <h6>Car Loan</h6>
                <h6>Accomodation Loan</h6>
              </div>
            </div>

            <div>
              <p>
                <span>Salary</span>
                <span>N35,000</span>
              </p>
              <div>
                <h4>Benefits</h4>
                <h6>Pay Increase</h6>
                <h6>Paid Vacation</h6>
                <h6>Car Loan</h6>
                <h6>Accomodation Loan</h6>
              </div>
            </div>

            <div>
              <p>
                <span>Salary</span>
                <span>N35,000</span>
              </p>
              <div>
                <h4>Benefits</h4>
                <h6>Pay Increase</h6>
                <h6>Paid Vacation</h6>
                <h6>Car Loan</h6>
                <h6>Accomodation Loan</h6>
              </div>
            </div>
          </Sidebar>
        </section>
      </FadeIn>
    </>
  );
};

export const Sidebar = styled.article`
  display: flex;
  flex-direction: column;

  > div {
    flex: 1;
    padding-top: 2rem;
    padding-left: 2rem;
    padding-right: 2rem;

    &:first-child {
      text-align: right;
    }

    h4 {
      padding-bottom: 0.5rem;
      font-size: 1.5rem;
      font-weight: 600;
      color: #333;
    }

    & h6 {
      font-size: 1.4rem;
      color: #96989a;
    }

    & h6:not(:last-child) {
      padding-bottom: 0.5rem;
    }

    p {
      display: flex;
      justify-content: space-between;
      padding-bottom: 1rem;
      color: #96989a;
      font-size: 1.4rem;
    }
    &:not(:last-child) {
      border-bottom: 2px dashed #ddd;
    }
  }
`;

export default jobs;
