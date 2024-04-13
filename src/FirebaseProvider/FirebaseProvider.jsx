import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebaseConfig";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();

const FirebaseProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    console.log(user);
    const [loading, setLoading] = useState(true);

    const createUser = async (email, password, name, photoURL) => {
        setLoading(true);
        try {
            const cred = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(cred.user, {
                displayName: name || cred.user.displayName || null, // Set display name to provided name, user's existing display name, or null
                photoURL: photoURL || null, // Set photo URL to provided URL or null
            });
            // User creation and profile update successful
            setLoading(false);
            return cred.user;
        } catch (error) {
            // Handle errors
            console.error('Error creating user:', error.message);
            setLoading(false);
            throw error; // Rethrow the error for further handling
        }
    };
    
    
    

    function updateUserProfile(name, image) {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image,
        });
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const gitLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, gitProvider);
    };

    const logOut = () => {
        setUser(null);
        return signOut(auth);
    };

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
        };
    }, []);

    const allValues = {
        createUser,
        loading,
        signInUser,
        googleLogin,
        gitLogin,
        logOut,
        updateUserProfile,
        user,
    };

    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;
