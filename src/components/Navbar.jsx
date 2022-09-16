import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'
import { RiPlantLine, RiTimerLine } from 'react-icons/ri'
import { TbPlant2, TbSeeding } from 'react-icons/tb'
import { MdOutlineInventory2 } from 'react-icons/md'

function Navbar() {
  const [sideMenuBar, setSideMenuBar] = useState('')
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
      <div className='navbar-logo'>
        <Link to='/'>
          <img
            src={`${process.env.PUBLIC_URL}/img/logo.png`}
            draggable='false'
          />
        </Link>
      </div>
      <div style={{ flexGrow: 1 }}></div>
      <ul className='navbar-menu'>
        {['clones', 'premiums', 'seeds', 'coming'].map((link, index) => {
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
        })}
        <Link to='/inventory'>
          <button className='btn-secondary btn-inventory'>
            <h4>INVENTORY</h4>
          </button>
        </Link>
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
          {['clones', 'premiums', 'seeds', 'coming', 'inventory'].map(
            (link, index) => {
              return (
                <Link className='menu-link' to={`/${link}`} key={index}>
                  {
                    [
                      <RiPlantLine />,
                      <TbPlant2 />,
                      <TbSeeding />,
                      <RiTimerLine />,
                      <MdOutlineInventory2 />,
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
