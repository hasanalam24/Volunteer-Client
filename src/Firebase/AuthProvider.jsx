import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "./Firebase.config";

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
        signOutUser
    }

    return (
        <AppContext.Provider value={allValues}>
            {children}
        </AppContext.Provider>
    );
};

export default AuthProvider;