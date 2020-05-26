import React from "react";
import FadeIn from "react-fade-in";
import "../../../css/candidatedashboard.scss";
import { PrimaryLink } from "../../../globals/links-button";
import styled from "styled-components";

const Dashboard = () => {
  return (
    <>
      <FadeIn transitionDuration="500">
        <section className="candidatedashboardFisrtSection">
          <article>
            <div>
              <div>
                <img
                  src={require("../../../assets/img/73.png")}
                  alt="followers"
                />
              </div>
              <div>
                <p>Companies</p>
                <p>Following</p>
              </div>
              <h4>30</h4>
            </div>

            <div>
              <div>
                <img
                  src={require("../../../assets/img/74.png")}
                  alt="applied jobs"
                />
              </div>
              <div>
                <p>Jobs</p>
                <h5>Applied</h5>
                <h4>30</h4>
              </div>
            </div>

            <div>
              <div>
                <img
                  src={require("../../../assets/img/75.png")}
                  alt="interviews invited"
                />
              </div>
              <div>
                <p>Interviews</p>
                <p>Invited</p>
                <h4>3</h4>
              </div>
            </div>

            <div>
              <div>
                <img
                  src={require("../../../assets/img/76.png")}
                  alt="interviews invited"
                />
              </div>
              <div>
                <p>Jobs</p>
                <h5>Offered</h5>
                <h4>3</h4>
              </div>
            </div>

            <div>
              <div>
                <img
                  src={require("../../../assets/img/77.png")}
                  alt="interviews invited"
                />
              </div>
              <div>
                <p>Offers</p>
                <h5>Accepted</h5>
                <h4>1</h4>
              </div>
            </div>
          </article>

          <article>
            <h3>Most Current Applications</h3>
            <table>
              <thead>
                <tr>
                  <th>Jobs Appplied</th>
                  <th>Company</th>
                  <th>Salary Offer</th>
                  <th>Application Position Update</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Data Analyst</td>
                  <td>Medison Industries</td>
                  <td>$12,000 Annually</td>
                  <td>Reviewed</td>
                </tr>

                <tr>
                  <td>Data Architect</td>
                  <td>UAC Foods</td>
                  <td>$850 Monthly</td>
                  <td>Reviewed</td>
                </tr>

                <tr>
                  <td>Digital Marketer</td>
                  <td>ECSCORP RESOURCES</td>
                  <td>$600 Monthly</td>
                  <td>Invited for Interview</td>
                </tr>
              </tbody>
            </table>

            <h3>Recommended Job Vacancies</h3>
            <table>
              <thead>
                <tr>
                  <th>
                    <input type="checkbox" name="" id="" />
                  </th>
                  <th>Job Offer</th>
                  <th>Salary Range</th>
                  <th>Company</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td>Data Analyst</td>
                  <td>$5,000 Annually</td>
                  <td>Sortamine Co.</td>
                </tr>

                <tr>
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td>Data Analyst</td>
                  <td>$7,000 Annually</td>
                  <td>Virgum Group</td>
                </tr>

                <tr>
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td>Data Manager</td>
                  <td>$9,000 Annually</td>
                  <td>Atlas Company</td>
                </tr>
              </tbody>
            </table>

            <h3>Notifications/Messages</h3>
            <table>
              <thead>
                <tr>
                  <th>
                    <input type="checkbox" name="" id="" />
                  </th>
                  <th>Date</th>
                  <th>Item</th>
                  <th>Details</th>
                  <th>
                    <img
                      src={require("../../../assets/img/78.png")}
                      alt="delete"
                    />
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td>05/05/20</td>
                  <td>Wanda is following you</td>
                  <td>Wanda from Atlas Company is following...</td>
                  <td>
                    <img
                      src={require("../../../assets/img/79.png")}
                      alt="delete"
                    />
                  </td>
                </tr>

                <tr>
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td>27/04/20</td>
                  <td>Interview Invite</td>
                  <td>Hi, I'm Ken from Climes Recruiting, we can</td>
                  <td>
                    <img
                      src={require("../../../assets/img/79.png")}
                      alt="delete"
                    />
                  </td>
                </tr>

                <tr>
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td>27/04/20</td>
                  <td>Interview Process Update</td>
                  <td>Your application with Medison is being...</td>
                  <td>
                    <img
                      src={require("../../../assets/img/79.png")}
                      alt="delete"
                    />
                  </td>
                </tr>
              </tbody>
            </table>

            <div>
              <ResumeLink primary>SPONSOR RESUME</ResumeLink>
              <ResumeLink primary>EDIT RESUME</ResumeLink>
              <ResumeLink primary>CREATE JOB ALERT</ResumeLink>
            </div>
          </article>
        </section>
      </FadeIn>
    </>
  );
};

const ResumeLink = styled(PrimaryLink)`
  :not(:last-child) {
  }
  background-color: #40759d;
  padding: 10px;
  font-size: 1.6rem;
  @media (max-width: 992px) {
    border-radius: 0;
  }
`;

export default Dashboard;
