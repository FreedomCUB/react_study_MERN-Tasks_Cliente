import React, { useReducer } from "react";
import TaskContext from "./taskContext";
import taskReducer from "./taskReducer";
import clientAxios from "../../config/axios";

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
    tasksProject: [],
    errorTask: false,
    selectedTask: null
  };

  const [state, dispatch] = useReducer(taskReducer, initialState);

  const findTasks = async project => {
    try {
      const answer = await clientAxios.get("/api/tasks", {
        params: { project }
      });

      dispatch({
        type: TASKS_PROJECT,
        payload: answer.data.tasks
      });
    } catch (error) {
      console.log(error.response);
    }
  };

  const addTask = async task => {
    try {
      const answer = await clientAxios.post("/api/tasks", task);

      dispatch({
        type: ADD_TASK,
        payload: task
      });
    } catch (error) {
      console.log(error);
    }
  };

  const validTask = () => {
    dispatch({
      type: ERROR_TASK
    });
  };

  const deleteTask = async (id, project) => {
    try {
      await clientAxios.delete(`/api/tasks/${id}`, {params: {project}});

      dispatch({
        type: DELETE_TASK,
        payload: id
      });
    } catch (error) {
      console.log(error.response);
    }
    
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
