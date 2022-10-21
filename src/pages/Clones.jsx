import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Products from '../components/Products'
import { headerContents } from '../contents'
import { getAuth } from 'firebase/auth'

function Clones() {
  const navigate = useNavigate()
  const auth = getAuth()

  useEffect(() => {
    if (auth.currentUser != null) {
      window.scrollTo(0, 0)
      document.title = 'Clones - HAXA'
    } else {
      navigate('/')
    }
  }, [])

  const { page, title, desc, btnPrimaryText, btnSecondaryText } =
    headerContents[1]

  return (
    <div className='bg-clones'>
      <div className='container'>
        <Header
          page={page}
          title={title}
          desc={desc}
          btnPrimaryText={btnPrimaryText}
          btnSecondaryText={btnSecondaryText}
        />
        <Products page={page} />
        <Footer />
      </div>
    </div>
  )
}

export default Clones
