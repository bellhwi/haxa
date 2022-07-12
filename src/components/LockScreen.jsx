import { useState, useRef, useEffect } from 'react'
import { FaLock } from 'react-icons/fa'
import { AiOutlineStop } from 'react-icons/ai'

function LockScreen({
  setIsAccessibleToHome,
  setIsAccessibleToAdmin,
  placeholder,
  errorMsg,
}) {
  const [showErr, setShowErr] = useState('')
  const inputElement = useRef()
  const homeCode = 'rosieshadow'
  const adminPW = 'lovenike'
  let inputValue = ''

  useEffect(() => {
    const bgElement = document.querySelector('.bg-locked')

    bgElement.style.minHeight = `${document.documentElement.clientHeight}px`
  })
  return (
    <div className='bg-locked'>
      <div className='navbar-logo' style={{ width: '140px' }}>
        <img src={`${process.env.PUBLIC_URL}/img/logo.png`} draggable='false' />
      </div>

      <form
        className='locked-form'
        onSubmit={(e) => {
          e.preventDefault()

          if (setIsAccessibleToHome !== undefined) {
            if (inputValue == homeCode) {
              setIsAccessibleToHome(true)
              sessionStorage.setItem('accessibleToHome', 'true')
            } else {
              setShowErr('block')
              inputElement.current.value = ''
              inputElement.current.focus()
              setTimeout(() => {
                setShowErr('')
              }, 2000)
            }
          } else {
            if (inputValue == adminPW) {
              setIsAccessibleToAdmin(true)
              sessionStorage.setItem('accessibleToAdmin', 'true')
            } else {
              setShowErr('block')
              inputElement.current.value = ''
              inputElement.current.focus()
              setTimeout(() => {
                setShowErr('')
              }, 2000)
            }
          }
        }}
      >
        <div className='locked-inputContainer'>
          <div className='locked-icon'>
            <FaLock />
          </div>

          <input
            className='locked-input'
            type='password'
            placeholder={placeholder}
            autoFocus
            onChange={(e) => (inputValue = e.target.value.toLowerCase())}
            ref={inputElement}
          />
        </div>
        <div className={`locked-error ${showErr}`}>
          <AiOutlineStop />
          <small>{errorMsg}</small>
        </div>
        <button className='btn-secondary' type='submit'>
          Enter
        </button>
      </form>
    </div>
  )
}

export default LockScreen
