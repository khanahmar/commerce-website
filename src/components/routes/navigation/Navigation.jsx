import React from "react"
import { Outlet, Link } from "react-router-dom"
import { Fragment } from "react"
import svg from "../../../assets/87 - crown.svg"
import "./navigation.scss"

const Navigation = () => {
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
          <Link to={"/auth"} className="nav-link">
            Sign in
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation
