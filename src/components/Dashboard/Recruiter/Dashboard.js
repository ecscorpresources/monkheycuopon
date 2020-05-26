import React from "react";
import { Link } from "react-router-dom";
import { SecondaryLink } from "../../../globals/links-button";
import FadeIn from "react-fade-in";
import "../../../css/recruiterdashboard.scss";
import styled from "styled-components";

const Dashboard = () => {
  return (
    <FadeIn transitionDuration="500">
      <section className="recruitdashboardFirstSection">
        <article>
          <Link to="/dashboard-recruiter">Overview</Link>
          <Link to="/recruiter-jobs">Jobs</Link>
          <Link to="/candidates">Candidates</Link>
        </article>
        <article>
          <div>
            <div>
              <img
                src={require("../../../assets/img/80.png")}
                alt="jobs posted"
              />
            </div>
            <div>
              <h4>55</h4>
              <p>Jobs</p>
              <h5>Posted</h5>
            </div>
          </div>

          <div>
            <div>
              <img
                src={require("../../../assets/img/81.png")}
                alt="jobs opened"
              />
            </div>
            <div>
              <h4>17</h4>
              <p>Jobs</p>
              <h5>Open</h5>
            </div>
          </div>

          <div>
            <div>
              <img
                src={require("../../../assets/img/82.png")}
                alt="candidates reviewed"
              />
            </div>
            <div>
              <h4>4300</h4>
              <p>Candidates</p>
              <h5>Reviewed</h5>
            </div>
          </div>

          <div>
            <div>
              <img
                src={require("../../../assets/img/83.png")}
                alt="candidates interviewed"
              />
            </div>
            <div>
              <h4>700</h4>
              <p>Candidates</p>
              <h5>Interviewed</h5>
            </div>
          </div>

          <div>
            <div>
              <img
                src={require("../../../assets/img/84.png")}
                alt="candidates interviewed"
              />
            </div>
            <div>
              <h4>34</h4>
              <p>Candidates</p>
              <h5>Hired</h5>
            </div>
          </div>

          <div>
            <div>
              <img
                src={require("../../../assets/img/85.png")}
                alt="Jobs Closed"
              />
            </div>
            <div>
              <h4>34</h4>
              <p>Jobs</p>
              <h5>Closed</h5>
            </div>
          </div>

          <div>
            <div>
              <img
                src={require("../../../assets/img/86.png")}
                alt="Hire rate"
              />
            </div>
            <div>
              <h4>89.4</h4>
              <p>Hire</p>
              <h5>Rate</h5>
            </div>
          </div>
        </article>
      </section>

      <section className="recruitdashboardSecondSection">
        <article>
          <div className="current">
            <h5>Current</h5>
            <p>last 30 Days</p>
          </div>
          <div className="jobs__candidates">
            <div>
              <h4>Jobs</h4>
              <h6>
                <span>Posted</span>
                <span>22</span>
              </h6>
              <h6>
                <span>Open</span>
                <span>12</span>
              </h6>

              <h6>
                <span>Paused</span>
                <span>3</span>
              </h6>

              <h6>
                <span>Closed</span>
                <span>7</span>
              </h6>
            </div>

            <div>
              <h4>Candidates</h4>
              <h6>
                <span>New</span>
                <span>482</span>
              </h6>
              <h6>
                <span>Reviewed</span>
                <span>305</span>
              </h6>

              <h6>
                <span>Screened</span>
                <span>256</span>
              </h6>

              <h6>
                <span>Offered</span>
                <span>8</span>
              </h6>

              <h6>
                <span>Rejected</span>
                <span>163</span>
              </h6>

              <h6>
                <span>Hired</span>
                <span>5</span>
              </h6>
            </div>
          </div>
        </article>
        <article>
          <h3>Most Recent Application</h3>
          <table>
            <thead>
              <tr>
                <th>
                  <input type="checkbox" name="" id="" />
                </th>
                <th>Date</th>
                <th>Name</th>
                <th>Position Applied</th>
                <th>Job Match</th>
                <th>Aptitude Test</th>
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
                <td>04/05/20</td>
                <td>Henry Edger</td>
                <td>Data Analyst</td>
                <td>YES</td>
                <td>Attached</td>
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
                <td>02/05/20</td>
                <td>Sydney Kraft</td>
                <td>Social Media Admin</td>
                <td>YES</td>
                <td>Not Attached</td>
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
                <td>22/04/20</td>
                <td>Sam Nnamdi</td>
                <td>Web Developer</td>
                <td>NO</td>
                <td>Attached</td>
                <td>
                  <img
                    src={require("../../../assets/img/79.png")}
                    alt="delete"
                  />
                </td>
              </tr>
            </tbody>
          </table>

          <div className="table-title">
            <h3>Notifications</h3>
            <Link to="/messages">View all Messages</Link>
          </div>
          <table>
            <thead>
              <tr>
                <th>
                  <input type="checkbox" name="" id="" />
                </th>
                <th>Item</th>
                <th>Date</th>
                <th>Detail</th>
                <td>
                  <img
                    src={require("../../../assets/img/78.png")}
                    alt="delete"
                  />
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>177 Candidates Unreviewed</td>
                <td>04/05/20</td>
                <td>You have 177 Candidates to...</td>
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
                <td>Sam sent you a Note for Sydney Kraft</td>
                <td>02/05/20</td>
                <td>I think this is a fitting choice...</td>
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
                <td>Reminder:Interview with Sam Nnamdi</td>
                <td>22/04/20</td>
                <td>Can we talk?</td>
                <td>
                  <img
                    src={require("../../../assets/img/79.png")}
                    alt="delete"
                  />
                </td>
              </tr>
            </tbody>
          </table>

          <div className="table-title">
            <h3>Recommended Candidates</h3>
            <Link>Edit Parameters</Link>
          </div>
          <table>
            <thead>
              <tr>
                <th>
                  <input type="checkbox" name="" id="" />
                </th>
                <th>Name</th>
                <th>Educational Status</th>
                <th>Current/Last Post Held</th>
                <th>Salary Range</th>
                <td></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>Amaka Shittu</td>
                <td>B.Sc - Computer Science</td>
                <td>Data Analyst</td>
                <td>$5000 - $9000</td>
                <td>
                  <TableLink primary>View Resume</TableLink>
                </td>
              </tr>

              <tr>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>Fred Stephen</td>
                <td>Diploma - Graphic Design</td>
                <td>UX/UI Designer</td>
                <td>$5000 - $15000</td>
                <td>
                  <TableLink primary>View Resume</TableLink>
                </td>
              </tr>

              <tr>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>Omolade James</td>
                <td>B.Sc - Economics</td>
                <td>UX/UI Designer</td>
                <td>$15000 - $20000</td>
                <td>
                  <TableLink primary>View Resume</TableLink>
                </td>
              </tr>
            </tbody>
          </table>
        </article>
      </section>
    </FadeIn>
  );
};

const TableLink = styled(SecondaryLink)`
  padding: 5px 20px;
`;

export default Dashboard;
