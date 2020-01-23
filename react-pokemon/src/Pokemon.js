import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';

const Pokemon = ({match}) => {

  console.log('match:', match);
  console.log('match.params.id:', match.params.id);
  const [name, setName] = useState('');
  const [picture, setPicture] = useState('');

  useEffect(() => {
    async function fetchData() {
        const pokemon =  await axios ({
          method: 'GET',
          url: 'https://pokeapi.co/api/v2/pokemon/2',
        });
        console.log('33pokemon', pokemon)
        console.log('33pokemon.data', pokemon.data)
        console.log('33pokemon.data.name', pokemon.data.name)
        console.log('33pokemon.data.sprites', pokemon.data.sprites)
        console.log('33pokemon.data.sprites.front_default', pokemon.data.sprites.front_default)
        setName(pokemon.data.name);
        setPicture(pokemon.data.sprites.front_default);

    }

    fetchData();
  }, [])

  return (
    <div className="pokemonID">
        {/* {match.params.id} */}
        {name}
        {picture}
    </div>
  );
}

export default Pokemon;
