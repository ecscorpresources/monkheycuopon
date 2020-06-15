import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import FadeIn from "react-fade-in";
import "../../css/dashboard.scss";
import styled from "styled-components";

const Dashboard = () => {
  return (
    <>
      <FadeIn transitionDuration="600">
        <Helmet>
          <title>dashboard</title>
        </Helmet>

        <section className="dashboard">
          <article>
            <div>
              <img
                src={require("../../assets/img/35.png")}
                alt="total upload"
              />
              <h4>Total</h4>
              <p>Cuopons Uploaded</p>
            </div>

            <div>
              <img
                src={require("../../assets/img/36.png")}
                alt="total upload"
              />
              <h4>Total</h4>
              <p>Cuopons Viewed</p>
            </div>

            <div>
              <img
                src={require("../../assets/img/37.png")}
                alt="total upload"
              />
              <h4>Total</h4>
              <p>Cuopons Clicked</p>
            </div>
          </article>
        </section>

        <section className="dashboardSecondSection">
          <article>
            <div className="table-title">
              <h3>Uploaded Cuopons</h3>
              <Link to="/uploadcuopon">UPLOAD CUOPON</Link>
            </div>
            <table>
              <thead>
                <tr>
                  <th>
                    <input type="checkbox" name="" id="" />
                  </th>
                  <th>Cuopons</th>
                  <th>Date Updated</th>
                  <th>Cuopon Types</th>
                  <th>Views</th>
                  <th>Clicks</th>
                  <th>Expiry Date</th>
                  <th>
                    <td>
                      <img
                        src={require("../../assets/img/38.png")}
                        alt="delete"
                      />
                    </td>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td>Up to 18% Off</td>
                  <td>04/09/19</td>
                  <td>50% Off</td>
                  <td>236</td>
                  <td>214</td>
                  <td>04/09/19</td>
                  <td>
                    <TableLink>Edit Cuopon</TableLink>
                  </td>
                </tr>

                <tr>
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td>Up to 18% Off</td>
                  <td>04/09/19</td>
                  <td>50% Off</td>
                  <td>236</td>
                  <td>214</td>
                  <td>04/09/19</td>
                  <td>
                    <TableLink>Edit Cuopon</TableLink>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td>Up to 18% Off</td>
                  <td>04/09/19</td>
                  <td>50% Off</td>
                  <td>236</td>
                  <td>214</td>
                  <td>
                    04/09/19
                    <span>Expired</span>
                  </td>
                  <td>
                    <TableLink>Edit Cuopon</TableLink>
                  </td>
                </tr>

                <tr>
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td>Up to 18% Off</td>
                  <td>04/09/19</td>
                  <td>50% Off</td>
                  <td>236</td>
                  <td>214</td>
                  <td>
                    04/09/19
                    <span>Expired</span>
                  </td>
                  <td>
                    <TableLink>Edit Cuopon</TableLink>
                  </td>
                </tr>
              </tbody>
            </table>
          </article>
        </section>
      </FadeIn>
    </>
  );
};

const TableLink = styled(Link)`
  color: #fff;
  background-color: #094a6a;
  border: none;
  text-decoration: none;
  text-align: center;
  display: inline-block;
  padding: 0.7rem 2rem;
  font-family: "Open Sans", sans-serif;
  border-radius: 4px;
  font-size: 1.3rem;

  &:hover {
    text-decoration: none;
    color: #fff;
  }
`;
export default Dashboard;
