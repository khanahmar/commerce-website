import React from "react"
import Buttton from "../button/Button"
import "./cart-dropdown.scss"

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items"></div>
      <Buttton>CHECKOUT</Buttton>
    </div>
  )
}

export default CartDropdown
