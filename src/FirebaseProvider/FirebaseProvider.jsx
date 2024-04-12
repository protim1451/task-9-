import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebaseConfig";


export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();

const FirebaseProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const gitLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, gitProvider)
    }

    const logOut = () => {
        setUser(null);
        return signOut(auth);
    }

    useEffect(() => {
        const auth = getAuth();
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setLoading(false);
            } else {
                setUser(null); // Ensure user is set to null on logout
                setLoading(false);
            }
        });
        return () => {
            unSubscribe();
        }
    }, [])

    const allValues = {
        createUser,
        loading,
        signInUser,
        googleLogin,
        gitLogin,
        logOut,
        user,
    }

    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;
