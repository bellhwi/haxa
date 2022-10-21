import { FaInstagram, FaAngleUp } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { getAuth } from 'firebase/auth'
import { adminUid } from '../items'
import * as Scroll from 'react-scroll'

function Footer({ color, padding }) {
  const date = new Date()
  const scroll = Scroll.animateScroll
  const auth = getAuth()
  const navigate = useNavigate()
  let year = date.getFullYear()

  return (
    <div className='footer' style={{ padding: padding }}>
      <div className='footer-sns'>
        <a
          style={{ color: color }}
          href='https://www.instagram.com/haxalabs/'
          target='_blank'
          rel='noreferrer'
        >
          <FaInstagram style={{ userSelect: 'none' }} />
        </a>
      </div>

      <small
        style={{ color: color }}
        onClick={() => {
          if (auth.currentUser.uid == adminUid) {
            console.log('correct')
            navigate('/admin')
          }
        }}
      >
        HAXA &copy; {year}{' '}
      </small>
      <div className='scroll-top' onClick={scroll.scrollToTop}>
        <FaAngleUp style={{ userSelect: 'none' }} />
      </div>
    </div>
  )
}

export default Footer
