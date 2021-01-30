import React, { useState } from "react";
import colors from "../ressources/colors";
import projects from "../ressources/projects";
import ExternalLink from "./styled-compotents/ExternalLink";
import ProjectsElement from "./styled-compotents/ProjectsElement";
import ProjectsList from "./styled-compotents/ProjectsList";

const githubUrl = "https://github.com/ditiz/";

const Projets = () => {
  const [selected, setSelected] = useState<number>();

  return (
    <ProjectsList>
      <ProjectsElement>
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
          onClick={() => setSelected(project.key)}
        >
          <span>{project.name}</span>

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
    </ProjectsList>
  );
};

export default Projets;
