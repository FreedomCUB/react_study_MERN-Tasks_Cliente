import React, { useReducer } from "react";
import clientAxios from "../../config/axios";

import projectContext from "./projectContext";
import projectReducer from "./projectReducer";
import {
  FORM_PROJECT,
  FIND_PROJECT,
  ADD_PROJECT,
  ERROR_FORM,
  ACTUAL_PROJECT,
  DELETE_PROJECT,
  ERROR_PROJECT
} from "../../types";

const ProjectState = props => {
  const initialState = {
    projects: [],
    newProject: false,
    errorForm: false,
    project: null,
    message: null
  };

  const [state, dispatch] = useReducer(projectReducer, initialState);

  const showForm = () => {
    dispatch({
      type: FORM_PROJECT
    });
  };

  const findProjects = async () => {
    try {
      const answer = await clientAxios.get("/api/projects");

      dispatch({
        type: FIND_PROJECT,
        payload: answer.data
      });
    } catch (error) {
      const alert = {
        msg: "Hubo un error",
        category: "alerta-error"
      };
      dispatch({
        type: ERROR_PROJECT,
        payload: alert
      });
    }
  };

  const addProject = async project => {
    try {
      const answer = await clientAxios.post("/api/projects", project);
      // console.log(answer)
      dispatch({
        type: ADD_PROJECT,
        payload: answer.data
      });
    } catch (error) {
      const alert = {
        msg: "Hubo un error",
        category: "alerta-error"
      };
      dispatch({
        type: ERROR_PROJECT,
        payload: alert
      });
    }
  };

  const showError = () => {
    dispatch({
      type: ERROR_FORM
    });
  };

  const actualProject = projectID => {
    dispatch({
      type: ACTUAL_PROJECT,
      payload: projectID
    });
  };

  const deleteProject = async projectID => {
    try {
      await clientAxios.delete(`/api/projects/${projectID}`);
      dispatch({
        type: DELETE_PROJECT,
        payload: projectID
      });
    } catch (error) {
      const alert = {
        msg: "Hubo un error",
        category: "alerta-error"
      };
      dispatch({
        type: ERROR_PROJECT,
        payload: alert
      });
    }
  };

  return (
    <projectContext.Provider
      value={{
        projects: state.projects,
        newProject: state.newProject,
        errorForm: state.errorForm,
        project: state.project,
        message: state.message,
        showForm,
        findProjects,
        addProject,
        showError,
        actualProject,
        deleteProject
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
};
export default ProjectState;
