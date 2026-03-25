import React, { useState, useRef, useEffect } from 'react'
import "./styles/Best.scss"
import { bestData } from '../util/best'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';

const Best = () => {
  const swiperRef = useRef(null)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const slidesPerViewNum = () => {
    if (windowWidth <= 520) return 1;
    if (windowWidth <= 685) return 1.5;
    if (windowWidth <= 910) return 2;
    if (windowWidth <= 1024) return 2.5;
    if (windowWidth <= 1400) return 3;
    return 4;
  };

  const spaceBetweenNum = () => {
    if (windowWidth <= 1200) return 40;
    if (windowWidth <= 1400) return 80;
    return 40;
  };

  const addCommas = (num) => {
    return num.toLocaleString() + "원"
  }

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

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
        slidesPerView={slidesPerViewNum()}
        spaceBetween={spaceBetweenNum()}
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
                <span className='img-tit'>best</span>
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
                      {addCommas(sl.price)}
                    </div>
                    <div className="original-price">
                      {addCommas(sl.originalPrice)}
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