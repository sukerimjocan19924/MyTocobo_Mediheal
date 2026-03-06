import React, { useRef, useEffect } from 'react'
import "./styles/Best.scss"
import { bestData } from '../util/best'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';

const Best = () => {
  const prevRef = useRef(null)
  const swiperRef = useRef(null)

  useEffect(() => {

    if (swiperRef.current && swiperRef.current.params
    ) {
      swiperRef.current.navigation.destroy()
      swiperRef.current.navigation.init()
      swiperRef.current.navigation.update()
    }
  }, [])

  return (
    <div className='inner best-inner'>
      <h2 className='tit'>best</h2>

      <Swiper
        slidesPerView={4}
        spaceBetween={40}
        loop={true}
        pagination={{
          type: 'progressbar'
        }}
        modules={[Pagination, Navigation]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="best-slider"
      >
        {bestData.map((sl, i) => (
          <SwiperSlide key={i}>
            <a href="#">
              <div className="img-wrap">
                <img src={sl.image} alt={sl.name} />
              </div>

              <div className="info-wrap">
                <div className="name">
                  {sl.name}
                </div>
                <div className="info-tit">
                  {sl.title}
                </div>
                <div className="price-discount-wrap">
                  <div className="price-wrap">
                    <div className="price">
                      {sl.price}
                    </div>
                    <div className="original-price">
                      {sl.originalPrice}
                    </div>
                  </div>
                  <div className="discountRate-wrap">
                    {sl.discountRate}
                  </div>
                </div>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div> 
  )
}

export default Best