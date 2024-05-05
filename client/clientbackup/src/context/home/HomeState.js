import React, { useReducer } from "react";
import HomeContext from "./HomeContext";
import HomeReducer from "./HomeReducer";
import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";

import {
  ADD_KEEP,
  DELETE_KEEP,
  SET_CURRENT,
  CLEAR_CURRENT,
  CHANGE_VIEW,
  GET_KEEPS,
  KEEP_ERROR,
  CLEAR_KEEPS,
  UPDATE_KEEP,
  CLEAR_FILTER,
  FILTER_KEEP
} from "../types";

const HomeState = (props) => {
  const initialState = {
    keeps: [],
    current: null,
    error: null,
    filtered: null,
    searchKey:null
  };

  const [state, dispatch] = useReducer(HomeReducer, initialState);

  // get keepss
  const getKeeps = async () => {
    setAuthToken(localStorage.token);
    try {
      const res = await axios.get("/api/keeps");
      dispatch({
        type: GET_KEEPS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: KEEP_ERROR,
        payload: err.response.msg,
      });
    }
  };

  // add Keep
  const addKeep = async (keep) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/keeps", keep, config);
      dispatch({
        type: ADD_KEEP,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: KEEP_ERROR,
        payload: err.response.msg,
      });
    }
  };

  const delKeep = async (id) => {
    try {
      await axios.delete(`/api/keeps/${id}`);
      dispatch({
        type: DELETE_KEEP,
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: KEEP_ERROR,
        payload: err.response.msg,
      });
    }
  };

  const updateKeep = async (keep) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.put(`/api/keeps/${keep._id}`, keep, config);
      dispatch({
        type: UPDATE_KEEP,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: KEEP_ERROR,
        payload: err.response.msg || ""
      });
    }
  };

  const setCurrent = (keep) => {
    dispatch({
      type: SET_CURRENT,
      payload: keep,
    });
  };

  const clearCurrent = () => {
    dispatch({
      type: CLEAR_CURRENT,
    });
  };

  const changeView = (item) => {
    dispatch({
      type: CHANGE_VIEW,
      payload: item,
    });
  };

  const clearKeeps = () => {
    dispatch({
      type: CLEAR_KEEPS,
    });
  };

  // filter contact
  const filterKeep = (text) => {
    dispatch({
      type: FILTER_KEEP,
      payload: text,
    });
  };
  // clear Filter
  const clearFilter = () => {
    dispatch({
      type: CLEAR_FILTER,
    });
  };

  return (
    <HomeContext.Provider
      value={{
        keeps: state.keeps,
        current: state.current,
        filtered:state.filtered,
        searchKey:state.searchKey,
        addKeep,
        delKeep,
        setCurrent,
        clearCurrent,
        updateKeep,
        changeView,
        getKeeps,
        clearKeeps,
        filterKeep,
        clearFilter
      }}
    >
      {props.children}
    </HomeContext.Provider>
  );
};

export default HomeState;
