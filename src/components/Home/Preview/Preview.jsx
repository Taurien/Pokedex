import { useContext } from 'react'
import { Link } from 'react-router-dom'

import InfoContext from '../../../context/InfoContext'

const Preview = ({ data, closed }) => {


const { requested } = useContext(InfoContext)

  const { name, id } = data

  console.log(closed)

  return (
      <div className='c-preview__modal'>
        <span>{requested.endpoint}</span>
        {
          name?
          <>
            <p>#{id}</p>
            <p>{name}</p>
          </>
          :
          <>
            <p>#{id}</p>
          </>
        }
        <Link to={`pokeinfo/${name}`}>
          <button className='c-btn'>See more abt this</button>
        </Link>
      </div>
  )
}

export default Preview


