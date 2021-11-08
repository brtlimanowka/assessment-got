import React, { useContext, useState, useEffect, Fragment } from 'react';
import styled from 'styled-components';
import characterContext from '../../store/characters/characterContext';
import CharactersItem from './CharactersItem';
import Spinner from '../ui/Spinner';
import CharactersStyled from '../styles/Characters.styled';

const FilterGender = styled.div``;
const FilterCulture = styled.div``;

const Characters = () => {
  const { startLoading, getCharacters, isLoading, characters, filtered } =
    useContext(characterContext);
  const [pagination, setPagination] = useState({
    firstPage: 1,
    previousPage: 1,
    currentPage: 1,
    nextPage: 2,
    lastPage: 2,
  });
  useEffect(() => {
    startLoading();
    getCharacters();
    // eslint-disable-next-line
  }, []);

  const renderTable = (
    <Fragment>
      <h1>Characters</h1>
      <div className='characters-pagination'>
        <span>
          <i className='fas fa-fast-backward'></i> First Page
        </span>
        <span>
          <i className='fas fa-step-backward'></i>Previous Page
        </span>
        <span title='Display options'>
          <i className='fas fa-bars' style={{ fontSize: '1.8rem' }}></i>
        </span>
        <span>
          Next Page
          <i className='fas fa-step-forward'></i>
        </span>
        <span>
          Last Page
          <i className='fas fa-fast-forward'></i>
        </span>
      </div>
      <div className='characters-table'>
        <header>
          <span>Character</span>
          <span>Alive</span>
          <span>
            Gender
            <i className='fas fa-filter' title='Filter'></i>
            <FilterGender>
              <select defaultValue='Any'>
                <option value='Any'>Any</option>
                <option value='Female'>Female</option>
                <option value='Male'>Male</option>
              </select>
            </FilterGender>
          </span>
          <span>
            Culture<i className='fas fa-filter' title='Filter'></i>
            <FilterCulture>
              <input type='text' />
            </FilterCulture>
          </span>
          <span>Allegiances</span>
        </header>
        <article>
          {characters && (
            <ul>
              {characters.map((character) => (
                <CharactersItem key={character.url} character={character} />
              ))}
            </ul>
          )}
        </article>
      </div>
    </Fragment>
  );

  return (
    <CharactersStyled>{isLoading ? <Spinner /> : renderTable}</CharactersStyled>
  );
};

export default Characters;
