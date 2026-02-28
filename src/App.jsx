
import './styles/main.scss'
import Header from './components/Header'
import Hero from './sections/Hero'
import Showcase from './sections/Showcase'
import Beyond from './sections/Beyond'
import Products from './sections/Products'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header />
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
    </>
  )
}

export default App