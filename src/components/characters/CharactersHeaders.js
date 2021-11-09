import React, { useState } from 'react';

const CharactersHeaders = () => {
  const [filteringCulture, setFilteringCulture] = useState(false);

  return (
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
  );
};

export default CharactersHeaders;
