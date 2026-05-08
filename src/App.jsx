import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav.jsx'
import Home from './pages/Home.jsx'
import ProductsPage from './pages/ProductsPage.jsx'
import ProductDetailsPage from './pages/ProductDetailsPage.jsx'
import CreateProductPage from './pages/CreateProductPage.jsx'
import EditProductPage from './pages/EditProductPage.jsx'
import { getAll, create, update, remove } from './api/productApi.js'

function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        setError(null)
        const data = await getAll()
        setProducts(data)
      } catch (err) {
        console.error(err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const handleCreate = async (productData) => {
    const newProduct = await create(productData)
    setProducts(prev => [...prev, { ...newProduct, id: Date.now() }])
  }

  const handleUpdate = async (id, productData) => {
    await update(id, productData)
    setProducts(prev =>
      prev.map(p => p.id === Number(id) ? { ...p, ...productData } : p)
    )
  }

  const handleDelete = async (id) => {
    await remove(id)
    setProducts(prev => prev.filter(p => p.id !== Number(id)))
  }

  return (
    <BrowserRouter>
      <Nav />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={
            <ProductsPage
              products={products}
              loading={loading}
              error={error}
            />
          } />
          <Route path="/products/create" element={
            <CreateProductPage onCreate={handleCreate} />
          } />
          <Route path="/products/:id" element={
            <ProductDetailsPage
              products={products}
              loading={loading}
              onDelete={handleDelete}
            />
          } />
          <Route path="/products/:id/edit" element={
            <EditProductPage
              products={products}
              loading={loading}
              onUpdate={handleUpdate}
            />
          } />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
