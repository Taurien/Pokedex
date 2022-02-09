import { useState, useEffect, useContext } from 'react'
import {Link} from 'react-router-dom'

// context and custom hook
import InfoContext from '../../context/InfoContext'
import { useFetch } from '../../hooks/useFetch';

// components
import Form from '../../components/Home/Form/Form'
import Loader from '../../components/Custom/Loader/Loader'
import Pkmn from '../../components/Custom/Pkmn/Pkmn'

// styles
import './Home.style.scss'

const Home = () => {
  
  // states  
  const { endpoints, formKeys, handleFormKeys, info, setInfo } = useContext(InfoContext)

  // data and function from custom fetch
  const { triggerFetch, fetchedData, isloading, error } = useFetch()

    

  
    const randomPkmn = e => {
      e.preventDefault()
      const random = Math.ceil(Math.random() * 898) + 1
      // handleFormKeys({
      //   requested: {
      //     endpoint: 'pokemon',
      //     id_OR_name: random
      //   }
      // })
      triggerFetch('pokemon', random)
    }

    const randomSearch = e => {
      // e.preventDefault()
      // const randomEND = Math.ceil(Math.random() * 46) + 1
      // const random = Math.ceil(Math.random() * 898) + 1
      // handleFormKeys({
      //   requested: {
      //     //  TODO endpoint: 'pokemon',
      //     id_OR_name: random
      //   }
      // })
      // triggerFetch(endpoints[randomEND], random)
    }

    useEffect(() => {

      const dataToContext = () => {
        setInfo(fetchedData)
        // console.log(formKeys.requested.endpoint)
      }
  
      dataToContext()
    }, [fetchedData, setInfo])

    // const shiftPkmn = (value) => {
    //   if (value === 'next') {
    //     setFormValues({
    //       ...formValues,
    //       id_OR_name: formValues.id_OR_name === 898? 1 : formValues.id_OR_name + 1
    //     })
    // triggerFetch('pokemon', next)
    //   }
      
    //   if (value === 'previous') {
    //     setFormValues({
    //       ...formValues,
    //       id_OR_name: formValues.id_OR_name === 1? 898 : formValues.id_OR_name - 1
    //     })
    //   }
    // }

  return (

    <div className='home_view'>
      <h1>PokeSearch</h1>

      <Form triggerFetch={triggerFetch} />

      <div className='random_btns'>
        <button onClick={randomPkmn}>Random Pokemon</button>
        <button onClick={randomSearch}>Random Search</button>
      </div>


      {/* <button onClick={() => shiftPkmn("previous")}>PREV</button> */}
      {/* <button onClick={() => shiftPkmn("next")}>NEXT</button> */}

      { isloading && <Loader/> }

      {
        info? 
          <div className='prev_result'>
            <p>{info.id}</p>
            <p>{info.name}</p>
            <Link to={`pokeinfo/${info.name}`}>
              <button>See more abt this</button>
            </Link> 
          </div>
        : <p>what are u looking for</p>
      }

      <p>
        Check out <a href="https://bulbapedia.bulbagarden.net/wiki/Main_Page">Bulbapedia</a> for greater details.
      </p>

    </div>
  )
}

export default Home
