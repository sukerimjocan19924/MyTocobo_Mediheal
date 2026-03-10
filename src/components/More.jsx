import React from 'react'
import "./styles/More.scss"
import { more } from '../util/more'

const More = () => {
  const item = more[0];

  return (
    <div className='inner more-inner'>
      <div className='more-bg' style={{backgroundImage:`url(${item.image.desktop})`}}>
        <div className="txt-wrap">
          <div className="text-wrap">
            <div className="title">
              {item.title}
            </div>
            <div className="subtitle">
              {item.subtitle}
            </div>
          </div>

          <div className="btn-wrap">
            <a href={item.moreHref} className='more-btn'>
              {item.btn}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default More