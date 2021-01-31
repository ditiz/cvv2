import React, { useState } from "react";
import formations from "../ressources/formations";
import Trail from "./Animations/Trail";
import FormationsElement from "./styled-compotents/FormationsElement";
import FormationsList from "./styled-compotents/FormationsList";

const closeHeight = "7rem";
const openHeight = "15rem";

const Formations = () => {
  const [selected, setSelected] = useState<number>();
  const [open] = useState(true);
  return (
    <FormationsList>
      <Trail open={open}>
        {formations.map((formation) => (
          <FormationsElement
            key={formation.key}
            maxHeight={selected === formation.key ? openHeight : closeHeight}
            showDetails={selected === formation.key}
            onClick={() => setSelected(formation.key)}
          >
            <span>
              {formation.start} - {formation.end}
            </span>

            <h2>{formation.name}</h2>

            {selected === formation.key && (
              <div className="description">{formation.description}</div>
            )}
          </FormationsElement>
        ))}
      </Trail>
    </FormationsList>
  );
};

export default Formations;
