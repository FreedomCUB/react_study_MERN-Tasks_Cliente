import {
  FORM_PROJECT,
  FIND_PROJECT,
  ADD_PROJECT,
  ERROR_FORM,
  ACTUAL_PROJECT,
  DELETE_PROJECT
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case FORM_PROJECT:
      return {
        ...state,
        newProject: true
      };
    case FIND_PROJECT:
      return {
        ...state,
        projects: action.payload
      };
    case ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload],
        newProject: false,
        errorForm: false
      };
    case ERROR_FORM:
      return {
        ...state,
        errorForm: true
      };
    case ACTUAL_PROJECT:
      return {
        ...state,
        project: state.projects.filter( project => project.id === action.payload)
      };
    case DELETE_PROJECT:
        return{
            ...state,
            projects: state.projects.filter( project => project.id !== action.payload),
            project: null   
        }
    default:
      return state;
  }
};
