import React, { useContext, useState } from 'react';
import characterContext from '../../store/characters/characterContext';

const CharactersHeaders = () => {
  const { setGender, setCulture } = useContext(characterContext);
  const [filteringCulture, setFilteringCulture] = useState(null);

  const genderSelectHandler = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue === 'Any') {
      setGender(null);
    } else {
      setGender(selectedValue);
    }
  };
  const cultureTypeHandler = (event) => {
    const enteredValue = event.target.value;
    if (enteredValue) {
      setFilteringCulture(enteredValue);
      setCulture(enteredValue);
    } else {
      setFilteringCulture(null);
      setCulture(null);
    }
  };
  const cultureFilterClearHandler = () => {
    setFilteringCulture(null);
    setCulture(null);
  };

  return (
    <header>
      <span>Character</span>
      <span>Alive</span>
      <span>
        Gender
        <div className='filter-gender'>
          <select defaultValue='Any' onChange={genderSelectHandler}>
            <option value='Any'>Any</option>
            <option value='Female'>Female</option>
            <option value='Male'>Male</option>
          </select>
        </div>
      </span>
      <span>
        Culture
        <div className='filter-culture'>
          <input
            id='culture'
            type='text'
            placeholder='. . .'
            onChange={cultureTypeHandler}
            value={filteringCulture ? filteringCulture : ''}
          />
          <label htmlFor='culture'>
            <i
              className={filteringCulture ? 'fas fa-times' : 'fas fa-search'}
              onClick={filteringCulture ? cultureFilterClearHandler : null}></i>
          </label>
        </div>
      </span>
      <span>Allegiances</span>
    </header>
  );
};

export default CharactersHeaders;
