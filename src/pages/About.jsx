import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth } from 'firebase/auth'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Card from '../components/Card'
import { headerContents, aboutContents } from '../contents'
import { GrDiamond, GrBook } from 'react-icons/gr'
import { MdOutlineExplore } from 'react-icons/md'

function About() {
  const { title, page, desc, btnPrimaryText, btnSecondaryText } =
    headerContents[5]
  const navigate = useNavigate()
  const auth = getAuth()
  const icons = [
    <GrDiamond></GrDiamond>,
    <GrBook></GrBook>,
    <MdOutlineExplore></MdOutlineExplore>,
  ]
  const contactFormRef = useRef(null)
  const nameInputRef = useRef(null)
  const emailInputRef = useRef(null)
  const messageInputRef = useRef(null)

  useEffect(() => {
    if (auth.currentUser != null) {
      window.scrollTo(0, 0)
      document.title = 'About - HAXA'
    } else {
      navigate('/')
    }

    contactFormRef.current &&
      contactFormRef.current.addEventListener('submit', function (event) {
        event.preventDefault() // Prevents form submission

        // Get form values
        let name = nameInputRef.current.value
        let email = emailInputRef.current.value
        let message = messageInputRef.current.value

        // Validate form values
        if (
          name.trim() === '' ||
          email.trim() === '' ||
          message.trim() === ''
        ) {
          alert('Please fill in all fields.')
          return
        }

        alert('Your message submitted successfully!') // Display success message
        contactFormRef.current.reset() // Reset the form
      })
  }, [])

  return (
    <div className='bg-about'>
      <div className='container'>
        <Header title={title} desc={desc} />
      </div>
      <div className='main-section'>
        <h4 className='main-title'>About Us</h4>
        <p className='main-desc'>
          We offer the best cannabis experience with our services.
        </p>
        <div className='card-container'>
          {aboutContents.map((content, index) => (
            <Card
              key={index}
              title={content.title}
              desc={content.desc}
              icon={icons[index]}
            ></Card>
          ))}
        </div>
      </div>
      <div className='main-section'>
        <h4 className='main-title'>Contact Us</h4>
        <p className='main-desc'>
          We value your feedback and are here to assist you.
        </p>
        <form id='contact-form' ref={contactFormRef}>
          <input
            type='text'
            id='nameInput'
            placeholder='Your Name'
            required
            ref={nameInputRef}
          />
          <input
            type='email'
            id='emailInput'
            placeholder='Your Email'
            required
            ref={emailInputRef}
          />
          <textarea
            id='messageInput'
            placeholder='Your Message'
            required
            ref={messageInputRef}
          ></textarea>
          <button type='submit'>Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default About
