import React from 'react';

const CharactersItem = ({ character }) => {
  const columnCharacter = [character.name, ...character.aliases]
    .filter((nameOrAlias) => !!nameOrAlias)
    .join(', ');
  const columnAlive = () => {
    const { born } = character;
    const { died } = character;

    if (born && died) {
      const regex = new RegExp(/\d{1,}\s[A|B]/, 'gi');
      let yearOfBirth = null,
        yearOfDeath = null;
      if (born.match(regex)) {
        yearOfBirth = born
          .match(regex)[0]
          .replace(' ', '')
          .replace('A', '')
          .replace('B', '');
      } else return 'Unknown';
      if (died.match(regex)) {
        yearOfDeath = died
          .match(regex)[0]
          .replace(' ', '')
          .replace('A', '')
          .replace('B', '');
      } else return 'Unknown';

      return `No, died at ${yearOfDeath - yearOfBirth} years old`;
    }
    if (!born && !died) {
      return 'Unknown';
    }
    if (!born) {
      return 'No';
    }
    return 'Yes';
  };
  const columnCulture = character.culture ? character.culture : 'Unknown';
  const columnAllegiances = () => {
    const { allegiances } = character;
    if (allegiances.length) {
      const API_URL = 'https://www.anapioficeandfire.com/api/houses/';
      return allegiances.map((allegiance) => {
        const allegianceId = allegiance.replace(API_URL, '');
        return (
          <a
            key={allegiance}
            href={`/house/${allegianceId}`}
            title='Check House'>
            <i className='fas fa-external-link-alt'></i>
            <span>{allegianceId}</span>
          </a>
        );
      });
    }
    return 'No allegiances';
  };

  return (
    <div className='characters-item'>
      <span>{columnCharacter}</span>
      <span>{columnAlive()}</span>
      <span>{character.gender}</span>
      <span>{columnCulture}</span>
      <span>{columnAllegiances()}</span>
    </div>
  );
};

export default CharactersItem;
