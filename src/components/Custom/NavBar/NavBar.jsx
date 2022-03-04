import { Link } from 'react-router-dom';
import { useMedia } from '../../../hooks/matchMedia';
import DropDown from '../DropDown/DropDown';

const NavBar = () => {

  const mq = useMedia('(max-width: 769px)');

  const links = [
      <Link key='Home' to={'/poke-finder'}>
          Home
      </Link>,
      // <hr />,
      <Link key='Test2' to={'poke-finder/test'}>
          Test2
      </Link>,
      // <hr />,
      <Link key='Lorem' to={'/poke-finder'}>
          Lorem
      </Link>
  ]

  return (
    <div className='c-navbar'>
      
      <Link to={'/poke-finder'} className='c-navbar__logo'>
        <img src="#" alt="" />
        <span>Poke-finder</span>
      </Link>

      {
        mq? 
          <>
            <DropDown
              label={'🧺'}
              classes={{
                lv1: 'nav-drop c-navbar__nav',
                lv2: 'nav-drop__label',
                lv3: 'nav-drop__ctn',
                lv4: 'nav-drop__items',
                ctn_open: 'nav-drop__ctn-open',
                ctn_closed: 'nav-drop__ctn-closed',
              }}
              isNav={true}
              >
              {links}
            </DropDown>          
          </>
        :
          <>
            <nav className='c-navbar__nav'>
              <div className='test2'>
                {links}
              </div>
            </nav>
          </>
      }

    </div>
  )
}

export default NavBar
