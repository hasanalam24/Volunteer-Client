import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "./Firebase.config";
import { GoogleAuthProvider } from "firebase/auth";


const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);
export const AppContext = createContext()

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState([])

    //signUp User
    const signUpUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //signIn User
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    //google Login
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    //signOut User
    const signOutUser = () => {
        return signOut(auth)
    }

    //observe user
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        return () => { unSubscribe() }
    }, [])

    const allValues = {
        signUpUser,
        signInUser,
        user,
        signOutUser,
        googleLogin
    }

    return (
        <AppContext.Provider value={allValues}>
            {children}
        </AppContext.Provider>
    );
};

export default AuthProvider;