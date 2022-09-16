import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Item from '../components/Item'
import { useSelector, useDispatch } from 'react-redux'
import { setData, setFilter, setFilteredItem } from '../store'
import { GrPowerReset } from 'react-icons/gr'

function Products({ page }) {
  const data = useSelector((state) => state.data)
  const filteredItem = useSelector((state) => state.filteredItem)
  const filter = useSelector((state) => state.filter)
  const filteredData = data.filter((item) => {
    return item.category == page
  })
  const [selectedFilter, setSelectedFilter] = useState('')
  const select = useRef(null)
  const dispatch = useDispatch()

  function toPascalCase(str) {
    return (' ' + str).toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => {
      return chr.toUpperCase()
    })
  }

  function sortProducts() {
    let dataCopy = [...data]
    if (select.current.value == 'lowToHigh') {
      dataCopy.sort((a, b) => {
        return parseInt(a.price) - parseInt(b.price)
      })
    } else if (select.current.value == 'highToLow') {
      dataCopy.sort((a, b) => {
        return parseInt(b.price) - parseInt(a.price)
      })
    } else if (select.current.value == 'latest') {
      dataCopy.sort((a, b) => {
        return parseInt(b.time) - parseInt(a.time)
      })
    } else if (select.current.value == 'popularity') {
      dataCopy.sort((a, b) => {
        return parseInt(b.quantity) - parseInt(a.quantity)
      })
    }

    dispatch(setData(dataCopy))
  }

  function setFilterInfo(dataArr) {
    let filter = { breeder: [], flowerTime: [], flavor: [] }
    let filterArr = ['breeder', 'flowerTime', 'flavor']

    let promise = new Promise((res) =>
      res(
        dataArr.forEach((data) => {
          filter['breeder'].push(data.breeder)
          filter['flowerTime'].push(data.flowerTime)
          filter['flavor'].push(data.flavor)
        })
      )
    )

    promise
      .then(() => {
        filterArr.forEach((info) => {
          filter[info] = new Set(filter[info])
          filter[info] = Array.from(filter[info])
          filter[info] = filter[info].sort()
        })
      })
      .then(() => {
        dispatch(setFilter(filter))
      })
  }

  function minifyString(str) {
    return str.trim().split(' ').join('').toLowerCase()
  }

  function resetFilter() {
    const selectedFilter = document.querySelector('.filter-selected')

    selectedFilter != null && selectedFilter.classList.remove('filter-selected')
    dispatch(setFilteredItem(''))
  }

  useEffect(() => {
    setFilterInfo(filteredData)
    dispatch(setFilteredItem([]))
  }, [])

  return (
    <div className='products' id='products'>
      <div className='products-top'>
        <nav className='products-nav'>
          <Link to='/'>
            <h4>Home</h4>
          </Link>
          <h4> &gt; </h4>
          <h4 className='products-title'>
            {page == 'coming' ? 'Coming Soon' : toPascalCase(page)}
          </h4>
        </nav>
        <div style={{ flexGrow: 1 }}></div>
        <div className='products-result'>
          <h4>
            {filteredItem != '' ? filteredItem.length : filteredData.length}{' '}
            results
          </h4>
        </div>
      </div>
      <hr></hr>

      <div className='products-filter'>
        <div className='filterby-container'>
          <select
            name='filterby'
            id='filterby'
            className='filter-container'
            defaultValue='default'
            onChange={(e) => {
              resetFilter()

              if (e.target.value == 'breeder') {
                setSelectedFilter('breeder')
              } else if (e.target.value == 'flavor') {
                setSelectedFilter('flavor')
              } else if (e.target.value == 'flowerTime') {
                setSelectedFilter('flowerTime')
              }
            }}
          >
            <option value='default' defaultValue disabled hidden>
              Filter by default
            </option>
            <option value='breeder'>Filter by breeder</option>
            <option value='flavor'>Filter by flavor</option>
            <option value='flowerTime'>Filter by flower time</option>
          </select>
        </div>
        <div style={{ flexGrow: '1' }}></div>
        <select
          name='filter'
          id='filter'
          ref={select}
          className='filter-container'
          defaultValue='latest'
          onChange={sortProducts}
        >
          <option value='latest'>Sort by latest</option>
          <option value='popularity'>Sort by popularity</option>
        </select>
      </div>

      <div className='filter-list'>
        {selectedFilter != '' ? (
          <small className='filter-clear' onClick={resetFilter}>
            <GrPowerReset
              style={{
                pointerEvents: 'none',
                position: 'relative',
                top: '2px',
              }}
            />{' '}
            Reset
          </small>
        ) : null}

        {selectedFilter != ''
          ? filter[selectedFilter].map((name, index) => {
              return (
                <small
                  className='filter-icon'
                  key={index}
                  onClick={(e) => {
                    if (document.querySelector('.filter-selected') != null) {
                      document
                        .querySelector('.filter-selected')
                        .classList.remove('filter-selected')
                    }
                    e.currentTarget.classList.toggle('filter-selected')
                    const filteredProducts = filteredData.filter((item) => {
                      return (
                        minifyString(item[selectedFilter]) ==
                        minifyString(e.target.innerText)
                      )
                    })

                    dispatch(setFilteredItem(filteredProducts))
                  }}
                >
                  {name}
                </small>
              )
            })
          : null}
      </div>

      <div className='products-container grid-4'>
        {filteredItem != ''
          ? filteredItem.map((item, index) => {
              return (
                <Item
                  key={index}
                  name={item.name}
                  title={item.title}
                  price={item.price}
                  url={item.url}
                />
              )
            })
          : filteredData.map((item, index) => {
              return (
                <Item
                  key={index}
                  name={item.name}
                  title={item.title}
                  price={item.price}
                  url={item.url}
                />
              )
            })}
      </div>
    </div>
  )
}

export default Products
