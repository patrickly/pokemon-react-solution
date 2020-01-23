import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';

const App = () => {

  const [pokemonList, setPokemonList] = useState(null);

  useEffect(() => {
    async function fetchData() {
        const pokemon =  await axios ({
          method: 'GET',
          url: 'https://pokeapi.co/api/v2/pokemon/?limit=9',
        });
      setPokemonList(pokemon.data.results);
      console.log('pokemon' ,pokemon.data)
    }

    fetchData();
  }, [])

  return (
    <div className="App">
      {pokemonList && pokemonList.length}
      df
    </div>
  );
}

export default App;
