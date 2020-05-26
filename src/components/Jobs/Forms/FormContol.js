import styled from "styled-components";

export const TextInput = styled.input`
  border: 1px solid #40759d;
  border-radius: 4px;
  color: $tertiary-color;
  font-size: 1.5rem;
  padding-left: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const TextArea = styled.textarea`
  border: 1px solid #40759d;
  border-radius: 4px;
  color: $tertiary-color;
  font-size: 1.5rem;
  padding-left: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  margin-bottom: 0.5rem;
  width: 100%;
  resize: none;
`;

export const Select = styled.select`
  border: 1px solid #40759d;
  border-radius: 4px;
  color: $tertiary-color;
  font-size: 1.5rem;
  padding-left: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const Title = styled.article`
  display: flex;
  justify-content: space-between;
  padding-bottom: 4rem;

  h4 {
    font-size: 2rem;
    color: #30458d;
  }

  a {
    text-decoration: underline;
    font-size: 1.2rem;
    color: #40759d;
  }
`;

export const EQUALGRID = styled.article`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 1rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const HALFGRID = styled.article`
  display: grid;
  grid-template-columns: 0.5fr;
  column-gap: 1rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const UNEQUALEDGRID = styled.article`
  display: grid;
  grid-template-columns: ${(props) =>
    props.first ? "1fr 3fr 2fr" : "3fr 2fr 1fr"};
  column-gap: 1rem;
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

export const GRID = styled.article`
  display: grid;
  grid-template-columns: 1fr;
`;
