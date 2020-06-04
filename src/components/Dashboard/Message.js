import React from "react";
import { Helmet } from "react-helmet";
import FadeIn from "react-fade-in";
import SearchNav from "../SearchNav";
import styled from "styled-components";
import SendMessage from "../../components/Dashboard/SendMessage";

const Message = () => {
  return (
    <>
      <FadeIn transitionDuration="600">
        <Helmet>
          <title>dashboard</title>
        </Helmet>
        <SearchNav title="Messages" dashboard />

        <Wrapper>
          <article>
            <h5>Message & Notification View</h5>
            <SendMessage />
          </article>
          <article>
            <aside>
              <div>
                <img src={require("../../assets/img/91.png")} alt="inbox" />
                <h4>Inbox (2) </h4>
              </div>

              <div>
                <img src={require("../../assets/img/92.png")} alt="sent" />
                <h4>Sent</h4>
              </div>

              <div>
                <img src={require("../../assets/img/93.png")} alt="archive" />
                <h4>Archive</h4>
              </div>
              <div>
                <img src={require("../../assets/img/94.png")} alt="important" />
                <h4>Important</h4>
              </div>

              <div>
                <img src={require("../../assets/img/95.png")} alt="trash" />
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
                        src={require("../../assets/img/97.png")}
                        alt="delete"
                      />

                      <img
                        src={require("../../assets/img/98.png")}
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
                    <td className="font-weight-bold">Heather</td>
                    <td className="font-weight-bold">Icon Set Downloaded</td>
                    <td className="font-weight-bold">13/05/20 12:23pm</td>
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
                    <td className="font-weight-bold">Alex Cruz</td>
                    <td className="font-weight-bold">Application Submit</td>
                    <td className="font-weight-bold">04/05/20 12:23pm</td>
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
  padding: 4rem 0;

  & article:first-child {
    border-bottom: 1px solid #606c86;
    padding-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
    }

    a {
      color: #fff;
      background-color: #094a6a;
      border: none;
      text-decoration: none;
      text-align: center;
      font-size: 1.5rem;
      padding: 0.8rem 4rem;
      font-family: "Open Sans", sans-serif;
      border-radius: 4px;
    }

    h5 {
      font-size: 2rem;
      font-weight: 600;
      color: #606c86;
      align-self: flex-end;
      @media (max-width: 768px) {
        align-self: flex-start;
        margin-bottom: 1rem;
      }
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
      background-color: #cfddf1;
      color: #fff;
    }

    table th {
      padding: 0.5rem 2rem;
      font-weight: 100;
      color: #0c74c4;
      font-weight: 600;
    }

    table tr,
    table td {
      padding: 1rem 2rem;
      color: #094a6a;
    }

    table tbody tr {
      border-bottom: 1px solid #606c86;
    }
  }
`;

export default Message;
