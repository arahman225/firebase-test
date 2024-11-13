import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
// import { auth } from './firebase.init';
import {auth} from './firebase.init';

export const AuthContext = createContext(null);


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const name = 'Potato';
    

    const googleProvider = new GoogleAuthProvider()

    // create user //
    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    // login user //

    const loginUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);

    }

    const signOutUser = (email, password) =>{
        setLoading(true)
        return signOut(auth, email, password);
    }
    // onAuthStateChanged(auth, currentUser =>{
    //     if(currentUser){
    //         console.log('Logged in',currentUser);
    //         setUser(currentUser)
    //     }else{
    //         console.log(currentUser);
    //         setUser(null)
    //     }
    // })


    // google sign in

    const signInWithGoogle = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log('Logged in', currentUser);
            setUser(currentUser);
            setLoading(false)
        })
        return () =>{
            unSubscribe()
        }
    }, [])


    const authInfo = {
        name,
        user,
        createUser,
        loginUser,
        signOutUser,
        loading,
        signInWithGoogle
        
    }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;



/***
 * 
 * 1. create a context with null as default value
 * 2. Create a provider in the anynameProvider component such as: AuthProvider
 * 3. Set a default value={} in after context.provider
 * 4. Use the authprovider in the main jsx
 * 5. Access the children named router inside the authprovider such as: routes are my main part 
 * 5. Now destruct the children
 * 6. Now set a children as default in the .provider
 * 7. Export context
 */
