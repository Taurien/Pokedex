import React from 'react'

const Item = ({ data }) => {

    // console.log(data)
    
    const {
    attributes,
    baby_trigger_for,
    category,
    cost,
    effect_entries,
    flavor_text_entries,
    fling_effect,
    fling_power,
    game_indices,
    held_by_pokemon,
    id,
    machines,
    name,
    names,
    sprites,
    } = data

    const displayAttributes = () => {
        return attributes.map(el => 
            <p key={el.name}>{el.name}</p>
        )
    }

    const displayEffects = () => {
        return effect_entries.map((el, index) => 
            <p key={index}>{el.effect}</p>
        )
    }

    return (
        <div className='o-unit c-item'>
            <div className='o-unit__uid'>
                <h1>{name}</h1>
                <h2># {id}</h2>
            </div>
            <img src={sprites.default} alt={name} />
            <p>cost: {cost}</p>
            <div className='c-item__attr'>
                { displayAttributes() }
            </div>
            <div className='c-item__effc'>
                { displayEffects() }
            </div>
        </div>
    )
}

export default Item














