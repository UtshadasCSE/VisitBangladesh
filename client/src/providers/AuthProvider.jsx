import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // ========Auth Start========
  // create a user using email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // update user info
  const updateUserInfo = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  // continue with google
  const googleLogin = () => {
    setLoading(true);
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  // login user using email and password
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // logout user from  this device
  const logoutUser = async () => {
    const { data } = await axios.get("http://localhost:3000/logout", {
      withCredentials: true,
    });
    console.log(data);
    return signOut(auth);
  };
  // observing the current user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      setUser(currentUser);
      console.log("User:", currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  // ========Auth End========

  // pass the auth value
  const authInfo = {
    loading,
    user,
    googleLogin,
    createUser,
    updateUserInfo,
    loginUser,
    logoutUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
