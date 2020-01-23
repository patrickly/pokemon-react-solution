import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
        console.log('pokemon', pokemon)
        console.log('pokemon.data.results', pokemon.data.results)
/* 
      const pokemon = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=9')
      const pokeJson =  await pokemon.json();
      console.log('pokemon' ,pokemon)
      console.log('pokeJson' ,pokeJson.results)
      setPokemonList(pokeJson.results);
 */

    }

    fetchData();
  }, [])

  return (
    <div className="App">
      <div className="pokemon-container">
        {pokemonList && pokemonList.map((pokemon, index) => {
          console.log('pokemon2 ', pokemon)
          let stringLink = `/pokemon/${index + 1}`
          return (
            <>
              <Link to={stringLink}>
                <div className="pokemon">{pokemon.name}</div>
              </Link>
            </>
          )
        })}
      </div>
    </div>
  );
}

export default App;
