import { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard'

function Products() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadProducts() {
      const response1 = await fetch('https://dummyjson.com/products/category/laptops')
      const laptops = await response1.json()

      const response2 = await fetch('https://dummyjson.com/products/category/smartphones')
      const phones = await response2.json()

      const response3 = await fetch('https://dummyjson.com/products/category/tablets')
      const tablets = await response3.json()

      const allProducts = laptops.products.concat(phones.products, tablets.products)
      setProducts(allProducts)
      setLoading(false)
    }

    loadProducts()
  }, [])

  if (loading) {
    return <div className="page"><p>Loading products...</p></div>
  }

  return (
    <div className="page">
      <div className="products-header">
        <h1>Our Products</h1>
        <p>Showing {products.length} products across laptops, smartphones, and tablets.</p>
      </div>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Products
