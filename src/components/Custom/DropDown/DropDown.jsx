import { useState, Children, cloneElement } from 'react'

const DropDown = ({ children, label, lv1, lv2, lv3, lv4, isNav = false}) => {

  const [open, setOpen] = useState(false)

  const newChildren = Children.map(children, child => 
    cloneElement(child, {className: `o-dropdown__item ${child.props.className} ${lv4}` })
  )

  const close = () => setOpen(false)

  return (
    <>
      <div className={`o-dropdown ${lv1}`}>
        <span className={`o-dropdown__btn-label ${lv2}`} onClick={() => setOpen(!open)}>
          {label}
        </span>

        <div className={`o-dropdown__container ${open? 'ctn__open' : 'ctn__closed' } ${lv3}`} onClick={close}>
          { open && newChildren}
        </div>

      </div>

      {
        isNav && 
        <div className={`o-dropdown-bg ${open? 'o-dropdown-bg__true' : 'o-dropdown-bg__false'}`} onClick={close}></div>
      }
    </>
  )
}

export default DropDown