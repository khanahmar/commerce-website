import { createContext, useState, useEffect } from "react"

const deleteItem = (cartItems, productToDelete) => {
  const filteredItems = cartItems.filter((cartItem) => {
    if (cartItem.id !== productToDelete.id) {
      return cartItem
    }
  })
  return filteredItems
}

const increaseItemQuantity = (cartItems, productToIncrease) => {
  const newArr = cartItems.map((cartItem) =>
    cartItem.id === productToIncrease.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
  )
  return newArr
}

const decreaseItemQuantity = (cartItems, productToDecrease) => {
  const newArr = cartItems.map((cartItem) => {
    if (cartItem.id === productToDecrease.id && cartItem.quantity === 0) {
      return { ...cartItem, quantity: 0 }
    } else if (cartItem.id === productToDecrease.id) {
      return { ...cartItem, quantity: cartItem.quantity - 1 }
    } else {
      return cartItem
    }
  })
  return newArr
}

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find((item) => item.id === productToAdd.id)
  if (existingCartItem) {
    return cartItems.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }]
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  total: 0,
})

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const [cartTotal, setCartTotal] = useState(0)

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    )
    setCartCount(newCartCount)
  }, [cartItems])

  useEffect(() => {
    const totalPrice = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    )
    setCartTotal(totalPrice)
  }, [cartItems])

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd))
  }

  const increaseItem = (productToIncrease) => {
    setCartItems(increaseItemQuantity(cartItems, productToIncrease))
  }

  const decreaseItem = (productToDecrease) => {
    setCartItems(decreaseItemQuantity(cartItems, productToDecrease))
  }

  const deleteTheItem = (productToDelete) => {
    setCartItems(deleteItem(cartItems, productToDelete))
  }

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
    increaseItem,
    decreaseItem,
    deleteTheItem,
    cartTotal,
  }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
