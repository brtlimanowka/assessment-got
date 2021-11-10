import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import characterContext from '../../store/characters/characterContext';
import houseContext from '../../store/houses/houseContext';
import ErrorStyled from '../styles/ErrorCard.styled';

const ErrorCard = () => {
  const history = useHistory();
  const { error: characterError, clearErrors: clearCharacterErrors } =
    useContext(characterContext);
  const { error: houseError, clearErrors: clearHouseErrors } =
    useContext(houseContext);

  const closeClickHandler = () => {
    characterError && clearCharacterErrors();
    houseError && clearHouseErrors();
    history.go('0');
  };

  return (
    <ErrorStyled>
      <div className='topbar'>
        <i
          className='fas fa-times'
          title='Close prompt'
          onClick={closeClickHandler}></i>
      </div>
      <h1>Something went wrong</h1>
      <p>
        <label>Error message:</label>
        <span>{characterError || houseError}</span>
      </p>
    </ErrorStyled>
  );
};

export default ErrorCard;
