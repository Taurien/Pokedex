import { useContext } from 'react'
import { Link } from 'react-router-dom'

import InfoContext from '../../context/InfoContext'

import Pkmn from '../../components/Custom/Pkmn/Pkmn'
import Result from '../../components/ResultDisplay/Result'

import './ResultDisplay.style.scss'

const PkmnDisplay = () => {

    const { requested, formKeys, info } = useContext(InfoContext)

    if (requested.endpoint === 'pokemon') console.log('hiii')

    return (
        <div className='info_view'>
            <h1>holi</h1>
            <p>showing results for: {`${info.name}`}</p>

            {
                // formKeys.requested.endpoint === 'pokemon' ?
                // <Pkmn data={info} /> :
                // <Result data={info} />

            }


            <Link to={'/'}>Back</Link>


        </div>
    )
}

export default PkmnDisplay
