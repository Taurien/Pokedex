import { useState, createContext } from 'react'

const InfoContext = createContext()

const InfoContextProvider = ({ children }) => {

  const [ formKeys, setFormKeys ] = useState({
    imAlive: 1,
    berriesOptions: false,
    contestsOptions: false,
    encountersOptions: false,
    evolutionOptions: false,
    gamesOptions: false,
    itemsOptions: false,
    locationOptions: false,
    machinesOptions: false,
    movesOptions: false,
    pokemonsOptions: false,
    requested: {
      // endpoint: '',
      // id_OR_name: null,
    }
  })

  // to save fetched data from api
  const [ info, setInfo ] = useState({})

  //
  const handleFormKeys = (el) => {
    //
    const key = Object.keys(el)
    //
    setFormKeys({...formKeys, [key]: el[key] })
  }

  const data = {
    formKeys,
    handleFormKeys,
    info,
    setInfo
  }

  return (
    <InfoContext.Provider value={ data }>
    {children}
    </InfoContext.Provider>
  )
}

export { InfoContextProvider }
export default InfoContext
