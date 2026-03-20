import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './Navbar.css'

function Navbar() {
  const { user, logout } = useAuth()

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">TechStore</Link>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="navbar-auth">
        {user ? (
          <>
            <span className="navbar-user">Hello, {user.name}</span>
            <button onClick={logout} className="navbar-logout-btn">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="navbar-auth-link">Login</Link>
            <Link to="/register" className="navbar-auth-link">Register</Link>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar
