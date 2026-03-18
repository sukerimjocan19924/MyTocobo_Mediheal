import { useState ,useEffect} from 'react'
import './styles/main.scss'
import Header from './components/Header'
import Hero from './sections/Hero'
import Showcase from './sections/Showcase'
import Beyond from './sections/Beyond'
import Products from './sections/Products'
import Footer from './components/Footer'
import TopBanner from './components/TopBanner'
import FixedTopBtn from './components/FixedTopBtn'

function App() {
  const [topBanner, setTopBanner]=useState('')
  const [isScrolled, setIsScrolled]=useState(false)

  const [mNavOpen, setMNavOpen] = useState(false)

  const handleMNavOpen = () => setMNavOpen(true)
  const handleMNavClose = () => setMNavOpen(false)

  useEffect(()=>{

    document.body.style.overflow=mNavOpen?'hidden':''

  },[mNavOpen])

  useEffect(()=>{

    const handleScroll =()=>{
      const scrollTop=window.scrollY

      setIsScrolled(scrollTop>200)

      // console.log(scrollTop)
    }

    window.addEventListener('scroll',handleScroll)

  },[])

  const upTopBanner =()=>{
    setTopBanner('up')
  }

  return (
    <div className={`app-container ${topBanner} ${isScrolled? 'scrolled':''} `}>
      <FixedTopBtn/>
      <TopBanner  onClick={upTopBanner}/>
      <Header
        mNavOpen={mNavOpen}
        onNavOpen={handleMNavOpen}
        onNavClose={handleMNavClose} />
      <main>
        <section id="hero" className='section'>
          <Hero />
        </section>
        <section id="showcase" className='section'>
          <Showcase />
        </section>
        <section id="beyond" className='section'>
          <Beyond />
        </section>
        <section id="products" className='section'>
          <Products />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App