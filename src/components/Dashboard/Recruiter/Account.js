import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import FadeIn from "react-fade-in";
import { PrimaryLink, SecondaryLink } from "../../../globals/links-button";
import { Select, TextInput } from "../../Jobs/Forms/FormContol";
import { SecondaryButton } from "../../../globals/links-button";
import styled from "styled-components";

const Account = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <FadeIn transitionDuration="500">
        <Wrapper>
          <form>
            <article>
              <div>
                <h4>Manage Account</h4>
                <p>Medison</p>
              </div>
              <div>
                <AccountSelect>
                  <option value="Employer" defaultValue>
                    Employer
                  </option>
                </AccountSelect>
              </div>
            </article>
            <article>
              <h5>Recruiter Administrator Info</h5>
              <h6>Steve Kindle</h6>
              <h6>HR Manager</h6>
              <h6>Stevekindle@gmail.com</h6>
              <h6>466 762 4949</h6>
              <p>Company Representative As Employer for Medison Industries</p>
              <PrimaryLink primary="true">Edit Rep</PrimaryLink>
            </article>
            <article>
              <h5>Change Passwords</h5>
              <PasswordInput type="password" placeholder="Current Password" />
              <PasswordInput type="password" placeholder="New Password" />
              <PasswordInput
                type="password"
                placeholder="Re-Type New Password"
              />
              <Link>Forgot your password?</Link>
              <ChangePassword type="submit" hallwidth="true">
                Change Password
              </ChangePassword>
            </article>

            <article>
              <div>
                <h3>Manage Linked Accounts</h3>
                <AddLink>
                  Add User <span>+</span>
                </AddLink>
              </div>

              <table>
                <thead>
                  <tr>
                    <th>
                      <h5>Users(3)</h5>
                      <h6>Email Address</h6>
                    </th>
                    <th>Status</th>
                    <th>
                      <h5>Roles</h5>
                      <h6>Admin</h6>
                    </th>
                    <th>Job</th>
                    <th>Candidates</th>
                    <th>Billing & Payment</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>emilyren@medison.com</td>
                    <td>
                      <em>Invitation sent</em> <br />
                      <em>22/03/20</em>
                    </td>
                    <td>
                      <input type="checkbox" name="" id="" />
                    </td>
                    <td>
                      <input type="checkbox" name="" id="" />
                    </td>
                    <td>
                      <input type="checkbox" name="" id="" />
                    </td>
                    <td>
                      <input type="checkbox" name="" id="" />
                    </td>
                    <td>
                      <img
                        src={require("../../../assets/img/79.png")}
                        alt="delete"
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>frednorlan@medison.com</td>
                    <td>Active</td>
                    <td>
                      <input type="checkbox" name="" id="" />
                    </td>
                    <td>
                      <input type="checkbox" name="" id="" />
                    </td>
                    <td>
                      <input type="checkbox" name="" id="" />
                    </td>
                    <td>
                      <input type="checkbox" name="" id="" />
                    </td>
                    <td>
                      <img
                        src={require("../../../assets/img/79.png")}
                        alt="delete"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </article>
            <article>
              <p>
                <span>X</span> <span>Delete This Account</span>
              </p>
            </article>
          </form>
        </Wrapper>
      </FadeIn>
    </>
  );
};

const AddLink = styled(SecondaryLink)`
  padding: 6px 26px;
`;
const ChangePassword = styled(SecondaryButton)`
  font-size: 1.5rem;
  border-radius: 50px;
  padding: 0.8rem 3rem;
`;

const AccountSelect = styled(Select)`
  padding-right: 7rem;
  border-radius: 50px;
`;

const PasswordInput = styled(TextInput)`
  padding-right: 10rem;
`;
const Wrapper = styled.section`
  width: 90vw;
  margin: 0 auto;

  & form {
    article {
      color: #40759d;
      padding-top: 2rem;
      padding-bottom: 1rem;
    }
    article:not(:last-child) {
      border-bottom: 1px solid #40759d;
    }

    h5 {
      font-size: 2rem;
      padding-bottom: 2rem;
    }

    h6 {
      font-size: 1.5rem;
    }
    article:first-child {
      display: flex;
      border-bottom: 1px solid #40759d;
      padding-bottom: 1rem;

      h4 {
        color: #40759d;
        font-size: 2rem;
        font-weight: 600;
      }

      p {
        color: #40759d;
        font-size: 1.5rem;
        padding-bottom: 0.5rem;
      }

      div:first-child {
        margin-right: 2rem;
      }
    }

    article:nth-child(2) {
      p {
        font-size: 1.3rem;
      }
    }

    article:nth-child(3) {
      display: flex;
      flex-direction: column;
      align-items: start;

      a {
        display: inline-block;
        padding-bottom: 1.5rem;
        padding-top: 1.5rem;
        font-size: 1.2rem;
        text-decoration: underline;
      }
    }

    article:nth-child(4) {
      div:first-child {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        padding: 0 1rem 1rem 1rem;

        h3 {
          margin-bottom: 0;
        }
      }
    }

    article:last-child {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      p {
        display: flex;
        align-items: center;

        span:first-child {
          color: #fff;
          background: red;
          padding: 0.5rem 0.8rem;
          font-weight: 800;
          border-radius: 2px;
          margin-right: 1rem;
        }

        span:nth-child(2) {
          color: red;
          font-size: 1.5rem;
        }
      }
    }
  }

  table {
    width: 100%;
    font-size: 1.3rem;
    border-radius: 6px 6px 0 0;
    overflow: hidden;
    margin-bottom: 8rem;
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
    padding: 1.5rem 2rem;
  }

  table tbody tr {
    border-bottom: 1px solid #606c86;
  }
`;
export default Account;
