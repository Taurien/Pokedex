import { Link } from 'react-router-dom'

const Preview = ({ data }) => {

  const { name, id } = data

  return (
      <div className='c-preview__modal'>
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