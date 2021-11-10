import React, { useContext, useEffect } from 'react';
import characterContext from '../../store/characters/characterContext';
import CharactersHeaders from './CharactersHeaders';
import CharactersItem from './CharactersItem';

const CharactersTable = () => {
  const {
    characters,
    gender,
    culture,
    filterByGender,
    filterByCulture,
    filtered,
    clearFilters,
    pagination,
  } = useContext(characterContext);
  useEffect(() => {
    clearFilters();
    gender && filterByGender(gender);
    culture && filterByCulture(culture);
    // eslint-disable-next-line
  }, [characters, gender, culture]);

  const currentPage = pagination.prev
    ? pagination.prev + 1
    : pagination.next - 1;
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
      <span className='total-pages'>
        Page {currentPage} / {pagination.last}
      </span>
    </div>
  );
};

export default CharactersTable;
