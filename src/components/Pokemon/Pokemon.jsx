import React from 'react'
import { Link } from 'react-router-dom'
import './pokemon.css'
function Pokemon({name, image, id}) {
  return (
    <Link className='pokemon-link' to={`/pokemon/${id}`}>
      <div className='pokemon-wraper'>
        <div className='pokemon-name'>{name}</div>
        <div className='pokemon-image'><img src={image} /></div>
      </div>
    </Link>
    
  )
}

export default Pokemon
