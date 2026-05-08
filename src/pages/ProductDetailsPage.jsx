import React from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import ProductDetails from '../components/ProductDetails.jsx'

function ProductDetailsPage({ products, loading, onDelete }) {
  const { id } = useParams()
  const navigate = useNavigate()

  const product = products.find(p => p.id === Number(id))

  const handleDelete = async () => {
    if (!window.confirm('Är du säker på att du vill ta bort denna produkt?')) {
      return
    }

    try {
      await onDelete(id)
      alert('Produkten har tagits bort!')
      navigate('/products')
    } catch (error) {
      console.error(error)
      alert('Kunde inte ta bort produkten: ' + error.message)
    }
  }

  if (loading) {
    return <div className="loading">Laddar produkt...</div>
  }

  if (!product) {
    return (
      <div>
        <h2>Produkten hittades inte</h2>
        <Link to="/products" className="back-link">← Tillbaka till produkter</Link>
      </div>
    )
  }

  return (
    <div>
      <Link to="/products" className="back-link">← Tillbaka till produkter</Link>

      <ProductDetails product={product} />

      <div className="detail-actions">
        <Link to={`/products/${id}/edit`}>
          <button>Redigera</button>
        </Link>
        <button onClick={handleDelete} className="delete-btn">
          Ta bort
        </button>
      </div>
    </div>
  )
}

export default ProductDetailsPage
