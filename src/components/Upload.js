import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { MdComputer } from "react-icons/md";
import { FaDropbox } from "react-icons/fa";
import SearchNav from "./SearchNav";
import {
  GRID,
  HALFGRID,
  UNEQUALEDGRID,
  EQUALGRID,
  Select,
  TextArea,
  TextInput,
} from "./FormControl";
import FadeIn from "react-fade-in";
import "../css/upload.scss";

const Upload = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <FadeIn transitionDuration="600">
        <Helmet>
          <title>upload</title>
        </Helmet>
        <SearchNav title="Product Upload Form" dashboard />
        <section className="uploadSecondSection">
          <form>
            <EQUALGRID>
              <Select>
                <option value="Category">Category</option>
              </Select>

              <Select>
                <option value="Sub Category">Sub Category</option>
              </Select>
            </EQUALGRID>
            <GRID>
              <TextInput placeholder="Product Title" />
            </GRID>

            <GRID>
              <TextArea placeholder="Description" />
            </GRID>
            <section className="file">
              <h5>Choose Thumbnail Image</h5>
              <article>
                <div>
                  <input type="file" name="computer" id="computer" />
                  <label htmlFor="computer">
                    <MdComputer className="file-icon" /> From Computer
                  </label>
                </div>
                <div>
                  <input type="file" name="dropbox" id="dropbox" />
                  <label htmlFor="dropbox">
                    <FaDropbox className="file-icon" /> From Dropbox
                  </label>
                </div>
              </article>
            </section>

            <HALFGRID>
              <TextInput placeholder="Add Tag" />
            </HALFGRID>
            <p>
              Maximum of 10 Keywords covering the feature of the product usuage,
              styling. Keywords should be in lower case and seperated with a
              comma, e.g illustration, flowery, flowers
            </p>

            <HALFGRID>
              <TextInput placeholder="Add Format" />
            </HALFGRID>

            <section className="file">
              <h5>Add Main File</h5>
              <article>
                <div>
                  <input type="file" name="computer" id="computer" />
                  <label htmlFor="computer">
                    <MdComputer className="file-icon" /> From Computer
                  </label>
                </div>
                <div>
                  <input type="file" name="dropbox" id="dropbox" />
                  <label htmlFor="dropbox">
                    <FaDropbox className="file-icon" /> From Dropbox
                  </label>
                </div>
              </article>
            </section>
            <UNEQUALEDGRID>
              <Select>
                <option value="$">$</option>
              </Select>
              <TextInput placeholder="Enter Price" />
            </UNEQUALEDGRID>
            <article className="file_setprice">
              <div>
                <input type="checkbox" name="set" id="set" />
                <label htmlFor="set">Set Product As Free</label>
              </div>

              <div>
                <input type="checkbox" name="buyers" id="buyers" />
                <label htmlFor="buyers">Let Buyers set their price</label>
              </div>
            </article>

            <button type="submit">Upload Product</button>
            <h6>
              By Clicking 'Úpload Product' you agree to our{" "}
              <Link to="/upload">Terms & Conditions</Link>
            </h6>
          </form>
        </section>
      </FadeIn>
    </>
  );
};

export default Upload;
