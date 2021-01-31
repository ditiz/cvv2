import styled from "styled-components";

const Presentation = styled.article`
  font-size: 20px;
  color: #939393;

  & > div {
    display: grid;
    grid-template-columns: auto;
    row-gap: 8px;
  }
`;

export default Presentation;
