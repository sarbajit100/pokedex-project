import { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

import CustomRoutes from './routes/CustomRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 className='pokedex'>
        Pokedex
      </h1>
      <CustomRoutes />
    </div>
  )
}

export default App