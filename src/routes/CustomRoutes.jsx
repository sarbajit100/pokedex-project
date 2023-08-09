import {Routes, Route, HashRouter} from 'react-router-dom'
import Pokedex from '../components/Pokedex/Pokedex'
import PokemonDetails from '../components/PokemonDetails/PokemonDetails'
import PokedexLogo from '../components/PokedexLogo/PokedexLogo'

function CustomRoutes() {
  return (
    <Routes>
        <Route path='/' element={<><PokedexLogo/> <Pokedex /></>}/>
        <Route path='/pokemon/:id' element={<><PokedexLogo/> <PokemonDetails /></>}/>

    </Routes>
  )
}

export default CustomRoutes
