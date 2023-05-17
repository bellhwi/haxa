import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineInfoCircle } from 'react-icons/ai'
import { RiPlantLine, RiTimerLine } from 'react-icons/ri'
import { TbPlant2, TbSeeding } from 'react-icons/tb'
import { getAuth, signOut } from 'firebase/auth'

function Navbar({ hideLogo }) {
  const [sideMenuBar, setSideMenuBar] = useState('')
  const navigate = useNavigate()
  const auth = getAuth()

  function hideMenuBar(e) {
    if (e.target.className == 'menu-btn') return

    sideMenuBar != '' && setSideMenuBar('')
  }

  document.addEventListener('click', (e) => {
    hideMenuBar(e)
  })
  document.addEventListener('touchstart', (e) => {
    hideMenuBar(e)
  })

  return (
    <nav className='navbar'>
      <div className='navbar-user'>
        <p className='navbar-user-greeting'>
          Welcome,{' '}
          {auth.currentUser != null ? auth.currentUser.displayName : null}!
          <small
            onClick={() => {
              signOut(auth)
                .then(() => {
                  navigate('/')
                })
                .catch((error) => {
                  console.log(error)
                })
            }}
          >
            Logout
          </small>
        </p>
      </div>
      <div className='navbar-logo'>
        <Link to='/home'>
          <img
            src={`${process.env.PUBLIC_URL}/img/logo.png`}
            draggable='false'
          />
        </Link>
      </div>
      <div style={{ flexGrow: 1 }}></div>
      <ul className='navbar-menu'>
        {['about', 'clones', 'premiums', 'seeds', 'coming'].map(
          (link, index) => {
            return (
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'navbar-link active' : 'navbar-link'
                }
                to={`/${link}`}
                key={index}
              >
                <h4>{link == 'coming' ? 'COMING SOON' : link.toUpperCase()}</h4>
              </NavLink>
            )
          }
        )}
      </ul>
      <div className='mobile-menu'>
        <button
          className='menu-btn'
          onClick={() => {
            setSideMenuBar('show-menu')
          }}
        >
          <AiOutlineMenu style={{ pointerEvents: 'none' }} /> <span>Menu</span>
        </button>
        <div className={`menu-container ${sideMenuBar}`}>
          {['about', 'clones', 'premiums', 'seeds', 'coming'].map(
            (link, index) => {
              return (
                <Link className='menu-link' to={`/${link}`} key={index}>
                  {
                    [
                      <AiOutlineInfoCircle />,
                      <RiPlantLine />,
                      <TbPlant2 />,
                      <TbSeeding />,
                      <RiTimerLine />,
                    ][index]
                  }
                  <h4>
                    {link == 'coming' ? 'COMING SOON' : link.toUpperCase()}
                  </h4>
                </Link>
              )
            }
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
