import styled from "styled-components";

interface RightSideElementProps {
  maxHeight: string;
  showDetails: boolean;
}

const RightSideElement = styled.div<RightSideElementProps>`
  background: #202022;
  padding: 1rem;
  transition: 1s ease;
  overflow: hidden;
  height: ${({ maxHeight }) => maxHeight};

  .details {
    transition: 1s ease;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: min-content auto;
    justify-content: start;
    row-gap: 2rem;
    opacity: ${({ showDetails }) => (showDetails ? 1 : 0)};
    height: 100%;

    .description {
      opacity: 0.7;
    }
  }
`;

export default RightSideElement;
