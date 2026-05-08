import React from 'react'
import { Link } from 'react-router-dom'
import ProductList from '../components/ProductList.jsx'

function ProductsPage({ products, loading, error }) {
  if (loading) {
    return <div className="loading">Laddar produkter...</div>
  }

  if (error) {
    return (
      <div className="error">
        <h2>Något gick fel</h2>
        <p>{error}</p>
      </div>
    )
  }

  return (
    <div>
      <h1>Alla produkter</h1>
      <Link to="/products/create">
        <button>Lägg till ny produkt</button>
      </Link>
      <ProductList products={products} />
    </div>
  )
}

export default ProductsPage
