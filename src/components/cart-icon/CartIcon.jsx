import React from "react"
import ShopBag from "./shoping-bag.svg"

const CartIcon = () => {
  return (
    <div className="cart-icon-container">
      <ShopBag className="shopping-icon" />
      <span className="item">0</span>
    </div>
  )
}

export default CartIcon
