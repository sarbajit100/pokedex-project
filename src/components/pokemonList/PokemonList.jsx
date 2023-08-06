import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pokemon from '../Pokemon/Pokemon';
import './PokemonList.css';



function PokemonList() {

    const [pokemonList, setPokemonList] = useState([]);
    const [isLoadind, setIsLoading] = useState(true);

    const [pokedexUrl, setPokedexUrl] = useState('https://pokeapi.co/api/v2/pokemon')
    const [nextUrl, setNextUrl] = useState('')
    const [prevUrl, setPrevUrl] = useState('')
    async function downloadPokemon() {
        setIsLoading(true)
        const response = await axios.get(pokedexUrl);
        const pokemonResult = response.data.results;
        console.log(response.data);
        setNextUrl(response.data.next);
        setPrevUrl(response.data.previous);

        const pokemonResultPromise = pokemonResult.map((pokemon) => axios.get(pokemon.url));
        const pokemonData = await axios.all(pokemonResultPromise)
        console.log(pokemonData);
        const res = pokemonData.map((pokeData)=>{
            const pokemon = pokeData.data;
            return {
                id: pokemon.id,
                name: pokemon.name, 
                image: pokemon.sprites.other.dream_world.front_default, 
                types: pokemon.types }
            
        })
        setPokemonList(res);
        setIsLoading(false);
    }

    useEffect(() =>{
        downloadPokemon();
    }, [pokedexUrl]);

  return (
    <div>
     <dir className='pokemon-list-head'>List of pokemon</dir>
     <div className='btn'>
        <button disabled={prevUrl == null} onClick={()=> setPokedexUrl(prevUrl)}>Prev</button>
        <button disabled={nextUrl == null} onClick={()=> setPokedexUrl(nextUrl)}>Next</button>
     </div>
     <div className='pokemon-list'>
     {(isLoadind) ? 'loadong...' : 
        pokemonList.map((p)=> <Pokemon name={p.name} image={p.image} key={p.id} id={p.id} /> )
     }
     </div>
     <div className='btn'>
        <button disabled={prevUrl == null} onClick={()=> setPokedexUrl(prevUrl)}>Prev</button>
        <button disabled={nextUrl == null} onClick={()=> setPokedexUrl(nextUrl)}>Next</button>
     </div>
    </div>
  )
}

export default PokemonList
