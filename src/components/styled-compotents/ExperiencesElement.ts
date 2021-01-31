import styled from "styled-components";
import colors from "../../ressources/colors";
import RightSideElement from "./RightSideElement";

const ExperiencesElement = styled(RightSideElement)`
  margin: 1rem 0;
  padding: 2rem 1rem;

  display: grid;
  grid-template-columns: auto;
  row-gap: 2rem;

  border: 1px solid transparent;
  transition: 150ms ease;

  &:hover {
    border: 1px solid ${colors.experiences};
  }

  h2 {
    color: ${colors.experiences};
  }
`;

export default ExperiencesElement;
