import { useContext } from 'react'
import { Link } from 'react-router-dom'

import InfoContext from '../../context/InfoContext'

import Pkmn from '../../components/Custom/Pkmn/Pkmn'
import Result from '../../components/ResultDisplay/Result'

import './ResultDisplay.style.scss'

const PkmnDisplay = () => {

    const { requested, formKeys, info } = useContext(InfoContext)

    const isPkmn = requested.endpoint === 'pokemon'

    return (
        <div className='info_view'>
            {/* <p>showing results for: {`${info.name}`}</p> */}
            <p>showing results for:</p>

            {
                isPkmn &&
                    <Pkmn
                        data={info}
                    />
            }


            <Link to={'/pokedex'}>Back</Link>


        </div>
    )
}

export default PkmnDisplay
