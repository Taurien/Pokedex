import { useState, createContext } from 'react'

const InfoContext = createContext()

const InfoContextProvider = ({ children }) => {

  const endpoints = [
    'berry',
    'berry-firmness',
    'berry-flavor',
    'contest-type',
    'contest-effect',
    'super-contest-effect',
    'encounter-method',
    'encounter-condition',
    'encounter-condition-value',
    'evolution-chain',
    'evolution-trigger',
    'generation',
    'pokedex',
    'version',
    'version-group',
    'item',
    'item-attribute',
    'item-category',
    'item-fling-effect',
    'item-pocket',
    'location',
    'location-area',
    'pal-park-area',
    'machine',
    'move',
    'move-ailment',
    'move-battle-style',
    'move-category',
    'move-damage-class',
    'move-learn-method',
    'move-target',
    'ability',
    'characteristic',
    'egg-group',
    'gender',
    'growth-rate',
    'nature',
    'pokeathlon-stat',
    'pokemon',
    'pokemon/{id or name}/encounters',
    'pokemon-color',
    'pokemon-form',
    'pokemon-habitat',
    'pokemon-shape',
    'pokemon-species',
    'stat',
    'type'
  ]

  const [ formKeys, setFormKeys ] = useState({
    // berriesOptions: false,
    // contestsOptions: false,
    // encountersOptions: false,
    // evolutionOptions: false,
    // gamesOptions: false,
    // itemsOptions: false,
    // locationOptions: false,
    // machinesOptions: false,
    // movesOptions: false,
    // pokemonsOptions: false,
  })

  // to save fetched data from api
  const [ info, setInfo ] = useState({})

  //
  const handleFormKeys = (el) => {

    const key = Object.keys(el)

    setFormKeys({ [key]: el[key] })
  }

  const data = {
    endpoints,
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

