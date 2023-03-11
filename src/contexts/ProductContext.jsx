import { createContext, useState } from "react"
import SHOP_DATA from "../shopData.json"

//as the actual value you want to access

export const ProductContext = createContext({
  products: [],
})

export const ProductProvider = ({ children }) => {
  const [products, setProduct] = useState(SHOP_DATA)

  const value = { products }

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  )
}
