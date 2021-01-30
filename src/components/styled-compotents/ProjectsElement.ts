import styled from "styled-components";
import colors from "../../ressources/colors";
import RightSideElement from "./RightSideElement";

const ProjectsElement = styled(RightSideElement)`
  margin: 1rem 0;
  padding: 2rem 1rem;

  display: grid;
  grid-template-columns: auto;
  row-gap: 2rem;

  border: 1px solid transparent;
  transition: 150ms ease;

  .links {
    margin-top: 1rem;
    display: flex;
    flex-flow: column nowrap;
  }

  &:hover {
    border: 1px solid ${colors.projects};
  }
`;

export default ProjectsElement;
