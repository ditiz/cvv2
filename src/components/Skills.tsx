import React from "react";
import skills from "../ressources/skills";
import SkillGroupConteneur from "./styled-compotents/SkillGroupConteneur";
import StyledSkill from "./styled-compotents/StyledSkill";

const Skills = () => {
  return (
    <>
      {skills.map((skillGroup) => (
        <SkillGroupConteneur key={skillGroup.groupName}>
          <h2 className="skill-group-name">{skillGroup.groupName}</h2>

          <div className="skill-group-content">
            {skillGroup.subGroup.map((subGroup) => (
              <div key={subGroup.name}>
                <StyledSkill color={subGroup.color}>
                  {subGroup.name}
                </StyledSkill>
                <div>
                  {subGroup.skills?.map((skill) => (
                    <StyledSkill color={subGroup.color} key={skill.name}>
                      {skill.name}
                    </StyledSkill>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </SkillGroupConteneur>
      ))}
    </>
  );
};

export default Skills;
