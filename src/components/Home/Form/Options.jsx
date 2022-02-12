import { useContext } from 'react'
import InfoContext from '../../../context/InfoContext'

import './Options.style.scss'

const Options = ({ labelTxt, svg, options }) => {

  // data and functions from contexts
  const { handleFormKeys } = useContext(InfoContext)

  const reg = labelTxt.toLowerCase()
  
  const triggerOpt = () => {

    handleFormKeys({ [options]: true })

  }
  
  return (
    <div className={`option_container ${reg}_container`} onChange={triggerOpt} >
      <div className='label_c'>

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
