import React from 'react';
import { useState, createContext, useEffect, useContext } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';


type AuthProviderProps = {
    children: React.ReactNode
}


const AuthContext = createContext({
    user: null as null | object,
    loading: true
});


const AuthProvider :React.FC <AuthProviderProps>= ({ children }) => {



    // User state
    const [ user, setUser ] = useState<null | object>(null);
    const [ loading, setLoading ] = useState(true);

    useEffect(()=> {

        const unsubscribe = onAuthStateChanged(auth, (currentUser)=> {
            setUser(currentUser);
            setLoading(false);
        })

        return () => unsubscribe();
    })

  return (
    <AuthContext.Provider value={{ user, loading }}>
      { !loading && children }
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);
export default AuthProvider;
