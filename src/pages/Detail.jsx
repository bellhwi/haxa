import { PayPalButtons } from '@paypal/react-paypal-js'
import { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar'

function Detail() {
  const { name } = useParams()
  const data = useSelector((state) => state.data)
  const product = data.find((item) => {
    return item.name == name
  })
  const navigate = useNavigate()

  function toPascalCase(str) {
    return (' ' + str).toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => {
      return chr.toUpperCase()
    })
  }

  function adjustHeight() {
    const containerElement = document.querySelector('.container')
    const headerElement = document.querySelector('.header')

    containerElement.style.minHeight = `${document.documentElement.clientHeight}px`
    headerElement.style.minHeight = `${document.documentElement.clientHeight}px`

    if (document.documentElement.clientWidth <= 768) {
      if (!document.querySelector('.navbar-logo').classList.contains('none')) {
        document.querySelector('.navbar-logo').classList.add('none')
      }
    } else {
      if (document.querySelector('.navbar-logo').classList.contains('none')) {
        document.querySelector('.navbar-logo').classList.remove('none')
      }
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    adjustHeight()
    window.addEventListener('resize', adjustHeight)
  }, [])

  return (
    <div className='bg-product'>
      <div className='container'>
        <header className='header'>
          <Navbar />
          <div
            className='header-container product-container'
            style={{ textAlign: 'left' }}
          >
            <div className='product'>
              <div className='product-img'>
                <img src={product.url} />
                <span className='product-back' onClick={() => navigate(-1)}>
                  &lt; Back
                </span>
              </div>
              <div className='product-info'>
                <nav className='products-nav product-nav'>
                  <Link to='/'>
                    <h4>Home</h4>
                  </Link>
                  <h4> &gt; </h4>
                  <Link to={`/${product.category}`}>
                    <h4>
                      {product.category == 'coming'
                        ? 'Coming Soon'
                        : toPascalCase(product.category)}
                    </h4>
                  </Link>
                  <h4> &gt; </h4>
                  <h4 style={{ color: '#fff' }}>{product.title}</h4>
                </nav>
                <div className='product-header'>
                  <h1 className='product-title'>{product.title}</h1>
                  <h2 className='product-price'>${product.price}</h2>
                </div>
                <hr
                  style={{
                    borderBottom: '0.5px solid #000',
                    margin: '26px 0',
                  }}
                />
                <div className='detail-container'>
                  <div className='product-detail'>
                    <h3>Genetic Lineage</h3>
                    <p>{product.genetic}</p>
                  </div>
                  <div className='product-detail'>
                    <h3>Breeder</h3>
                    <p>{product.breeder}</p>
                  </div>
                  <div className='product-detail'>
                    <h3>In Stock</h3>
                    <p>{product.quantity}</p>
                  </div>
                </div>
                <div className='detail-container'>
                  <div className='product-detail'>
                    <h3>Pheno</h3>
                    <p>{product.pheno}</p>
                  </div>
                  <div className='product-detail'>
                    <h3>Flower Time</h3>
                    <p>{product.flowerTime}</p>
                  </div>
                  <div className='product-detail'>
                    <h3>Flavor</h3>
                    <p>{product.flavor}</p>
                  </div>
                </div>
                <div
                  className='product-detail'
                  style={{ paddingBottom: '26px' }}
                >
                  <h3>Description</h3>
                  <p>{product.desc}</p>
                </div>
                <PayPalButtons
                  style={{ layout: 'horizontal' }}
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [
                        {
                          amount: {
                            value: product.price,
                          },
                        },
                      ],
                    })
                  }}
                />
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  )
}

export default Detail
