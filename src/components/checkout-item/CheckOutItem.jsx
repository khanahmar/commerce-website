import React from "react"
import "./checkout-item.scss"
import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"

const CheckOutItem = ({ cartItem }) => {
  const { increaseItem, decreaseItem, deleteTheItem } = useContext(CartContext)
  const { name, imageUrl, price, quantity } = cartItem

  const clearItemHandler = () => deleteTheItem(cartItem)
  const addItemHandler = () => increaseItem(cartItem)
  const removeItemHandler = () => decreaseItem(cartItem)

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt="" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <span onClick={removeItemHandler} className="arrow">
          &#10094;
        </span>
        <span className="value">{quantity}</span>
        <span onClick={addItemHandler} className="arrow">
          &#10095;
        </span>
      </span>
      <span className="price">{price}</span>
      <div onClick={clearItemHandler} className="remove-button">
        &#10005;
      </div>
    </div>
  )
}

export default CheckOutItem
