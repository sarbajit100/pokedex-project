import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './PokemonDetails.css';

function PokemonDetails() {
    const {id} = useParams();
    const [pokemon, setPokemon] = useState({});
    async function downloadPokemon() {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        setPokemon({
            name: response.data.name,
            image: response.data.sprites.other.dream_world.front_default,
            weight: response.data.weight,
            height: response.data.height,
            types: response.data.types.map((t)=>t.type.name)
        })
    }

    useEffect(()=>{
        downloadPokemon();
    }, []);
  return (
    <div className='pokemon-details-wraper'>
      <div className='pokemon-detail-name'>{pokemon.name}</div>
      <img className='pokemon-detail-image' src={pokemon.image} />
      <div className='pokemon-detail-weight'>weight: {pokemon.weight}</div>
      <div className='pokemon-detail-height'>height: {pokemon.height}</div>
      <div className='pokemon-detail-type'>
      types: <span>{pokemon.types && pokemon.types.map((t)=> <div key={t}>{t}</div>)}</span>
      </div>
      
    </div>
  );
}

export default PokemonDetails
