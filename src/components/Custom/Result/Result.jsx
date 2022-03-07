import React from 'react'

const Result = ({ data }) => {

    const { id } = data

    const render = () => {

        const filter = Object.keys(data).map(el => {

            const title = el.charAt(0).toUpperCase() + el.slice(1).replace(/_/g, " ")

            if (typeof(data[el]) === 'object') {

                const childs = []

                const obj = data[el]

                if (Array.isArray(obj)) {

                    obj.map(elm => {

                        if(elm['name']) {
                                childs.push(<><p>{elm['name']}</p></>)
                        } else {
                                console.log(el, elm ,'BYE')
                                // elm.flavor.name
                                // elm.berry.name

                                // elm.effect

                                // elm.description
                                
                                // elm.generation.name

                                // elm.encounter_method.name
                                // elm.pokemon.name

                                // elm.pokemon_species.name

                                // elm.move_battle_style.name

                                // elm.awesome_name
                        }
                    })
                } else {

                    if (obj === null) return
                    else if (obj['name']) {
                        childs.push(<><p>{obj['name']}</p></>)
                    } else {
                        console.log(obj)
                        // obj.evolves_to
                        // obj.species
                    }
                    
                }

                return (
                    <>
                        <div key={el}>
                            <span>{el}</span><br />
                            {childs}
                        </div>
                    </>
                )
 
            } else if ((typeof(data[el]) === 'boolean')) {
                return <><p key={el}>{title}: {data[el].toString()}</p></>
            } else {
                return <><p key={el}>{title}: {data[el]}</p></>
            }

        })

        return (
            <>
            { filter }
            </>
        )
    }

  return (
    <div className='o-unit c-result'>

         <div className='o-unit__uid c-result__uid'>
            {
                data.name ?
                <>
                    <h1>{data.name}</h1>
                    <h2>#{id}</h2>
                </>
                :
                <>
                    <h2>#{id}</h2>
                </>
            }
        </div>

        {render()}

    </div>
  )
}

export default Result
