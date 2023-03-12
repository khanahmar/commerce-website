import React, { useContext } from "react"
import { Outlet, Link } from "react-router-dom"
import { UserContext } from "../../../contexts/user.context"
import { Fragment } from "react"
import svg from "../../../assets/87 - crown.svg"
import "./navigation.scss"
import { signOutUser } from "../../../utility/firebase/firebase"
import CartIcon from "../../cart-icon/CartIcon"
import CartDropdown from "../../cart-dropdown/CartDropdown"
import { CartContext } from "../../../contexts/CartContext"

const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)

  return (
    <Fragment>
      <div className="navigation">
        <Link to={"/"} className="logo-container">
          <div>
            <img src={svg} alt="" />
          </div>
        </Link>
        <div className="nav-links-container">
          <Link to={"/shop"} className="nav-link">
            Shop
          </Link>
          {currentUser ? (
            <span onClick={signOutUser} className="nav-link">
              Sign out
            </span>
          ) : (
            <Link to={"/auth"} className="nav-link">
              Sign in
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation
