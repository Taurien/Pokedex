import { useContext } from 'react'
import { useFormContext } from "react-hook-form";
import InfoContext from '../../../context/InfoContext'

import './Select.styles.scss'

const Select = ({ values, setSelected }) => {

    const { formKeys } = useContext(InfoContext)
    const { register, formState: { errors } } = useFormContext()

    const key = Object.keys(formKeys)[0]
    const options = values[key]

    const error = errors[key]

    const setSearchBar = e => {
      setSelected(true)
    }

    if (options) {
      const renderOptions = Object.keys(options).map(key => 
          <option key={key} value={key}>{options[key]}</option>
      )

      return (
        <div className='div_select' onChange={setSearchBar} >
          {error && <span>LOLy</span>}
          <select { ...register(key, { required: true, shouldUnregister: true, }) } >
              <option value=''>Select...</option>

              { renderOptions }

          </select>
        </div>
      )
    }


    return <></>
}

export default Select