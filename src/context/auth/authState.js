import React, {useReducer} from 'react';
import AuthContext from './authContext'
import AuthReducer from './authReducer'


import {
    SINGUP_SUCCESS,
    SINGUP_ERROR,
    FIND_USER,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOG_OUT
  } from "../../types";


  const AuthState = props => {
      const initialState = {
          token: localStorage.getItem('token')
      }
      return ( 

       );
  }
   
  export default AuthState;