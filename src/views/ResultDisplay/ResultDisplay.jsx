import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import InfoContext from '../../context/InfoContext'

import Pkmn from '../../components/Custom/Pkmn/Pkmn'
import Item from '../../components/Custom/Item/Item'
import Result from '../../components/Custom/Result/Result'

const PkmnDisplay = () => {

    const navigate = useNavigate()

    const { requested, formKeys, info } = useContext(InfoContext)

    const isPkmn = requested.endpoint === 'pokemon'
    const isItem = requested.endpoint === 'item'

    return (
        <div className='o-view o-view-info'>

            <div className='o-view__header'>

                <Link className='header-back' to={'/poke-finder'}>Back</Link>

                <span className='header-headline'>
                    showing results for: <br />
                    <p>{requested.endpoint}</p>
                </span>

            </div>


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




        </div>
    )
}

export default PkmnDisplay
