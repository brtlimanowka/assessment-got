import React, { useContext, useState, useEffect, Fragment } from 'react';
import characterContext from '../../store/characters/characterContext';
import CharactersItem from './CharactersItem';
import Spinner from '../ui/Spinner';
import CharactersStyled from '../styles/Characters.styled';

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
  const [filteringCulture, setFilteringCulture] = useState(false);
  useEffect(() => {
    startLoading();
    getCharacters();
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    getCharacters(1, pageSize);
    setShowSettings(false);
    // eslint-disable-next-line
  }, [pageSize]);

  const renderSettings = (
    <div className='pagination-settings'>
      <h4>Characters per page:</h4>
      <ul>
        <li>
          <input
            type='radio'
            name='pageSize'
            value='10'
            checked={pageSize === 10}
            onChange={() => setPageSize(10)}
          />
          <label htmlFor='radio10'>10</label>
        </li>
        <li>
          <input
            type='radio'
            name='pageSize'
            value='25'
            checked={pageSize === 25}
            onChange={() => setPageSize(25)}
          />
          <label htmlFor='radio25'>25</label>
        </li>
        <li>
          <input
            type='radio'
            name='pageSize'
            value='50'
            checked={pageSize === 50}
            onChange={() => setPageSize(50)}
          />
          <label htmlFor='radio50'>50</label>
        </li>
      </ul>
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
        <span>{pageSize}</span>
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
            <div className='filter-gender'>
              <select defaultValue='Any'>
                <option value='Any'>Any</option>
                <option value='Female'>Female</option>
                <option value='Male'>Male</option>
              </select>
            </div>
          </span>
          <span>
            Culture
            <div className='filter-culture'>
              <input id='culture' type='text' />
              <label htmlFor='culture'>
                <i
                  className={
                    filteringCulture ? 'fas fa-times' : 'fas fa-search'
                  }></i>
              </label>
            </div>
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
