import React from "react";

const LandingForm = () => {
  return (
    <>
      <form>
        <article>
          <h2>Looking For A Talent?</h2>
        </article>
        <section>
          <div>
            <label htmlFor="What">What</label>
            <br />
            <input type="text" placeholder="E.g Android Developer" />
          </div>

          <div>
            <label htmlFor="Where">Where</label>
            <br />
            <select name="Where" id="Where">
              <option value="City, Country" defaultValue>
                City, Country
              </option>
            </select>
          </div>
          <div>
            <button type="submit">Search</button>
          </div>
        </section>
      </form>
    </>
  );
};

export default LandingForm;
