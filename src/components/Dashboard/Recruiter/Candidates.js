import React from "react";
import { Link } from "react-router-dom";
import { SecondaryLink } from "../../../globals/links-button";
import FadeIn from "react-fade-in";
import styled from "styled-components";

const Candidates = () => {
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
          <h3>Candidates for Data Analyst - Toronto, Canada</h3>
          <table>
            <thead>
              <tr>
                <th>
                  <input type="checkbox" name="" id="" />
                </th>
                <th>Date</th>
                <th>Candidate</th>
                <th>Status</th>
                <th>Current/Last Job</th>
                <th>Job Location</th>
                <th>Education Level</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>04/05/20</td>
                <td>
                  <Link to="/candidate">Henry Edger</Link>
                  <p>Match</p>
                </td>
                <td>New</td>
                <td>Database Manager</td>
                <td>Toronto, Canada</td>
                <td>BS - Computer Science</td>
                <td>
                  <TableLink primary>Send Message</TableLink>
                </td>
              </tr>

              <tr>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>04/05/20</td>
                <td>
                  <p>Henry Edger</p>
                  <p>Match</p>
                </td>
                <td>New</td>
                <td>Database Manager</td>
                <td>Toronto, Canada</td>
                <td>BS - Computer Science</td>
                <td>
                  <TableLink primary>Send Message</TableLink>
                </td>
              </tr>

              <tr>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>04/05/20</td>
                <td>
                  <p>Timi Ondo</p>
                  <p>Match</p>
                </td>
                <td>Reviewed</td>
                <td>Digital Marketer</td>
                <td>Toronto, Canada</td>
                <td>Bachelor's - Statistics</td>
                <td>
                  <TableLink primary>Send Message</TableLink>
                </td>
              </tr>

              <tr>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>04/05/20</td>
                <td>Alex Cruz</td>
                <td>New</td>
                <td>Operations Analyst</td>
                <td>Toronto, Canada</td>
                <td>Bachelor's - Economics</td>
                <td>
                  <TableLink primary>Send Message</TableLink>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Wrapper>
    </FadeIn>
  );
};

const TableLink = styled(SecondaryLink)`
  padding: 5px 20px;
`;

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
    padding: 1rem 2rem;
  }

  table tbody tr {
    border-bottom: 1px solid #606c86;
  }
`;

export default Candidates;
