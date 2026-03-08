import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>TechStore</h4>
          <p>Your trusted source for the latest laptops, smartphones, and tablets.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>techstore@email.com</p>
          <p>+1 (555) 123-4567</p>
          <p>Sofia, Bulgaria</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
