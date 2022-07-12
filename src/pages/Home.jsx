import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import LockScreen from '../components/LockScreen'
import { homeContents, headerContents } from '../contents'

function Home() {
  const { page, title, desc } = headerContents[0]
  const [isAccessibleToHome, setIsAccessibleToHome] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Home - HAXA'
    sessionStorage.getItem('accessibleToHome') !== null
      ? setIsAccessibleToHome(true)
      : setIsAccessibleToHome(false)
  }, [])

  return (
    <div>
      {isAccessibleToHome ? (
        <div className='bg-home'>
          <div className='container'>
            <Header page={page} title={title} desc={desc} />
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
      ) : (
        <LockScreen
          setIsAccessibleToHome={setIsAccessibleToHome}
          placeholder='Enter the member code.'
          errorMsg='Member code is not correct.'
        />
      )}
    </div>
  )
}

export default Home
