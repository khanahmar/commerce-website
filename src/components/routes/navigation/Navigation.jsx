import React, { useContext } from "react"
import { Outlet, Link } from "react-router-dom"
import { UserContext } from "../../../contexts/user.context"
import { Fragment } from "react"
import svg from "../../../assets/87 - crown.svg"
import "./navigation.scss"
import { signOutUser } from "../../../utility/firebase/firebase"
import CartIcon from "../../cart-icon/CartIcon"

const Navigation = () => {
  const { currentUser } = useContext(UserContext)

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
        </div>
        <CartIcon />
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation
