import styled from "styled-components";

interface SkillProps {
  color: string;
}

const StyledSkill = styled.div<SkillProps>`
  padding: 1rem;
  border: 2px solid ${({ color }) => color};
  margin: 1rem;
`;

export default StyledSkill;
