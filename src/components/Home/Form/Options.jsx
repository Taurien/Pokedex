import { useContext } from 'react'
import { useFormContext } from "react-hook-form";
import InfoContext from '../../../context/InfoContext'

import './Options.style.scss'

const Options = (labelTxt, options, regi, values) => {

  // data and functions from contexts
  const { formKeys, handleFormKeys } = useContext(InfoContext)
  const { register, unregister, reset, resetField, formState: { errors } } = useFormContext()

  const reg = labelTxt.toLowerCase()

  //
  const test4 = e => {
    if (e.target.checked) {
      handleFormKeys({ [options]: true })
    } else {
      handleFormKeys({ [options]: false })
      resetField(reg)
    }
  }

  const optIsChecked = formKeys[options]
  const error = errors[reg]

  const renderOptions = Object.keys(values).map(key => 
  <option key={key} value={key}>{values[key]}</option>
  )
  // console.log(values)

  return (
  <div className='options-container'>
      <label>
        {labelTxt}
        <input type="checkbox" onChange={test4} />
      </label>
      {
        optIsChecked &&
        <>
          {error && <span>LOL</span>}
          <select { ...register(reg, { required: true, shouldUnregister: true }) } >
            <option value=''>Select...</option>
          
            { renderOptions }

          </select>
        </>
      }
  </div>
  )
}

export default Options
