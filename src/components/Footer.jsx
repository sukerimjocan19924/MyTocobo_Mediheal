import React ,{useState,useEffect,useRef }from 'react'
import {
  logoData,
  companyData,
  customerCenterData,
  footerMenus,
  socialLinks,
  footerLegal
} from '../util/footer'
import "./styles/Footer.scss"

const Footer = () => {

  const [isOpen, setIsOpen]=useState(false)
  const hiddenContentRef = useRef(null)

  useEffect(()=>{
    const handelResize = () => {
      setIsOpen(window.innerWidth>=1111)
    }
    handelResize()

    window.addEventListener('resize', handelResize)

    return () => window.removeEventListener('resize', handelResize)
  }, [])

  useEffect(()=>{

    const el = hiddenContentRef.current

    if(isOpen){
      el.style.height =`${el.scrollHeight}px`
      
      const onTransitionEnd =()=>{
        el.style.height='auto'
        el.removeEventListener('transitionend', onTransitionEnd)
      }
      el.addEventListener('transitionend', onTransitionEnd)
    } else {
      el.style.height =`${el.scrollHeight}px`
      void el.offsetHeight

      el.style.height = '0px'

    }


  },[isOpen])

  return (
    <footer>
      <div className='inner footer-inner'>
        <div className="left">
          <h3>
            <a href={logoData.href}>
              <img src={logoData.src} alt={logoData.alt} />
            </a>
          </h3>
          <ul className="foot-list-1">
            {/* companyData */}
            {companyData.map((line, i) => (
              <li key={i}>
                {line}
              </li>
            ))}
          </ul>
          <div className="footer-legal">
            <p>{footerLegal.copyright}</p>
            <div className="legal-links">
              {footerLegal.links.map((item, i) => (
                <a href={item.href} key={i}>
                  {item.label}
                </a>
              ))}
            </div>

          </div>
        </div>

        <div className="center">
          <div className="foot-menus">
            {footerMenus.map((menu, i) => (
              <div key={i}>
                <h4 className='title_menu'>{menu.title}</h4>
                <ul>
                  {menu.items.map((item, j) => (
                    <li key={j}>
                      <a href={item.href}>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        <div className="right">
          <div className='cus-wrap'>
            <h4>
              {customerCenterData.title}
            </h4>
            <div className="hidden" ref={hiddenContentRef}>
              <p className="cs-box">
                <a href={customerCenterData.tel.href}>
                  {customerCenterData.tel.value}
                </a>
              </p>
              <p>{customerCenterData.open}</p>
              <p>{customerCenterData.lunch}</p>
              <p>{customerCenterData.close}</p>
              <a className='talk-btn' href={customerCenterData.talk.href}>
                {customerCenterData.talk.label}
              </a>
            </div>
          </div>
          <ul className="sns-links">
            {socialLinks.map((sns) => (
              <li key={sns.id}>
                <a href={sns.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  title={sns.label}
                  aria-label={sns.label}>
                  {React.createElement(sns.icon, {
                    size: 22, "aria-hidden": true
                  })}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
    
  )
}

export default Footer