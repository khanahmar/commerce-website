import { initializeApp } from "firebase/app"
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
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

export const createUserDocFromAuth = async (userAuth, additionalObj = {}) => {
  const userDocRef = doc(db, "users", userAuth.uid)
  const userSnapshot = await getDoc(userDocRef)

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalObj,
      })
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already in use !")
      } else {
        console.log("error creating the user ", error.message)
      }
    }
  }

  return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return

  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return

  return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangedListner = (callback) =>
  onAuthStateChanged(auth, callback)
