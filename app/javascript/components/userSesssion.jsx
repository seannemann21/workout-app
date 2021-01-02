import React, { useContext, useState, useEffect } from "react";
import { useSessionStorage } from 'react-use';

const UserSessionContext = React.createContext({
  currentUser: null,
  setCurrentUser: () => {},
});

const UserSessionProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() =>
    sessionStorage.getItem("currentUser")
  );

  return (
    <UserSessionContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserSessionContext.Provider>
  );
};

const useUserSession = () => {
  const userSession = useContext(UserSessionContext)

  useEffect(() => {
    if(userSession.currentUser) {
      sessionStorage.setItem("currentUser", JSON.stringify(userSession.currentUser))
    } else {
      sessionStorage.removeItem("currentUser")
    }
  }, [userSession.currentUser])

  const signUserIn = user => {
    userSession.setCurrentUser(user)
  }
  const signUserOut = () => {
    userSession.setCurrentUser(null)
  }
  const userSignedIn = !!userSession.currentUser
  const getCurrentUser = () => JSON.parse(userSession.currentUser)

  return { getCurrentUser, userSignedIn, signUserIn, signUserOut }
};

export { UserSessionProvider, useUserSession }
