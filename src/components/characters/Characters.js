import React, { useContext, useEffect } from 'react';
import characterContext from '../../store/characters/characterContext';

const Characters = () => {
  const characterCtx = useContext(characterContext);
  useEffect(() => {
    characterCtx.getCharacters();
    // eslint-disable-next-line
  }, []);
  return <div></div>;
};

export default Characters;
