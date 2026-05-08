import React, { useState } from 'react'

function ProductForm({ initialData, onSubmit, buttonText }) {
  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    price: initialData?.price || '',
    description: initialData?.description || '',
    category: initialData?.category || '',
    image: initialData?.image || ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.title.trim() || !formData.price) {
      alert('Titel och pris är obligatoriska')
      return
    }

    onSubmit({
      ...formData,
      price: Number(formData.price)
    })
  }

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <div className="form-group">
        <label htmlFor="title">Titel:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Produktnamn"
        />
      </div>

      <div className="form-group">
        <label htmlFor="price">Pris:</label>
        <input
          type="number"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="0"
          min="0"
          step="0.01"
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Beskrivning:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Produktbeskrivning"
          rows="5"
        />
      </div>

      <div className="form-group">
        <label htmlFor="category">Kategori:</label>
        <input
          type="text"
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="t.ex. electronics"
        />
      </div>

      <div className="form-group">
        <label htmlFor="image">Bild-URL:</label>
        <input
          type="text"
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="https://..."
        />
      </div>

      <button type="submit">{buttonText}</button>
    </form>
  )
}

export default ProductForm
