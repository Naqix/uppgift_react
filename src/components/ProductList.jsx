import React from 'react'
import ProductCard from './ProductCard.jsx'

function ProductList({ products }) {
  if (!products.length) {
    return <p>Inga produkter hittades.</p>
  }

  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductList
