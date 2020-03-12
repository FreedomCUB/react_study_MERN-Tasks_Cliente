import {
  REGISTRY_SUCCESS,
  REGISTRY_ERROR,
  FIND_USER,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOG_OUT
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case REGISTRY_SUCCESS:
      localStorage.setItem("token", action.payload.token);      
      return {
        ...state,
        authenticated: true,
        message: null
      };
    case REGISTRY_ERROR:
      return {
        ...state,
        token: null,
        message: action.payload
      };

    default:
      return state;
  }
};
