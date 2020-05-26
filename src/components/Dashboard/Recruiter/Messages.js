import React, { useEffect } from "react";
import FadeIn from "react-fade-in";
import styled from "styled-components";

const Messages = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <FadeIn transitionDuration="500">
        <Wrapper>
          <article>
            <h5>Message View</h5>
          </article>
          <article>
            <aside>
              <div>
                <img src={require("../../../assets/img/87.png")} alt="delete" />
                <h4>Inbox (2) </h4>
              </div>

              <div>
                <img src={require("../../../assets/img/88.png")} alt="delete" />
                <h4>Sent</h4>
              </div>

              <div>
                <img src={require("../../../assets/img/89.png")} alt="delete" />
                <h4>Archive</h4>
              </div>
              <div>
                <img src={require("../../../assets/img/91.png")} alt="delete" />
                <h4>Important</h4>
              </div>

              <div>
                <img src={require("../../../assets/img/92.png")} alt="delete" />
                <h4>Trash</h4>
              </div>
            </aside>

            <div>
              <table>
                <thead>
                  <tr>
                    <th>
                      <input type="checkbox" name="" id="" />
                    </th>
                    <th>From</th>
                    <th>Subject</th>
                    <th>Date</th>
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
                    <td>Heather</td>
                    <td>NOTE - Review Feedback for Henry Edger</td>
                    <td>13/05/20 12:23pm</td>
                    <td></td>
                  </tr>

                  <tr>
                    <td>
                      <input type="checkbox" name="" id="" />
                    </td>
                    <td>Techngage</td>
                    <td>Your Sponsored Job Post Is About To Expire</td>
                    <td>04/05/20 12:23pm</td>
                    <td></td>
                  </tr>

                  <tr>
                    <td>
                      <input type="checkbox" name="" id="" />
                    </td>
                    <td>Alex Cruz</td>
                    <td>Application Submit</td>
                    <td>04/05/20 12:23pm</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
        </Wrapper>
      </FadeIn>
    </>
  );
};

const Wrapper = styled.section`
  width: 85vw;
  margin: 0 auto;
  padding-top: 4rem;

  & article:first-child {
    border-bottom: 1px solid #606c86;
    padding-bottom: 3rem;

    h5 {
      font-size: 2.5rem;
      font-weight: 600;
      color: #606c86;
    }
  }

  & article:nth-child(2) {
    width: 85vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 4fr;
    column-gap: 5rem;
    row-gap: 2rem;
    padding-top: 3rem;
    @media (max-width: 992px) {
      grid-template-columns: 1fr;
    }

    & aside {
      & div {
        display: flex;
        align-items: center;

        &:not(:last-child) {
          margin-bottom: 2rem;
        }

        img {
          margin: 0 5rem 0 2rem;
        }

        h4 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #40759d;
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
  }
`;

export default Messages;
