import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import ProductForm from '../components/ProductForm.jsx'

function CreateProductPage({ onCreate }) {
  const navigate = useNavigate()
  const [error, setError] = useState(null)

  const handleSubmit = async (formData) => {
    try {
      setError(null)
      await onCreate(formData)
      alert('Produkten har skapats!')
      navigate('/products')
    } catch (err) {
      console.error(err)
      setError(err.message)
      alert('Kunde inte skapa produkten: ' + err.message)
    }
  }

  return (
    <div>
      <Link to="/products" className="back-link">← Tillbaka till produkter</Link>
      <h1>Skapa ny produkt</h1>

      {error && <p className="error">{error}</p>}

      <ProductForm
        onSubmit={handleSubmit}
        buttonText="Skapa produkt"
      />
    </div>
  )
}

export default CreateProductPage
