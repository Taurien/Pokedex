import { useContext } from 'react'
import InfoContext from '../../../../context/InfoContext'

const Options = ({ labelTxt, svg, options }) => {

  // data and functions from contexts
  const { handleFormKeys } = useContext(InfoContext)

  const reg = labelTxt.toLowerCase()
  
  const triggerOpt = () => {

    handleFormKeys({ [options]: true })

  }
  
  return (
    <div className={`c-option ${reg}_option`} onChange={triggerOpt} >
      <div className='c-option__label'>

        <input  type="radio" value={options} name='label' id={reg} />

        <label htmlFor={reg}>
          <span>{svg}</span>
          <span>{labelTxt}</span>
        </label>

      </div>
    </div>
  )
}

export default Options
