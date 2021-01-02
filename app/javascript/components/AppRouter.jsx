import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import SignedInRoutes from "./SignedInRoutes";
import SignedOutRoutes from "./SignedOutRoutes";
import { useUserSession } from "./userSesssion";

const AppRouter = () => {
  const { userSignedIn } = useUserSession();

  return (
    <Router>
      {userSignedIn ? (
        <>
          <Header />
          <SignedInRoutes />
        </>
      ) : (
        <SignedOutRoutes />
      )}
    </Router>
  );
};

export default AppRouter;
