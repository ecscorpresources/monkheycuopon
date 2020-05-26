import React from "react";
import { Link } from "react-router-dom";
import FadeIn from "react-fade-in";
import styled from "styled-components";

const Jobs = () => {
  return (
    <FadeIn transitionDuration="500">
      <Wrapper>
        <div>
          <article>
            <Link to="/dashboard-recruiter">Overview</Link>
            <Link to="/recruiter-jobs">Jobs</Link>
            <Link to="/candidates">Candidates</Link>
          </article>
        </div>
        <div>
          <h3>You have 4 Open Jobs</h3>
          <table>
            <thead>
              <tr>
                <th>
                  <input type="checkbox" name="" id="" />
                </th>
                <th>Date</th>
                <th>Jobs</th>
                <th>Company</th>
                <th>Location</th>
                <th>Date Posted</th>
                <th>Candidates</th>
                <th>Status</th>
                <th>Sponsor Package</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>04/05/20</td>
                <td>Data Architect</td>
                <td>Medison Industries</td>
                <td>Toronto Canada</td>
                <td>12/04/20</td>
                <td>
                  <p>13 Candidates</p>
                  <p>13 Unread</p>
                </td>
                <td>Open</td>
                <td>Weekly</td>
              </tr>

              <tr>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>04/05/20</td>
                <td>Data Analyst</td>
                <td>Medison Industries</td>
                <td>Toronto Canada</td>
                <td>02/04/20</td>
                <td>
                  <p>35 Candidates</p>
                  <p>9 Unread</p>
                </td>
                <td>Open</td>
                <td>Weekly</td>
              </tr>

              <tr>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>04/05/20</td>
                <td>Project Manager</td>
                <td>Medison Industries</td>
                <td>Toronto Canada</td>
                <td>22/04/20</td>
                <td>
                  <p>15 Candidates</p>
                  <p>3 Unread</p>
                </td>
                <td>Open</td>
                <td>Free</td>
              </tr>

              <tr>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>04/05/20</td>
                <td>UX/UI Designer</td>
                <td>Medison Industries</td>
                <td>Toronto Canada</td>
                <td>08/04/20</td>
                <td>
                  <p>83 Candidates</p>
                  <p>9 Unread</p>
                </td>
                <td>Open</td>
                <td>Weekly</td>
              </tr>

              <tr>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>16/05/20</td>
                <td>Social Media Admin</td>
                <td>Medison Industries</td>
                <td>Toronto Canada</td>
                <td>08/04/20</td>
                <td>
                  <p>83 Candidates</p>
                  <p>9 Unread</p>
                </td>
                <td>CLosed</td>
                <td>Weekly</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Wrapper>
    </FadeIn>
  );
};

const Wrapper = styled.section`
  width: 90vw;
  margin: 0 auto;
  padding-top: 5rem;
  display: flex;
  flex-direction: column;

  h3 {
    color: #606c86;
    font-weight: 600;
  }

  & div:first-child {
    padding-bottom: 54px;

    article {
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
  }

  table {
    width: 100%;
    font-size: 1.3rem;
    border-radius: 6px 6px 0 0;
    overflow: hidden;
    margin-bottom: 4rem;
  }

  table thead tr {
    background-color: #606c86;
    color: #fff;
  }

  table th {
    padding: 0.5rem 2rem;
    font-weight: 100;
  }

  table tr,
  table td {
    padding: 0.5rem 2rem;
  }

  table tbody tr {
    border-bottom: 1px solid #606c86;
  }
`;

export default Jobs;
