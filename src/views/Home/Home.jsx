import { useState, useEffect, useContext } from 'react'
import {Link} from 'react-router-dom'

// context and custom hook
import InfoContext from '../../context/InfoContext'
import { useFetch } from '../../hooks/useFetch'

// components
import Form from '../../components/Home/Form/Form'
import Loader from '../../components/Custom/Loader/Loader'
import Pkmn from '../../components/Custom/Pkmn/Pkmn'

// styles
import './Home.style.scss'

const Home = () => {
  
  // states  
  const { formKeys, handleFormKeys, info, setInfo } = useContext(InfoContext)

  // data and function from custom fetch
  const { triggerFetch, fetchedData, isloading, error } = useFetch()

    

  
    const randomPkmn = e => {
      e.preventDefault()
      const random = Math.ceil(Math.random() * 898) + 1
      handleFormKeys({
        requested: {
          endpoint: 'pokemon',
          id_OR_name: random
        }
      })
      triggerFetch('pokemon', random)
    }

    useEffect(() => {

      const dataToContext = () => {
        setInfo(fetchedData)
      }
  
      dataToContext()
    }, [fetchedData, setInfo])

    // const completelyRandomSearch = () => {
    //   handleFormKeys({
    //     requested: {
    //       // endpoint: todefine,
    //       // id_OR_name: (Math.ceil(Math.random() * 898) + 1)
    //     }
    //   })
    // triggerFetch(randomEndpoint, random)
    // }
    
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
        <div>
        <h1>hi</h1>

        <Form />

        <button onClick={randomPkmn}>Random Pokemon</button>

        {
        // dataAPI? 
        //   <>
        //     <Pkmn data={dataAPI} />
        //     <div>
        //       {/* <button onClick={() => shiftPkmn("previous")}>PREV</button> */}
        //       {/* <button onClick={() => shiftPkmn("next")}>NEXT</button> */}
        //     </div>
        //     {
        //       dataAPI.forms? 
        //       <Link to="/pokeinfo">
        //       <button>See more abt this poke</button>
        //       </Link> 
        //     : null
        //     }
        //   </>
        // : <Loader /> 
        }

        {
            isloading? <p>Loading</p> : <p>Showing results or nothing</p>
        }

        {
          info? 
            <>
              <p>{info.id}</p>
              <p>{info.name}</p>
            </>
          : <></>
        }

        </div>
  )
}

export default Home
