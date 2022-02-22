import { useContext } from 'react'
import { useFormContext } from "react-hook-form";
import InfoContext from '../../../../context/InfoContext'

const Select = ({ values, setSearchB }) => {

    const { formKeys } = useContext(InfoContext)
    const { register, formState: { errors } } = useFormContext()

    const key = Object.keys(formKeys)[0]
    const options = values[key]

    const error = errors[key]

    const setSearchBar = e => {
      setSearchB(true)
    }

    if (options) {
      const renderOptions = Object.keys(options).map(key => 
          <option key={key} value={key}>{options[key]}</option>
      )

      return (
        <>
          {error && <span>LOLy</span>}
          <select className='c-select' { ...register(key, { required: true, shouldUnregister: true, }) } >
              <option value=''>Select...</option>

              { renderOptions }

          </select>
        </>
      )
    }


    return <></>
}

export default Select