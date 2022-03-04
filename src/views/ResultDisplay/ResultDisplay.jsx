import { useContext } from 'react'
import { Link } from 'react-router-dom'

import InfoContext from '../../context/InfoContext'

import Pkmn from '../../components/Custom/Pkmn/Pkmn'
import Item from '../../components/Custom/Item/Item'
import Result from '../../components/Custom/Result/Result'

const PkmnDisplay = () => {

    const { requested, formKeys, info } = useContext(InfoContext)

    const isPkmn = requested.endpoint === 'pokemon'
    const isItem = requested.endpoint === 'item'

    return (
        <div className='o-view o-view-info'>
            <p className='o-view__txt'>
                showing results for: <br />
                <span>{requested.endpoint}</span>
            </p>

            {
                isPkmn &&
                    <Pkmn
                        data={info}
                    />
            }

            {
                isItem && 
                    <Item 
                        data={info}
                    />
            }

            {
                !isPkmn && !isItem &&
                    <Result
                        data={info}
                    />
            }


            <Link to={'/poke-finder'}>Back</Link>


        </div>
    )
}

export default PkmnDisplay
