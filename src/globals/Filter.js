import React from "react";
import styled from "styled-components";
import ArrowDown from "../assets/img/99.png";

const Filter = () => (
  <FilterWrapper>
    <select name="illustrations" id="illustrations">
      <option value="allcategories">View All Categories</option>
    </select>
  </FilterWrapper>
);

const FilterWrapper = styled.section`
  width: 85vw;
  margin: 4rem auto;
  & select {
    background: url(${ArrowDown});
    background-repeat: no-repeat;
    background-position: 95% center;
    border: none;
    border-radius: 4px;
    font-size: 1.4rem;
    padding-left: 1rem;
    padding-top: 0.7rem;
    padding-bottom: 0.7rem;
    padding-right: 8rem;
    font-weight: 600;
    color: grey;
    background-color: #ecf2fa !important;
  }
`;
export default Filter;
