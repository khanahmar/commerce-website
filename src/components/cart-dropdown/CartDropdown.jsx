import React from "react"
import Buttton from "../button/Button"
import "./cart-dropdown.scss"
import CartItem from "../cart-item/CartItem"
import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import { Link } from "react-router-dom"

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext)
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((product) => {
          return <CartItem key={product.id} cartItem={product} />
        })}
      </div>
      <Link to={"/checkout"} className="nav-link">
        <Buttton>CHECKOUT</Buttton>
      </Link>
    </div>
  )
}

export default CartDropdown
