import React from "react"
import { useState } from "react"
import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utility/firebase/firebase"
import FormInput from "../form-input/FormInput"
import "./signIn.scss"
import Button from "../button/Button"

const defaultForm = {
  email: "",
  password: "",
}

const SignUpForm = () => {
  const [formSubmit, setFormSubmit] = useState(defaultForm)
  const { email, password } = formSubmit

  function handleChange(e) {
    const { name, value } = e.target
    setFormSubmit({ ...formSubmit, [name]: value })
  }

  const resetForm = () => {
    setFormSubmit(defaultForm)
  }

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      const response = await signInAuthUserWithEmailAndPassword(email, password)
      console.log(response)
      resetForm()
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        alert("Wrong password")
      } else if (error.code === "auth/user-not-found") {
        alert("No user found of this email !")
      } else {
        console.log(error.message)
      }
    }
  }

  async function logGoogleUser() {
    const { user } = await signInWithGooglePopup()
    const userDocRef = await createUserDocFromAuth(user)
  }

  return (
    <div className="sign-up-container">
      <h2>Already have an account</h2>
      <span>Sigh in with your email and password</span>
      <form onSubmit={(e) => handleSubmit(e)}>
        <FormInput
          label={"Email"}
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label={"Password"}
          type="password"
          required
          name="password"
          value={password}
          onChange={handleChange}
        />
        <div className="button-cont">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType={"google"} onClick={logGoogleUser}>
            GOOGLE SIGN IN
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SignUpForm
