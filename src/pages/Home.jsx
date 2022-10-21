import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { homeContents, headerContents } from '../contents'
import { getAuth } from 'firebase/auth'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

function Home() {
  const navigate = useNavigate()
  const auth = getAuth()
  const { page, title, desc, btnSecondaryText } = headerContents[0]

  useEffect(() => {
    if (auth.currentUser != null) {
      window.scrollTo(0, 0)
      document.title = 'Home - HAXA'
    } else {
      navigate('/')
    }
  }, [])

  return (
    <div>
      <div className='bg-home'>
        <div className='container'>
          <Header
            page={page}
            title={title}
            desc={desc}
            btnSecondaryText={btnSecondaryText}
          />
          <div id='main'>
            {homeContents.map((content, index) => {
              return (
                <Main
                  key={index}
                  page={content.page}
                  title={content.title}
                  desc={content.desc}
                  swiper={content.swiper}
                />
              )
            })}
          </div>

          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Home
