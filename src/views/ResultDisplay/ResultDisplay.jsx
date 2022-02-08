import { useContext } from 'react'
import { Link } from 'react-router-dom'

import InfoContext from '../../context/InfoContext'

import Pkmn from '../../components/Custom/Pkmn/Pkmn'
import Result from '../../components/ResultDisplay/Result'

const PkmnDisplay = () => {

    const { formKeys, handleFormKeys, info, setInfo } = useContext(InfoContext)

    return (
        <div>
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
