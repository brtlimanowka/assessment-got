import React, { useReducer } from 'react';
import houseContext from './houseContext';
import houseReducer from './houseReducer';
import {
  START_LOADING,
  CLEAR_ERRORS,
  HOUSE_LOADED,
  HOUSE_ERROR,
} from '../types';
const API_URL = 'https://www.anapioficeandfire.com/api/houses';

const HouseState = (props) => {
  const initialState = {
    isLoading: false,
    error: null,
    house: null,
  };
  const [state, dispatch] = useReducer(houseReducer, initialState);

  const getHouse = (houseId) => {
    fetch(`${API_URL}/${houseId}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.statusText);
        }
      })
      .then((data) => dispatch({ type: HOUSE_LOADED, payload: data }))
      .catch((error) =>
        dispatch({ type: HOUSE_ERROR, payload: error.message })
      );
  };
  const startLoading = () => {
    dispatch({ type: START_LOADING });
  };
  const clearErrors = () => {
    dispatch({ type: CLEAR_ERRORS });
  };

  const contextValues = {
    isLoading: state.isLoading,
    error: state.error,
    house: state.house,
    getHouse,
    startLoading,
    clearErrors,
  };

  return (
    <houseContext.Provider value={contextValues}>
      {props.children}
    </houseContext.Provider>
  );
};

export default HouseState;
