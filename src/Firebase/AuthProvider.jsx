import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "./Firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import axios from "axios";


const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);
export const AppContext = createContext()

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)

    //signUp User
    const signUpUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //signIn User
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //google Login
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    //signOut User
    const signOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    //update profile
    const updateUser = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    //observe user
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user.email
            const loggedUser = { email: userEmail }
            setUser(currentUser)
            setLoading(false)

            if (currentUser) {
                axios.post('http://localhost:5000/jwt', loggedUser, { withCredentials: true })
                    .then(() => {
                        // console.log('client token', res.data)
                    })
            }
            else {
                axios.post('http://localhost:5000/logout', loggedUser, { withCredentials: true })
                    .then(() => {
                        // console.log(res.data)
                    })
            }
        })
        return () => { unSubscribe() }
    }, [])

    const allValues = {
        signUpUser,
        signInUser,
        user,
        signOutUser,
        googleLogin,
        updateUser,
        loading
    }

    return (
        <AppContext.Provider value={allValues}>
            {children}
        </AppContext.Provider>
    );
};

export default AuthProvider;