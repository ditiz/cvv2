import React, { useState } from "react";
import skills from "../ressources/skills";
import Trail from "./Animations/Trail";
import SkillGroupConteneur from "./styled-compotents/SkillGroupConteneur";
import StyledSkill from "./styled-compotents/StyledSkill";

const closeHeight = "5rem";
const openHeight = "45rem";

const Skills = () => {
  const [selected, setSelected] = useState<number>();
  const [open] = useState(true);

  return (
    <Trail open={open}>
      {skills.map((skillGroup) => (
        <SkillGroupConteneur
          key={skillGroup.groupName}
          maxHeight={selected === skillGroup.key ? openHeight : closeHeight}
          showDetails={selected === skillGroup.key}
          onClick={() => setSelected(skillGroup.key)}
        >
          <h2
            style={{ color: skillGroup.mainColor }}
            className="skill-group-name"
          >
            {skillGroup.groupName}
          </h2>

          <div className="details">
            <div className="skill-group-description">
              {skillGroup.groupDescription}
            </div>

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
          </div>
        </SkillGroupConteneur>
      ))}
    </Trail>
  );
};

export default Skills;
