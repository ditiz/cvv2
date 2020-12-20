import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import pages from "../ressources/pages";
import Experiences from "./Experiences";
import Formations from "./Formations";
import Projets from "./Projets";
import Skills from "./Skills";
import Contact from "./styled-compotents/Contact";
import Header from "./styled-compotents/Header";
import Layout from "./styled-compotents/Layout";
import LeftSide from "./styled-compotents/LeftSide";
import PageLink from "./styled-compotents/PageLink";
import PagesLink from "./styled-compotents/PagesLink";
import Presentation from "./styled-compotents/Presentation";

const Home = () => {
  const location = useLocation();

  console.log(location);

  return (
    <Layout>
      <LeftSide>
        <Header>
          Hello World, I'm <br /> Mathieu Smarzyk %
        </Header>

        <Presentation>
          Développeur react, je suis passionné par mon travail et désireux de
          développer mes compétences. J’ai eu le plaisir de pouvoir travailler
          chez Spartoo.com où j’ai pu apprendre énormément de choses dans le
          domaine du webmarketing. Après avoir atteint les objectifs que je
          m’étais fixés j’ai voulu découvrir un autre secteur d’activité avec de
          nouveaux challenges j’ai donc intégré la société Nexus/Optim. En
          parallèle, après l’obtention de mon diplôme j’ai continué mon
          apprentissage en travaillant sur des projets personnels sur mon temps
          libre afin d’approfondir mes connaissances dans différents langages et
          apprendre de nouvelles technologies. Lors de mes expériences et de ma
          formation, j’ai pu développer des compétences qui me permettent
          d’accomplir des projets aussi bien de façon autonome que de façon
          collective au sein d’une équipe où la cohésion et un élément
          essentiel. Mon objectif est de pouvoir intégrer une entreprise qui me
          permettra d’apporter ma motivation, ma passion professionnelle et mon
          sérieux. Je recherche un secteur d’activité me permettant d’acquérir
          de nouvelles compétences et de progresser dans divers domaines.
        </Presentation>

        <div>
          <PagesLink>
            {pages.map((page) => (
              <PageLink
                key={page.key}
                to={page.url}
                active={page.url === location.pathname}
              >
                <span className="page-key">{page.key}</span>
                <span className="page-name">{page.name}</span>
              </PageLink>
            ))}
          </PagesLink>
        </div>

        <Contact>
          <span id="mail">mathieu.smarzyk@hotmail.fr</span>
          <span id="tel">06 44 30 33 02</span>
        </Contact>
      </LeftSide>

      <div>
        <Switch>
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
        </Switch>
      </div>
    </Layout>
  );
};

export default Home;
