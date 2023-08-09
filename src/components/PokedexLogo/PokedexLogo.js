import { Link } from "react-router-dom"
import './PokedexLogo.css'
const PokedexLogo = ()=>{
    return (
        <>
        <Link className="pokedex" to='/'>Pokedex</Link>
        </>
    )
}

export default PokedexLogo;