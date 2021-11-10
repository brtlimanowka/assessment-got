import React, { useContext, useEffect, Fragment } from 'react';
import characterContext from '../../store/characters/characterContext';
import CharactersTable from './CharactersTable';
import ErrorCard from '../ui/ErrorCard';
import CharactersPagnation from './CharactersPagination';
import Spinner from '../ui/Spinner';
import CharactersStyled from '../styles/Characters.styled';

const Characters = () => {
  const {
    startLoading,
    getCharacters,
    isLoading,
    characters,
    pagination,
    error,
  } = useContext(characterContext);
  useEffect(() => {
    startLoading();
    getCharacters();
    // eslint-disable-next-line
  }, []);

  const renderContent = (
    <Fragment>
      <h1>Characters</h1>
      {!isLoading && pagination && <CharactersPagnation />}
      {!isLoading && characters && <CharactersTable />}
    </Fragment>
  );

  return (
    <Fragment>
      {!isLoading && !!error && <ErrorCard />}
      <CharactersStyled>
        {isLoading && <Spinner />}
        {!isLoading && !error && renderContent}
      </CharactersStyled>
    </Fragment>
  );
};

export default Characters;
