import React, { useState } from "react";
import formations from "../ressources/formations";
import FormationsElement from "./styled-compotents/FormationsElement";
import FormationsList from "./styled-compotents/FormationsList";

const Formations = () => {
  const [selected, setSelected] = useState<number>();

  return (
    <FormationsList>
      {formations.map((formation) => (
        <FormationsElement
          key={formation.key}
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
    </FormationsList>
  );
};

export default Formations;
