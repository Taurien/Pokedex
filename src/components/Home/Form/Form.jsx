import { useContext, useState } from 'react'
import { useFormContext } from "react-hook-form";

// context and custom hook
import InfoContext from '../../../context/InfoContext'
import { useFetch } from '../../../hooks/useFetch';

// custom component that renders as many options as it receives and defines the endpoint depending on the user's choice
import Options from './Options'

import testImg from '../../../assets/ansvg.svg'

import './Form.style.scss'


const Form = ({ triggerFetch }) => {

    const [ pastValue, setPastValue ] = useState('')

    // data and functions from contexts
    const { formKeys, handleFormKeys, setRequested, info, setInfo } = useContext(InfoContext)
    const { watch, register, unregister, reset, resetField, handleSubmit, formState: { errors } } = useFormContext();

    // onSubmit form function
    const onSubmit = data => {
        // console.log('si llego')
        // console.log(data)
        // data is an object ... extract the keys 
        const keys = Object.keys(data)
        const key1 = keys[0]
        const key2 = keys[1]

        // //
        setRequested({
            endpoint: data[key2],
            id_OR_name: data[key1],
        })
        triggerFetch(data[key2], data[key1])
    }

    const cleanForm = (e) => {
        // console.log(e.target.value)

        //
        if (pastValue !== e.target.value) {
            unregister(pastValue.toLowerCase())
            setPastValue(e.target.value)
        }
        
        //
        setPastValue(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} onChange={cleanForm}>

            <div className='all_options'>
                <Options
                    labelTxt={'Berry'}
                    svg={'🍒'}
                    options={'berriesOptions'}
                    regi={'berry'}
                    values={
                    {'berry': 'all the berries',
                    'berry-firmness': 'by its firmness',
                    'berry-flavor': 'by its flavor'}
                    }
                />
                
                <Options
                    labelTxt={'Contest'}
                    svg={'✨'}
                    options={'contestsOptions'}
                    regi={'berry'}
                    values={
                    {'contest-type': 'by its type',
                    'contest-effect': 'by its effect', // ID
                    'super-contest-effect': 'by its contest effect', // ID}
                    }
                    }
                />                
                 
                <Options
                    labelTxt={'Encounter'}
                    svg={'🏃‍♂️'}
                    options={'encountersOptions'}
                    regi={'berry'}
                    values={
                    {'encounter-method': 'by its method', //VERIFY
                    'encounter-condition': 'by its condition',
                    'encounter-condition-value': 'by its condition value',}
                    }
                />
                
                <Options
                    labelTxt={'Evolutions'}
                    svg={'🧬'}
                    options={'evolutionsOptions'}
                    regi={'berry'}
                    values={
                    {'evolution-chain': 'by its evol-chain', //ID
                    'evolution-trigger': 'by triggers',}
                    }
                />
                
                <Options
                    labelTxt={'Games'}
                    svg={'🎮'}
                    options={'gamesOptions'}
                    regi={'berry'}
                    values={
                    {'generation': 'by generation',
                    'pokedex': 'by dex',
                    'version': 'by version',
                    'version-group': 'by version group',}
                    }
                />
                
                <Options
                    labelTxt={'Item'}
                    svg={'🎒'}
                    options={'itemsOptions'}
                    regi={'berry'}
                    values={
                    {'item': 'all the items',
                    'item-attribute': 'by its attribute',
                    'item-category': 'by its category',
                    'item-fling-effect': 'by its fling-effect',
                    'item-pocket': 'by pocket',}
                    }
                />
                
                <Options
                    labelTxt={'Location'}
                    svg={'🌎'}
                    options={'locationsOptions'}
                    regi={'berry'}
                    values={
                    {'location': 'all locations',
                    'location-area': 'by location area',
                    'pal-park-area': 'by pal park area',}
                    }
                />
                
                <Options
                    labelTxt={'Machine'}
                    svg={'💿'}
                    options={'machinesOptions'}
                    regi={'berry'}
                    values={
                    {'machine': 'machine', //ID
                    }
                    }
                />
                
                <Options
                    labelTxt={'Move'}
                    svg={'💥'}
                    options={'movesOptions'}
                    regi={'berry'}
                    values={
                    {'move': 'all',
                    'move-ailment': 'by ailment',
                    'move-battle-style': 'by battlestyle',
                    'move-category': 'by category',
                    'move-damage-class': 'by DMG class',
                    'move-learn-method': 'by learn method',
                    'move-target': 'by target',}
                    }
                />
                
                <Options
                    labelTxt={'Pokemon'}
                    svg={'🐾'}
                    options={'pokemonsOptions'}
                    regi={'berry'}
                    values={
                    {'ability': 'by ability',
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
                    'type': 'by type',}
                    }
                />

            </div>


                {errors['id-OR-name'] && <span>LOL</span>}
            <div className='search_bar'>
                <input placeholder='type its id or name' {...register("id-OR-name", { required: true })} />
                <input type="submit" />
            </div>

        </form>
            
    )
}

export default Form
