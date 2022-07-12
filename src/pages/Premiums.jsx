import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Products from '../components/Products'
import { headerContents } from '../contents'

function Premiums() {
  const { title, page, desc, btnPrimaryText, btnSecondaryText } =
    headerContents[2]

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Premiums - HAXA'
  }, [])
  return (
    <div className='bg-premiums'>
      <div className='container'>
        <Header
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

export default Premiums
