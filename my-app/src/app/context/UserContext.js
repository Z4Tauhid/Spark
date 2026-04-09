"use client"

import { createContext, useContext, useState, useEffect  } from "react"
import axios from "axios";

//create Context

const UserContext = createContext()

// Provider component

export function UserProvider ({children}) {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

      useEffect(() => {
    async function fetchUser() {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/auth/me",
          { withCredentials: true }
        );

        setUser(res.data.user);
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, []);

    return (

        <UserContext.Provider 
        value = {
            {
                user,
                setUser,
                loading 
            }
        }>
            
            
            {children}
        </UserContext.Provider>
    )
}

export const useUser =() => useContext(UserContext)