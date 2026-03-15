import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../firebase/Firebase.config';
export const AuthContext = createContext();

  
 const googleProvider = new GoogleAuthProvider()
 const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword (auth, email, password)
  }
  const updateUser = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name, 
      photoURL: photo
    }).then(() => {
      setUser({ ...auth.currentUser });
    });
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email,password)
  }

  const googleLogin = () =>{
      return signInWithPopup(auth, googleProvider)
  }

  const logOut = () => {
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })

    return () => unsubscribe()
  },[])

  const authInfo = {
    user,
    createUser,
    signIn,
    googleLogin,
    logOut,
    updateUser
  }

  return (
    <AuthContext.Provider value= {authInfo}>
      {children}
    </AuthContext.Provider>
  )
  
 
};

export default AuthProvider;