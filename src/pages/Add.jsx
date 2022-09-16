import { useEffect, useState } from 'react'
import { db } from '../firebase'
import { doc, setDoc, updateDoc } from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setLastUpdatedTime } from '../store'
import { Oval } from 'react-loading-icons'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import InputField from '../components/InputField'

function Add() {
  const [updatedImgUrl, setUpdatedImgUrl] = useState(null)
  const [showAlert, setShowAlert] = useState(false)
  const [btnDisabled, setBtnDisabled] = useState('btn-disabled')
  const inputIdArr = [
    'category',
    'name',
    'genetic',
    'breeder',
    'title',
    'price',
    'quantity',
    'pheno',
    'flowerTime',
    'flavor',
    'desc',
  ]
  let newInfoObj = {
    category: null,
    name: null,
    genetic: null,
    breeder: null,
    title: null,
    price: null,
    quantity: null,
    pheno: null,
    flowerTime: null,
    flavor: null,
    desc: null,
    pid: null,
  }
  const navigate = useNavigate()
  const dispatch = useDispatch()

  function getTime() {
    const today = new Date()
    const date =
      today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
    const time =
      today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
    const dateTime = date + ' ' + time

    return dateTime
  }

  function updatePhoto() {
    const storage = getStorage()
    const fileName = Date.now().toString()
    const fileRef = ref(storage, fileName)

    uploadBytes(fileRef, document.querySelector('#edit-upload').files[0]).then(
      () => {
        getDownloadURL(fileRef)
          .then((url) => {
            updateDoc(doc(db, 'products', newInfoObj['name']), {
              url: url,
              pid: fileName,
            })
          })
          .then(() => (window.location.href = '/admin'))
      }
    )
  }

  function addProduct() {
    setShowAlert(true)
    dispatch(setLastUpdatedTime(getTime()))
    const promise = new Promise((res) => {
      const elapsedTime = Date.now()

      inputIdArr.forEach((id) => {
        newInfoObj[id] = document.getElementById(id).value
      })
      newInfoObj['pid'] = elapsedTime

      res(setDoc(doc(db, 'products', newInfoObj['name']), newInfoObj))
    })

    promise
      .then(() =>
        updateDoc(doc(db, 'last-updated', 'updated'), { time: getTime() })
      )
      .then(updatePhoto())
  }

  useEffect(() => {
    document.title = 'Add - Admin'
    const headerElement = document.querySelector('.header')
    headerElement.style.minHeight = `${document.documentElement.clientHeight}px`
  }, [])

  return (
    <div className='bg-admin'>
      <div className='container'>
        <header className='header'>
          <Navbar />
          {showAlert ? (
            <div className='admin-alert'>
              <Oval width='22' height='22' />
              <span>Please wait a moment...</span>
            </div>
          ) : null}
          <form
            className='header-container'
            onChange={() => {
              const inputElements = [
                ...document.querySelectorAll('input'),
                document.querySelector('select'),
              ]
              const emptyValue = inputElements.find((element) => {
                return element.value == ''
              })
              const noneValue = inputElements.find((element) => {
                return element.value == 'none'
              })
              const values = [emptyValue, noneValue]

              if (values[0] == undefined && values[1] == undefined) {
                setBtnDisabled('')
              } else {
                setBtnDisabled('btn-disabled')
              }
            }}
          >
            <div className='edit'>
              <div className='edit-img'>
                <img src={updatedImgUrl == null ? null : updatedImgUrl} />
                <input
                  type='file'
                  id='edit-upload'
                  onChange={() => {
                    const [file] = document.querySelector('#edit-upload').files

                    if (file) {
                      setUpdatedImgUrl(URL.createObjectURL(file))
                    }
                  }}
                  hidden
                />
                <label
                  htmlFor='edit-upload'
                  className='btn-secondary edit-addPhoto'
                >
                  Choose Photo
                </label>
              </div>
              <div style={{ flexGrow: 1 }}></div>
              <div className='edit-info'>
                <div style={{ display: 'flex', marginBottom: '8px' }}>
                  <InputField
                    id='category'
                    name='Category'
                    width='32%'
                    defaultValue='none'
                    isSelector={true}
                    isAddMode={true}
                  />
                  <InputField id='name' name='Name' width='32%' />
                  <InputField id='title' name='Title' width='32%' />
                </div>
                <div style={{ display: 'flex' }}>
                  <InputField id='genetic' name='Genetic Lineage' width='32%' />
                  <InputField id='breeder' name='Breeder' width='32%' />
                  <InputField id='pheno' name=' Pheno' width='32%' />
                </div>
                <div style={{ display: 'flex', margin: '8px 0' }}>
                  <InputField id='price' name='Price' width='23.5%' />
                  <InputField
                    id='flowerTime'
                    name='Flower Time'
                    width='23.5%'
                  />
                  <InputField id='flavor' name='Flavor' width='23.5%' />
                  <InputField id='quantity' name='Quantity' width='23.5%' />
                </div>
                <div style={{ display: 'flex', marginBottom: '8px' }}>
                  <InputField
                    id='desc'
                    name='Description'
                    width='100%'
                    inputWidth='90%'
                  />
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '90%',
                  }}
                >
                  <button
                    className={`btn-primary edit-btn ${btnDisabled}`}
                    type='submit'
                    style={{ width: '100%' }}
                    onClick={(e) => {
                      e.preventDefault()
                      addProduct()
                    }}
                  >
                    Add
                  </button>
                </div>
                <span
                  style={{
                    display: 'block',
                    cursor: 'pointer',
                    marginTop: '24px',
                  }}
                  onClick={() => navigate(-1)}
                >
                  &lt; Back
                </span>
              </div>
            </div>
          </form>

          <Footer color='#d3d3d3' padding='24px' />
        </header>
      </div>
    </div>
  )
}

export default Add
