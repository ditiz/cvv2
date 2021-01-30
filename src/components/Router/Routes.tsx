import React from "react";
import { Route } from "react-router-dom";
import Experiences from "../Experiences";
import Formations from "../Formations";
import Projets from "../Projets";
import Skills from "../Skills";

const Routes = () => {
  return (
    <>
      <Route path="/Skills">
        <Skills />
      </Route>

      <Route path="/Experiences">
        <Experiences />
      </Route>

      <Route path="/Formations">
        <Formations />
      </Route>

      <Route path="/Projets">
        <Projets />
      </Route>

      <Route exact path="/">
        <Skills />
      </Route>
    </>
  );
};

export default Routes;
