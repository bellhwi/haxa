import { FaInstagram, FaRegEnvelope, FaAngleUp } from 'react-icons/fa'
import { BsTelephone } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import * as Scroll from 'react-scroll'

function Footer({ color, padding }) {
  const date = new Date()
  const scroll = Scroll.animateScroll
  const navigate = useNavigate()
  let year = date.getFullYear()
  return (
    <div className='footer' style={{ padding: padding }}>
      <div className='footer-sns'>
        <a
          style={{ color: color }}
          href='https://www.instagram.com/haxalabs'
          target='_blank'
          rel='noreferrer'
        >
          <FaInstagram style={{ userSelect: 'none' }} />
        </a>
        <a
          style={{ color: color }}
          onClick={() => alert('haxa-official@gmail.com')}
        >
          <FaRegEnvelope style={{ userSelect: 'none' }} />
        </a>
        <a style={{ color: color }} onClick={() => alert('012-345-6789')}>
          <BsTelephone style={{ userSelect: 'none' }} />
        </a>
      </div>

      <small style={{ color: color }} onClick={() => navigate('/admin')}>
        HAXA &copy; {year}{' '}
      </small>
      <div className='scroll-top' onClick={scroll.scrollToTop}>
        <FaAngleUp style={{ userSelect: 'none' }} />
      </div>
    </div>
  )
}

export default Footer
