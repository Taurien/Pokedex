import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Test = () => {

  const navigate = useNavigate()

  const triggerHome2 = () => {
    navigate('/poke-finder')
    console.log('soy 2 H')
  }
  
  return (
    <div className='test 123 imalive'>
        <h1>hello world</h1>
        <h2>im working LMAO</h2>


        <div>
        <button onClick={triggerHome2}>{`navigate('/poke-finder')`}</button>
        </div>

        <Link to={'/poke-finder'}>
          <h3>go to home2</h3>
        </Link>
    </div>
  )
}

export default Test