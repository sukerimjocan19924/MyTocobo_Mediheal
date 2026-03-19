import React, {useState} from 'react'
import "./styles/Products.scss"
import productsData from '../util/products'

const Products = () => {
  const [activeTab, setActiveTab] = useState(productsData[0].id)

  const currentTab =
    productsData.find((tab) => tab.id === activeTab) || productsData[0]

  return (
    <section className="product-tab-section">
      <h2 className='tit'>products</h2>
      
      <div className="tab-menu">
        {productsData.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="tab-layout">
        <div className="main-product">
          <img
            src={currentTab.mainProduct.image}
            alt={currentTab.mainProduct.alt}/>

          <div className="main-product-text">
            <h3 dangerouslySetInnerHTML={{ __html: currentTab.mainProduct.description }}></h3>
            <a  href={currentTab.mainProduct.link}>MORE SEE →</a>
          </div>
        </div>

        <div className="sub-product-grid">
          {currentTab.subProducts.map((product, index) => (
            <a
              key={`${product.link}-${index}`}
              href={product.link}
              className="sub-product-card"
            >
              <img src={product.image} alt={product.alt} />

              <div className="sub-product-hover">
                <p dangerouslySetInnerHTML={{ __html: product.description }}></p>
                <span>제품 보러가기 →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products