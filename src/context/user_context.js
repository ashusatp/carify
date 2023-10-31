import React, { useContext, useEffect, useState } from 'react'
import { auth ,signOut} from '../firebsae'

const UserContext = React.createContext()

export const UserProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [myUser, setMyUser] = useState(null);

  useEffect(()=>{ 
    auth.onAuthStateChanged((user) => {
      if(user){
        setIsAuthenticated(true);
        setMyUser(user);
      }else{
        setIsAuthenticated(false);
        setMyUser(null);
      }
    })
    
  },[])
  
  return (
    <UserContext.Provider value={{isAuthenticated,myUser, setIsAuthenticated, setMyUser, auth, signOut}}>{children}</UserContext.Provider>
  )
}
// make sure use
export const useUserContext = () => {
  return useContext(UserContext)
}
