import React, { useReducer } from 'react';
import characterContext from './characterContext';
import characterReducer from './characterReducer';
import {
  START_LOADING,
  CLEAR_ERRORS,
  CHARACTERS_LOADED,
  STORE_PAGINATION,
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
    pagination: null,
    filtered: null,
  };
  const [state, dispatch] = useReducer(characterReducer, initialState);

  const getCharacters = (page, pageSize) => {
    const queryPage = page ? page : 1;
    const queryPageSize = pageSize ? pageSize : 10;

    fetch(`${API_URL}?page=${queryPage}&pageSize=${queryPageSize}`)
      .then((response) => {
        if (response.ok) {
          getPaginationData(response.headers.get('link'));
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
  const getPaginationData = (responseHeader) => {
    const dataInHeader = responseHeader.split(',');
    const pageRegex = new RegExp(/\?page=\d{1,}/, 'gi');
    let paginationData = {};

    const prev = dataInHeader.find((entry) => entry.includes('prev'));
    const next = dataInHeader.find((entry) => entry.includes('next'));
    const first = dataInHeader.find((entry) => entry.includes('first'));
    const last = dataInHeader.find((entry) => entry.includes('last'));

    paginationData.prev = prev
      ? +prev.match(pageRegex)[0].replace('?page=', '')
      : null;
    paginationData.next = next
      ? +next.match(pageRegex)[0].replace('?page=', '')
      : null;
    paginationData.first = first
      ? +first.match(pageRegex)[0].replace('?page=', '')
      : null;
    paginationData.last = last
      ? +last.match(pageRegex)[0].replace('?page=', '')
      : null;

    dispatch({ type: STORE_PAGINATION, payload: paginationData });
  };

  const contextValues = {
    isLoading: state.isLoading,
    error: state.error,
    characters: state.characters,
    pagination: state.pagination,
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
