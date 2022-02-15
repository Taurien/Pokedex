import { useContext, useState } from 'react'
import { useFormContext } from "react-hook-form";

// context and custom hook
import InfoContext from '../../../context/InfoContext'

// custom component that renders as many options as it receives and defines the endpoint depending on the user's choice
import Options from './Options'

import './Form.style.scss'
import Select from './Select';


const Form = ({ triggerFetch }) => {

    const [ pastValue, setPastValue ] = useState('')

    // data and functions from contexts
    const { formKeys, setRequested } = useContext(InfoContext)
    const { watch, register, unregister, handleSubmit, formState: { errors } } = useFormContext();

    const [ selected, setSelected ] = useState(false)

    // onSubmit form function
    const onSubmit = data => {
        // console.log(data)
        // data is an object ... extract the keys 
        const keys = Object.keys(data)
        const key1 = keys[0]
        const key2 = keys[1]

        setRequested({
            endpoint: data[key2],
            id_OR_name: data[key1],
        })
        triggerFetch(data[key2], data[key1])
    }

    const cleanForm = (e) => {

        const key = Object.keys(formKeys)[0]

        if (pastValue && key !== pastValue) {
            unregister(pastValue, key)
            setPastValue(key)
        }
        
        setPastValue(key)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} onChange={cleanForm}>

            <p>what are u looking for</p>

            <div className='all_options' onChange={() => setSelected(false)}>
                <Options
                    labelTxt={'Berry'}
                    svg={'🍒'}
                    options={'berriesOptions'}
                />
                
                <Options
                    labelTxt={'Contest'}
                    svg={'✨'}
                    options={'contestsOptions'}
                />                
                 
                <Options
                    labelTxt={'Encounter'}
                    svg={'🏃‍♂️'}
                    options={'encountersOptions'}
                />
                
                <Options
                    labelTxt={'Evolutions'}
                    svg={'🧬'}
                    options={'evolutionsOptions'}
                />
                
                <Options
                    labelTxt={'Games'}
                    svg={'🎮'}
                    options={'gamesOptions'}
                />
                
                <Options
                    labelTxt={'Item'}
                    svg={'🎒'}
                    options={'itemsOptions'}
                />
                
                <Options
                    labelTxt={'Location'}
                    svg={'🌎'}
                    options={'locationsOptions'}
                />
                
                <Options
                    labelTxt={'Machine'}
                    svg={'💿'}
                    options={'machinesOptions'}
                />
                
                <Options
                    labelTxt={'Move'}
                    svg={'💥'}
                    options={'movesOptions'}
                />
                
                <Options
                    labelTxt={'Pokemon'}
                    svg={'🐾'}
                    options={'pokemonsOptions'}
                />

            </div>

            <Select
                setSelected={setSelected}
                values={
                    {
                        berriesOptions: {
                        'berry': 'all the berries',
                        'berry-firmness': 'by its firmness',
                        'berry-flavor': 'by its flavor'
                    },
                    contestsOptions: {
                        'contest-type': 'by its type',
                        'contest-effect': 'by its effect', // ID
                        'super-contest-effect': 'by its contest effect', // ID}
                    },
                    encountersOptions: {
                        'encounter-method': 'by its method', //VERIFY
                        'encounter-condition': 'by its condition',
                        'encounter-condition-value': 'by its condition value'
                    },
                    evolutionsOptions: {
                        'evolution-chain': 'by its evol-chain', //ID
                        'evolution-trigger': 'by triggers'
                    },
                    gamesOptions: {
                        'generation': 'by generation',
                        'pokedex': 'by dex',
                        'version': 'by version',
                        'version-group': 'by version group'
                    },
                    itemsOptions: {
                        'item': 'all the items',
                        'item-attribute': 'by its attribute',
                        'item-category': 'by its category',
                        'item-fling-effect': 'by its fling-effect',
                        'item-pocket': 'by pocket'
                    },
                    locationsOptions: {
                        'location': 'all locations',
                        'location-area': 'by location area',
                        'pal-park-area': 'by pal park area'
                    },
                    machinesOptions: {
                        'machine': 'machine' //ID
                    },
                    movesOptions: {
                        'move': 'all',
                        'move-ailment': 'by ailment',
                        'move-battle-style': 'by battlestyle',
                        'move-category': 'by category',
                        'move-damage-class': 'by DMG class',
                        'move-learn-method': 'by learn method',
                        'move-target': 'by target'
                    },
                    pokemonsOptions: {
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
                        'type': 'by type'
                    }
                    }
                }
            />

            {
                selected &&
                <div className='search_bar'>
                    {errors['id-OR-name'] && <span>LOLx</span>}
                    <input placeholder='type its id or name' {...register("id-OR-name", { required: true })} />
                    <input type="submit" />
                    {/* border radius back to normal */}
                </div>
            }


        </form>
            
    )
}

export default Form
