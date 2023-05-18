import { useEffect, useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  getAuth,
  setPersistence,
  browserSessionPersistence,
  signInWithEmailAndPassword,
} from 'firebase/auth'

function Login() {
  const auth = getAuth()
  const navigate = useNavigate()
  const [loginFailed, setLoginFailed] = useState(false)
  const modalRef = useRef(null)
  const [modalOpen, setModalOpen] = useState(true)
  const closeModal = () => {
    setModalOpen(false)
  }
  const leavePage = () => {
    window.location.href = 'https://www.google.com/'
  }

  useEffect(() => {
    document.title = 'Login - HAXA'
    if (auth.currentUser != null) {
      navigate('/home')
    }
  }, [])
  return (
    <div className='bg-signup'>
      {/* Verify age modal */}
      {modalOpen && (
        <div className='modal-overlay'>
          <div className='modal-container' ref={modalRef}>
            <h2>Are you 21+? </h2>
            <div onClick={closeModal}>YES</div>
            <div onClick={leavePage}>NO</div>
          </div>
        </div>
      )}

      <div className='form-container'>
        <div>
          <div className='navbar-logo'>
            <img
              src={`${process.env.PUBLIC_URL}/img/logo.png`}
              draggable='false'
            />
          </div>
          <div className='form-element'>
            <label className='form-label' htmlFor='email'>
              Email
            </label>
            <input
              className='form-input'
              id='email'
              type='email'
              placeholder='Enter email'
            />
            <small>Error message</small>
          </div>
          <div className='form-element'>
            <label className='form-label' htmlFor='password'>
              Password
            </label>
            <input
              className='form-input'
              id='password'
              type='password'
              placeholder='Enter password'
            />
            <small>Error message</small>
          </div>
          <p className={`login-error ${loginFailed ? 'block' : null}`}>
            Invalid user information.
          </p>
          <button
            className='form-button btn-secondary'
            onClick={() => {
              signInWithEmailAndPassword(
                auth,
                document.getElementById('email').value,
                document.getElementById('password').value
              )
                .then(() => {
                  setPersistence(auth, browserSessionPersistence).catch(
                    (error) => {
                      const errorCode = error.code
                      const errorMessage = error.message

                      console.log(errorCode, errorMessage)
                    }
                  )
                  setLoginFailed(false)
                  navigate('/home')
                })
                .catch((error) => {
                  const errorCode = error.code
                  const errorMessage = error.message

                  console.log(errorCode, errorMessage)
                  setLoginFailed(true)
                })
            }}
          >
            Login
          </button>
          <Link to='/signup'>
            <small className='form-login'>New to Haxa? Create an account</small>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
