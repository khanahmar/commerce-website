import React from "react"
import { useState } from "react"

const defaultForm = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
}

const SignUpForm = () => {
  const [formSubmit, setFormSubmit] = useState(defaultForm)
  const { displayName, email, password, confirmPassword } = formSubmit

  console.log(formSubmit)

  function handleSubmit(e) {
    const { name, value } = e.target
    setFormSubmit({ ...formSubmit, [name]: value })
  }

  return (
    <div>
      <h1>Submit Form</h1>
      <form>
        <label>Display Name</label>
        <input
          type="text"
          required
          onChange={handleSubmit}
          name="displayName"
        />
        <label>Email</label>
        <input type="email" required onChange={handleSubmit} name="email" />
        <label>Password</label>
        <input type="password" required name="password" />
        <label>Confirm Password</label>
        <input type="password" required name="confirmPassword" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default SignUpForm
