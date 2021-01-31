import React, { useState } from "react";
import colors from "../ressources/colors";
import projects from "../ressources/projects";
import Trail from "./Animations/Trail";
import ExternalLink from "./styled-compotents/ExternalLink";
import ProjectsElement from "./styled-compotents/ProjectsElement";
import ProjectsList from "./styled-compotents/ProjectsList";

const githubUrl = "https://github.com/ditiz/";

const closeHeight = "4rem";
const openHeight = "15rem";

const Projets = () => {
  const [selected, setSelected] = useState<number>();
  const [open] = useState(true);

  return (
    <ProjectsList>
      <Trail open={open}>
        <ProjectsElement maxHeight="1rem" showDetails={false}>
          <span className="name">
            Vous pouvez trouver plus de mon travail{" "}
            <ExternalLink
              target="_blank"
              href={githubUrl}
              color={colors.projects}
            >
              sur mon github
            </ExternalLink>
          </span>
        </ProjectsElement>

        {projects.map((project) => (
          <ProjectsElement
            key={project.key}
            maxHeight={selected === project.key ? openHeight : closeHeight}
            showDetails={selected === project.key}
            onClick={() => setSelected(project.key)}
          >
            <h2>{project.name}</h2>

            {selected === project.key && (
              <div className="detail" data-testid="project-detail">
                <div className="description">{project.description}</div>

                <div className="links">
                  {project.url && (
                    <span>
                      <ExternalLink
                        target="_blank"
                        href={project.url}
                        color={colors.projects}
                      >
                        Acceder au site
                      </ExternalLink>
                    </span>
                  )}

                  {project.repository && (
                    <span>
                      <ExternalLink
                        target="_blank"
                        href={project.repository}
                        color={colors.projects}
                      >
                        Acceder au repository
                      </ExternalLink>
                    </span>
                  )}
                </div>
              </div>
            )}
          </ProjectsElement>
        ))}
      </Trail>
    </ProjectsList>
  );
};

export default Projets;
