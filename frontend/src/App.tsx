import Header from './components/Header/Header'
import ProductGrid from './components/ProductGrid/ProductGrid'

import './App.css'


function App() {


  return (
    <>
      <Header />
      <div className="products">
        <ProductGrid />
      </div>
    </>
  )
}

export default App
