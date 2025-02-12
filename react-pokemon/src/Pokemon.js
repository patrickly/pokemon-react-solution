import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './App.css';

const Pokemon = ({ match }) => {

    console.log('match:', match);
    console.log('match.params.id:', match.params.id);
    // hint:
    // combine: https://pokeapi.co/api/v2/pokemon/ + match.params.id

    const [name, setName] = useState('');
    const [picture, setPicture] = useState('');

    useEffect(() => {
        async function fetchData() {
            const pokemon = await axios({
                method: 'GET',
                url: `https://pokeapi.co/api/v2/pokemon/${match.params.id}`,
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
        <>
        <div className="pokemon-id-container">
            <div className="pokemonID">
                {/* {match.params.id} */}
                <div className="name">
                    {name}
                </div>
                <img className="pokemonIDimage" src={picture} alt={name} />
            </div>
            <div className="goBackLink">
                <Link to="/" className="nav-link">
                    home
                 </Link>
            </div>
        </div>
        </>
    );
}

export default Pokemon;
