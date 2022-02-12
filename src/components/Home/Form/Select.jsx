import { useContext } from 'react'
import { useFormContext } from "react-hook-form";
import InfoContext from '../../../context/InfoContext'

const Select = ({ values }) => {

    const { formKeys } = useContext(InfoContext)
    const { register, formState: { errors } } = useFormContext()

    const key = Object.keys(formKeys)[0]
    const options = values[key]

    const error = errors[key]

    if (options) {
      
      const renderOptions = Object.keys(options).map(key => 
          <option key={key} value={key}>{options[key]}</option>
      )

      return (
        <>
          {error && <span>LOLy</span>}
          <select { ...register(key, { required: true, shouldUnregister: true, }) } >
              <option value=''>Select test...</option>

              { renderOptions }

          </select>
        </>
      )
    }


    return null
}

export default Select