import React, { useContext, useState, useEffect, Fragment } from 'react';
import styled from 'styled-components';
import characterContext from '../../store/characters/characterContext';
import CharactersItem from './CharactersItem';
import Spinner from '../ui/Spinner';
import CharactersStyled from '../styles/Characters.styled';

const FilterGender = styled.div``;
const FilterCulture = styled.div``;

const Characters = () => {
  const {
    startLoading,
    getCharacters,
    isLoading,
    characters,
    pagination,
    filtered,
  } = useContext(characterContext);
  useEffect(() => {
    startLoading();
    getCharacters();
    // eslint-disable-next-line
  }, []);
  const [pageSize, setPageSize] = useState(10);

  const renderPagination = pagination && (
    <div className='characters-pagination'>
      <button disabled={!pagination.prev}>
        <i className='fas fa-fast-backward'></i> First Page
      </button>
      <button disabled={!pagination.prev}>
        <i className='fas fa-step-backward'></i>Previous Page
      </button>
      <button title='Display options'>
        <i className='fas fa-bars' style={{ fontSize: '1.8rem' }}></i>
      </button>
      <button disabled={!pagination.next}>
        Next Page
        <i className='fas fa-step-forward'></i>
      </button>
      <button disabled={!pagination.next}>
        Last Page
        <i className='fas fa-fast-forward'></i>
      </button>
    </div>
  );
  const renderTable = (
    <Fragment>
      <h1>Characters</h1>
      {!isLoading && renderPagination}
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
      {!isLoading && pageSize > 10 && renderPagination}
    </Fragment>
  );

  return (
    <CharactersStyled>{isLoading ? <Spinner /> : renderTable}</CharactersStyled>
  );
};

export default Characters;
