import React, { useState } from "react";
import experiences from "../ressources/experiences";
import ExperiencesElement from "./styled-compotents/ExperiencesElement";
import ExperiencesList from "./styled-compotents/ExperiencesList";

const Experiences = () => {
  const [selected, setSelected] = useState<number>();

  return (
    <ExperiencesList>
      {experiences.map((experience) => (
        <ExperiencesElement
          key={experience.key}
          onClick={() => setSelected(experience.key)}
        >
          <span>
            {experience.start} - {experience.end}
          </span>

          <h2>{experience.name}</h2>

          {selected === experience.key && (
            <div className="description">{experience.description}</div>
          )}
        </ExperiencesElement>
      ))}
    </ExperiencesList>
  );
};

export default Experiences;
