import React, { useReducer } from "react";
import AuthContext from "./authContext";
import AuthReducer from "./authReducer";
import clientAxios from "../../config/axios";
import tokenAuth from "../../config/token";

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
    loading: true,
    user: null,
    message: null
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const registerUser = async data => {
    try {
      const answer = await clientAxios.post("/api/users", data);
      //console.log(answer.data);

      dispatch({
        type: REGISTRY_SUCCESS,
        payload: answer.data
      });

      authUser();
    } catch (error) {
      //console.log(error.response);

      const alert = {
        msg: error.response.data.msg,
        category: "alerta-error"
      };
      dispatch({
        type: REGISTRY_ERROR,
        payload: alert
      });
    }
  };

  const authUser = async () => {
    const token = localStorage.getItem("token");

    if (token) {
      tokenAuth(token);
    }

    try {
      const answer = await clientAxios.get("/api/auth");
      //console.log(answer)
      dispatch({
        type: FIND_USER,
        payload: answer.data.user
      });
    } catch (error) {
      //console.log(error.response);
      dispatch({
        type: LOGIN_ERROR
      });
    }
  };
  const login = async data => {
    try {
      const answer = await clientAxios.post("/api/auth", data);
      //console.log(answer)

      dispatch({
        type: LOGIN_SUCCESS,
        payload: answer.data
      });
      authUser();
    } catch (error) {
      //console.log(error.response.data.msg);

      const alert = {
        msg: error.response.data.msg,
        category: "alerta-error"
      };
      dispatch({
        type: LOGIN_ERROR,
        payload: alert
      });
    }
  };

  const logOut = () => {
    dispatch({
      type: LOG_OUT
    });
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        authenticated: state.authenticated,
        user: state.user,
        message: state.message,
        loading: state.loading,
        registerUser,
        login,
        authUser,
        logOut
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
