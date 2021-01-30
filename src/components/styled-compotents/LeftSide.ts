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
`;

export default LeftSide;
