import styled from "styled-components";

interface SkillProps {
  color: string;
}

const StyledSkill = styled.div<SkillProps>`
  padding: 1rem;
  background: #222;
  color: ${({ color }) => color};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 0.25rem;
  margin: 1rem;
`;

export default StyledSkill;
