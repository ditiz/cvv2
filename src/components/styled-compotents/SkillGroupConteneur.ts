import styled from "styled-components";
import RightSideElement from "./RightSideElement";

const SkillGroupConteneur = styled(RightSideElement)`
  margin: 1rem 0;
  display: block;

  .skill-group-name {
    font: normal normal bold 12px/15px Montserrat;
    color: #f8f8f8;
    text-transform: uppercase;
  }

  .skill-group-content {
    display: flex;
  }
`;

export default SkillGroupConteneur;
