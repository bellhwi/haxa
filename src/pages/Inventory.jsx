import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth } from 'firebase/auth'
import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Inventory() {
  const [searchName, setSearchName] = useState('')
  const data = useSelector((state) => state.data)
  const filteredData = data.filter((item) => {
    return item.title.toLowerCase().replace(/\s/g, '').includes(searchName)
  })
  const lastUpdatedTime = useSelector((state) => state.lastUpdatedTime)
  const navigate = useNavigate()
  const auth = getAuth()

  useEffect(() => {
    if (auth.currentUser != null) {
      window.scrollTo(0, 0)
      document.title = 'Inventory - HAXA'
    } else {
      navigate('/')
    }
  }, [])

  return (
    <div className='bg-inventory'>
      <div className='container'>
        <header className='header'>
          <Navbar />
          <div className='header-container'>
            <div style={{ width: '100%' }}>
              <h2 className='inventory-title'>Real-Time Inventory</h2>
              <p className='inventory-time'>
                Last updated on <span>&nbsp;{lastUpdatedTime}</span>
              </p>
              <div className='input-search'>
                <input
                  type='text'
                  placeholder='Search by the product name'
                  onChange={(e) => {
                    setSearchName(
                      e.target.value.toLowerCase().replace(/\s/g, '')
                    )
                  }}
                />
              </div>
              <table className='inventory-table'>
                <thead>
                  <tr>
                    <th>
                      <h4>Name</h4>
                    </th>
                    <th>
                      <h4>Unit Price</h4>
                    </th>
                    <th>
                      <h4>Quantity In Stock</h4>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.title}</td>
                        <td>${item.price}</td>
                        <td>{item.quantity}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <Footer color='#d3d3d3' />
        </header>
      </div>
    </div>
  )
}

export default Inventory
