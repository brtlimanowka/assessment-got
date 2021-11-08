import React, { useContext, useEffect } from 'react';
import characterContext from '../../store/characters/characterContext';
import houseContext from '../../store/houses/houseContext';

const Characters = () => {
  const characterCtx = useContext(characterContext);
  const houseCtx = useContext(houseContext);
  useEffect(() => {
    // characterCtx.getCharacters();
    // houseCtx.getHouse(1);
    // eslint-disable-next-line
  }, []);
  return <div></div>;
};

export default Characters;
