import React from 'react'

function ProductDetails({ product }) {
  return (
    <div className="product-details">
      <div className="product-details-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-details-info">
        <h2>{product.title}</h2>
        <p className="product-price">{product.price} kr</p>
        <p className="product-category">Kategori: {product.category}</p>
        <p className="product-description">{product.description}</p>
        {product.rating && (
          <p className="product-rating">
            Betyg: {product.rating.rate}/5 ({product.rating.count} recensioner)
          </p>
        )}
      </div>
    </div>
  )
}

export default ProductDetails
