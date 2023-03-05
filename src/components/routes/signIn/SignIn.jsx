import { async } from "@firebase/util"
import React from "react"
import {
  signInWithGooglePopup,
  createUserDocFromAuth,
} from "../../../utility/firebase/firebase"

const SignIn = () => {
  async function logGoogleUser() {
    const { user } = await signInWithGooglePopup()
    createUserDocFromAuth(user)
  }

  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={logGoogleUser}>Sign in with google</button>
    </div>
  )
}

export default SignIn
