import React, { useState } from "react";
import experiences from "../ressources/experiences";
import Trail from "./Animations/Trail";
import ExperiencesElement from "./styled-compotents/ExperiencesElement";
import ExperiencesList from "./styled-compotents/ExperiencesList";

const closeHeight = "7rem";
const openHeight = "15rem";

const Experiences = () => {
  const [selected, setSelected] = useState<number>();
  const [open] = useState(true);

  return (
    <ExperiencesList>
      <Trail open={open}>
        {experiences.map((experience) => (
          <ExperiencesElement
            key={experience.key}
            maxHeight={selected === experience.key ? openHeight : closeHeight}
            showDetails={selected === experience.key}
            onClick={() => setSelected(experience.key)}
          >
            <span>
              {experience.start} - {experience.end}
            </span>

            <h2>{experience.name}</h2>

            {selected === experience.key && (
              <div className="details">
                <div className="description">{experience.description}</div>
              </div>
            )}
          </ExperiencesElement>
        ))}
      </Trail>
    </ExperiencesList>
  );
};

export default Experiences;
