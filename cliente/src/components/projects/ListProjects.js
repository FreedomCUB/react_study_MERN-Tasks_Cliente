import React, { useContext, useEffect } from "react";
import Project from "./Project";
import projectContext from "../../context/projects/projectContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ListProjects = () => {
  const projecstContext = useContext(projectContext);
  const { projects, findProjects } = projecstContext;

  useEffect(() => {
    findProjects();
    //eslint-disable-next-line
  }, []);

  if (projects.length === 0) return null;

  return (
    <ul className="listado-proyectos">
      <TransitionGroup>
        {projects.map(project => (
          <CSSTransition key={project.id} timeout={300} classNames="proyecto">
            <Project project={project} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ListProjects;
