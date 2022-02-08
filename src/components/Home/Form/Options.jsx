import { useState, useContext } from 'react'
import { useFormContext } from "react-hook-form";
import InfoContext from '../../../context/InfoContext'

import './Options.style.scss'

const Options = (labelTxt, options, regi, values) => {

  // data and functions from contexts
  const { formKeys, handleFormKeys } = useContext(InfoContext)
  const { watch, register, unregister, reset, resetField, formState: { errors } } = useFormContext()

  const [ isChecked, setIsChecked ] = useState(false)
  
  const reg = labelTxt.toLowerCase()
  
  const test5 = (e) => {
    console.log(e)

    handleFormKeys({ [options]: true })
    
  }
  
  const optIsChecked = formKeys[options]

  const error = errors[reg]

  const renderOptions = Object.keys(values).map(key => 
  <option key={key} value={key}>{values[key]}</option>
  )

  return (
  <div className='options-container' onChange={test5} >
      <label>
        {labelTxt}
        <input {...register(labelTxt, { required: true })} type="radio" value={labelTxt} name='label' />
      </label>
      {
        optIsChecked &&
        <>
          {error && <span>LOL</span>}
          <select { ...register(reg, { required: true, shouldUnregister: true, }) } >
            <option value=''>Select...</option>
          
            { renderOptions }

          </select>
        </>
      }
  </div>
  )
}

export default Options
