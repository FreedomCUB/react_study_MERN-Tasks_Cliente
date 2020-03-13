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
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        authenticated: true,
        message: null,
        loading: false
      };
    case LOG_OUT:  
    case LOGIN_ERROR:
    case REGISTRY_ERROR:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
        authenticated: null,
        loading: false,
        message: action.payload
      };
    case FIND_USER:
      return {
        ...state,
        authenticated: true,
        loading: false,
        user: action.payload
      };

    default:
      return state;
  }
};
