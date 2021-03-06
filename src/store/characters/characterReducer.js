import {
  START_LOADING,
  CLEAR_ERRORS,
  CHARACTERS_LOADED,
  STORE_PAGINATION,
  CHARACTERS_ERROR,
  SELECT_GENDER,
  SELECT_CULTURE,
  FILTER_GENDER,
  FILTER_CULTURE,
  CLEAR_FILTER,
} from '../types';

const _ = (state, action) => {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    case CHARACTERS_LOADED:
      return {
        ...state,
        isLoading: false,
        error: null,
        characters: action.payload,
        filtered: null,
      };
    case STORE_PAGINATION:
      return {
        ...state,
        pagination: action.payload,
      };
    case CHARACTERS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        characters: null,
        filtered: null,
      };
    case SELECT_GENDER:
      return {
        ...state,
        gender: action.payload,
      };
    case SELECT_CULTURE:
      return {
        ...state,
        culture: action.payload,
      };
    case FILTER_GENDER:
      return {
        ...state,
        filtered: state.filtered
          ? state.filtered.filter(
              (character) => character.gender === action.payload
            )
          : state.characters.filter(
              (character) => character.gender === action.payload
            ),
      };
    case FILTER_CULTURE:
      return {
        ...state,
        filtered: state.filtered
          ? state.filtered.filter((character) => {
              const regex = new RegExp(action.payload, 'gi');
              return character.culture.match(regex);
            })
          : state.characters.filter((character) => {
              const regex = new RegExp(action.payload, 'gi');
              return character.culture.match(regex);
            }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    default:
      return state;
  }
};

export default _;
