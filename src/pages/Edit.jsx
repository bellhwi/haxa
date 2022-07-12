import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { db } from '../firebase'
import { doc, updateDoc, deleteDoc } from 'firebase/firestore'
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage'
import { Oval } from 'react-loading-icons'
import { setLastUpdatedTime } from '../store'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import InputField from '../components/InputField'

function Edit() {
  const { name } = useParams()
  const [updatedImg, setUpdatedImg] = useState(null)
  const [showAlert, setShowAlert] = useState(false)
  const [btnDisabled, setBtnDisabled] = useState('')
  const [isPhotoChanged, setIsPhotoChanged] = useState(false)
  const storage = getStorage()
  const data = useSelector((state) => state.data)
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
  const product = data.find((item) => {
    return item.name == name
  })
  const docRef = doc(db, 'products', product.name)
  let updatedInfoObj = {
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
  const dispatch = useDispatch()
  const navigate = useNavigate()
  function getTime() {
    const today = new Date()
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]
    const date =
      monthNames[today.getMonth()] +
      ' ' +
      today.getDate() +
      ', ' +
      today.getFullYear()

    return date + ' @ ' + today.timeNow()
  }
  function updatePhoto() {
    uploadBytes(
      ref(storage, updatedInfoObj['pid']),
      document.querySelector('#edit-upload').files[0]
    ).then(() => {
      getDownloadURL(ref(storage, updatedInfoObj['pid']))
        .then((url) => {
          updateDoc(docRef, { url: url })
        })
        .then(() => (window.location.href = '/admin'))
    })
  }
  function updateProduct() {
    setShowAlert(true)
    dispatch(setLastUpdatedTime(getTime()))

    Promise.resolve('Success')
      .then(() => {
        isPhotoChanged && deleteObject(ref(storage, `/${product.pid}`))
      })
      .then(() => {
        const elapsedTime = Date.now().toString()
        inputIdArr.forEach((id) => {
          updatedInfoObj[id] = document.getElementById(id).value
        })
        updatedInfoObj['pid'] = elapsedTime
      })
      .then(() => updateDoc(docRef, updatedInfoObj))
      .then(() =>
        updateDoc(doc(db, 'last-updated', 'updated'), { time: getTime() })
      )
      .then(() => {
        isPhotoChanged ? updatePhoto() : (window.location.href = '/admin')
      })
  }
  function deleteProduct() {
    const text = 'Are you sure you want to delete this product?'

    if (!window.confirm(text)) return

    setShowAlert(true)
    dispatch(setLastUpdatedTime(getTime()))

    const promise = new Promise((res) => {
      res(updateDoc(doc(db, 'last-updated', 'updated'), { time: getTime() }))
    })

    promise
      .then(() => deleteDoc(doc(db, 'products', product.name)))
      .then(() => deleteObject(ref(storage, `/${product.pid}`)))
      .then(() => (window.location.href = '/admin'))
  }

  useEffect(() => {
    document.title = `${product.title} - Admin`
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
            onSubmit={(e) => {
              e.preventDefault()
              updateProduct()
            }}
            onChange={() => {
              const inputElements = [
                ...document.querySelectorAll('input[type=text]'),
                document.querySelector('select'),
              ]

              const emptyValue = inputElements.find((element) => {
                return element.value == ''
              })

              emptyValue == undefined
                ? setBtnDisabled('')
                : setBtnDisabled('btn-disabled')
            }}
          >
            <div className='edit'>
              <div className='edit-img'>
                <img src={updatedImg == null ? product.url : updatedImg} />
                <input
                  accept='image/*'
                  type='file'
                  id='edit-upload'
                  onChange={() => {
                    setIsPhotoChanged(true)

                    const [file] = document.querySelector('#edit-upload').files

                    if (file) {
                      setUpdatedImg(URL.createObjectURL(file))
                    }
                  }}
                  hidden
                />
                <label
                  htmlFor='edit-upload'
                  className='btn-secondary edit-addPhoto'
                >
                  Change Photo
                </label>
              </div>
              <div style={{ flexGrow: 1 }}></div>
              <div className='edit-info'>
                <div style={{ display: 'flex', marginBottom: '8px' }}>
                  <InputField
                    id='category'
                    name='Category'
                    width='32%'
                    defaultValue={product.category.toLowerCase()}
                    isSelector={true}
                  />
                  <InputField
                    id='name'
                    name='Name'
                    width='32%'
                    defaultValue={product.name}
                    readOnly={true}
                  />
                  <InputField
                    id='title'
                    name='Title'
                    width='32%'
                    defaultValue={product.title}
                  />
                </div>
                <div style={{ display: 'flex' }}>
                  <InputField
                    id='genetic'
                    name='Genetic Lineage'
                    width='32%'
                    defaultValue={product.genetic}
                  />
                  <InputField
                    id='breeder'
                    name='Breeder'
                    width='32%'
                    defaultValue={product.breeder}
                  />
                  <InputField
                    id='pheno'
                    name='Pheno'
                    width='32%'
                    defaultValue={product.pheno}
                  />
                </div>

                <div style={{ display: 'flex', margin: '8px 0' }}>
                  <InputField
                    id='price'
                    name='Price'
                    width='23.5%'
                    defaultValue={product.price}
                  />
                  <InputField
                    id='flowerTime'
                    name='Flower Time'
                    width='23.5%'
                    defaultValue={product.flowerTime}
                  />
                  <InputField
                    id='flavor'
                    name='Flavor'
                    width='23.5%'
                    defaultValue={product.flavor}
                  />
                  <InputField
                    id='quantity'
                    name='Quantity'
                    width='23.5%'
                    defaultValue={product.quantity}
                  />
                </div>
                <InputField
                  id='desc'
                  name='Description'
                  width='100%'
                  inputWidth='90%'
                  defaultValue={product.desc}
                />
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
                  >
                    Save Changes
                  </button>
                  <button
                    className='btn-secondary edit-btn '
                    style={{ width: '33%' }}
                    onClick={(e) => {
                      e.preventDefault()
                      deleteProduct()
                    }}
                  >
                    Delete
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

export default Edit
