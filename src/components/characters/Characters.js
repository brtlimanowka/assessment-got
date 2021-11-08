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
  const [pageSize, setPageSize] = useState(10);
  const [showSettings, setShowSettings] = useState(false);
  useEffect(() => {
    startLoading();
    getCharacters();
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    getCharacters(1, pageSize);
    // eslint-disable-next-line
  }, [pageSize]);

  const pageSizeClickHandler = (value) => {
    startLoading();
    setPageSize(value);
    setShowSettings(false);
  };

  const renderSettings = (
    <div className='pagination-settings'>
      <h4>Characters per page:</h4>
      <button onClick={() => pageSizeClickHandler(10)}>10</button>
      <button onClick={() => pageSizeClickHandler(25)}>25</button>
      <button onClick={() => pageSizeClickHandler(50)}>50</button>
    </div>
  );
  const renderPagination = pagination && (
    <div className='characters-pagination'>
      <button
        disabled={!pagination.prev}
        onClick={() => getCharacters(pagination.first, pageSize)}
        title='Jump to first page'>
        <i className='fas fa-fast-backward'></i>
      </button>
      <button
        disabled={!pagination.prev}
        onClick={() => getCharacters(pagination.prev, pageSize)}
        title='Jump to previous page'>
        <i className='fas fa-step-backward'></i>
      </button>
      <button
        title='Display options'
        onClick={() => setShowSettings(!showSettings)}>
        <i className='fas fa-bars' style={{ fontSize: '1.8rem' }}></i>
      </button>
      {showSettings && renderSettings}
      <button
        disabled={!pagination.next}
        onClick={() => getCharacters(pagination.next, pageSize)}
        title='Jump to next page'>
        <i className='fas fa-step-forward'></i>
      </button>
      <button
        disabled={!pagination.next}
        onClick={() => getCharacters(pagination.last, pageSize)}
        title='Jump to last page'>
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
            <FilterGender>
              <select defaultValue='Any'>
                <option value='Any'>Any</option>
                <option value='Female'>Female</option>
                <option value='Male'>Male</option>
              </select>
            </FilterGender>
          </span>
          <span>
            Culture
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
