import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import * as Scroll from 'react-scroll'
import Navbar from './Navbar'

function Header({ page, title, desc, btnPrimaryText, btnSecondaryText }) {
  const ScrollLink = Scroll.Link
  const navigate = useNavigate()
  function adjustHeight() {
    const headerElement = document.querySelector('.header')

    // Show different height of header screen per pages
    page == 'home'
      ? (headerElement.style.minHeight = `${
          document.documentElement.clientHeight * 0.9
        }px`)
      : (headerElement.style.minHeight = `${document.documentElement.clientHeight}px`)
  }

  useEffect(() => {
    adjustHeight()
    window.addEventListener('resize', adjustHeight)
  }, [])

  return (
    <header className='header'>
      <Navbar />
      <div
        className='header-container'
        style={{ justifyContent: 'center', textAlign: 'center' }}
      >
        <div className='hero'>
          <h2 className='hero-title'>{title}</h2>
          <p className='hero-desc'>{desc}</p>

          {btnPrimaryText ? (
            <ScrollLink to={page == 'home' ? 'main' : 'products'} smooth={true}>
              <button className='btn-primary'>{btnPrimaryText}</button>
            </ScrollLink>
          ) : null}

          {btnSecondaryText ? (
            <button
              className='btn-secondary'
              onClick={() => navigate('/inventory')}
            >
              {btnSecondaryText}
            </button>
          ) : null}
        </div>
      </div>
    </header>
  )
}

export default Header
