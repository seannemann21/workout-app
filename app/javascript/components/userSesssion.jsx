import React, { useContext, useState, useEffect } from "react";
import { useSessionStorage } from "react-use";

const UserSessionContext = React.createContext({
  currentUser: null,
  setCurrentUser: () => {},
});

const UserSessionProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() =>
    JSON.parse(sessionStorage.getItem("currentUser"))
  );

  return (
    <UserSessionContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserSessionContext.Provider>
  );
};

const useUserSession = () => {
  const userSession = useContext(UserSessionContext);

  useEffect(() => {
    if (userSession.currentUser) {
      sessionStorage.setItem(
        "currentUser",
        JSON.stringify(userSession.currentUser)
      );
    } else {
      sessionStorage.removeItem("currentUser");
    }
  }, [userSession.currentUser]);

  const signUserIn = (user) => {
    userSession.setCurrentUser(user);
  };
  const signUserOut = () => {
    userSession.setCurrentUser(null);
  };
  const userSignedIn = !!userSession.currentUser;
  const currentUser = userSession.currentUser;

  const updateCurrentWorkout = (workout) => {
    userSession.setCurrentUser({
      ...userSession.currentUser,
      ...{ currentWorkout: workout },
    });
  };

  return {
    currentUser,
    userSignedIn,
    signUserIn,
    signUserOut,
    updateCurrentWorkout,
  };
};

export { UserSessionProvider, useUserSession };
