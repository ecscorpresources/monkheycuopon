import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SecondaryButton } from "../../../globals/links-button";
import {
  TextInput,
  TextArea,
  Select,
  Title,
  EQUALGRID,
  UNEQUALEDGRID,
} from "./FormContol";
import "../../../css/jobpost.scss";

const JobpostForm = () => {
  return (
    <>
      <section>
        <Title>
          <h4>Fill Job Information</h4>
          <Link to="/job">How Job Seekers see your Job Post</Link>
        </Title>
        <form>
          <article>
            <label htmlFor="statement">Job Information</label> <br />
            <TextArea
              name="statement"
              id="statement"
              cols="30"
              rows="4"
              placeholder="Intoductory Statement"
            ></TextArea>
          </article>
          <EQUALGRID>
            <TextInput type="text" placeholder="Job Position" />
            <Select name="jobtype" id="jobtype">
              <option value="Job Type" defaultValue>
                Job Type
              </option>
            </Select>
          </EQUALGRID>
          <article>
            <TextArea
              name="statement"
              id="statement"
              cols="30"
              rows="4"
              placeholder="Position Description"
            ></TextArea>
          </article>

          <article>
            <TextArea
              name="statement"
              id="statement"
              cols="30"
              rows="4"
              placeholder="Duties and Resposibilities"
            ></TextArea>
          </article>

          <article>
            <TextArea
              name="statement"
              id="statement"
              cols="30"
              rows="4"
              placeholder="Educational Qualification Required"
            ></TextArea>
          </article>

          <article>
            <TextArea
              name="statement"
              id="statement"
              cols="30"
              rows="4"
              placeholder="Skills/Experience Required"
            ></TextArea>
          </article>
          <article>
            <TextArea
              name="statement"
              id="statement"
              cols="30"
              rows="4"
              placeholder="What You Stand To Gain From Us"
            ></TextArea>
          </article>

          <article className="benefits">
            <div>
              <TextInput type="text" placeholder="State Benefits" />
            </div>
            <div>
              <div>
                <div>
                  <span>Paid Vacation</span>
                  <span>x</span>
                </div>
              </div>

              <div>
                <div>
                  <span>Accomodation Loan</span>
                  <span>x</span>
                </div>
              </div>

              <div>
                <div>
                  <span>Car Loan</span>
                  <span>x</span>
                </div>
              </div>
            </div>
          </article>

          <UNEQUALEDGRID>
            <Select name="price" id="price">
              <option value="50">50</option>
              <option value="100">100</option>
            </Select>
            <Select name="salary" id="salary">
              <option value="1000">1000</option>
              <option value="2000">2000</option>
            </Select>

            <Select name="time" id="time">
              <option value="Annually" defaultValue>
                Annually
              </option>
              <option value="Monthly">Monthly</option>
            </Select>
          </UNEQUALEDGRID>
          <article>
            <div>
              <TextInput type="checkbox" name="sponsor" id="sponsor" />
              <label htmlFor="sponsor">
                Sponsor this Job Post for more viewing
              </label>
            </div>
            <div>
              <Select className="halfwidth" name="package" id="package">
                <option value="Choose Package" defaultValue>
                  Choose Package
                </option>
              </Select>
            </div>

            <div>
              <label htmlFor="status">Job Status</label> <br />
              <Select className="halfwidth" name="status" id="status">
                <option value="Open">Open</option>
                <option value="closed">Closed</option>
              </Select>
            </div>
          </article>

          <article>
            <p>Add Evaluation Question(Optional)</p>
            <div className="evaluation">
              <TextInput className="fullwidth" type="text" />
              <div>
                <span>If Answer is</span>{" "}
                <Select name="answer" id="answer">
                  <option value="Yes">Yes</option>
                </Select>
                <span>Match Candidates, Otherwise Unmatch</span>
              </div>
            </div>
          </article>
          <article>
            <TextInput type="checkbox" name="recommend" id="recommend" />
            <label htmlFor="recommend">
              Techengage, Please Recommend Candidates for me
            </label>
          </article>

          <article className="recommendation-creteria">
            <EQUALGRID>
              <div>
                <h6>Recommendation Criteria</h6>
                <div className="flex-container">
                  <TextInput
                    type="checkbox"
                    name="position-check"
                    id="position-check"
                  />
                  <Select name="jobposition" id="jobposition">
                    <option value="Job Position" defaultValue>
                      Job Position
                    </option>
                  </Select>
                </div>

                <div className="flex-container">
                  <TextInput
                    type="checkbox"
                    name="position-check"
                    id="position-check"
                  />
                  <Select name="jobposition" id="jobposition">
                    <option value="Job Position" defaultValue>
                      Job Position
                    </option>
                  </Select>
                </div>

                <div className="flex-container">
                  <TextInput
                    type="checkbox"
                    name="education-check"
                    id="education-check"
                  />
                  <Select name="education" id="education">
                    <option value="Education" defaultValue>
                      Education
                    </option>

                    <option value="Experience" defaultValue>
                      Experience
                    </option>
                  </Select>
                </div>
              </div>

              <article>
                <p>Click Checkbox to Select priority parameters</p>
                <div className="flex-container">
                  <TextInput
                    type="checkbox"
                    name="location-check"
                    id="location-check"
                  />
                  <Select name="companylocation" id="companylocation">
                    <option value="Company Location" defaultValue>
                      Company Location
                    </option>
                  </Select>
                </div>

                <div className="flex-container">
                  <TextInput
                    type="checkbox"
                    name="salaryrange-check"
                    id="salaryrange-check"
                  />
                  <Select name="salaryrange" id="salaryrange">
                    <option value="Salary Range" defaultValue>
                      Salary Range
                    </option>
                  </Select>
                </div>

                <div className="flex-container">
                  <TextInput
                    type="checkbox"
                    name="positionheld-check"
                    id="positionheld-check"
                  />
                  <Select name="positionheld" id="positionheld">
                    <option value="Current/Last Held Position" defaultValue>
                      Current/Last Held Position
                    </option>
                  </Select>
                </div>
              </article>
            </EQUALGRID>
            <div>
              <div>
                <TextInput
                  type="checkbox"
                  name="all parameters"
                  id="all parameters"
                />
                <label htmlFor="all parameters"></label>
              </div>

              <div>
                <TextInput
                  type="checkbox"
                  name="all parameters"
                  id="all parameters"
                />
                <label htmlFor="all parameters"></label>
              </div>
            </div>
          </article>

          <article>
            <h5>Comapny Profile</h5>
            <div className="logo-wrapper">
              <label htmlFor="profile">Add Company Logo</label>
              <input type="file" name="company logo" id="profile" />
            </div>

            <EQUALGRID>
              <TextInput type="text" placeholder="Company Name" />
              <TextInput type="text" placeholder="Email" />
            </EQUALGRID>

            <EQUALGRID>
              <Select name="dateestablished" id="dateestablished">
                <option value="Est Since">Est Since</option>
              </Select>
              <TextInput type="text" placeholder="Staff Strength" />
            </EQUALGRID>

            <div>
              <TextArea
                name=""
                id=""
                cols="30"
                rows="4"
                placeholder="About Company"
              ></TextArea>
            </div>
            <div>
              <TextInput
                type="text"
                placeholder="Company Address"
                className="fullwidth"
              />
            </div>

            <EQUALGRID>
              <Select name="Country" id="Country">
                <option value="Country">Country</option>
              </Select>

              <Select name="State" id="State">
                <option value="State">State</option>
              </Select>
            </EQUALGRID>

            <EQUALGRID>
              <Select name="phone" id="phone">
                <option value="+234">+234</option>
              </Select>
              <TextInput type="text" placeholder="Website" />
            </EQUALGRID>

            <EQUALGRID>
              <TextInput type="text" placeholder="Facebook URL" />
              <TextInput type="text" placeholder="Youtube URL" />
            </EQUALGRID>
            <EQUALGRID>
              <TextInput type="text" placeholder="Twitter URL" />
              <TextInput type="text" placeholder="Instagram URL" />
            </EQUALGRID>
          </article>

          <div>
            <PostButton>POST JOB</PostButton>
          </div>
        </form>
      </section>
    </>
  );
};

const PostButton = styled(SecondaryButton)`
  border-radius: 50px;
  padding: 9px 40px;
  margin-top: 2rem;
  font-size: 1.4rem;
`;

export default JobpostForm;
