import React, { Fragment, useContext } from "react";
import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/tasks/taskContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Task from "./Task";

const TasksList = () => {
  const projectsContext = useContext(projectContext);
  const { project, deleteProject } = projectsContext;

  const tasksContext = useContext(taskContext);
  const { tasksProject } = tasksContext;

  if (!project) return <h2>Seleccione un proyecto</h2>;

  const [actualProject] = project;

  const onClickDel = () => {
    deleteProject(actualProject._id);
  };
  return (
    <Fragment>
      <h2>Proyecto: {actualProject.name}</h2>

      <ul className="listado-tareas">
        {tasksProject.length === 0 ? (
          <li className="tarea">
            <p>No Hay Tareas</p>
          </li>
        ) : (
          <TransitionGroup>
            {tasksProject.map(task => (
              <CSSTransition key={task._id} timeout={300} classNames="tarea" >
                <Task task={task} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        )}
      </ul>
      <button type="button" className="btn  btn-eliminar" onClick={onClickDel}>
        Eliminar Proyecto &times;
      </button>
    </Fragment>
  );
};

export default TasksList;
