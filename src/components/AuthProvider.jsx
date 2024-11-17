import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.init";

export const AuthContext = createContext([])

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    
    // register
    const handleRegister = (email, password) => {
        return createUserWithEmailAndPassword( auth, email, password)
    }
    // sign in
    const handleSignIn = (email, password) =>{
        signInWithEmailAndPassword( auth, email, password)
    }
    // sign out
    const handleSignOut = () =>{
        signOut(auth)
    }
    // manage profile
    const manageProfile = ( name, photo ) =>{
        updateProfile( auth.currentUser , {
            displayName: name,
            photoURL: photo
        })
    }




    const authInfo={
        handleRegister,
        handleSignIn,
        handleSignOut,
        user,
        manageProfile,
    }

    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
            // console.log(currentUser)
            if(currentUser){
                setUser(currentUser)
            }
            else{
                setUser(null)
            }

        return () =>{
            unSubscribe()
        }
        })
    },[])

    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;