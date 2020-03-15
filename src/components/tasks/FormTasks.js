import React, { useContext, useState, useEffect } from "react";
import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/tasks/taskContext";

const FormTasks = () => {
  const projectsContext = useContext(projectContext);
  const { project } = projectsContext;

  const tasksContext = useContext(taskContext);
  const {
    selectedTask,
    addTask,
    findTasks,
    validTask,
    errorTask,
    updateTask,
    cleanTask
  } = tasksContext;

  // State

  const [task, setTask] = useState({
    name: ""
  });

  // Efect
  useEffect(() => {
    if (selectedTask !== null) {
      setTask(selectedTask);
    } else {
      setTask({
        name: ""
      });
    }
  }, [selectedTask]);

  const { name } = task;

  if (!project) return null;

  const [actualProject] = project;

  // Reading Form
  const handleChange = e => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();

    if (name.trim() === "") {
      validTask();
      return;
    }

    if (selectedTask === null) {
      task.project = actualProject._id;
      task.created = Date.now()      
      addTask(task);
      findTasks(actualProject._id);
    } else {
      updateTask(task);
      cleanTask();
    }   

    findTasks(actualProject._id);

    setTask({
      name: ""
    });
  };

  return (
    <div className="formulario">
      <form onSubmit={onSubmit}>
        <div className="contenedor-input">
          <input
            type="text"
            name="name"
            value={name}
            className="input-text"
            placeholder="Nombre Tarea..."
            onChange={handleChange}
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            value={selectedTask ? "Editar Tarea" : "Agregar Tarea"}
          />
        </div>
      </form>
      {errorTask ? (
        <p className="mensaje error">Escriba un nombre para la tarea</p>
      ) : null}
    </div>
  );
};

export default FormTasks;
