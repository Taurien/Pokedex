import { useState, useEffect, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// context and custom hook
import InfoContext from '../../context/InfoContext'
import { useFetch } from '../../hooks/useFetch';

// components
import Form from '../../components/Home/Form/Form'
import Loader from '../../components/Custom/Loader/Loader'
import Preview from '../../components/Home/Preview/Preview';
import Pkmn from '../../components/Custom/Pkmn/Pkmn'


const Home = () => {

  const navigate = useNavigate()
  
  // states  
  const { endpoints, formKeys, handleFormKeys, setRequested, info, setInfo } = useContext(InfoContext)

  // data and function from custom fetch
  const { triggerFetch, fetchedData, isloading, error } = useFetch()

  const [ random, setRandom ] = useState(true)
  const [ preview, setPreview] = useState(false)

  
  const randomPkmn = e => {
    e.preventDefault()
    const random = Math.ceil(Math.random() * 898) + 1
    setRequested({
        endpoint: 'pokemon',
        id_OR_name: random
    })
    triggerFetch('pokemon', random)
  }

  useEffect(() => {
    const dataToContext = () => {
      setInfo(fetchedData)
      setPreview(true)
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

  const triggerTest1 = () => {
    navigate('test')
    console.log('soy 1 T')
  }

  return (

    <div className='o-view o-view-home'>
      <h1>PokeSearch🔍</h1>

      <Form setRandom={setRandom} triggerFetch={triggerFetch} />

      {
        random &&
          <>
            <button className='c-btn' onClick={randomPkmn}>Random Pokemon</button>
          </>
      }


      {/* <button onClick={() => shiftPkmn("previous")}>PREV</button> */}
      {/* <button onClick={() => shiftPkmn("next")}>NEXT</button> */}

      { isloading &&
          <div className='c-preview'>
            <Loader/>
          </div>
      }

      {
        info && preview &&
        <div className='c-preview' onClick={() => setPreview(!preview)}>
          <Preview
            data={info}
          />
        </div>
      }

      {/* <span className='bulbapedia'>
        Check out <a href="https://bulbapedia.bulbagarden.net/wiki/Main_Page">Bulbapedia</a> for greater details.
      </span> */}

      {/* <div>
        <button onClick={triggerTest1}>{`navigate('test')`}</button>
        <Link to={'test'}>
          <h3>go to test1</h3>
        </Link>
        <Link to={'/poke-finder/test'}>
          <h3>go to test4</h3>
        </Link>
      </div> */}

    </div>
  )
}

export default Home
