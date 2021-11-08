import React from 'react';

const CharactersItem = ({ character }) => {
  const columnCharacter = [character.name, ...character.aliases]
    .filter((nameOrAlias) => !!nameOrAlias)
    .join(', ');
  const columnAlive = () => {
    const born = character.born;
    const died = character.died;

    if (!born && !died) {
      return 'Unknown';
    }
    if (!born) {
      return 'No';
    }
    if (!died) {
      return 'Yes';
    }
    const regex = new RegExp(/\d{1,}\s[A|b]/, 'gi');
    const yearOfBirth = born
      .match(regex)[0]
      .replace(' ', '')
      .replace('A', '')
      .replace('B', '');
    const yearOfDeath = died
      .match(regex)[0]
      .replace(' ', '')
      .replace('A', '')
      .replace('B', '');
    return `No, died at ${yearOfDeath - yearOfBirth} years old`;
  };

  return (
    <div className='characters-item'>
      <span>{columnCharacter}</span>
      <span>{columnAlive()}</span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default CharactersItem;
