import React from 'react'
import { Link } from 'react-router-dom'

import './Pkmn.styles.scss'

const Pkmn = ({ data }) => {

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
    weight
    } = data

    const img = sprites.other['official-artwork'].front_default

    const displayAbilities = () => {
        return abilities.map(el => 
            <p key={el.ability.name}>{el.ability.name}</p>
        )
    }

    const displayStats = () => {
        return stats.map(el => { 
            const percent = (el.base_stat * 100) / 255

            return (
            <div className='pk_stats' key={el.stat.name}>
                <span>
                    <p>{el.stat.name}</p>
                    <p>{el.base_stat}</p>
                </span>
                <div className='bar'>
                    <div className='value_bar' style={{ width: `${percent}%` }}></div>
                </div>
            </div>
            )
        })
    }

    const gameIndexs = () => (
        game_indices.map((el, index) =>
            <p key={index}>#{el.game_index} in {el.version.name}</p>
        )
    )

    const displayTypes = () => (
        types.map(el => 
            <p key={el.type.name}>{el.type.name}</p>
        )
    )

    return (
        <div className='pkmn'>

            <div className='pk_uid'>
                <h1>{name}</h1>
                <h2># {id}</h2>
            </div>

            <div className='pk_img'>
                <img src={img} alt={name} />
            </div>

            <div className='pk_types'>
                { displayTypes() }
            </div>

            <div className='pk_WnH'>
                <p>Height</p>
                <p>Weight</p>
                <p>{height}</p>
                <p>{weight}</p>
            </div>

            <span>Base EXP: {base_experience}</span>

            <div className='pk_abilities'>
                { displayAbilities() }
            </div>

            {/* <div className='pk_stats'> */}
                { displayStats() }
            {/* </div> */}

            

            {/* dropdown? */}
            <div className='pk_indices'>
                { gameIndexs() }
            </div>

        </div>
    )
}

export default Pkmn

// !cherr
// 0: "firmness"
// 1: "flavors"
// 2: "growth_time"
// * 3: "id"
// 4: "item"
// 5: "max_harvest"
// * 6: "name"
// 7: "natural_gift_power"
// 8: "natural_gift_type"
// 9: "size"
// 10: "smoothness"
// 11: "soil_dryness"

// 0: "berries"
// * 1: "id"
// * 2: "name"
// 3: "names"

// 0: "berries"
// 1: "contest_type"
// * 2: "id"
// * 3: "name"
// 4: "names"

// !contest
// 0: "berry_flavor"
// * 1: "id"
// * 2: "name"
// 3: "names"

// 0: "appeal"
// 1: "effect_entries"
// 2: "flavor_text_entries"
// * 3: "id"
// 4: "jam"

// 0: "appeal"
// 1: "flavor_text_entries"
// * 2: "id"
// 3: "moves"

// !encounter
// * 0: "id"
// * 1: "name"
// 2: "names"
// 3: "order"

// * 0: "id"
// * 1: "name"
// 2: "names"
// 3: "values"

// 0: "condition"
// * 1: "id"
// * 2: "name"
// 3: "names"

// evol
// 0: "baby_trigger_item"
// 1: "chain"
// * 2: "id"

// * 0: "id"
// * 1: "name"
// 2: "names"
// 3: "pokemon_species"

// !generation
// 0: "abilities"
// * 1: "id"
// 2: "main_region"
// 3: "moves"
// * 4: "name"
// 5: "names"
// 6: "pokemon_species"
// 7: "types"
// 8: "version_groups"

// 0: "descriptions"
// * 1: "id"
// 2: "is_main_series"
// * 3: "name"
// 4: "names"
// 5: "pokemon_entries"
// 6: "region"
// 7: "version_groups"

// * 0: "id"
// * 1: "name"
// 2: "names"
// 3: "version_group"

// 0: "generation"
// * 1: "id"
// 2: "move_learn_methods"
// * 3: "name"
// 4: "order"
// 5: "pokedexes"
// 6: "regions"
// 7: "versions"

// !items
// 0: "attributes"
// 1: "baby_trigger_for"
// 2: "category"
// 3: "cost"
// 4: "effect_entries"
// 5: "flavor_text_entries"
// 6: "fling_effect"
// 7: "fling_power"
// 8: "game_indices"
// 9: "held_by_pokemon"
//  * 0: "id"
// 11: "machines"
// 1* 2: "name"
// 13: "names"
// 14: "sprites"

// 0: "descriptions"
// * 1: "id"
// 2: "items"
// * 3: "name"
// 4: "names"

// * 0: "id"
// 1: "items"
// * 2: "name"
// 3: "names"
// 4: "pocket"

// 0: "effect_entries"
// * 1: "id"
// 2: "items"
// * 3: "name"

// 0: "categories"
// * 1: "id"
// * 2: "name"
// 3: "names"

// !location
// 0: "areas"
// 1: "game_indices"
// * 2: "id"
// * 3: "name"
// 4: "names"
// 5: "region"

// 0: "encounter_method_rates"
// 1: "game_index"
// * 2: "id"
// 3: "location"
// * 4: "name"
// 5: "names"
// 6: "pokemon_encounters"

// * 0: "id"
// * 1: "name"
// 2: "names"
// 3: "pokemon_encounters"

// !machine
// * 0: "id"
// 1: "item"
// 2: "move"
// 3: "version_group"

// !move
// 0: "accuracy"
// 1: "contest_combos"
// 2: "contest_effect"
// 3: "contest_type"
// 4: "damage_class"
// 5: "effect_chance"
// 6: "effect_changes"
// 7: "effect_entries"
// 8: "flavor_text_entries"
// 9: "generation"
//  * 0: "id"
// 11: "learned_by_pokemon"
// 12: "machines"
// 13: "meta"
// 1* 4: "name"
// 15: "names"
// 16: "past_values"
// 17: "power"
// 18: "pp"
// 19: "priority"
// 20: "stat_changes"
// 21: "super_contest_effect"
// 22: "target"
// 23: "type"

// * 0: "id"
// 1: "moves"
// * 2: "name"
// 3: "names"

// * 0: "id"
// * 1: "name"
// 2: "names"

// 0: "descriptions"
// * 1: "id"
// 2: "moves"
// * 3: "name"

// 0: "descriptions"
// * 1: "id"
// 2: "moves"
// * 3: "name"
// 4: "names"

// 0: "descriptions"
// * 1: "id"
// * 2: "name"
// 3: "names"
// 4: "version_groups"

// 0: "descriptions"
// * 1: "id"
// 2: "moves"
// * 3: "name"
// 4: "names"

// !PKMN
// 0: "effect_changes"
// 1: "effect_entries"
// 2: "flavor_text_entries"
// 3: "generation"
// * 4: "id"
// 5: "is_main_series"
// * 6: "name"
// 7: "names"
// 8: "pokemon"

// 0: "descriptions"
// 1: "gene_modulo"
// 2: "highest_stat"
// * 3: "id"
// 4: "possible_values"

// * 0: "id"
// * 1: "name"
// 2: "names"
// 3: "pokemon_species"

// * 0: "id"
// * 1: "name"
// 2: "pokemon_species_details"
// 3: "required_for_evolution"

// 0: "descriptions"
// 1: "formula"
// * 2: "id"
// 3: "levels"
// * 4: "name"
// 5: "pokemon_species"

// 0: "decreased_stat"
// 1: "hates_flavor"
// * 2: "id"
// 3: "increased_stat"
// 4: "likes_flavor"
// 5: "move_battle_style_preferences"
// * 6: "name"
// 7: "names"
// 8: "pokeathlon_stat_changes"

// 0: "affecting_natures"
// * 1: "id"
// * 2: "name"
// 3: "names"

// 0: "abilities"
// 1: "base_experience"
// 2: "forms"
// 3: "game_indices"
// 4: "height"
// 5: "held_items"
// * 6: "id"
// 7: "is_default"
// 8: "location_area_encounters"
// 9: "moves"
// * 10: "name"
// 11: "order"
// 12: "past_types"
// 13: "species"
// 14: "sprites"
// 15: "stats"
// 16: "types"
// 17: "weight"

//BY LOCATION AREA PENDING

// * 0: "id"
// * 1: "name"
// 2: "names"
// 3: "pokemon_species"

// 0: "form_name"
// 1: "form_names"
// 2: "form_order"
// * 3: "id"
// 4: "is_battle_only"
// 5: "is_default"
// 6: "is_mega"
// * 7: "name"
// 8: "names"
// 9: "order"
// 10: "pokemon"
// 11: "sprites"
// 12: "types"
// 13: "version_group"

// * 0: "id"
// * 1: "name"
// 2: "names"
// 3: "pokemon_species"

// 0: "awesome_names"
// * 1: "id"
// * 2: "name"
// 3: "names"
// 4: "pokemon_species"

// 0: "base_happiness"
// 1: "capture_rate"
// 2: "color"
// 3: "egg_groups"
// 4: "evolution_chain"
// 5: "evolves_from_species"
// 6: "flavor_text_entries"
// 7: "form_descriptions"
// 8: "forms_switchable"
// 9: "gender_rate"
// 10: "genera"
// 11: "generation"
// 12: "growth_rate"
// 13: "habitat"
// 14: "has_gender_differences"
// 15: "hatch_counter"
//  * 16: "id"
// 17: "is_baby"
// 18: "is_legendary"
// 19: "is_mythical"
// * 20: "name"
// 21: "names"
// 22: "order"
// 23: "pal_park_encounters"
// 24: "pokedex_numbers"
// 25: "shape"
// 26: "varieties"

// 0: "affecting_moves"
// 1: "affecting_natures"
// 2: "characteristics"
// 3: "game_index"
// * 4: "id"
// 5: "is_battle_only"
// 6: "move_damage_class"
// * 7: "name"
// 8: "names"

// 0: "damage_relations"
// 1: "game_indices"
// 2: "generation"
// * 3: "id"
// 4: "move_damage_class"
// 5: "moves"
// * 6: "name"
// 7: "names"
// 8: "past_damage_relations"
// 9: "pokemon"