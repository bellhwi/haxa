import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth'

function Signup() {
  const auth = getAuth()
  const navigate = useNavigate()

  const validationStatus = {
    username: false,
    email: false,
    password: false,
    pwconfirm: false,
  }

  function validate() {
    validateUsername()
    validateEmail()
    validatePassword()
    validateConfirmPW()
  }

  // Validate username
  function validateUsername() {
    // If username is shorter than 3
    if (document.getElementById('username').value.length < 3) {
      document.getElementById('username').classList.add('input-error')
      document.getElementById('username').nextElementSibling.className =
        'show-error'
      document.getElementById('username').nextElementSibling.textContent =
        'Username must be at least 3 characters'
    }
    // If username is longer than 15
    else if (document.getElementById('username').value.length > 14) {
      document.getElementById('username').classList.add('input-error')
      document.getElementById('username').nextElementSibling.textContent =
        'Username must be less than 15 characters'
    }
    // If username is valid
    else {
      validationStatus.username = true
      document
        .getElementById('username')
        .nextElementSibling.classList.remove('show-error')
    }
  }

  // Validate email
  function validateEmail() {
    const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    // Invalid email
    if (!document.getElementById('email').value.match(emailFormat)) {
      document.getElementById('email').classList.add('input-error')
      document.getElementById('email').nextElementSibling.className =
        'show-error'
      document.getElementById('email').nextElementSibling.textContent =
        'Email is not valid'
    } else {
      document.getElementById('email').classList.remove('input-error')
      document
        .getElementById('email')
        .nextElementSibling.classList.remove('show-error')
      validationStatus.email = true
    }
  }

  // Validate password
  function validatePassword() {
    // If password is shorter than 6
    if (document.getElementById('password').value.length < 6) {
      document.getElementById('password').classList.add('input-error')
      document.getElementById('password').nextElementSibling.className =
        'show-error'
      document.getElementById('password').nextElementSibling.textContent =
        'Password must be at least 6 characters'
    }
    // If password is longer than 25
    else if (document.getElementById('password').value.length > 25) {
      document.getElementById('password').classList.add('input-error')
      document.getElementById('password').nextElementSibling.className =
        'show-error'
      document.getElementById('password').nextElementSibling.textContent =
        'Password must be less than 25 characters'
    }
    // If password is valid
    else {
      validationStatus.password = true
      document.getElementById('password').classList.remove('input-error')
      document
        .getElementById('password')
        .nextElementSibling.classList.remove('show-error')
    }
  }

  function validateConfirmPW() {
    // Password not match
    if (
      document.getElementById('confirmPW').value !==
        document.getElementById('password').value &&
      document.getElementById('confirmPW').value !== ''
    ) {
      document.getElementById('confirmPW').classList.add('input-error')
      document.getElementById('confirmPW').nextElementSibling.className =
        'show-error'
      document.getElementById('confirmPW').nextElementSibling.textContent =
        'Password does not match'
    }
    // Password match
    else if (
      document.getElementById('confirmPW').value ===
        document.getElementById('password').value &&
      document.getElementById('confirmPW').value !== ''
    ) {
      validationStatus.pwconfirm = true
      document.getElementById('confirmPW').classList.remove('input-error')
      document
        .getElementById('confirmPW')
        .nextElementSibling.classList.remove('show-error')
    } else {
      document.getElementById('confirmPW').classList.add('input-error')
      document.getElementById('confirmPW').nextElementSibling.className =
        'show-error'
      document.getElementById('confirmPW').nextElementSibling.textContent =
        'Confirm password'
    }
  }

  useEffect(() => {
    document.title = 'Sign Up - HAXA'
    document.querySelector('.form-button').addEventListener('click', validate)
    if (auth.currentUser != null) {
      navigate('/home')
    }
  }, [])

  return (
    <div className='bg-signup'>
      <div className='form-container'>
        <div>
          <div className='navbar-logo'>
            <img
              src={`${process.env.PUBLIC_URL}/img/logo.png`}
              draggable='false'
            />
          </div>
          <div className='form-element'>
            <label className='form-label' htmlFor='username'>
              Username
            </label>
            <input
              className='form-input'
              id='username'
              type='text'
              placeholder='Enter username'
            />
            <small>Error message</small>
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
          <div className='form-element'>
            <label className='form-label' htmlFor='confirmPW'>
              Confirm Password
            </label>
            <input
              id='confirmPW'
              type='password'
              placeholder='Enter password again'
              className='form-input'
            />
            <small>Error message</small>
          </div>
          <button
            className='form-button btn-secondary'
            onClick={() => {
              console.log(validationStatus)
              if (
                validationStatus.username &&
                validationStatus.email &&
                validationStatus.password &&
                validationStatus.pwconfirm
              ) {
                console.log('all correct')
                const auth = getAuth()
                createUserWithEmailAndPassword(
                  auth,
                  document.getElementById('email').value,
                  document.getElementById('password').value
                )
                  .then(() => {
                    // Signed in
                    updateProfile(auth.currentUser, {
                      displayName: document.getElementById('username').value,
                    })
                      .then(() => {
                        // Profile updated!
                        navigate('/home')
                      })
                      .catch((error) => {
                        // An error occurred
                        console.log(error)
                      })
                  })
                  .catch((error) => {
                    const errorCode = error.code
                    const errorMessage = error.message
                    // ..
                    console.log(errorCode, errorMessage)
                  })
              }
            }}
          >
            Sign Up
          </button>
          <Link to='/'>
            <small className='form-login'>Already have an account? Login</small>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Signup
