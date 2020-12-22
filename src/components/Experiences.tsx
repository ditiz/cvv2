import React from "react";
import experiences from "../ressources/ressources";
import ExperiencesElement from "./styled-compotents/ExperiencesElement";
import ExperiencesList from "./styled-compotents/ExperiencesList";

const Experiences = () => {
  return (
    <ExperiencesList>
      {experiences.map((experience) => (
        <ExperiencesElement>
          <span>
            {experience.start} - {experience.end}
          </span>
          <span>{experience.name}</span>
        </ExperiencesElement>
      ))}
    </ExperiencesList>
  );
};

export default Experiences;
