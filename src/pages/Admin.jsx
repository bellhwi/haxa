import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAuth } from 'firebase/auth'
import Navbar from '../components/Navbar'
import Item from '../components/Item'
import Footer from '../components/Footer'

function Admin() {
  const [searchName, setSearchName] = useState('')
  const data = useSelector((state) => state.data)
  const filteredData = data.filter((item) => {
    return item.name.includes(searchName)
  })
  const navigate = useNavigate()
  const auth = getAuth()

  useEffect(() => {
    if (auth == null) {
      navigate('/')
    }

    document.title = 'Admin - HAXA'
  }, [])

  return (
    <div className='bg-admin'>
      <div className='container'>
        <header className='header'>
          <Navbar />
          <div className='header-container' style={{ flexDirection: 'column' }}>
            <div className='admin'>
              <div className='input-search'>
                <input
                  type='text'
                  placeholder='Search by the product name'
                  autoFocus
                  onChange={(e) => {
                    setSearchName(e.target.value)
                  }}
                />
              </div>
              <div className='admin-add'>
                <button
                  className='btn-secondary'
                  onClick={() => {
                    navigate('/admin/add')
                  }}
                >
                  Add
                </button>
              </div>
            </div>
            <div className='w-100 admin-products'>
              <div className='grid-5'>
                {filteredData
                  .sort((a, b) => {
                    let textA = a.name.toUpperCase()
                    let textB = b.name.toUpperCase()
                    return textA < textB ? -1 : textA > textB ? 1 : 0
                  })
                  .map((item, index) => {
                    return (
                      <Item
                        key={index}
                        isAdminMode={true}
                        name={item.name}
                        color='#fff'
                        bgColor='#000'
                        title={item.title}
                        price={item.price}
                        url={item.url}
                      />
                    )
                  })}
              </div>
            </div>
          </div>

          <Footer color='#d3d3d3' />
        </header>
      </div>
    </div>
  )
}

export default Admin
