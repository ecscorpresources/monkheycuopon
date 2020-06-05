import React from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import FadeIn from "react-fade-in";
import SearchNav from "../SearchNav";
import { GRID, HALFGRID, EQUALGRID, Select, TextInput } from "../FormControl";
import { MdPhotoCamera } from "react-icons/md";
import styled from "styled-components";
import icon from "../../assets/img/99.png";
import "../../css/settings.scss";

const Settings = () => {
  return (
    <>
      <FadeIn transitionDuration="600">
        <Helmet>
          <title>dashboard</title>
        </Helmet>
        <SearchNav title="Settings" dashboard />
        <SettingsWrapper className="settingsFirstSection">
          <div>
            <NavLink activeClassName="active" to="/settings">
              Edit Profile
            </NavLink>
            <NavLink activeClassName="active" to="/changepassword">
              Change Password
            </NavLink>
          </div>

          <div>
            <p>Profile Info</p>

            <form>
              <HALFGRID>
                <section className="file">
                  <h5>Avatar</h5>
                  <article>
                    <div>
                      <input
                        type="file"
                        name="profileimage"
                        id="profileimage"
                      />
                      <label htmlFor="profileimage">
                        <MdPhotoCamera className="file-icon" /> Upload Profile
                        Image
                      </label>
                    </div>
                  </article>
                </section>
              </HALFGRID>
              <EQUALGRID>
                <TextInput type="text" placeholder="First Name" />
                <TextInput placeholder="Last Name" />
              </EQUALGRID>

              <EQUALGRID>
                <TextInput type="text" placeholder="Username" />
                <TextInput type="text" placeholder="Company Name" />
              </EQUALGRID>

              <GRID>
                <TextInput type="email" placeholder="Company Name" />
              </GRID>

              <EQUALGRID>
                <Select>
                  <option value="Country">Country</option>
                </Select>
                <TextInput type="text" placeholder="Country Code" />
              </EQUALGRID>

              <EQUALGRID>
                <TextInput type="text" placeholder="State/Province" />
                <TextInput type="text" placeholder="City" />
              </EQUALGRID>

              <GRID>
                <TextInput type="email" placeholder="Address" />
              </GRID>

              <article>
                <button type="submit">Upload Profile</button>
              </article>
            </form>
          </div>
        </SettingsWrapper>
      </FadeIn>
    </>
  );
};

const SettingsWrapper = styled.section`
  width: 45vw;
  margin-left: 10rem;
  padding: 4rem 0;
  @media (max-width: 992px) {
    width: 70vw;
    margin: 0 auto;
  }

  p {
    font-size: 1.7rem;
    padding-bottom: 1rem;
    color: #0c74c4;
    font-family: "Open Sans", sans-serif;
  }

  a {
    font-size: 1.5rem;
    text-decoration: none;
    font-weight: 600;
    color: #0c74c4;
    display: inline-block;
    margin-bottom: 4rem;
    padding: 0.5rem 1.5rem;

    &:hover {
      font-size: 1.5rem;
      text-decoration: none;
      font-weight: 600;
      color: #0c74c4;
    }

    &:not(:last-child) {
      margin-right: 4rem;
    }
  }

  button {
    color: #fff;
    background-color: #094a6a;
    border: none;
    text-decoration: none;
    text-align: center;
    display: inline-block;
    font-size: 1.5rem;
    padding: 0.8rem 4rem;
    font-family: "Open Sans", sans-serif;
    border-radius: 4px;
  }

  select {
    background: url(${icon});
    background-repeat: no-repeat;
    background-position: 95% center;
  }

  .file {
    border: 2px dashed #cfddf1;
    background-color: #ecf2fa;
    margin-bottom: 1.5rem;
    padding: 0 1rem 1rem 1rem;
    border-radius: 5px;
    display: flex;
    flex-direction: column;

    & h5 {
      padding-top: 1rem;
      padding-left: 1rem;
      font-weight: 600;
      color: grey;
      font-size: 1.5rem;
    }

    & article {
      align-self: center;
    }

    & input[type="file"] {
      width: 0.1px;
      height: 0.1px;
      opacity: 0;
      overflow: hidden;
      position: absolute;
      z-index: -1;
    }

    & label {
      font-size: 1.3rem;
      text-align: center;
      line-height: 1.3;
      cursor: pointer;
      font-weight: 600;
      color: grey;
    }

    .file-icon {
      font-size: 6rem;
      margin-right: 0.5rem;
    }
  }
`;

export default Settings;
