import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import * as Scroll from 'react-scroll'
import Navbar from './Navbar'

function Header({ page, title, desc, btnPrimaryText, btnSecondaryText }) {
  const ScrollLink = Scroll.Link
  const navigate = useNavigate()

  useEffect(() => {
    const headerElement = document.querySelector('.header')

    page == 'home'
      ? (headerElement.style.minHeight = `${
          document.documentElement.clientHeight * 0.8
        }px`)
      : (headerElement.style.minHeight = `${document.documentElement.clientHeight}px`)
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
