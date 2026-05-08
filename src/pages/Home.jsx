import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="home">
      <h1>Välkommen till ProductManager</h1>
      <p>Hantera produkter med en enkel CRUD app.</p>
      <Link to="/products">
        <button>Se alla produkter</button>
      </Link>
    </div>
  )
}

export default Home
