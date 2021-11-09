import React, { useContext, useState } from 'react';
import characterContext from '../../store/characters/characterContext';

const CharactersHeaders = () => {
  const { filterByGender, filterByCulture, clearFilters } =
    useContext(characterContext);
  const [filteringGender, setFilteringGender] = useState(null);
  const [filteringCulture, setFilteringCulture] = useState(null);

  const genderSelectHandler = (event) => {
    const selectedValue = event.target.value;
    clearFilters();
    if (selectedValue === 'Any') {
      setFilteringGender(null);
    } else {
      filterByGender(selectedValue);
      setFilteringGender(selectedValue);
    }
    if (filteringCulture) {
      filterByCulture(filteringCulture);
    }
  };
  const cultureTypeHandler = (event) => {
    const enteredValue = event.target.value;
    if (enteredValue) {
      filterByCulture(enteredValue);
      setFilteringCulture(enteredValue);
    } else {
      clearFilters();
      setFilteringCulture(null);
    }
    if (filteringGender) {
      filterByGender(filteringGender);
    }
  };
  const cultureFilterClearHandler = () => {
    clearFilters();
    setFilteringCulture(null);
    if (filteringGender) {
      filterByGender(filteringGender);
    }
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
