import React, { useContext, useEffect } from 'react';
import houseContext from '../../store/houses/houseContext';
import { useParams, useHistory } from 'react-router-dom';
import HouseStyled from '../styles/House.styled';
import Spinner from '../ui/Spinner';

const House = () => {
  const { startLoading, isLoading, house, getHouse } = useContext(houseContext);
  let { id } = useParams();
  const history = useHistory();
  useEffect(() => {
    startLoading();
    getHouse(id);
    // eslint-disable-next-line
  }, []);

  const renderIconTrue = <i className='far fa-check-square'></i>;
  const renderIconFalse = <i className='far fa-times-circle'></i>;

  return (
    <HouseStyled>
      {isLoading && <Spinner />}
      {!isLoading && house && (
        <div className='house-details'>
          <header>
            <h1>{house.name}</h1>
            <h2>
              <em>{house.words}</em>
            </h2>
          </header>
          <article>
            <ul>
              <li>
                <label>Region:</label>
                <span>{house.region}</span>
              </li>
              <li>
                <label>Coat of Arms:</label>
                <span>{house.coatOfArms}</span>
              </li>
              <li>
                <label>Titles:</label>
                <span>{house.titles.join(', ')}</span>
              </li>
              <li>
                <label>Seats:</label>
                <span>{house.seats.join(', ')}</span>
              </li>
              <li>
                <label>Has died out:</label>
                <span>{house.diedOut ? renderIconTrue : renderIconFalse}</span>
              </li>
              <li>
                <label>Has overlord:</label>
                <span>{house.overlord ? renderIconTrue : renderIconFalse}</span>
              </li>
              <li>
                <label>Cadet branches:</label>
                <span>{house.cadetBranches.length}</span>
              </li>
            </ul>
          </article>
          <button onClick={() => history.goBack()}>Back</button>
        </div>
      )}
    </HouseStyled>
  );
};

export default House;
