import React, { useContext, useState, useEffect } from 'react';
import characterContext from '../../store/characters/characterContext';
import Button from '../ui/Button';

const CharactersPagination = () => {
  const { getCharacters, pagination } = useContext(characterContext);
  const [pageSize, setPageSize] = useState(10);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const localPageSize = +localStorage.getItem('page size');
    setPageSize(localPageSize ? localPageSize : 10);
  }, []);
  useEffect(() => {
    localStorage.setItem('page size', pageSize);
    getCharacters(1, pageSize);
    setShowSettings(false);
    // eslint-disable-next-line
  }, [pageSize]);

  const renderSettings = (
    <div className='pagination-settings'>
      <h4>Characters per page</h4>
      <ul>
        <li>
          <input
            type='radio'
            name='pageSize'
            value='10'
            checked={pageSize === 10}
            onChange={() => setPageSize(10)}
          />
          <label htmlFor='radio10'>10</label>
        </li>
        <li>
          <input
            type='radio'
            name='pageSize'
            value='25'
            checked={pageSize === 25}
            onChange={() => setPageSize(25)}
          />
          <label htmlFor='radio25'>25</label>
        </li>
        <li>
          <input
            type='radio'
            name='pageSize'
            value='50'
            checked={pageSize === 50}
            onChange={() => setPageSize(50)}
          />
          <label htmlFor='radio50'>50</label>
        </li>
      </ul>
    </div>
  );

  return (
    pagination && (
      <div className='characters-pagination'>
        <Button
          disabled={!pagination.prev}
          onClick={() => getCharacters(pagination.first, pageSize)}
          title='Jump to first page'>
          <i className='fas fa-fast-backward'></i>
        </Button>
        <Button
          disabled={!pagination.prev}
          onClick={() => getCharacters(pagination.prev, pageSize)}
          title='Jump to previous page'>
          <i className='fas fa-step-backward'></i>
        </Button>
        <Button
          title='Display options'
          onClick={() => setShowSettings(!showSettings)}>
          <i className='fas fa-bars' style={{ fontSize: '1.8rem' }}></i>
          <span>{pageSize}</span>
        </Button>
        {showSettings && renderSettings}
        <Button
          disabled={!pagination.next}
          onClick={() => getCharacters(pagination.next, pageSize)}
          title='Jump to next page'>
          <i className='fas fa-step-forward'></i>
        </Button>
        <Button
          disabled={!pagination.next}
          onClick={() => getCharacters(pagination.last, pageSize)}
          title='Jump to last page'>
          <i className='fas fa-fast-forward'></i>
        </Button>
      </div>
    )
  );
};
export default CharactersPagination;
