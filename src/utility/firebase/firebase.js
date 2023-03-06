import { initializeApp } from "firebase/app"
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth"
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCsgoQr8H0Q1KMWuV1_GXLuWkL6hGst_bM",
  authDomain: "commerce-web-app.firebaseapp.com",
  projectId: "commerce-web-app",
  storageBucket: "commerce-web-app.appspot.com",
  messagingSenderId: "946812224271",
  appId: "1:946812224271:web:a7e4898c597a1c87fe747a",
  measurementId: "G-BT1JCE70KS",
}

const app = initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: "select_account",
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid)
  console.log(userDocRef)
  const userSnapshot = await getDoc(userDocRef)

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, { displayName, email, createdAt })
    } catch (error) {
      console.log("error creating the user ", error.message)
    }
  }

  console.log(userDocRef)

  return userDocRef
}
