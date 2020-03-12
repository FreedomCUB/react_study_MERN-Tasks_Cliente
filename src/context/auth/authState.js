import React, { useReducer } from "react";
import AuthContext from "./authContext";
import AuthReducer from "./authReducer";
import clientAxios from "../../config/axios";

import {
  REGISTRY_SUCCESS,
  REGISTRY_ERROR,
  FIND_USER,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOG_OUT
} from "../../types";

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem("token"),
    authenticated: null,
    user: null,
    message: null
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const registerUser = async data => {
    try {
      const answer = await clientAxios.post("/api/users", data);
      console.log(answer.data);

      dispatch({
        type: REGISTRY_SUCCESS,
        payload: answer.data
      });
    } catch (error) {
      //console.log(error.response);

      const alert = {
        msg: error.response.data.msg,
        category: 'alerta-error'
      }
      dispatch({
        type: REGISTRY_ERROR,
        payload: alert
      });
    }
  };
  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        authenticated: state.authenticated,
        user: state.user,
        message: state.message,
        registerUser
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
