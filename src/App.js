
import { Link } from 'react-router-dom'
import './App.css'

import CustomRoutes from './routes/CustomRoutes'



function App() {
  

  return (
    <div>
      <Link className='pokedex' to='/'>Pokedex</Link>
      <CustomRoutes />
    </div>
  )
}

export default App