import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';

const Pokemon = ({match}) => {

  console.log('match:', match);
  console.log('match.params.id:', match.params.id);
  const [name, setName] = useState('');

  useEffect(() => {

}, [])

  return (
    <div className="pokemonID">
        {match.params.id}
    </div>
  );
}

export default Pokemon;
