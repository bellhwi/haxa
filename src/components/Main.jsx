import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import Item from './Item'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

function Main({ page, title, desc, swiper }) {
  const navigate = useNavigate()
  const data = useSelector((state) => state.data)
  const filteredData = data.filter((item) => {
    return item.category == page.toLowerCase()
  })

  return (
    <section className='main-section'>
      <div className='w-100'>
        <h4 className='main-title'>{title}</h4>
        <p className='main-desc'>{desc}</p>
      </div>
      <div className='page-move'>
        <small onClick={() => navigate(`/${page}`)}>Show More &gt;</small>
      </div>

      <div className='swiper-container'>
        {swiper ? (
          <Swiper
            breakpoints={{
              // when window width is >= 768px
              768: {
                slidesPerView: 4,
              },
            }}
            slidesPerView={2}
            spaceBetween={8}
            slidesPerGroup={1}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className='swiper-main'
          >
            {filteredData.slice(0, 6).map((item, index) => {
              return (
                <SwiperSlide className='swiper-slide' key={index}>
                  <div
                    className='slide-container'
                    onClick={() => {
                      navigate(`/product/${item.name}`)
                    }}
                  >
                    <img src={item.url} />
                    <div className='slide-info item-info'>
                      <h4>{item.title}</h4>
                      <p>
                        $<span className='item-price'>{item.price}</span>
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        ) : page == 'premiums' ? (
          <div className='main-grid'>
            <div className='grid-2'>
              {filteredData.slice(0, 2).map((item, index) => {
                return (
                  <Item
                    key={index}
                    title={item.title}
                    name={item.name}
                    price={item.price}
                    url={item.url}
                  />
                )
              })}
            </div>
            <div className='grid-3'>
              {filteredData.slice(2, 5).map((item, index) => {
                return (
                  <Item
                    key={index}
                    title={item.title}
                    name={item.name}
                    price={item.price}
                    url={item.url}
                  />
                )
              })}
            </div>
          </div>
        ) : (
          <div className='main-grid'>
            <div className='grid-3'>
              {filteredData.slice(0, 3).map((item, index) => {
                return (
                  <Item
                    key={index}
                    title={item.title}
                    name={item.name}
                    price={item.price}
                    url={item.url}
                  />
                )
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Main
