import styled from "styled-components";

const LeftSide = styled.div`
  display: grid;
  grid-template-rows: 30% auto auto 2rem;
  row-gap: 1rem;
  justify-content: space-around;
  height: 100vh;
  margin-left: 4rem;

  & > *:last {
    align-items: end;
  }

  @media only screen and (max-width: 768px) {
    /* For mobile phones: */
    display: grid;
    grid-template-rows: repeat(4, auto);
    height: auto;
    margin: 1rem;
  }
`;

export default LeftSide;
