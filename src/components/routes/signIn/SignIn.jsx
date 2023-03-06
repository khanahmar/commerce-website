import { async } from "@firebase/util"
import React from "react"
import {
  signInWithGooglePopup,
  createUserDocFromAuth,
} from "../../../utility/firebase/firebase"
import SignUpForm from "../../sign-up-form/SignUpForm"

const SignIn = () => {
  async function logGoogleUser() {
    const { user } = await signInWithGooglePopup()
    const userDocRef = await createUserDocFromAuth(user)
  }

  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={logGoogleUser}>Sign in with google</button>
      <SignUpForm />
    </div>
  )
}

export default SignIn
