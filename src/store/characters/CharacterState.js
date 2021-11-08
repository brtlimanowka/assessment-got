import React, { useReducer } from 'react';
import characterContext from './characterContext';
import characterReducer from './characterReducer';
import {
  START_LOADING,
  CLEAR_ERRORS,
  CHARACTERS_LOADED,
  LASTPAGE_SET,
  CHARACTERS_ERROR,
  FILTER_GENDER,
  FILTER_CULTURE,
} from '../types';
const API_URL = 'https://www.anapioficeandfire.com/api/characters';

const CharacterState = (props) => {
  const initialState = {
    isLoading: false,
    error: null,
    characters: null,
    lastPage: null,
    filtered: null,
  };
  const [state, dispatch] = useReducer(characterReducer, initialState);

  const getCharacters = (page, pageSize) => {
    const queryPage = page ? page : 1;
    const queryPageSize = pageSize ? pageSize : 10;

    fetch(`${API_URL}?page=${queryPage}&pageSize=${queryPageSize}`)
      .then((response) => {
        if (response.ok) {
          const headerData = response.headers
            .get('link')
            .split(',')
            .find((entry) => entry.includes('last'));
          const regex = new RegExp(/\?page=\d{1,}/, 'gi');
          const lastPage = +headerData.match(regex)[0].replace('?page=', '');

          dispatch({ type: LASTPAGE_SET, payload: lastPage });
          return response.json();
        } else {
          throw new Error(response.statusText);
        }
      })
      .then((data) => dispatch({ type: CHARACTERS_LOADED, payload: data }))
      .catch((error) => {
        dispatch({ type: CHARACTERS_ERROR, payload: error.message });
      });
  };
  const filterByGender = (gender) => {
    dispatch({ type: FILTER_GENDER, payload: gender });
  };
  const filterByCulture = (culture) => {
    dispatch({ type: FILTER_CULTURE, payload: culture });
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
    characters: state.characters,
    lastPage: state.lastPage,
    filtered: state.filtered,
    getCharacters,
    filterByGender,
    filterByCulture,
    startLoading,
    clearErrors,
  };

  return (
    <characterContext.Provider value={contextValues}>
      {props.children}
    </characterContext.Provider>
  );
};

export default CharacterState;
