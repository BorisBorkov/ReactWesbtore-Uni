import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <div className="hero">
        <p className="hero-tag">The best tech deals online</p>
        <h1>Welcome to TechStore</h1>
        <p>Your one-stop shop for laptops, smartphones, and tablets at great prices.</p>
        <Link to="/products" className="hero-btn">Browse Products</Link>
      </div>
      <div className="page features">
        <div className="feature">
          <div className="feature-icon">🖥</div>
          <h3>Wide Selection</h3>
          <p>Laptops, phones, and tablets from top brands all in one place.</p>
        </div>
        <div className="feature">
          <div className="feature-icon">💰</div>
          <h3>Best Prices</h3>
          <p>Competitive pricing and deals on all our tech products.</p>
        </div>
        <div className="feature">
          <div className="feature-icon">⚡</div>
          <h3>Fast Support</h3>
          <p>Got questions? Our team responds within 24 hours.</p>
        </div>
      </div>
      <div className="page cta-section">
        <h2>Ready to upgrade your tech?</h2>
        <p>Check out our latest collection of products.</p>
        <Link to="/products" className="hero-btn">Shop Now</Link>
      </div>
    </div>
  )
}

export default Home
