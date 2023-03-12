import React from "react"
import { useContext } from "react"
import { ProductContext } from "../../../contexts/ProductContext"
import ProductCard from "../../product-card/ProductCard"
import "./shop.scss"

const ShopComponent = () => {
  const { products } = useContext(ProductContext)
  return (
    <div className="products-container">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />
      })}
    </div>
  )
}

export default ShopComponent
