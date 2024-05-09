import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "./Firebase.config";

const auth = getAuth(app);
export const AppContext = createContext()

const AuthProvider = ({ children }) => {

    //signUp User
    const signUpUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //signInUser
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const allValues = {
        signUpUser,
        signInUser,
    }

    return (
        <AppContext.Provider value={allValues}>
            {children}
        </AppContext.Provider>
    );
};

export default AuthProvider;