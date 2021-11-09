import React, { useContext } from 'react';
import characterContext from '../../store/characters/characterContext';
import CharactersHeaders from './CharactersHeaders';
import CharactersItem from './CharactersItem';

const CharactersTable = () => {
  const { characters, filtered } = useContext(characterContext);

  const selectedCharacters = filtered || characters;

  return (
    <div className='characters-table'>
      <CharactersHeaders />
      <article>
        {characters && (
          <ul>
            {selectedCharacters.map((character) => (
              <CharactersItem key={character.url} character={character} />
            ))}
          </ul>
        )}
      </article>
    </div>
  );
};

export default CharactersTable;
