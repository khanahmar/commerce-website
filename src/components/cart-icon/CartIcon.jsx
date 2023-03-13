import React from "react"
import { ReactComponent as ShoppingIcon } from "../../assets/shoping-bag.svg"
import "./cart-icon.scss"
import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import CartItem from "../cart-item/CartItem"

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItems, cartCount } =
    useContext(CartContext)
  return (
    <div
      onClick={() => setIsCartOpen(!isCartOpen)}
      className="cart-icon-container"
    >
      <ShoppingIcon className="shopping-container" />
      <span className="item-count">{cartCount}</span>
    </div>
  )
}

export default CartIcon
