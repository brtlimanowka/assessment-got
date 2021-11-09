import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import houseContext from '../../store/houses/houseContext';
import { useParams, useHistory } from 'react-router-dom';
import HouseStyled from '../styles/House.styled';
import Spinner from '../ui/Spinner';
import Button from '../ui/Button';

const BackButton = styled(Button)`
  flex-basis: unset;
  align-self: center;
  width: 20%;
  height: 30px;
  font-size: 1.2rem;
  text-transform: uppercase;
`;

const House = () => {
  const { startLoading, isLoading, house, getHouse } = useContext(houseContext);
  let { id } = useParams();
  const history = useHistory();
  useEffect(() => {
    startLoading();
    getHouse(id);
    // eslint-disable-next-line
  }, []);

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
                <span>{house.diedOut ? 'Yes' : 'No'}</span>
              </li>
              <li>
                <label>Has overlord:</label>
                <span>{house.overlord ? 'Yes' : 'No'}</span>
              </li>
              <li>
                <label>Cadet branches:</label>
                <span>{house.cadetBranches.length}</span>
              </li>
            </ul>
          </article>
          <BackButton onClick={() => history.goBack()}>Back</BackButton>
        </div>
      )}
    </HouseStyled>
  );
};

export default House;
