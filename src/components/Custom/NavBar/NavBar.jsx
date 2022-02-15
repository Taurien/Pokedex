import React from 'react'
import { Link } from 'react-router-dom';

import './NavBar.styles.scss'

const NavBar = () => {
  return (
    <div className='navbar'>
        <h1>Poke-finder</h1>
        <nav>
            <Link to={'/pokedex'}>
                Home
            </Link>
            <Link to={'pokedex/test'}>
                Test2
            </Link>
        </nav>
        
    </div>
  )
}

export default NavBar
