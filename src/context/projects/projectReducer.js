import {
  FORM_PROJECT,
  FIND_PROJECT,
  ADD_PROJECT,
  ERROR_FORM,
  ACTUAL_PROJECT,
  DELETE_PROJECT,
  ERROR_PROJECT
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
        project: state.projects.filter( project => project._id === action.payload)
      };
    case DELETE_PROJECT:
        return{
            ...state,
            projects: state.projects.filter( project => project._id !== action.payload),
            project: null   
        }
    case ERROR_PROJECT:
      return {
        ...state,
        message: action.payload
      } 
    default:
      return state;
  }
};
