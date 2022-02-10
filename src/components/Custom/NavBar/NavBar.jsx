import React from 'react'
import { Link } from 'react-router-dom';

import './NavBar.styles.scss'

const NavBar = () => {
  return (
    <div className='navbar'>
        <h1>im a navbar</h1>
        <div>
            <Link to={'/pokedex'}>
                Home
            </Link>
            <Link to={'pokedex/test'}>
                Test2
            </Link>
        </div>
        
    </div>
  )
}

export default NavBar
