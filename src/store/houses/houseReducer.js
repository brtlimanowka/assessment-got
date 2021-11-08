import {
  START_LOADING,
  CLEAR_ERRORS,
  HOUSE_LOADED,
  HOUSE_ERROR,
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
    case HOUSE_LOADED:
      return {
        ...state,
        isLoading: false,
        error: null,
        house: action.payload,
      };
    case HOUSE_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        house: null,
      };
    default:
      return state;
  }
};

export default _;
