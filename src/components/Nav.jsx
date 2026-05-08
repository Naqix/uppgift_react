import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className="main-nav">
      <div className="nav-brand">
        <Link to="/">ProductManager</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Hem</Link></li>
        <li><Link to="/products">Produkter</Link></li>
        <li><Link to="/products/create">Ny produkt</Link></li>
      </ul>
    </nav>
  )
}

export default Nav
