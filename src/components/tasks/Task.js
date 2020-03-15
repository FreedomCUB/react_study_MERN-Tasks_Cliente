import React, { useContext } from "react";
import taskContext from "../../context/tasks/taskContext";

const Task = ({ task }) => {
  const tasksContext = useContext(taskContext);
  const {
    deleteTask,
    findTasks,
    changeStateTask,
    saveActualTask
  } = tasksContext;

  const {project} = task;  

  const delTask = task => {  
    
    deleteTask(task._id, task.project);
    findTasks(task.project);
  };

  const changeState = task => {
    if (task.state) {
      task.state = false;
    } else {
      task.state = true;
    }

    changeStateTask(task);
  };

  const selectTask = task => {
    saveActualTask(task);
  };

  return (
    <li className="tarea sombra">
      <p>{task.name}</p>
      <div className="estado">
        {task.state ? (
          <button
            type="button"
            className="completo"
            onClick={() => changeState(task)}
          >
            Completo
          </button>
        ) : (
          <button
            type="button"
            className="incompleto"
            onClick={() => changeState(task)}
          >
            Incompleto
          </button>
        )}
      </div>
      <div className="acciones">
        <button
          type="button"
          className="btn btn-primario"
          onClick={() => selectTask(task)}
        >
          Editar
        </button>
        <button
          type="button"
          className="btn btn-secundario"
          onClick={() => delTask(task)}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default Task;
