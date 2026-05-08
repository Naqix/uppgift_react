import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-info">
        <h3>{product.title}</h3>
        <p className="product-price">{product.price} kr</p>
        <p className="product-category">{product.category}</p>
        <Link to={`/products/${product.id}`}>
          <button>Visa detaljer</button>
        </Link>
      </div>
    </div>
  )
}

export default ProductCard
