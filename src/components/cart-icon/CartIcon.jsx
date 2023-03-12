import React from "react"
import { ReactComponent as ShoppingIcon } from "../../assets/shoping-bag.svg"
import "./cart-icon.scss"
import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext)
  return (
    <div
      onClick={() => setIsCartOpen(!isCartOpen)}
      className="cart-icon-container"
    >
      <ShoppingIcon className="shopping-container" />
      <span className="item-count">0</span>
    </div>
  )
}

export default CartIcon
