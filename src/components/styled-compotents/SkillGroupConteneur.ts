import styled from "styled-components";
import RightSideElement from "./RightSideElement";

const SkillGroupConteneur = styled(RightSideElement)`
  margin: 1rem 0;
  display: block;

  .skill-group-name {
    color: #f8f8f8;
    text-transform: uppercase;
  }

  .skill-group-content {
    display: flex;
  }

  @media only screen and (max-width: 768px) {
    /* For mobile phones: */
    .skill-group-content {
      margin: -1rem;

      display: grid;
      grid-template-columns: repeat(3, 1fr);

      & > * {
        margin: -0.8rem;
      }
    }
  }
`;

export default SkillGroupConteneur;
