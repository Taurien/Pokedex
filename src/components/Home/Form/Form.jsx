import { useContext, useEffect } from 'react'
import { useFormContext } from "react-hook-form";

// context and custom hook
import InfoContext from '../../../context/InfoContext'
import { useFetch } from '../../../hooks/useFetch';

// custom function that renders as many options as it receives and defines the endpoint depending on the user's choice
import Options from './Options'

import './Form.style.scss'


const Form = () => {

    // data and functions from contexts
    const { formKeys, handleFormKeys, info, setInfo } = useContext(InfoContext)
    const { register, unregister, handleSubmit, formState: { errors } } = useFormContext();

    // data and function from custom fetch
    const { triggerFetch, fetchedData, isloading, error } = useFetch()

    // onSubmit form function
    const onSubmit = data => {
        // data is an object ... extract the keys 
        const keys = Object.keys(data)
        const key1 = keys[0]
        const key2 = keys[1]
        
        //
        handleFormKeys({
            requested: {
                endpoint: data[key2],
                id_OR_name: data[key1],
            }
        })
        triggerFetch(data[key2], data[key1])
    }

    useEffect(() => {

      const dataToContext = () => {
        setInfo(fetchedData)
      }
  
      dataToContext()
    }, [fetchedData, setInfo])

    return (
        <div>
            
            <form onSubmit={handleSubmit(onSubmit)}>

                {/* <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} /> */}

                {/* a comment */}
                {
                    Options(
                    'Berry',
                    'berriesOptions',
                    'berry',
                    {
                        'berry': 'all the berries',
                        'berry-firmness': 'by its firmness',
                        'berry-flavor': 'by its flavor',
                    }
                    )
                }
                {/* a comment */}
                {
                    Options(
                    'Contest',
                    'contestsOptions',
                    'berry',
                    {
                        'contest-type': 'by its type',
                        'contest-effect': 'by its effect', // ID
                        'super-contest-effect': 'by its contest effect', // ID
                    }
                    )
                }
                {/* a comment */}
                {
                    Options(
                    'Encounter',
                    'encountersOptions',
                    'berry',
                    {
                        'encounter-method': 'by its method', //VERIFY
                        'encounter-condition': 'by its condition',
                        'encounter-condition-value': 'by its condition value',
                    }
                    )
                }
                {/* a comment */}
                {
                    Options(
                    'Evolutions',
                    'evolutionsOptions',
                    'berry',
                    {
                        'evolution-chain': 'by its evol-chain', //ID
                        'evolution-trigger': 'by triggers',
                    }
                    )
                }
                {/* a comment */}
                {
                    Options(
                    'Games',
                    'gamesOptions',
                    'berry',
                    {
                        'generation': 'by generation',
                        'pokedex': 'by dex',
                        'version': 'by version',
                        'version-group': 'by version group',
                    }
                    )
                }
                {/* a comment */}
                {
                    Options(
                    'Item',
                    'itemsOptions',
                    'berry',
                    {
                        'item': 'all the items',
                        'item-attribute': 'by its attribute',
                        'item-category': 'by its category',
                        'item-fling-effect': 'by its fling-effect',
                        'item-pocket': 'by pocket',
                    }
                    )
                }
                {/* a comment */}
                {
                    Options(
                    'Location',
                    'locationsOptions',
                    'berry',
                    {
                        'location': 'all locations',
                        'location-area': 'by location area',
                        'pal-park-area': 'by pal park area',
                    }
                    )
                }
                {/* a comment */}
                {
                    Options(
                    'Machine',
                    'machinesOptions',
                    'berry',
                    {
                        'machine': 'machine', //ID
                    }
                    )
                }
                {/* a comment */}
                {
                    Options(
                    'Move',
                    'movesOptions',
                    'berry',
                    {
                        'move': 'all',
                        'move-ailment': 'by ailment',
                        'move-battle-style': 'by battlestyle',
                        'move-category': 'by category',
                        'move-damage-class': 'by DMG class',
                        'move-learn-method': 'by learn method',
                        'move-target': 'by target',
                    }
                    )
                }
                {/* a comment */}
                {
                    Options(
                    'Pokemon',
                    'pokemonsOptions',
                    'berry',
                    {
                        'ability': 'by ability',
                        'characteristic': 'by characteristic', //ID
                        'egg-group': 'by egg-group',
                        'gender': 'by gender',
                        'growth-rate': 'by growth rate',
                        'nature': 'by nature',
                        'pokeathlon-stat': 'by pokeathlon-stat',
                        'pokemon': 'by PKMN',
                        'pokemon/{id or name}/encounters': 'by location area', // CHECK ENDPOINT
                        'pokemon-color': 'by pkmn color',
                        'pokemon-form': 'by pkmn form',
                        'pokemon-habitat': 'by pkmn habitat',
                        'pokemon-shape': 'by pkmn shape',
                        'pokemon-species': 'by pkmn species',
                        'stat': 'by stat',
                        'type': 'by type',

                    }
                    )
                }

                {errors.IDORNAME && <span>LOL</span>}
                <input placeholder='type its id or name' {...register("id-OR-name", { required: true })} />
                <input type="submit" />
            </form>

            
        </div>
    )
}

export default Form
