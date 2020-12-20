import React from "react";
import skills from "../ressources/skills";
import SkillGroupConteneur from "./styled-compotents/SkillGroupConteneur";
import StyledSkill from "./styled-compotents/StyledSkill";

const Skills = () => {
  return (
    <>
      {skills.map((skillGroup) => (
        <SkillGroupConteneur>
          {skillGroup.subGroup.map((subGroup) => (
            <div>
              <StyledSkill color={subGroup.color}>{subGroup.name}</StyledSkill>
              <div>
                {subGroup.skills?.map((skill) => (
                  <StyledSkill color={subGroup.color}>{skill.name}</StyledSkill>
                ))}
              </div>
            </div>
          ))}
        </SkillGroupConteneur>
      ))}
    </>
  );
};

export default Skills;
