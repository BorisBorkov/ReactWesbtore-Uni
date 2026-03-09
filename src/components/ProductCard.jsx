function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <div className="product-info">
        <span className="product-price">${product.price}</span>
        <span className="product-rating">★ {product.rating}</span>
      </div>
    </div>
  )
}

export default ProductCard
