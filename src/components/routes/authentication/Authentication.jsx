import React from "react"
import SignInForm from "../../sign-in-form/SignIn"
import SignUpForm from "../../sign-up-form/SignUpForm"
import "./authenticatoin.scss"

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  )
}

export default Authentication
