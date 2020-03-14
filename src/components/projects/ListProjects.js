import React, { useContext, useEffect } from "react";
import Project from "./Project";
import AlertContext from '../../context/alerts/alertContext'
import projectContext from "../../context/projects/projectContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ListProjects = () => {
  const projecstContext = useContext(projectContext);
  const { message, projects, findProjects } = projecstContext;

  const alertContext = useContext(AlertContext);
  const { alert, showAlert } = alertContext;

  useEffect(() => {

    if(message) {
      showAlert(message.msg, message.category)
    }


    findProjects();
    //eslint-disable-next-line
  }, [message]);

  if (projects.length === 0) return null;

  return (
    <ul className="listado-proyectos">
      {alert ? (
        <div className={`alerta ${alert.category}`}> {alert.msg} </div>
      ) : null}
      <TransitionGroup>
        {projects.map(project => (
          <CSSTransition key={project._id} timeout={300} classNames="proyecto">
            <Project project={project} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ListProjects;
