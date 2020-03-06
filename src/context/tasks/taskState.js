import React, { useReducer } from "react";
import TaskContext from "./taskContext";
import taskReducer from "./taskReducer";
import uuid from "uuid";

import {
  TASKS_PROJECT,
  ADD_TASK,
  ERROR_TASK,
  DELETE_TASK,
  STATE_TASK,
  ACTUAL_TASK,
  UPDATE_TASK
} from "../../types/index";

const TaskState = props => {
  const initialState = {
    tasks: [
      { id: 1, name: "Elegir Plataforma", state: true, projectId: 1 },
      { id: 2, name: "Elegir colores", state: false, projectId: 2 },
      { id: 3, name: "Elegir colores", state: false, projectId: 3 },
      { id: 4, name: "Elegir Hosting", state: true, projectId: 4 },
      { id: 5, name: "Elegir Hosting", state: true, projectId: 1 },
      { id: 6, name: "Elegir Hosting", state: false, projectId: 2 },
      { id: 7, name: "Elegir Hosting", state: false, projectId: 3 },
      { id: 8, name: "Elegir Plataforma", state: true, projectId: 4 },
      { id: 9, name: "Elegir colores", state: false, projectId: 1 },
      { id: 10, name: "Elegir Plataforma de pago", state: false, projectId: 2 },
      { id: 11, name: "Elegir Plataforma", state: true, projectId: 3 },
      { id: 12, name: "Elegir colores", state: false, projectId: 4 },
      { id: 13, name: "Elegir Plataforma de pago", state: false, projectId: 3 }
    ],
    tasksProject: null,
    errorTask: false,
    selectedTask: null
  };

  const [state, dispatch] = useReducer(taskReducer, initialState);

  const findTasks = projectId => {
    dispatch({
      type: TASKS_PROJECT,
      payload: projectId
    });
  };

  const addTask = task => {
    task.id = uuid.v4();
    dispatch({
      type: ADD_TASK,
      payload: task
    });
  };

  const validTask = () => {
    dispatch({
      type: ERROR_TASK
    });
  };

  const deleteTask = id => {
    dispatch({
      type: DELETE_TASK,
      payload: id
    });
  };

  const changeStateTask = task => {
    dispatch({
      type: STATE_TASK,
      payload: task
    });
  };

  const saveActualTask = task => {
    dispatch({
      type: ACTUAL_TASK,
      payload: task
    });
  };

  const updateTask = task => {
    dispatch({
      type: UPDATE_TASK,
      payload: task
    });
  };

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        tasksProject: state.tasksProject,
        errorTask: state.errorTask,
        selectedTask: state.selectedTask,
        findTasks,
        addTask,
        validTask,
        deleteTask,
        changeStateTask,
        saveActualTask,
        updateTask
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskState;
