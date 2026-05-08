import React, { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import ProductForm from '../components/ProductForm.jsx'

function EditProductPage({ products, loading, onUpdate }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const [error, setError] = useState(null)

  const product = products.find(p => p.id === Number(id))

  const handleSubmit = async (formData) => {
    try {
      setError(null)
      await onUpdate(id, formData)
      alert('Produkten har uppdaterats!')
      navigate(`/products/${id}`)
    } catch (err) {
      console.error(err)
      setError(err.message)
      alert('Kunde inte uppdatera produkten: ' + err.message)
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
      <Link to={`/products/${id}`} className="back-link">← Tillbaka till produkt</Link>
      <h1>Redigera produkt</h1>

      {error && <p className="error">{error}</p>}

      <ProductForm
        initialData={product}
        onSubmit={handleSubmit}
        buttonText="Spara ändringar"
      />
    </div>
  )
}

export default EditProductPage
