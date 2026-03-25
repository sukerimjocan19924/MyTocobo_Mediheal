import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import './styles/Hero.scss';
import { heroSlides } from '../util/hero';

const Hero = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getImageByDevice = (image) => {
    if (windowWidth <= 650) return image.mobile;
    if (windowWidth <= 1024) return image.tablet;
    return image.desktop;
  };

  return (
    <div className="hero-container">
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{
          el: '.swiper-pagination',
          type: 'fraction',
        }}
        navigation={{
          nextEl: '.arr-next',
          prevEl: '.arr-prev',
        }}
        className="hero-slider"
        loop={true}
      >
        {heroSlides.map((slide) => (
          <SwiperSlide
            className={`hero-slide ${slide.id}`}
            style={{ backgroundImage: `url(${getImageByDevice(slide.image)})` }}
            key={slide.id}
          >
            <div className="inner">
              <div className="t-wrap">
                <h2
                  className="tit"
                  dangerouslySetInnerHTML={{ __html: slide.title }}
                />
                <p className="txt">{slide.subtitle}</p>
                <a href={slide.ctaHref} className="btn">
                  {slide.ctaText}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="hero-nav">
          <div className="arr-prev">prev</div>
          <div className="swiper-pagination"></div>
          <div className="arr-next">next</div>
        </div>
      </Swiper>
    </div>
  );
};

export default Hero;