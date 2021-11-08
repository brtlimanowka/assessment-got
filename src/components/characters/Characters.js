import React, { useContext, useEffect, Fragment } from 'react';
import characterContext from '../../store/characters/characterContext';
import CharactersItem from './CharactersItem';
import Spinner from '../ui/Spinner';
import CharactersStyled from '../styles/Characters.styled';

const Characters = () => {
  const { startLoading, getCharacters, isLoading, characters, filtered } =
    useContext(characterContext);
  useEffect(() => {
    startLoading();
    getCharacters();
    // eslint-disable-next-line
  }, []);

  const renderTable = (
    <Fragment>
      <h1>Characters</h1>
      <div className='characters-table'>
        <header>
          <span>Character</span>
          <span>Alive</span>
          <span>
            Gender<i className='fas fa-filter'></i>
          </span>
          <span>
            Culture<i className='fas fa-filter'></i>
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
