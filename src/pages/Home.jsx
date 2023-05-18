import { useEffect, useRef, useState } from 'react'
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
  const modalRef = useRef(null)
  const emailInputRef = useRef(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [subscribed, setSubscribed] = useState(false)
  const closeModal = () => {
    setModalOpen(false)
  }
  const openModal = () => {
    setTimeout(() => {
      setModalOpen(true)
    }, 3000)

    sessionStorage.setItem('subscriptionInvoked', true)
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    // Subscription submitted
    setSubscribed(true)
  }

  useEffect(() => {
    if (auth.currentUser != null) {
      window.scrollTo(0, 0)
      document.title = 'Home - HAXA'
    } else {
      navigate('/')
    }

    // Open subscription modal after 3sec
    sessionStorage.getItem('subscriptionInvoked') === null && openModal()
  }, [])

  return (
    <div>
      <div className='bg-home'>
        {/* Subscribe modal */}
        {modalOpen && (
          <div className='subscribe-overlay'>
            <div className='subscribe-container' ref={modalRef}>
              <img
                src={`${process.env.PUBLIC_URL}/img/modal.jpg`}
                className='subscribe-img'
              />
              <section className='subscribe-section'>
                <form className='contact-form' onSubmit={handleSubmit}>
                  {subscribed ? (
                    <>
                      <h2>You have subscribed</h2>
                      <p>
                        Congratulations on joining our mailing list! Get ready
                        to stay informed and connected with all the latest news
                        and promotions.
                      </p>
                      <p onClick={closeModal}>Okay, got it!</p>
                    </>
                  ) : (
                    <>
                      <h2>Subscribe Us</h2>
                      <p>
                        Join our mailing list to stay updated with the latest
                        news, offers, and exclusive promotions!
                      </p>
                      <input
                        type='email'
                        id='emailInput'
                        placeholder='Your Email'
                        required
                        ref={emailInputRef}
                      />
                      <button type='submit'>Submit</button>
                      <p onClick={closeModal}>Continue to Site</p>
                    </>
                  )}
                </form>
              </section>
            </div>
          </div>
        )}
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
