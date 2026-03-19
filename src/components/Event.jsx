import React from 'react'
import "./styles/Event.scss"
import { eventData } from '../util/event'

const Event = () => {
  return (
    <div className='inner event-inner'>
        <div className="img-wrap">
            <img src={eventData.media.src} alt={eventData.media.alt} />
        </div>

        <div className="t-wrap">
            <p className="txt-2">
                {eventData.eyebrow}
            </p>
            <h2 className="tit" dangerouslySetInnerHTML={{__html:eventData.title}}/>
            <p 
            className="txt-1" 
            dangerouslySetInnerHTML={{__html:eventData.description}}
            />
            <a href={eventData.cta.href} className="btn">
                {eventData.cta.label}
            </a>
        </div>
    </div>
  )
}

export default Event