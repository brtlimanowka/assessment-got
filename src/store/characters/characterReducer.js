import {
  START_LOADING,
  CLEAR_ERRORS,
  CHARACTERS_LOADED,
  CHARACTERS_ERROR,
  FILTER_GENDER,
  FILTER_CULTURE,
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
    case CHARACTERS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        characters: null,
        filtered: null,
      };
    case FILTER_GENDER:
      return {
        ...state,
        filtered: state.characters.filter(
          (character) => character.gender === action.payload
        ),
      };
    case FILTER_CULTURE:
      return {
        ...state,
        filtered: state.characters.filter((character) => {
          const regex = new RegExp(action.payload, 'gi');
          return character.culture.match(regex);
        }),
      };
    default:
      return state;
  }
};

export default _;
