import styled from "styled-components";
import colors from "../../ressources/colors";
import RightSideElement from "./RightSideElement";

const FormationsElement = styled(RightSideElement)`
  margin: 1rem 0;
  padding: 2rem 1rem;

  border: 1px solid transparent;
  transition: 150ms ease;

  &:hover {
    border: 1px solid ${colors.formations};
  }

  h2 {
    color: ${colors.formations};
  }

  @media only screen and (max-width: 768px) {
    /* For mobile phones: */
    height: ${({ showDetails, maxHeight }) =>
      showDetails ? `calc(${maxHeight} + 6rem)` : `calc(${maxHeight} + 3rem)`};
  }
`;

export default FormationsElement;
