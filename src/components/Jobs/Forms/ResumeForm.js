import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SecondaryButton } from "../../../globals/links-button";
import {
  TextInput,
  TextArea,
  Select,
  Title,
  GRID,
  HALFGRID,
  EQUALGRID,
  UNEQUALEDGRID,
} from "./FormContol";
import FadeIn from "react-fade-in";
import "../../../css/jobpost.scss";

const ResumeForm = () => {
  return (
    <div>
      <FadeIn transitionDuration="500">
        <section>
          <Title>
            <h4>Fill Resume</h4>
            <Link to="/resume">How Recruiters see your Resume</Link>
          </Title>
          <article>
            <form>
              <EQUALGRID>
                <TextInput type="text" placeholder="First Name" />
                <TextInput type="text" placeholder="Last Name" />
              </EQUALGRID>

              <EQUALGRID>
                <TextInput type="text" placeholder="Tel No." />
                <TextInput type="text" placeholder="Email" />
              </EQUALGRID>

              <EQUALGRID>
                <Select name="gender" id="gender">
                  <option value="gender" defaultValue>
                    Gender
                  </option>
                </Select>
                <TextInput type="text" placeholder="Age" />
              </EQUALGRID>

              <EQUALGRID>
                <Select name="country" id="country">
                  <option value="country" defaultValue>
                    Country
                  </option>
                </Select>
                <Select>
                  <option value="state" defaultValue>
                    State
                  </option>
                </Select>
              </EQUALGRID>
              <GRID>
                <TextInput type="text" placeholder="Job Position" />
              </GRID>
              <EQUALGRID>
                <Select name="phone" id="phone">
                  <option value="phone" defaultValue>
                    +234
                  </option>
                </Select>
                <TextInput type="text" placeholder="Website" />
              </EQUALGRID>

              <EQUALGRID>
                <TextInput type="text" placeholder="Facebook URL" />
                <TextInput type="text" placeholder="YOUTUBE URL" />
              </EQUALGRID>

              <EQUALGRID>
                <TextInput type="text" placeholder="Twitter URL" />
                <TextInput type="text" placeholder="Instagram URL" />
              </EQUALGRID>

              <HALFGRID>
                <Select name="job" id="job">
                  <option value="job" defaultValue>
                    What do you do ?
                  </option>
                </Select>
              </HALFGRID>

              <GRID>
                <TextArea
                  name="description"
                  id="description"
                  cols="30"
                  rows="4"
                  placeholder="Tell Us about You"
                ></TextArea>
              </GRID>

              <EQUALGRID>
                <TextInput text="text" placeholder="School Attended" />
                <Select name="graduation" id="graduation">
                  <option value="job" defaultValue>
                    Year Graduated
                  </option>
                </Select>
              </EQUALGRID>

              <div>
                <UNEQUALEDGRID>
                  <TextInput text="text" placeholder="Course Studied" />
                  <Select name="certificate" id="certificate">
                    <option value="job" defaultValue>
                      Certificate
                    </option>
                  </Select>
                  <TextInput text="text" placeholder="Cert Doc" />
                </UNEQUALEDGRID>
              </div>

              <div>
                <EQUALGRID>
                  <Select name="from" id="from">
                    <option value="From Year" defaultValue>
                      From Year
                    </option>
                  </Select>

                  <Select name="to" id="to">
                    <option value="To Year" defaultValue>
                      To Year
                    </option>
                  </Select>
                </EQUALGRID>

                <EQUALGRID>
                  <TextInput text="text" placeholder="Where ?" />
                  <TextInput text="text" placeholder="Role Played" />
                </EQUALGRID>
                <GRID>
                  <TextArea
                    name="responsibility"
                    id="responsibility"
                    cols="30"
                    rows="4"
                    placeholder="Responsibility on that Job"
                  ></TextArea>
                </GRID>
              </div>
              <GRID>
                <TextArea
                  name="hobbies"
                  id="hobbies"
                  cols="30"
                  rows="4"
                  placeholder="Your Hobbies(optional)"
                ></TextArea>
              </GRID>
              <HALFGRID>
                <Select name="language" id="language">
                  <option value="langauge" defaultValue>
                    Language
                  </option>
                </Select>
              </HALFGRID>

              <div>
                <EQUALGRID>
                  <TextInput text="text" placeholder="First Name" />
                  <TextInput text="text" placeholder="Last Name" />
                </EQUALGRID>

                <EQUALGRID>
                  <Select name="referee phone" id="referee phone">
                    <option value="referee phone" defaultValue>
                      +234
                    </option>
                  </Select>
                  <TextInput text="text" placeholder="Email" />
                </EQUALGRID>

                <EQUALGRID>
                  <TextInput text="text" placeholder="Place of Work" />
                  <TextInput text="text" placeholder="Position" />
                </EQUALGRID>
              </div>

              <div>
                <PostButton>CREATE RESUME</PostButton>
              </div>
            </form>
          </article>
        </section>
      </FadeIn>
    </div>
  );
};

const PostButton = styled(SecondaryButton)`
  border-radius: 50px;
  padding: 9px 40px;
  margin-top: 2rem;
  font-size: 1.4rem;
`;
export default ResumeForm;
