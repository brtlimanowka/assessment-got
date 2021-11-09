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
  useEffect(() => {
    console.log(house);
  }, [house]);

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
                <span>Region:</span>
                <span>{house.region}</span>
              </li>
              <li>
                <span>Coat of Arms:</span>
                <span>{house.coatOfArms}</span>
              </li>
              <li>
                <span>Titles:</span>
                <span>{house.titles.join(', ')}</span>
              </li>
              <li>
                <span>Seats:</span>
                <span>{house.seats.join(', ')}</span>
              </li>
              <li>
                <span>Has died out:</span>
                <span>{house.diedOut ? 'Yes' : 'No'}</span>
              </li>
              <li>
                <span>Has overlord:</span>
                <span>{house.overlord ? 'Yes' : 'No'}</span>
              </li>
              <li>
                <span>Cadet branches:</span>
                <span>{house.cadetBranches.length}</span>
              </li>
            </ul>
          </article>
        </div>
      )}
    </HouseStyled>
  );
};

export default House;
