import React from 'react'

const Pkmn = ( {data} ) => {

    const {
        abilities,
        base_experience,
        forms,
        game_indices,
        height,
        held_items,
        id,
        is_default,
        location_area_encounters,
        moves,
        name,
        order,
        past_types,
        species,
        sprites,
        stats,
        types,
        weight,
    } = data



    // console.log(data)
    return (
        <div>
            <p>{id}</p>
            <p>{name}</p>
        </div>
    )
}

export default Pkmn
