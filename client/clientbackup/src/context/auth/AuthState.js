import React, { useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import axios from 'axios'
import setAuthToken from "../../utils/setAuthToken";

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOAD,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from "../types";

const AuthState = (props) => {
  const initialState = {
    token : localStorage.getItem('token'),
    isAuthenticated:null,
    loading:true,
    error:null,
    user:null
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

    //   loading
    const loadUser = async ()=>{
      setAuthToken(localStorage.token)
      try {
        const res= await axios.get('/api/auth')
        dispatch ({type:USER_LOAD,payload:res.data})
      } catch (error) {
        dispatch({type:AUTH_ERROR})

      }

    }

    // register user
    const register = async (fromData) =>{
      const config ={
        headers:{
          'Content-Type':'application/json'
        }
      }

      try{
        const res =await axios.post('/api/users',fromData,config)
        dispatch({
          type:REGISTER_SUCCESS,
          payload:res.data
        })
        loadUser()

      }catch(err){
        dispatch({
          type:REGISTER_FAIL,
          payload:err.response.data.msg
        })
      }
    }

    // login user
    const login = async (formData)=>{
      const config ={
        headers:{
          'Content-Type':'application/json'
        }
      }

      try{
        const res =await axios.post('/api/auth',formData,config)
        dispatch({
          type:LOGIN_SUCCESS,
          payload:res.data
        })
        loadUser()
        return
      }catch(err){
        dispatch({
          type:LOGIN_FAIL,
          payload:err.response.data.msg
        })

      }
    }
    // logout
    const logout =()=>{
     dispatch({
       type:LOGOUT
     })
    }
    // Clear errors

    const clearErrors =()=>{
      dispatch({
        type:CLEAR_ERRORS
      })
    }




  return (
    <AuthContext.Provider
      value={{
        token:state.token,
        isAuthenticated:state.isAuthenticated,
        loading:state.loading,
        error:state.error,
        user:state.user,
        register,
        login,
        logout,
        clearErrors,
        loadUser
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
