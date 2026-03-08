import { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard'

function Products() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      fetch('https://dummyjson.com/products/category/laptops').then(res => res.json()),
      fetch('https://dummyjson.com/products/category/smartphones').then(res => res.json()),
      fetch('https://dummyjson.com/products/category/tablets').then(res => res.json()),
    ]).then(([laptops, phones, tablets]) => {
      setProducts([...laptops.products, ...phones.products, ...tablets.products])
      setLoading(false)
    })
  }, [])

  if (loading) {
    return <div className="page"><p>Loading products...</p></div>
  }

  return (
    <div className="page">
      <h1>Products</h1>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Products
