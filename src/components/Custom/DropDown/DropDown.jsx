import { useState, Children, cloneElement } from 'react'

const DropDown = ({ children, label, classes, isNav = false}) => {

  const [open, setOpen] = useState(false)

  const newChildren = Children.map(children, child => 
    cloneElement(child, {className: `o-dropdown__item ${child.props.className} ${classes.lv4}` })
  )

  const close = () => setOpen(false)

  return (
    <>
      <div className={`o-dropdown ${classes.lv1}`}>
        <span className={`o-dropdown__btn-label ${classes.lv2}`} onClick={() => setOpen(!open)}>
          {label}
        </span>

        <div
          className={`
            o-dropdown__container ${classes.lv3}
            ${open? `ctn__open ${classes.ctn_open}` : `ctn__closed ${classes.ctn_closed}`}
          `}
          onClick={close}
        >
          { newChildren }
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