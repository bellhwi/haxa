import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Products from '../components/Products'
import { headerContents } from '../contents'

function Coming() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Coming Soon - HAXA'
  }, [])

  const { page, title, desc, btnPrimaryText, btnSecondaryText } =
    headerContents[4]

  return (
    <div className='bg-coming'>
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

export default Coming
