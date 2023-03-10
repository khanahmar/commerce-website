import React from "react"
import { useState } from "react"
import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
} from "../../utility/firebase/firebase"
import FormInput from "../form-input/FormInput"
import "./signUpForm.scss"
import Button from "../button/Button"

const defaultForm = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
}

const SignUpForm = () => {
  const [formSubmit, setFormSubmit] = useState(defaultForm)
  const { displayName, email, password, confirmPassword } = formSubmit

  function handleChange(e) {
    const { name, value } = e.target
    setFormSubmit({ ...formSubmit, [name]: value })
  }

  const resetForm = () => {
    setFormSubmit(defaultForm)
  }

  async function handleSubmit(e) {
    e.preventDefault()

    if (password !== confirmPassword) {
      alert("password donot match")
      return
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password)
      await createUserDocFromAuth(user, { displayName })
      resetForm()
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already in use !")
      } else {
        console.log("error creating the user ", error.message)
      }
    }
  }

  return (
    <div className="sign-up-container">
      <h2>Don't have an account ?</h2>
      <span>Sigh up with your email and password</span>
      <form onSubmit={(e) => handleSubmit(e)}>
        <FormInput
          label={"Display Name"}
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
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
        <FormInput
          label={"Confirm Password"}
          type="password"
          required
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />
        <Button type="submit">SIGN UP</Button>
      </form>
    </div>
  )
}

export default SignUpForm
