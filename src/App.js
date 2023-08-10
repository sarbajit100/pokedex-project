import { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

import CustomRoutes from './routes/CustomRoutes'
import Pokedex from './components/Pokedex/Pokedex'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Link className='pokedex' to='/'>Pokedex</Link>
      <CustomRoutes />
      <Pokedex />
      
    </div>
  )
}

export default App