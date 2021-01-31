import styled from "styled-components";

const RightSide = styled.div`
  display: flex;
  flex-flow: column;
  max-height: 100vh;
  overflow-y: scroll;
  margin-left: 2rem;

  @media only screen and (max-width: 768px) {
    /* For mobile phones: */

    margin: 0 1rem;
  }
`;

export default RightSide;
