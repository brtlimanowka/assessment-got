import React, { useContext, useEffect, Fragment } from 'react';
import characterContext from '../../store/characters/characterContext';
import CharactersTable from './CharactersTable';
import CharactersPagnation from './CharactersPagination';
import Spinner from '../ui/Spinner';
import CharactersStyled from '../styles/Characters.styled';

const Characters = () => {
  const { startLoading, getCharacters, isLoading, characters, pagination } =
    useContext(characterContext);
  useEffect(() => {
    startLoading();
    getCharacters();
    // eslint-disable-next-line
  }, []);

  return (
    <CharactersStyled>
      {isLoading ? (
        <Spinner />
      ) : (
        <Fragment>
          <h1>Characters</h1>
          {pagination && <CharactersPagnation />}
          {characters && <CharactersTable />}
        </Fragment>
      )}
    </CharactersStyled>
  );
};

export default Characters;
